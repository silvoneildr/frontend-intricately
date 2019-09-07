<template lang="pug">
  .container
    label NOTES
    textarea(
      id="notes"
      name="notes"
      rows="10"
    ) It was a dark and stormy night...
</template>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  .container {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    label {
      padding: 10px 0;
    }
    textarea{
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
      width: 100%;
    }
  }
</style>