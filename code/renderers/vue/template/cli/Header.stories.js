import MyHeader from './Header.vue';

export default {
  title: 'Example/Header',
  component: MyHeader,
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
      MyHeader,
    },
    template:
      '<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
  }),
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {};
