<template lang="pug">
  .side-menu
    .menu
      .item-menu(
        @click="handlePage('the-company-data')"
      ) COMPANY DATA
      .item-menu COMPANY TABLE
      .item-menu(
        @click="handlePage('the-company-page')"
      ) COMPANY PAGE

</template>

<script>
export default {
  methods: {
    handlePage(newRoute) {
      if (this.$route && this.$router.history.current.meta.menu) {
        const activeRoute = this.$router.history.current.meta.menu
        if (newRoute !== activeRoute) {
          this.$router.push({
            name: newRoute,
          });
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
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