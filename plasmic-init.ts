import { initPlasmicLoader } from '@plasmicapp/loader-react';
import { Accordion } from '../packages/accordion/index.tsx';
import { AccordionItem } from '../packages/accordion/index.tsx';
import { AccordionPanel } from '../packages/accordion/index.tsx';

export const PLASMIC = initPlasmicLoader( {
  projects: [
    {
      id: "''",
      token: "''"
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
}
);


PLASMIC.registerComponent(Accordion, {
  name: "Accordion",
  props: {
    children: 'string', // any
    defaultPanel: 'string', // string
  }
}
);


PLASMIC.registerComponent(AccordionItem, {
  name: "AccordionItem",
  props: {
    toggle: 'string', // string
    children: 'slot', // (UNION) React.ReactNode
    color: {
      "type": "choice",
      "options": [
        "gray",
        "indigo",
        "green"
      ]
    }, // (UNION) "gray" | "indigo" | "green"
  }
}
);


PLASMIC.registerComponent(AccordionPanel, {
  name: "AccordionPanel",
  props: {
    children: 'string', // any
    id: 'string', // string
  }
}
);
