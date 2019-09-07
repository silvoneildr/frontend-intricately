<template lang="pug">
  .container
    app-header
    .content
      app-side-menu
      app-main
    app-footer
</template>

<script>
import AppHeader from './shared/AppHeader.vue'
import AppMain from './shared/AppMain.vue';
import AppFooter from './shared/AppFooter.vue';
import AppSideMenu from './shared/AppSideMenu.vue';

export default {
  components: {
    AppHeader,
    AppMain,
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
    margin-top: 30px;
    display: flex;
    padding: 0 18vw;
    flex-direction: row;
    height: 100vh;
  }
</style>