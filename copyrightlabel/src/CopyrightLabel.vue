<template>
  <span class="ux-copyright-label">
    {{ copyrightText }}
    <slot />
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
    copyrightText() {
      return 'Copyright © ' + new Date().getFullYear() + ' Advarra, Inc. |';
    },
  },
};
</script>

<style lang="scss">
$ux-copyright-label-text-color: #333 !default;

.ux-copyright-label {
  color: var(--ux-copyright-label-text-color, $ux-copyright-label-text-color);
  margin: 0;
  padding: 0;
}
</style>
