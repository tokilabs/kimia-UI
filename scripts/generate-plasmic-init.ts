import path from 'path';
import fs from 'fs';

import glob from 'glob-all';

const projectRoot = path.resolve(__dirname, '..');

const GENERATE_FULL_INIT = false;
const PLASMIC_PREVIEW_MODE = true;
const OUTPUT_FILE = 'plasmic-init.components.js';
const COMPONENT_PATHS = glob.sync([
  'components/tailwind/**/*.ts', //include all
  'packages/**/*.ts',
  // You can also remove files
  // e.g.: '!files/x/**',   //then, exclude   files/x/
]);

require('env2')(path.join(projectRoot, '.env'));

if (!process.env.PLASMIC_PROJECT_0_ID) {
  throw new Error(
    'You need to setup your .env file at the project root. Check env.template file to see all the variables you need to set',
  );
}

export function run() {
  const config = {
    projects: getPlasmicProjectsConfig(),
    componentPaths: ['../components/tailwind/**/*.ts'],
  };

  let fileContent = '';

  if (GENERATE_FULL_INIT) {
    fileContent += `
      import { initPlasmicLoader } from "@plasmicapp/loader-react";
      export const PLASMIC = initPlasmicLoader({
        projects: [${config.projects
          .map(
            (project) => `
          {
            id: "${project.id}",
            token: "${project.token}"
          }`,
          )
          .join(', \n')}
        ],
        // Fetches the latest revisions, whether or not they were unpublished!
        // Disable for production to ensure you render only published changes.
        preview: ${PLASMIC_PREVIEW_MODE ? 'true' : 'false'},
      });
    }
  `;
  }

  // Components registration code
  const componentsRegistrations = COMPONENT_PATHS.flatMap(findComponentFiles)
    .flatMap(readComponentInfo)
    .flatMap(generateRegistrationCode);

  fileContent += componentsRegistrations.join('\n\n');

  fs.writeFileSync(path.join(projectRoot, OUTPUT_FILE), fileContent);
}

// Internal functions

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

interface ComponentInfo {
  path: string;
  name: string;
  props: Array<{
    name: string;
    tsType: any;
  }>;
}

/**
 * Looks recursively for files that contain at least one React component
 *
 * @param root The root directory where to look
 * @returns A list of paths of files containing at least one component
 */
function findComponentFiles(root: string): string[] {
  return [];
}

function readComponentInfo(componentFile: string): ComponentInfo[] {
  return [];
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
