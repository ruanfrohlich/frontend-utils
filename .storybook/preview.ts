import type { Preview } from '@storybook/react';
import '../src/css/index.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Intro', 'Components'],
      },
    },
  },
};

export default preview;
