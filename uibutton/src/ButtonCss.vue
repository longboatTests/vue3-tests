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
$ux-btn-border-radius: 5px !default;
$ux-btn-color-primary: #2ed13b !default;
$ux-btn-color-secondary: #fd3b37 !default;
$ux-btn-color-tertiary: #cc17c6 !default;
$ux-btn-color-disabled: #aeb8c0 !default;
$ux-btn-color-white: #fff !default;
$ux-btn-border-width: 1px !default;
$ux-btn-box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1) !default;
$ux-btn-box-shadow-hover: 0px 2px 3px 2px rgba(0, 0, 0, 0.2) !default;

/**
  Button Size
   */
$ux-btn-size-tiny-padding: 4px 16px !default;
$ux-btn-size-small-padding: 6px 20px !default;
$ux-btn-size-medium-padding: 10px 24px !default;
$ux-btn-size-large-padding: 12px 28px !default;
$ux-btn-size-x-large-padding: 14px 32px !default;

$ux-btn-size-tiny-textSize: 0.7rem !default;
$ux-btn-size-small-textSize: 0.9rem !default;
$ux-btn-size-medium-textSize: 1rem !default;
$ux-btn-size-large-textSize: 1.2rem !default;
$ux-btn-size-x-large-textSize: 1.4rem !default;

/**
  Button themes/colors/styles
  */
//Default/Text button
$ux-btn-theme-text-default-textColor: $ux-btn-color-primary !default;
$ux-btn-theme-text-disabled-textColor: $ux-btn-color-disabled !default;
$ux-btn-theme-text-onhover-textColor: darken(
  $ux-btn-color-primary,
  15%
) !default;
$ux-btn-theme-text-onfocus-textColor: darken(
  $ux-btn-color-primary,
  15%
) !default;
$ux-btn-theme-text-onactive-textColor: darken(
  $ux-btn-color-primary,
  15%
) !default;

$ux-btn-theme-text-default-borderColor: transparent !default;
$ux-btn-theme-text-disabled-borderColor: transparent !default;
$ux-btn-theme-text-onhover-borderColor: darken(
  $ux-btn-color-primary,
  15%
) !default;
$ux-btn-theme-text-onfocus-borderColor: darken(
  $ux-btn-color-primary,
  15%
) !default;
$ux-btn-theme-text-onactive-borderColor: darken(
  $ux-btn-color-primary,
  15%
) !default;

$ux-btn-theme-text-default-bgColor: none !default;
$ux-btn-theme-text-disabled-bgColor: none !default;
$ux-btn-theme-text-onhover-bgColor: none !default;
$ux-btn-theme-text-onfocus-bgColor: none !default;
$ux-btn-theme-text-onactive-bgColor: none !default;

//Outline/Bordered button
$ux-btn-theme-outline-default-textColor: $ux-btn-color-primary !default;
$ux-btn-theme-outline-disabled-textColor: lighten(black, 70%) !default;
$ux-btn-theme-outline-onhover-textColor: darken(
  $ux-btn-color-primary,
  20%
) !default;
$ux-btn-theme-outline-onfocus-textColor: darken(
  $ux-btn-color-primary,
  20%
) !default;
$ux-btn-theme-outline-onactive-textColor: darken(
  $ux-btn-color-primary,
  20%
) !default;

$ux-btn-theme-outline-default-borderColor: $ux-btn-color-primary !default;
$ux-btn-theme-outline-disabled-borderColor: $ux-btn-color-disabled !default;
$ux-btn-theme-outline-onhover-borderColor: darken(
  $ux-btn-color-primary,
  20%
) !default;
$ux-btn-theme-outline-onfocus-borderColor: darken(
  $ux-btn-color-primary,
  20%
) !default;
$ux-btn-theme-outline-onactive-borderColor: darken(
  $ux-btn-color-primary,
  20%
) !default;

$ux-btn-theme-outline-default-bgColor: none !default;
$ux-btn-theme-outline-disabled-bgColor: none !default;
$ux-btn-theme-outline-onhover-bgColor: none !default;
$ux-btn-theme-outline-onfocus-bgColor: none !default;
$ux-btn-theme-outline-onactive-bgColor: none !default;

//Primary button
$ux-btn-theme-primary-default-textColor: white !default;
$ux-btn-theme-primary-disabled-textColor: $ux-btn-color-white !default;
$ux-btn-theme-primary-onhover-textColor: white !default;
$ux-btn-theme-primary-onfocus-textColor: white !default;
$ux-btn-theme-primary-onactive-textColor: white !default;

$ux-btn-theme-primary-default-borderColor: transparent !default;
$ux-btn-theme-primary-disabled-borderColor: transparent !default;
$ux-btn-theme-primary-onhover-borderColor: transparent !default;
$ux-btn-theme-primary-onfocus-borderColor: transparent !default;
$ux-btn-theme-primary-onactive-borderColor: transparent !default;

$ux-btn-theme-primary-default-bgColor: $ux-btn-color-primary !default;
$ux-btn-theme-primary-disabled-bgColor: lighten(black, 70%) !default;
$ux-btn-theme-primary-onhover-bgColor: darken(
  $ux-btn-color-primary,
  15%
) !default;
$ux-btn-theme-primary-onfocus-bgColor: darken(
  $ux-btn-color-primary,
  15%
) !default;
$ux-btn-theme-primary-onactive-bgColor: darken(
  $ux-btn-color-primary,
  15%
) !default;

//Secondary button
$ux-btn-theme-secondary-default-textColor: white !default;
$ux-btn-theme-secondary-disabled-textColor: $ux-btn-color-white !default;
$ux-btn-theme-secondary-onhover-textColor: white !default;
$ux-btn-theme-secondary-onfocus-textColor: white !default;
$ux-btn-theme-secondary-onactive-textColor: white !default;

$ux-btn-theme-secondary-default-borderColor: transparent !default;
$ux-btn-theme-secondary-disabled-borderColor: transparent !default;
$ux-btn-theme-secondary-onhover-borderColor: transparent !default;
$ux-btn-theme-secondary-onfocus-borderColor: transparent !default;
$ux-btn-theme-secondary-onactive-borderColor: transparent !default;

$ux-btn-theme-secondary-default-bgColor: $ux-btn-color-secondary !default;
$ux-btn-theme-secondary-disabled-bgColor: lighten(black, 70%) !default;
$ux-btn-theme-secondary-onhover-bgColor: darken(
  $ux-btn-color-secondary,
  15%
) !default;
$ux-btn-theme-secondary-onfocus-bgColor: darken(
  $ux-btn-color-secondary,
  15%
) !default;
$ux-btn-theme-secondary-onactive-bgColor: darken(
  $ux-btn-color-secondary,
  15%
) !default;

//Tertiary button
$ux-btn-theme-tertiary-default-textColor: white !default;
$ux-btn-theme-tertiary-disabled-textColor: $ux-btn-color-white !default;
$ux-btn-theme-tertiary-onhover-textColor: white !default;
$ux-btn-theme-tertiary-onfocus-textColor: white !default;
$ux-btn-theme-tertiary-onactive-textColor: white !default;

$ux-btn-theme-tertiary-default-borderColor: transparent !default;
$ux-btn-theme-tertiary-disabled-borderColor: transparent !default;
$ux-btn-theme-tertiary-onhover-borderColor: transparent !default;
$ux-btn-theme-tertiary-onfocus-borderColor: transparent !default;
$ux-btn-theme-tertiary-onactive-borderColor: transparent !default;

$ux-btn-theme-tertiary-default-bgColor: $ux-btn-color-tertiary !default;
$ux-btn-theme-tertiary-disabled-bgColor: lighten(black, 70%) !default;
$ux-btn-theme-tertiary-onhover-bgColor: darken(
  $ux-btn-color-tertiary,
  15%
) !default;
$ux-btn-theme-tertiary-onfocus-bgColor: darken(
  $ux-btn-color-tertiary,
  15%
) !default;
$ux-btn-theme-tertiary-onactive-bgColor: darken(
  $ux-btn-color-tertiary,
  15%
) !default;

/**
    -----------------------
    BUTTON STYLES
    ----------------------
   */
.ux-btn {
  // Default/Text Button
  color: var(--ux-color-primary-100, $ux-btn-theme-text-default-textColor);
  background: var(
    --ux-btn--theme-text-onhover-bgColor,
    $ux-btn-theme-text-default-bgColor
  );
  border: solid $ux-btn-border-width $ux-btn-theme-text-default-borderColor;
  box-shadow: $ux-btn-box-shadow;

  padding: $ux-btn-size-medium-padding;
  font-size: $ux-btn-size-medium-textSize;
  border-radius: $ux-btn-border-radius;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: none;

  &:disabled {
    color: var(--ux-color-dark-70, $ux-btn-theme-text-disabled-textColor);
    border: solid $ux-btn-border-width $ux-btn-theme-text-disabled-borderColor;
    background: $ux-btn-theme-text-disabled-bgColor;
    cursor: not-allowed;

    &:hover {
      color: $ux-btn-theme-text-disabled-textColor;
      border: solid $ux-btn-border-width $ux-btn-theme-text-disabled-borderColor;
      background: $ux-btn-theme-text-disabled-bgColor;
    }
  }

  &:hover {
    color: var(--ux-color-primary-100, $ux-btn-theme-text-onhover-textColor);
    border: solid $ux-btn-border-width $ux-btn-theme-text-onhover-borderColor;
    background: $ux-btn-theme-text-onhover-bgColor;
  }

  &:focus {
    color: $ux-btn-theme-text-onfocus-textColor;
    border: solid $ux-btn-border-width $ux-btn-theme-text-onfocus-borderColor;
    background: $ux-btn-theme-text-onfocus-bgColor;
  }

  &:active {
    color: $ux-btn-theme-text-onactive-textColor;
    border: solid $ux-btn-border-width $ux-btn-theme-text-onactive-borderColor;
    background: $ux-btn-theme-text-onactive-bgColor;
  }

  // Outline/Bordered Button
  &--outline {
    color: $ux-btn-theme-outline-default-textColor;
    background: $ux-btn-theme-outline-default-bgColor;
    border: solid $ux-btn-border-width $ux-btn-theme-outline-default-borderColor;
    box-shadow: $ux-btn-box-shadow;

    &:disabled {
      color: $ux-btn-theme-outline-disabled-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-outline-disabled-borderColor;
      background: $ux-btn-theme-outline-disabled-bgColor;
      cursor: not-allowed;

      &:hover {
        color: $ux-btn-theme-outline-disabled-textColor;
        border: solid $ux-btn-border-width
          $ux-btn-theme-outline-disabled-borderColor;
        background: $ux-btn-theme-outline-disabled-bgColor;
      }
    }

    &:hover {
      color: $ux-btn-theme-outline-onhover-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-outline-onhover-borderColor;
      background: $ux-btn-theme-outline-onhover-bgColor;
    }

    &:focus {
      color: $ux-btn-theme-outline-onfocus-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-outline-onfocus-borderColor;
      background: $ux-btn-theme-outline-onfocus-bgColor;
    }

    &:active {
      color: $ux-btn-theme-outline-onactive-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-outline-onactive-borderColor;
      background: $ux-btn-theme-outline-onactive-bgColor;
    }
  }

  // Primary Button
  &--primary {
    color: $ux-btn-theme-primary-default-textColor;
    background: $ux-btn-theme-primary-default-bgColor;
    border: solid $ux-btn-border-width $ux-btn-theme-primary-default-borderColor;
    box-shadow: $ux-btn-box-shadow;

    &:disabled {
      color: $ux-btn-theme-primary-disabled-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-primary-disabled-borderColor;
      background: $ux-btn-theme-primary-disabled-bgColor;
      cursor: not-allowed;

      &:hover {
        color: $ux-btn-theme-primary-disabled-textColor;
        border: solid $ux-btn-border-width
          $ux-btn-theme-primary-disabled-borderColor;
        background: $ux-btn-theme-primary-disabled-bgColor;
      }
    }

    &:hover {
      color: $ux-btn-theme-primary-onhover-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-primary-onhover-borderColor;
      background: $ux-btn-theme-primary-onhover-bgColor;
    }

    &:focus {
      color: $ux-btn-theme-primary-onfocus-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-primary-onfocus-borderColor;
      background: $ux-btn-theme-primary-onfocus-bgColor;
    }

    &:active {
      color: $ux-btn-theme-primary-onactive-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-primary-onactive-borderColor;
      background: $ux-btn-theme-primary-onactive-bgColor;
    }
  }

  // Secondary Button
  &--secondary {
    color: $ux-btn-theme-secondary-default-textColor;
    background: $ux-btn-theme-secondary-default-bgColor;
    border: solid $ux-btn-border-width
      $ux-btn-theme-secondary-default-borderColor;
    box-shadow: $ux-btn-box-shadow;

    &:disabled {
      color: $ux-btn-theme-secondary-disabled-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-secondary-disabled-borderColor;
      background: $ux-btn-theme-secondary-disabled-bgColor;
      cursor: not-allowed;

      &:hover {
        color: $ux-btn-theme-secondary-disabled-textColor;
        border: solid $ux-btn-border-width
          $ux-btn-theme-secondary-disabled-borderColor;
        background: $ux-btn-theme-secondary-disabled-bgColor;
      }
    }

    &:hover {
      color: $ux-btn-theme-secondary-onhover-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-secondary-onhover-borderColor;
      background: $ux-btn-theme-secondary-onhover-bgColor;
    }

    &:focus {
      color: $ux-btn-theme-secondary-onfocus-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-secondary-onfocus-borderColor;
      background: $ux-btn-theme-secondary-onfocus-bgColor;
    }

    &:active {
      color: $ux-btn-theme-secondary-onactive-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-secondary-onactive-borderColor;
      background: $ux-btn-theme-secondary-onactive-bgColor;
    }
  }

  // Tertiary Button
  &--tertiary {
    color: $ux-btn-theme-tertiary-default-textColor;
    background: $ux-btn-theme-tertiary-default-bgColor;
    border: solid $ux-btn-border-width
      $ux-btn-theme-tertiary-default-borderColor;
    box-shadow: $ux-btn-box-shadow;

    &:disabled {
      color: $ux-btn-theme-tertiary-disabled-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-tertiary-disabled-borderColor;
      background: $ux-btn-theme-tertiary-disabled-bgColor;
      cursor: not-allowed;

      &:hover {
        color: $ux-btn-theme-tertiary-disabled-textColor;
        border: solid $ux-btn-border-width
          $ux-btn-theme-tertiary-disabled-borderColor;
        background: $ux-btn-theme-tertiary-disabled-bgColor;
      }
    }

    &:hover {
      color: $ux-btn-theme-tertiary-onhover-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-tertiary-onhover-borderColor;
      background: $ux-btn-theme-tertiary-onhover-bgColor;
    }

    &:focus {
      color: $ux-btn-theme-tertiary-onfocus-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-tertiary-onfocus-borderColor;
      background: $ux-btn-theme-tertiary-onfocus-bgColor;
    }

    &:active {
      color: $ux-btn-theme-tertiary-onactive-textColor;
      border: solid $ux-btn-border-width
        $ux-btn-theme-tertiary-onactive-borderColor;
      background: $ux-btn-theme-tertiary-onactive-bgColor;
    }
  }

  /**
        SIZES
    */
  &--tiny {
    padding: var(--ux-btn-size-tiny-padding, $ux-btn-size-tiny-padding);
    font-size: var(--ux-btn-size-tiny-textSize, $ux-btn-size-tiny-textSize);
  }

  &--small {
    padding: var(--ux-btn-size-small-padding, $ux-btn-size-small-padding);
    font-size: var(--ux-btn-size-small-textSize, $ux-btn-size-small-textSize);
  }

  &--medium {
    padding: var(--ux-btn-size-medium-padding, $ux-btn-size-medium-padding);
    font-size: var(--ux-btn-size-medium-textSize, $ux-btn-size-medium-textSize);
  }

  &--large {
    padding: var(--ux-btn-size-large-padding, $ux-btn-size-large-padding);
    font-size: var(--ux-btn-size-large-textSize, $ux-btn-size-large-textSize);
  }

  &--x-large {
    padding: var(--ux-btn-size-x-large-padding, $ux-btn-size-x-large-padding);
    font-size: var(
      --ux-btn-size-x-large-textSize,
      $ux-btn-size-x-large-textSize
    );
  }
}
</style>
