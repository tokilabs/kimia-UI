import TailwindInput from './components/tailwind/input';
import TailwindExample from './components/tailwind/example';

import { initPlasmicLoader } from '@plasmicapp/loader-react';
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: '4gXEcnHvLivutULEDuDrbD', // ID of a project you are using
      token:
        '7Q9j3IjJvpIRvdQ3UilFNQKTsuDLNhsHhxlx5MqPCNcfWmpdMl2x8YieNFs2froMEu1WwND4gFX3YdBVf4w', // API token for that project
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
