<template>
  <button class="btn" :disabled="isDisabled"><slot /></button>
</template>

<script>
/**
 * The button.
 * @displayName Button
 */
export default {
  props: {
    /**
     * Specifies if button is disabled or not
     * @values true, false
     */
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss">
$btn-radius: 5px !default;
$btn-primary: #2ed13b !default;
$btn-secondary: #fd3b37 !default;
$btn-tertiary: #cc17c6 !default;
$btn-disabled: #aeb8c0 !default;
$btn-white: #fff !default;
$btn-border-width: 1px !default;
$btn-box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1) !default;
$btn-box-shadow-hover: 0px 2px 3px 2px rgba(0, 0, 0, 0.2) !default;
$btn-padding: (
  small: 4px 16px,
  default: 12px 24px,
  large: 16px,
) !default;

$btn-text-size: (
  small: 0.7rem,
  default: 1rem,
  large: 1rem,
) !default;

@mixin btn-default-style($btn-text-color, $btn-border-color, $btn-bg-color) {
  color: $btn-text-color;
  background: $btn-bg-color;
  border: solid $btn-border-width $btn-border-color;
  box-shadow: $btn-box-shadow;
}

@mixin btn-disabled-style($btn-text-color, $btn-border-color, $btn-bg-color) {
  &:disabled {
    color: $btn-text-color;
    border: solid $btn-border-width $btn-border-color;
    background: $btn-bg-color;
    cursor: not-allowed;

    &:hover {
      color: $btn-text-color;
      border: solid $btn-border-width $btn-border-color;
      background: $btn-bg-color;
    }
  }
}

@mixin btn-hover-style($btn-text-color, $btn-border-color, $btn-bg-color) {
  &:hover {
    color: $btn-text-color;
    border: solid $btn-border-width $btn-border-color;
    background: $btn-bg-color;
  }
}

@mixin btn-focus-style($btn-text-color, $btn-border-color, $btn-bg-color) {
  &:focus {
    color: $btn-text-color;
    border: solid $btn-border-width $btn-border-color;
    background: $btn-bg-color;
  }
}

@mixin btn-active-style($btn-text-color, $btn-border-color, $btn-bg-color) {
  &:active {
    color: $btn-text-color;
    border: solid $btn-border-width $btn-border-color;
    background: $btn-bg-color;
  }
}

//Default button. The default button is a text button
$default-btn-text-color: (
  default: $btn-primary,
  disabled: $btn-disabled,
  onhover: darken($btn-primary, 15%),
  onfocus: darken($btn-primary, 10%),
  onactive: darken($btn-primary, 10%),
) !default;

$default-btn-border-color: (
  default: transparent,
  disabled: transparent,
  onhover: darken($btn-primary, 15%),
  onfocus: darken($btn-primary, 10%),
  onactive: darken($btn-primary, 10%),
) !default;
$default-btn-bg-color: (
  default: none,
  disabled: none,
  onhover: none,
  onfocus: none,
  onactive: none,
) !default;

//Outline/Bordered button
$outline-btn-text-color: (
  default: $btn-primary,
  disabled: lighten(black, 70%),
  onhover: darken($btn-primary, 20%),
  onfocus: darken($btn-primary, 20%),
  onactive: darken($btn-primary, 20%),
) !default;
$outline-btn-border-color: (
  default: $btn-primary,
  disabled: $btn-disabled,
  onhover: darken($btn-primary, 20%),
  onfocus: darken($btn-primary, 20%),
  onactive: darken($btn-primary, 20%),
) !default;
$outline-btn-bg-color: (
  default: none,
  disabled: none,
  onhover: none,
  onfocus: none,
  onactive: none,
) !default;

//Primary button
$primary-btn-text-color: (
  default: white,
  disabled: $btn-white,
  onhover: white,
  onfocus: white,
  onactive: white,
) !default;
$primary-btn-border-color: (
  default: transparent,
  disabled: transparent,
  onhover: transparent,
  onfocus: transparent,
  onactive: transparent,
) !default;
$primary-btn-bg-color: (
  default: $btn-primary,
  disabled: lighten(black, 70%),
  onhover: darken($btn-primary, 15%),
  onfocus: darken($btn-primary, 10%),
  onactive: darken($btn-primary, 10%),
) !default;

//Secondary button
$secondary-btn-text-color: (
  default: white,
  disabled: $btn-white,
  onhover: white,
  onfocus: white,
  onactive: white,
) !default;
$secondary-btn-border-color: (
  default: transparent,
  disabled: transparent,
  onhover: transparent,
  onfocus: transparent,
  onactive: transparent,
) !default;
$secondary-btn-bg-color: (
  default: $btn-secondary,
  disabled: lighten(black, 70%),
  onhover: darken($btn-secondary, 15%),
  onfocus: darken($btn-secondary, 10%),
  onactive: darken($btn-secondary, 10%),
) !default;

//Tertiary button
$tertiary-btn-text-color: (
  default: white,
  disabled: $btn-white,
  onhover: white,
  onfocus: white,
  onactive: white,
) !default;
$tertiary-btn-border-color: (
  default: transparent,
  disabled: transparent,
  onhover: transparent,
  onfocus: transparent,
  onactive: transparent,
) !default;
$tertiary-btn-bg-color: (
  default: $btn-tertiary,
  disabled: lighten(black, 70%),
  onhover: darken($btn-tertiary, 15%),
  onfocus: darken($btn-tertiary, 10%),
  onactive: darken($btn-tertiary, 10%),
) !default;

.btn {
  @include btn-default-style(
    map-get($default-btn-text-color, default),
    map-get($default-btn-border-color, default),
    map-get($default-btn-bg-color, default)
  );

  padding: map-get($btn-padding, default);
  font-size: map-get($btn-text-size, default);
  border-radius: $btn-radius;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: none;

  @include btn-disabled-style(
    map-get($default-btn-text-color, disabled),
    map-get($default-btn-border-color, disabled),
    map-get($default-btn-bg-color, disabled)
  );

  @include btn-hover-style(
    map-get($default-btn-text-color, onhover),
    map-get($default-btn-border-color, onhover),
    map-get($default-btn-bg-color, onhover)
  );

  @include btn-focus-style(
    map-get($default-btn-text-color, onfocus),
    map-get($default-btn-border-color, onfocus),
    map-get($default-btn-bg-color, onfocus)
  );

  @include btn-active-style(
    map-get($default-btn-text-color, onactive),
    map-get($default-btn-border-color, onactive),
    map-get($default-btn-bg-color, onactive)
  );

  /**
      SIZES
    */
  &--small {
    padding: map-get($btn-padding, small);
    font-size: map-get($btn-text-size, small);
  }

  &--large {
    padding: map-get($btn-padding, large);
    font-size: map-get($btn-text-size, large);
  }

  // Outline/Bordered Button
  &--outline {
    @include btn-default-style(
      map-get($outline-btn-text-color, default),
      map-get($outline-btn-border-color, default),
      map-get($outline-btn-bg-color, default)
    );

    @include btn-disabled-style(
      map-get($outline-btn-text-color, disabled),
      map-get($outline-btn-border-color, disabled),
      map-get($outline-btn-bg-color, disabled)
    );

    @include btn-hover-style(
      map-get($outline-btn-text-color, onhover),
      map-get($outline-btn-border-color, onhover),
      map-get($outline-btn-bg-color, onhover)
    );

    @include btn-focus-style(
      map-get($outline-btn-text-color, onfocus),
      map-get($outline-btn-border-color, onfocus),
      map-get($outline-btn-bg-color, onfocus)
    );

    @include btn-active-style(
      map-get($outline-btn-text-color, onactive),
      map-get($outline-btn-border-color, onactive),
      map-get($outline-btn-bg-color, onactive)
    );
  }

  // Primary Button
  &--primary {
    @include btn-default-style(
      map-get($primary-btn-text-color, default),
      map-get($primary-btn-border-color, default),
      map-get($primary-btn-bg-color, default)
    );

    @include btn-disabled-style(
      map-get($primary-btn-text-color, disabled),
      map-get($primary-btn-border-color, disabled),
      map-get($primary-btn-bg-color, disabled)
    );

    @include btn-hover-style(
      map-get($primary-btn-text-color, onhover),
      map-get($primary-btn-border-color, onhover),
      map-get($primary-btn-bg-color, onhover)
    );

    @include btn-focus-style(
      map-get($primary-btn-text-color, onfocus),
      map-get($primary-btn-border-color, onfocus),
      map-get($primary-btn-bg-color, onfocus)
    );

    @include btn-active-style(
      map-get($primary-btn-text-color, onactive),
      map-get($primary-btn-border-color, onactive),
      map-get($primary-btn-bg-color, onactive)
    );
  }

  // Secondary Button
  &--secondary {
    @include btn-default-style(
      map-get($secondary-btn-text-color, default),
      map-get($secondary-btn-border-color, default),
      map-get($secondary-btn-bg-color, default)
    );

    @include btn-disabled-style(
      map-get($secondary-btn-text-color, disabled),
      map-get($secondary-btn-border-color, disabled),
      map-get($secondary-btn-bg-color, disabled)
    );

    @include btn-hover-style(
      map-get($secondary-btn-text-color, onhover),
      map-get($secondary-btn-border-color, onhover),
      map-get($secondary-btn-bg-color, onhover)
    );

    @include btn-focus-style(
      map-get($secondary-btn-text-color, onfocus),
      map-get($secondary-btn-border-color, onfocus),
      map-get($secondary-btn-bg-color, onfocus)
    );

    @include btn-active-style(
      map-get($secondary-btn-text-color, onactive),
      map-get($secondary-btn-border-color, onactive),
      map-get($secondary-btn-bg-color, onactive)
    );
  }

  // Tertiary Button
  &--tertiary {
    @include btn-default-style(
      map-get($tertiary-btn-text-color, default),
      map-get($tertiary-btn-border-color, default),
      map-get($tertiary-btn-bg-color, default)
    );

    @include btn-disabled-style(
      map-get($tertiary-btn-text-color, disabled),
      map-get($tertiary-btn-border-color, disabled),
      map-get($tertiary-btn-bg-color, disabled)
    );

    @include btn-hover-style(
      map-get($tertiary-btn-text-color, onhover),
      map-get($tertiary-btn-border-color, onhover),
      map-get($tertiary-btn-bg-color, onhover)
    );

    @include btn-focus-style(
      map-get($tertiary-btn-text-color, onfocus),
      map-get($tertiary-btn-border-color, onfocus),
      map-get($tertiary-btn-bg-color, onfocus)
    );

    @include btn-active-style(
      map-get($tertiary-btn-text-color, onactive),
      map-get($tertiary-btn-border-color, onactive),
      map-get($tertiary-btn-bg-color, onactive)
    );
  }
}
</style>
