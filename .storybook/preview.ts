import type { Preview } from '@storybook/react';
import '../src/css/index.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components'],
      },
    },
  },
};

export default preview;
