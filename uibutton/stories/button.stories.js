import Button from '~/uibutton/src/Button.vue';

export const text = () => ({
  components: { Button },
  template: `<Button>Text</Button>`,
});

export const text_disabled = () => ({
  components: { Button },
  template: `<Button disabled>Text</Button>`,
});

export const outline = () => ({
  components: { Button },
  template: `<Button class='btn btn--outline'>Outline</Button>`,
});

/*
export const outline_small = () => ({
  components: { Button },
  template: `<Button class='btn btn--small btn--outline'>outline</Button>`,
});

export const outline_medium = () => ({
  components: { Button },
  template: `<Button class='btn btn--medium btn--outline'>outline</Button>`,
});

export const outline_large = () => ({
  components: { Button },
  template: `<Button class='btn btn--large btn--outline'>outline</Button>`,
});

export const outline_xLarge = () => ({
  components: { Button },
  template: `<Button class='btn btn--x-large btn--outline'>outline</Button>`,
});
*/

export const outline_disabled = () => ({
  components: { Button },
  template: `<Button class='btn btn--outline' disabled>Outline</Button>`,
});

export const primary = () => ({
  components: { Button },
  template: `<Button class='btn btn--primary'>Primary</Button>`,
});

export const primary_disabled = () => ({
  components: { Button },
  template: `<Button class='btn btn--primary' disabled>Primary</Button>`,
});

export const secondary = () => ({
  components: { Button },
  template: `<Button class='btn btn--secondary'>Secondary</Button>`,
});

export const secondary_disabled = () => ({
  components: { Button },
  template: `<Button class='btn btn--secondary' disabled>Secondary</Button>`,
});

export const tertiary = () => ({
  components: { Button },
  template: `<Button class='btn btn--tertiary'>Tertiary</Button>`,
});

export const tertiary_disabled = () => ({
  components: { Button },
  template: `<Button class='btn btn--tertiary' disabled>Tertiary</Button>`,
});
