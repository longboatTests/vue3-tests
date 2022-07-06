import CopyrightLabel from '~/copyrightlabel/src/CopyrightLabel.vue';

export const copyrightLabel = () => ({
  components: { CopyrightLabel },
  template: `<CopyrightLabel>Privacy Policy</CopyrightLabel>`,
});

export const copyrightLabel2 = () => ({
  components: { CopyrightLabel },
  template: `<CopyrightLabel locale='en'>Privacy Policy</CopyrightLabel>`,
});
