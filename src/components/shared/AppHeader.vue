<template lang="pug">
  header
    h2 Header
</template>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  header {
    @include flexCenter();
    width: 100vw;
    height: 7vh;
    background: $color-primary;
    color: $color-white;
  }
</style>