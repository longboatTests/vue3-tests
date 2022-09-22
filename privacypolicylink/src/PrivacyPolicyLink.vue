<template>
  <a
    class="ux-copyright-link"
    :href="'https://app.longboat.com/gateway/privacy?locale=' + locale"
  >
    <!-- @slot Use this slot to provide content of the link-->
    <slot></slot>
  </a>
</template>

<script>
/**
 * Displays privacy policy link for Longboat Apps
 * @displayName Privacy Policy Link
 */
export default {
  props: {
    /**
     * locale for this privacy policy link
     */
    locale: {
      type: String,
      required: true,
      default: 'en',
    },
  },
};
</script>

<style lang="scss">
$ux-privacy-policy-link-text-color: (
  default: #333,
  visited: #333,
  onfocus: #333,
  onactive: #333,
  onhover: #333,
) !default;

.ux-copyright-link {
  text-decoration: none;
  color: map-get($ux-privacy-policy-link-text-color, default);

  &:visited {
    color: map-get($ux-privacy-policy-link-text-color, visited);
  }

  &:focus {
    color: map-get($ux-privacy-policy-link-text-color, onfocus);
  }

  &:active {
    color: map-get($ux-privacy-policy-link-text-color, onactive);
  }
  &:hover {
    color: map-get($ux-privacy-policy-link-text-color, onhover);
  }

  &:active,
  &:hover,
  &:focus,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>
