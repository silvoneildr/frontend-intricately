<template lang="pug">
  .container
    app-header
    .content
      .breadcrumbs
        span HOME / COMPANY DATA
      .main
        .side-menu
          app-side-menu
        .pages
          router-view
    app-footer
</template>

<script>
import AppHeader from 'Components/shared/AppHeader.vue'
import AppFooter from 'Components/shared/AppFooter.vue';
import AppSideMenu from 'Components/shared/AppSideMenu.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppSideMenu,
  }

}
</script>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  .container {
    width: 100vw;
    flex: 1;
    background: $color-gray
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 50px 18vw;
  }
  .main {
    display: flex;
    flex-direction: row;
  }
  .side-menu {
    flex: 1;
    padding: 0 10px;
    height: 83vh;
  }
  .pages {
    flex: 3;
    padding: 0 10px;
    height: 83vh;
  }
</style>