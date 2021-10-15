import TailwindInput from './components/tailwind/input';
import TailwindExample from './components/tailwind/example';

import { initPlasmicLoader } from '@plasmicapp/loader-react';
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'hSC5XMAvbDbmF4e5kuW6xC', // ID of a project you are using
      token:
        'aMnJBW2asqkE8YPeKdilxweA1Zx2ZUXyfNie65cwLZAbJZK5Gd2DGnsF3Mrd6dzPzYN95cD04l79PQgqsGA', // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

PLASMIC.registerComponent(TailwindInput, {
  name: 'TailwindInput',
  props: {
    name: 'string',
    placeholder: 'string',
    label: 'string',
  },
});

PLASMIC.registerComponent(TailwindExample, {
  name: 'TailwindExample',
  props: {},
});

require('./plasmic-init.components');
