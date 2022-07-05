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

.btn {
  color: map-get($default-btn-text-color, default);
  background: none;
  border: solid $btn-border-width map-get($default-btn-border-color, default);
  padding: map-get($btn-padding, default);
  font-size: map-get($btn-text-size, default);
  border-radius: $btn-radius;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: none;

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

  &:disabled {
    color: map-get($default-btn-text-color, disabled);
    cursor: not-allowed;

    &:hover {
      color: map-get($default-btn-text-color, disabled);
      border: solid $btn-border-width
        map-get($default-btn-border-color, disabled);
    }
  }

  &:hover {
    color: map-get($default-btn-text-color, onhover);
    border: solid $btn-border-width map-get($default-btn-border-color, onhover);
  }

  &:focus {
    color: map-get($default-btn-text-color, onfocus);
  }

  &:active {
    color: map-get($default-btn-text-color, onactive);
  }

  // Outline/Bordered Button
  &--outline {
    color: map-get($outline-btn-text-color, default);
    border: solid $btn-border-width map-get($outline-btn-border-color, default);
    background: none;
    box-shadow: $btn-box-shadow;

    /**
      STATES
    */
    &:disabled {
      color: map-get($outline-btn-text-color, disabled);
      border: solid $btn-border-width
        map-get($outline-btn-border-color, disabled);

      &:hover {
        color: map-get($outline-btn-text-color, disabled);
        border: solid $btn-border-width
          map-get($outline-btn-border-color, disabled);
      }
    }

    &:hover {
      color: map-get($outline-btn-text-color, onhover);
      border: solid 1px map-get($outline-btn-border-color, onhover);
    }

    &:focus {
      color: map-get($outline-btn-text-color, onfocus);
      border: solid 1px map-get($outline-btn-border-color, onfocus);
    }

    &:active {
      color: map-get($outline-btn-text-color, onactive);
      border: solid 1px map-get($outline-btn-border-color, onactive);
    }
  }

  // Primary Button
  &--primary {
    color: map-get($primary-btn-text-color, default);
    background: map-get($primary-btn-bg-color, default);
    border: solid $btn-border-width map-get($primary-btn-border-color, default);
    box-shadow: $btn-box-shadow;

    &:disabled {
      color: map-get($primary-btn-text-color, disabled);
      background: map-get($primary-btn-bg-color, disabled);

      &:hover {
        color: map-get($primary-btn-text-color, disabled);
        border: solid $btn-border-width
          map-get($primary-btn-border-color, disabled);
        background: map-get($primary-btn-bg-color, disabled);
      }
    }

    &:hover {
      color: map-get($primary-btn-text-color, onhover);
      border: solid $btn-border-width
        map-get($primary-btn-border-color, onhover);
      background: map-get($primary-btn-bg-color, onhover);
    }

    &:focus {
      color: map-get($primary-btn-text-color, onfocus);
      background: map-get($primary-btn-bg-color, onfocus);
    }

    &:active {
      color: map-get($primary-btn-text-color, onactive);
      background: map-get($primary-btn-bg-color, onactive);
    }
  }

  // Secondary Button
  &--secondary {
    color: map-get($secondary-btn-text-color, default);
    background: map-get($secondary-btn-bg-color, default);
    border: solid $btn-border-width
      map-get($secondary-btn-border-color, default);
    box-shadow: $btn-box-shadow;

    &:disabled {
      color: map-get($secondary-btn-text-color, disabled);
      background: map-get($secondary-btn-bg-color, disabled);

      &:hover {
        color: map-get($secondary-btn-text-color, disabled);
        border: solid $btn-border-width
          map-get($secondary-btn-border-color, disabled);
        background: map-get($secondary-btn-bg-color, disabled);
      }
    }

    &:hover {
      color: map-get($secondary-btn-text-color, onhover);
      border: solid $btn-border-width
        map-get($secondary-btn-border-color, onhover);
      background: map-get($secondary-btn-bg-color, onhover);
    }

    &:focus {
      color: map-get($secondary-btn-text-color, onfocus);
      background: map-get($secondary-btn-bg-color, onfocus);
    }

    &:active {
      color: map-get($secondary-btn-text-color, onactive);
      background: map-get($secondary-btn-bg-color, onactive);
    }
  }
}
</style>
