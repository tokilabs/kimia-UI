import { PropType } from '@plasmicapp/host';
import path from 'path';

import { CodeBlockWriter, SourceFile } from 'ts-morph';
import { ComponentInfo } from './codeAnalyser';

const debug = require('debug')('snitch:writter');

// let fileContent = '';

//   fileContent += `
//   /***************
//    * Processed files
//    *
//    * ${config.COMPONENT_FILES.join('\n   * ')}
//   */
//   `;

function getPlasmicProjectsConfig(): { id: string; token: string }[] {
  const plasmicProjects: { id: string; token: string }[] = [];

  Object.keys(process.env).forEach((key) => {
    if (key.startsWith('PLASMIC_PROJECT_')) {
      const info = key.split('_'); // ['PLASMIC', 'PROJECT', index, 'PROP']
      const index = parseInt(info[2]);
      const prop = info[3].toLowerCase();

      plasmicProjects[index] = Object.assign(plasmicProjects[index] || {}, {
        [prop]: process.env[key],
      }) as any;
    }
  });

  return plasmicProjects;
}

export class InitWritter {
  constructor(private file: SourceFile, config: any) {
    const projects = getPlasmicProjectsConfig();

    this.file.addImportDeclaration({
      moduleSpecifier: '@plasmicapp/loader-react',
      namedImports: ['initPlasmicLoader'],
    });

    this.file.addStatements((writter) => {
      writter
        .write(`export const PLASMIC = initPlasmicLoader(`)
        .block(() => {
          writter
            .writeLine('projects: [')
            .indent(() => {
              projects.map((p) =>
                writter.block(() =>
                  writter
                    .writeLine(`id: "${p.id}",`)
                    .writeLine(`token: "${p.token}"`),
                ),
              );
            })
            .writeLine('],')
            .writeLine(
              '// Fetches the latest revisions, whether or not they were unpublished!',
            )
            .writeLine(
              '// Disable for production to ensure you render only published changes.',
            )
            .writeLine(
              `preview: ${config.PLASMIC_PREVIEW_MODE ? 'true' : 'false'},`,
            );
        })
        .write(');');
    });
  }

  registerComponent(comp: ComponentInfo) {
    if (!comp) {
      throw new Error('Comp cannot be null');
    }
    this.file.addImportDeclaration({
      namedImports: [comp.name],
      moduleSpecifier: path
        .relative(this.file.getFilePath(), comp.path)
        .replace('.tsx', '')
        .substring(1),
    });

    this.file.addStatements((writter) => {
      writter
        .blankLine()
        .write(`PLASMIC.registerComponent(${comp.name},`)
        .block(() => {
          writter.writeLine(`name: "${comp.name}",`);
          writter.write(`props: `).block(() => {
            comp.props
              .filter((p) => {
                // @TODO stop filtering properties which contains dashes
                return /^[\w0-9]+$/.test(p.name);
              })
              .map((p) =>
                writter.writeLine(
                  `${p.name}: ${this.writePlasmicType(
                    p.plasmicType,
                    writter,
                  )}, // ${
                    p.tsType.isUnion() ? '(UNION) ' : ''
                  }${p.tsType?.getText()}`,
                ),
              );
          });
        })
        .write(');');
    });
  }

  private writePlasmicType(ptype: PropType, writter: CodeBlockWriter) {
    if (typeof ptype === 'string') {
      return `'${ptype}'`;
    }

    return JSON.stringify(ptype, null, 2);
  }
}
