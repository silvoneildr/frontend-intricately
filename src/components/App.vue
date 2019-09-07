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
  }
  .content {
    display: flex;
    padding: 0 15vw;
    flex-direction: row;
    height: 100vh;
    background: $color-white;
  }
</style>