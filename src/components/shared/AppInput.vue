<template lang="pug">
  .container
    label {{ label }}
    input(
      :type="typeInput"
      :name="name"
      :placeholder="placeholder"
    )
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    typeInput: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  .container {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    label {
      padding: 10px 0;
    }
    input[type=text] {
      color: $font-color;
      padding: 10px 15px;
      border-radius:5px;
      -moz-border-radius:5px;
      -webkit-border-radius:5px;
      box-shadow: 2px 2px 10px $color-secondary;
      -moz-box-shadow: 2px 2px 10px $color-secondary;
      -webkit-box-shadow: 2px 2px 10px $color-secondary;
      background: $color-white;
      border: 1px solid $color-secondary;
      width: 50%;
      height: 50px;
    }
    input[type=text]:hover, textarea:hover{
      background: transparent;
      border:1px solid $color-primary;
    }
    input[type=submit]{
      background: transparent;
    }
  }
</style>