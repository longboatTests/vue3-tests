<template>
  <span class="ux-copyright-label__text">
    {{ copyrightText }}
    <a class="ux-copyright-label__link" target="_blank" :href="siteURL"
      ><slot
    /></a>
  </span>
</template>

<script>
export default {
  props: {
    /**
     * locale for Private Policy link
     */
    locale: {
      type: String,
      required: false,
      default: 'en',
    },
  },
  computed: {
    siteURL() {
      return 'https://app.longboat.com/gateway/privacy?locale=' + this.locale;
    },
    copyrightText() {
      return 'Copyright © ' + new Date().getFullYear() + ' Advarra, Inc. |';
    },
  },
};
</script>

<style lang="scss">
$ux-copyright-text-color: black !default;
$ux-copyright-link-text-color: (
  default: black,
  onhover: black,
  onfocus: darken(black, 10%),
  onactive: darken(black, 10%),
  visited: darken(black, 10%),
) !default;

.ux-copyright-label {
  &__text {
    color: $ux-copyright-text-color;
    //font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  &__link {
    color: map-get($ux-copyright-link-text-color, default);
    text-decoration: none;

    &:hover {
      color: map-get($ux-copyright-link-text-color, onhover);
      text-decoration: underline;
    }

    &:focus {
      color: map-get($ux-copyright-link-text-color, onfocus);
    }

    &:active {
      color: map-get($ux-copyright-link-text-color, onactive);
    }

    &:visited {
      color: map-get($ux-copyright-link-text-color, visited);
      text-decoration: none;
    }
  }
}
</style>
