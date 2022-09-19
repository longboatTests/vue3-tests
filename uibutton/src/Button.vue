<template>
  <button class="ux-btn" :disabled="isDisabled" @click="$emit('click')">
    <slot />
  </button>
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
$ux-btn-radius: 5px !default;
$ux-btn-primary: #2ed13b !default;
$ux-btn-secondary: #fd3b37 !default;
$ux-btn-tertiary: #cc17c6 !default;
$ux-btn-disabled: #aeb8c0 !default;
$ux-btn-white: #fff !default;
$ux-btn-border-width: 1px !default;
$ux-btn-box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1) !default;
$ux-btn-box-shadow-hover: 0px 2px 3px 2px rgba(0, 0, 0, 0.2) !default;
$ux-btn-padding: (
  small: 4px 16px,
  default: 12px 24px,
  large: 16px 24px,
) !default;

$ux-btn-text-size: (
  small: 0.7rem,
  default: 1rem,
  large: 1.2rem,
) !default;

@mixin ux-btn-default-style(
  $ux-btn-text-color,
  $ux-btn-border-color,
  $ux-btn-bg-color
) {
  color: $ux-btn-text-color;
  background: $ux-btn-bg-color;
  border: solid $ux-btn-border-width $ux-btn-border-color;
  box-shadow: $ux-btn-box-shadow;
}

@mixin ux-btn-disabled-style(
  $ux-btn-text-color,
  $ux-btn-border-color,
  $ux-btn-bg-color
) {
  &:disabled {
    color: $ux-btn-text-color;
    border: solid $ux-btn-border-width $ux-btn-border-color;
    background: $ux-btn-bg-color;
    cursor: not-allowed;

    &:hover {
      color: $ux-btn-text-color;
      border: solid $ux-btn-border-width $ux-btn-border-color;
      background: $ux-btn-bg-color;
    }
  }
}

@mixin ux-btn-hover-style(
  $ux-btn-text-color,
  $ux-btn-border-color,
  $ux-btn-bg-color
) {
  &:hover {
    color: $ux-btn-text-color;
    border: solid $ux-btn-border-width $ux-btn-border-color;
    background: $ux-btn-bg-color;
  }
}

@mixin ux-btn-focus-style(
  $ux-btn-text-color,
  $ux-btn-border-color,
  $ux-btn-bg-color
) {
  &:focus {
    color: $ux-btn-text-color;
    border: solid $ux-btn-border-width $ux-btn-border-color;
    background: $ux-btn-bg-color;
  }
}

@mixin ux-btn-active-style(
  $ux-btn-text-color,
  $ux-btn-border-color,
  $ux-btn-bg-color
) {
  &:active {
    color: $ux-btn-text-color;
    border: solid $ux-btn-border-width $ux-btn-border-color;
    background: $ux-btn-bg-color;
  }
}

//Default button. The default button is a text button
$default-ux-btn-text-color: (
  default: $ux-btn-primary,
  disabled: $ux-btn-disabled,
  onhover: darken($ux-btn-primary, 15%),
  onfocus: darken($ux-btn-primary, 10%),
  onactive: darken($ux-btn-primary, 10%),
) !default;

$default-ux-btn-border-color: (
  default: transparent,
  disabled: transparent,
  onhover: darken($ux-btn-primary, 15%),
  onfocus: darken($ux-btn-primary, 10%),
  onactive: darken($ux-btn-primary, 10%),
) !default;
$default-ux-btn-bg-color: (
  default: none,
  disabled: none,
  onhover: none,
  onfocus: none,
  onactive: none,
) !default;

//Outline/Bordered button
$outline-ux-btn-text-color: (
  default: $ux-btn-primary,
  disabled: lighten(black, 70%),
  onhover: darken($ux-btn-primary, 20%),
  onfocus: darken($ux-btn-primary, 20%),
  onactive: darken($ux-btn-primary, 20%),
) !default;
$outline-ux-btn-border-color: (
  default: $ux-btn-primary,
  disabled: $ux-btn-disabled,
  onhover: darken($ux-btn-primary, 20%),
  onfocus: darken($ux-btn-primary, 20%),
  onactive: darken($ux-btn-primary, 20%),
) !default;
$outline-ux-btn-bg-color: (
  default: none,
  disabled: none,
  onhover: none,
  onfocus: none,
  onactive: none,
) !default;

//Primary button
$primary-ux-btn-text-color: (
  default: white,
  disabled: $ux-btn-white,
  onhover: white,
  onfocus: white,
  onactive: white,
) !default;
$primary-ux-btn-border-color: (
  default: transparent,
  disabled: transparent,
  onhover: transparent,
  onfocus: transparent,
  onactive: transparent,
) !default;
$primary-ux-btn-bg-color: (
  default: $ux-btn-primary,
  disabled: lighten(black, 70%),
  onhover: darken($ux-btn-primary, 15%),
  onfocus: darken($ux-btn-primary, 10%),
  onactive: darken($ux-btn-primary, 10%),
) !default;

//Secondary button
$secondary-ux-btn-text-color: (
  default: white,
  disabled: $ux-btn-white,
  onhover: white,
  onfocus: white,
  onactive: white,
) !default;
$secondary-ux-btn-border-color: (
  default: transparent,
  disabled: transparent,
  onhover: transparent,
  onfocus: transparent,
  onactive: transparent,
) !default;
$secondary-ux-btn-bg-color: (
  default: $ux-btn-secondary,
  disabled: lighten(black, 70%),
  onhover: darken($ux-btn-secondary, 15%),
  onfocus: darken($ux-btn-secondary, 10%),
  onactive: darken($ux-btn-secondary, 10%),
) !default;

//Tertiary button
$tertiary-ux-btn-text-color: (
  default: white,
  disabled: $ux-btn-white,
  onhover: white,
  onfocus: white,
  onactive: white,
) !default;
$tertiary-ux-btn-border-color: (
  default: transparent,
  disabled: transparent,
  onhover: transparent,
  onfocus: transparent,
  onactive: transparent,
) !default;
$tertiary-ux-btn-bg-color: (
  default: $ux-btn-tertiary,
  disabled: lighten(black, 70%),
  onhover: darken($ux-btn-tertiary, 15%),
  onfocus: darken($ux-btn-tertiary, 10%),
  onactive: darken($ux-btn-tertiary, 10%),
) !default;

.ux-btn {
  @include ux-btn-default-style(
    map-get($default-ux-btn-text-color, default),
    map-get($default-ux-btn-border-color, default),
    map-get($default-ux-btn-bg-color, default)
  );

  padding: map-get($ux-btn-padding, default);
  font-size: map-get($ux-btn-text-size, default);
  border-radius: $ux-btn-radius;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: none;

  @include ux-btn-disabled-style(
    map-get($default-ux-btn-text-color, disabled),
    map-get($default-ux-btn-border-color, disabled),
    map-get($default-ux-btn-bg-color, disabled)
  );

  @include ux-btn-hover-style(
    map-get($default-ux-btn-text-color, onhover),
    map-get($default-ux-btn-border-color, onhover),
    map-get($default-ux-btn-bg-color, onhover)
  );

  @include ux-btn-focus-style(
    map-get($default-ux-btn-text-color, onfocus),
    map-get($default-ux-btn-border-color, onfocus),
    map-get($default-ux-btn-bg-color, onfocus)
  );

  @include ux-btn-active-style(
    map-get($default-ux-btn-text-color, onactive),
    map-get($default-ux-btn-border-color, onactive),
    map-get($default-ux-btn-bg-color, onactive)
  );

  /**
      SIZES
    */
  &--small {
    padding: map-get($ux-btn-padding, small);
    font-size: map-get($ux-btn-text-size, small);
  }

  &--large {
    padding: map-get($ux-btn-padding, large);
    font-size: map-get($ux-btn-text-size, large);
  }

  // Outline/Bordered Button
  &--outline {
    @include ux-btn-default-style(
      map-get($outline-ux-btn-text-color, default),
      map-get($outline-ux-btn-border-color, default),
      map-get($outline-ux-btn-bg-color, default)
    );

    @include ux-btn-disabled-style(
      map-get($outline-ux-btn-text-color, disabled),
      map-get($outline-ux-btn-border-color, disabled),
      map-get($outline-ux-btn-bg-color, disabled)
    );

    @include ux-btn-hover-style(
      map-get($outline-ux-btn-text-color, onhover),
      map-get($outline-ux-btn-border-color, onhover),
      map-get($outline-ux-btn-bg-color, onhover)
    );

    @include ux-btn-focus-style(
      map-get($outline-ux-btn-text-color, onfocus),
      map-get($outline-ux-btn-border-color, onfocus),
      map-get($outline-ux-btn-bg-color, onfocus)
    );

    @include ux-btn-active-style(
      map-get($outline-ux-btn-text-color, onactive),
      map-get($outline-ux-btn-border-color, onactive),
      map-get($outline-ux-btn-bg-color, onactive)
    );
  }

  // Primary Button
  &--primary {
    @include ux-btn-default-style(
      map-get($primary-ux-btn-text-color, default),
      map-get($primary-ux-btn-border-color, default),
      map-get($primary-ux-btn-bg-color, default)
    );

    @include ux-btn-disabled-style(
      map-get($primary-ux-btn-text-color, disabled),
      map-get($primary-ux-btn-border-color, disabled),
      map-get($primary-ux-btn-bg-color, disabled)
    );

    @include ux-btn-hover-style(
      map-get($primary-ux-btn-text-color, onhover),
      map-get($primary-ux-btn-border-color, onhover),
      map-get($primary-ux-btn-bg-color, onhover)
    );

    @include ux-btn-focus-style(
      map-get($primary-ux-btn-text-color, onfocus),
      map-get($primary-ux-btn-border-color, onfocus),
      map-get($primary-ux-btn-bg-color, onfocus)
    );

    @include ux-btn-active-style(
      map-get($primary-ux-btn-text-color, onactive),
      map-get($primary-ux-btn-border-color, onactive),
      map-get($primary-ux-btn-bg-color, onactive)
    );
  }

  // Secondary Button
  &--secondary {
    @include ux-btn-default-style(
      map-get($secondary-ux-btn-text-color, default),
      map-get($secondary-ux-btn-border-color, default),
      map-get($secondary-ux-btn-bg-color, default)
    );

    @include ux-btn-disabled-style(
      map-get($secondary-ux-btn-text-color, disabled),
      map-get($secondary-ux-btn-border-color, disabled),
      map-get($secondary-ux-btn-bg-color, disabled)
    );

    @include ux-btn-hover-style(
      map-get($secondary-ux-btn-text-color, onhover),
      map-get($secondary-ux-btn-border-color, onhover),
      map-get($secondary-ux-btn-bg-color, onhover)
    );

    @include ux-btn-focus-style(
      map-get($secondary-ux-btn-text-color, onfocus),
      map-get($secondary-ux-btn-border-color, onfocus),
      map-get($secondary-ux-btn-bg-color, onfocus)
    );

    @include ux-btn-active-style(
      map-get($secondary-ux-btn-text-color, onactive),
      map-get($secondary-ux-btn-border-color, onactive),
      map-get($secondary-ux-btn-bg-color, onactive)
    );
  }

  // Tertiary Button
  &--tertiary {
    @include ux-btn-default-style(
      map-get($tertiary-ux-btn-text-color, default),
      map-get($tertiary-ux-btn-border-color, default),
      map-get($tertiary-ux-btn-bg-color, default)
    );

    @include ux-btn-disabled-style(
      map-get($tertiary-ux-btn-text-color, disabled),
      map-get($tertiary-ux-btn-border-color, disabled),
      map-get($tertiary-ux-btn-bg-color, disabled)
    );

    @include ux-btn-hover-style(
      map-get($tertiary-ux-btn-text-color, onhover),
      map-get($tertiary-ux-btn-border-color, onhover),
      map-get($tertiary-ux-btn-bg-color, onhover)
    );

    @include ux-btn-focus-style(
      map-get($tertiary-ux-btn-text-color, onfocus),
      map-get($tertiary-ux-btn-border-color, onfocus),
      map-get($tertiary-ux-btn-bg-color, onfocus)
    );

    @include ux-btn-active-style(
      map-get($tertiary-ux-btn-text-color, onactive),
      map-get($tertiary-ux-btn-border-color, onactive),
      map-get($tertiary-ux-btn-bg-color, onactive)
    );
  }
}
</style>
