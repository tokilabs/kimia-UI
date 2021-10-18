/**
 * @TODO Add support for component classes that do not directly extend React.Component (e.g. MyComp > BaseComp > React.Component)
 */
import path from 'path';
import fs from 'fs';
const debug = require('debug')('snitch');

import {
  ClassDeclaration,
  FunctionDeclaration,
  IndentationText,
  NewLineKind,
  Project,
  QuoteKind,
} from 'ts-morph';
import {
  ComponentInfo,
  readClassComponentInfo,
  readFunctionComponentInfo,
} from './snitch/codeAnalyser';
import { registerComponent } from '@plasmicapp/host';
import { InitWritter } from './snitch/writter';

const projectRoot = path.resolve(__dirname, '..');

const config = {
  GENERATE_FULL_INIT: false,
  PLASMIC_PREVIEW_MODE: true,
  OUTPUT_FILE: 'plasmic-init.components.js',
  COMPONENT_FILES: [
    'components/tailwind/**/*.{ts,tsx}', //include all
    'packages/**/index.{ts,tsx}',
    // 'packages/card/index.{ts,tsx}',
    // You can also remove files
    // e.g.: '!files/x/**',   //then, exclude   files/x/
  ],
};

require('env2')(path.join(projectRoot, '.env'));

if (!process.env.PLASMIC_PROJECT_0_ID) {
  throw new Error(
    'You need to setup your .env file at the project root. Check env.template file to see all the variables you need to set',
  );
}

export function run() {
  const project = new Project({
    // these are the defaults
    manipulationSettings: {
      // TwoSpaces, FourSpaces, EightSpaces, or Tab
      indentationText: IndentationText.TwoSpaces,
      // LineFeed or CarriageReturnLineFeed
      newLineKind: NewLineKind.LineFeed,
      // Single or Double
      quoteKind: QuoteKind.Single,
      // For the next prop
      // If you are renaming a to b in...
      //   const a = 5;
      //   const x = { a };
      //   export { a };
      // When usePrefixAndSuffixTextForRename is FALSE, the result is
      //    const b = 5;
      //    const x = { b };
      //    export { b };
      // When usePrefixAndSuffixTextForRename is TRUE, the result is
      //    const b = 5;
      //    const x = { a: b };
      //    export { b as a };
      usePrefixAndSuffixTextForRename: false,
      // Whether to use trailing commas in multi-line scenarios where trailing
      // commas would be used.
      useTrailingCommas: false,
    },
  });

  debug(config.COMPONENT_FILES);
  project.addSourceFilesAtPaths(config.COMPONENT_FILES);

  const components = findComponents(project);

  const outFile = project.addSourceFileAtPath(config.OUTPUT_FILE);
  outFile.removeText();

  const writter = new InitWritter(outFile, config);

  components.map((c) => {
    writter.registerComponent(c);
  });

  outFile.saveSync();
}

// Internal functions

/**
 * Looks recursively for files that contain at least one React component
 *
 * @param root The root directory where to look
 * @returns A list of paths of files containing at least one component
 */
function findComponents(project: Project): ComponentInfo[] {
  const exportedFunctions = project
    .getSourceFiles()
    .flatMap((file) => file.getFunctions())
    .filter(
      (f) => f.isExported() && f.getReturnType().getText() === 'JSX.Element',
    );

  debug(`Found ${exportedFunctions.length} function components`);

  let exportedClasses: ClassDeclaration[] = project
    .getSourceFiles()
    .flatMap((file) => file.getClasses())
    .filter((c) => c.isExported())
    .filter((c) => c.getExtends().getText().includes('React.Component'));

  debug(`Found ${exportedClasses.length} class components`);

  const components: Array<FunctionDeclaration | ClassDeclaration> = [
    ...exportedClasses,
    ...exportedFunctions,
  ];

  debug(`Found ${components.length} components: `);
  debug(
    exportedFunctions
      .map((c) => `   ${c.getName()}`)
      .sort()
      .join('\n'),
  );

  return [
    ...exportedFunctions.map((fn) =>
      readFunctionComponentInfo(fn, { mapAllInheritedProps: true }),
    ),
    ...exportedClasses.map(readClassComponentInfo),
  ].filter(Boolean);
}

function generateRegistrationCode(componentInfo: ComponentInfo): string {
  return `
    import ${componentInfo.path};
    
    PLASMIC.registerComponent(${componentInfo.name}, {
      name: "${componentInfo.name}",
      props: {
        // NONE YET!
        // generateRegistrationCall is not implemented
      }
    });`;
}

run();
