import type { Meta, StoryObj } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { createPage } from './Page';

const meta: Meta = {
  title: 'Example/Page',
  render: () => createPage(),
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

export const LoggedOut: StoryObj = {};

// More on interaction testing: https://storybook.js.org/docs/html/writing-tests/interaction-testing
export const LoggedIn: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
