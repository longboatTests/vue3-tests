<template>
  <div class="copyright-label">
    <p class="copyright-label__text">
      Copyright © {{ new Date().getFullYear() }} Advarra, Inc. |
      <a
        class="copyright-label__link"
        target="_blank"
        :href="'https://app.longboat.com/gateway/privacy?locale=' + locale"
        ><slot
      /></a>
    </p>
  </div>
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
};
</script>

<style lang="scss">
$copyright-text-color: black;
$copyright-link-text-color: (
  default: black,
  onhover: black,
  onfocus: darken(black, 10%),
  onactive: darken(black, 10%),
  visited: darken(black, 10%),
) !default;

.copyright-label {
  &__text {
    color: $copyright-text-color;
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  &__link {
    color: map-get($copyright-link-text-color, default);
    text-decoration: none;

    &:hover {
      color: map-get($copyright-link-text-color, onhover);
      text-decoration: underline;
    }

    &:focus {
      color: map-get($copyright-link-text-color, onfocus);
    }

    &:active {
      color: map-get($copyright-link-text-color, onactive);
    }

    &:visited {
      color: map-get($copyright-link-text-color, visited);
      text-decoration: none;
    }
  }
}
</style>
