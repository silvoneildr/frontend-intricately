<template lang="pug">
  .side-menu
    .menu
      .item-menu COMPANY DATA
      .item-menu COMPANY TABLE
      .item-menu COMPANY PAGE

</template>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  .side-menu {
    flex: 1;
    padding: 15px;
  }
  .menu {
    font-size: $font-size-normal;
    text-align: left;
    width: 100%;
    border: 1px solid $color-secondary;
    border-radius: 5px;
    border-spacing: 0;
    .item-menu {
      cursor: pointer;
      padding: 25px;
      border-bottom: 1px solid $color-secondary;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        color: $color-primary;
      }
      &:active {
        border-left: 3px solid $color-primary;
      }
    }

  }
</style>