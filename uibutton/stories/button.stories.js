import Button from '~/uibutton/src/Button.vue';

export const text = () => ({
  components: { Button },
  template: `<Button>Text button</Button>`,
});

export const bordered = () => ({
  components: { Button },
  template: `<Button class='btn btn--bordered'>bordered button</Button>`,
});

export const primary = () => ({
  components: { Button },
  template: `<Button class='btn btn--primary'>primary button</Button>`,
});

export const secondary = () => ({
  components: { Button },
  template: `<Button class='btn btn--secondary'>secondary button</Button>`,
});
