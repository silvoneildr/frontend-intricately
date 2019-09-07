<template lang="pug">
  header
    h2 Header
</template>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  header {
    @include flexCenter();
    width: 100vw;
    height: 80px;
    background: $color-primary;
    color: $color-white;
  }
</style>