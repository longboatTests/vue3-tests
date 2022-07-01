<template>
  <button class="btn"><slot /></button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss">
//Default button. The default button is a text button
$default-btn-text-color: (
  default: black,
  onhover: blue,
  onfocus: green,
  onactive: red,
) !default;

//Bordered button
$bordered-btn-text-color: (
  default: black,
  onhover: black,
  onfocus: black,
  onactive: black,
) !default;
$bordered-btn-border-color: (
  default: red,
  onhover: blue,
  onfocus: green,
  onactive: blue,
) !default;

//Primary button
$primary-btn-text-color: (
  default: white,
  onhover: white,
  onfocus: white,
  onactive: white,
) !default;
$primary-btn-bg-color: (
  default: blue,
  onhover: darken(blue, 10%),
  onfocus: darken(blue, 10%),
  onactive: darken(blue, 10%),
) !default;

//Secondary button
$secondary-btn-text-color: (
  default: white,
  onhover: white,
  onfocus: white,
  onactive: white,
) !default;
$secondary-btn-bg-color: (
  default: red,
  onhover: darken(red, 10%),
  onfocus: darken(red, 10%),
  onactive: darken(red, 10%),
) !default;

.btn {
  color: map-get($default-btn-text-color, default);
  background: none;
  border: none;
  padding: 8px 12px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: map-get($default-btn-text-color, onhover);
  }

  &:focus {
    color: map-get($default-btn-text-color, onfocus);
  }

  &:active {
    color: map-get($default-btn-text-color, onactive);
  }

  // Bordered Button
  &--bordered {
    color: map-get($bordered-btn-text-color, default);
    border: solid 1.5px map-get($bordered-btn-border-color, default);
    background: none;

    &:hover {
      color: map-get($bordered-btn-text-color, onhover);
      border: solid 1.5px map-get($bordered-btn-border-color, onhover);
    }

    &:focus {
      color: map-get($bordered-btn-text-color, onfocus);
      border: solid 1.5px map-get($bordered-btn-border-color, onfocus);
    }

    &:active {
      color: map-get($bordered-btn-text-color, onactive);
      border: solid 1.5px map-get($bordered-btn-border-color, onactive);
    }
  }

  // Primary Button
  &--primary {
    color: map-get($primary-btn-text-color, default);
    background: map-get($primary-btn-bg-color, default);
    border: none;

    &:hover {
      color: map-get($primary-btn-text-color, onhover);
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
    border: none;

    &:hover {
      color: map-get($secondary-btn-text-color, onhover);
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
