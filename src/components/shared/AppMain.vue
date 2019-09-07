<template lang="pug">
  .main
    .content
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        | Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        | nisi ut aliquip ex ea commodo consequat.
      form
        app-input(
          label="COMPANY NAME"
          name="companyName"
          placeholder="e.g. Your Company Name"
          typeInput="text"
        )
        app-input(
          label="COMPANY SPEND"
          name="companyName"
          placeholder="e.g. $150,000"
          typeInput="text"
        )
        app-input(
          label="COMPANY SPEND ABILITY"
          name="companyName"
          placeholder="e.g. $150,000 - $330,000"
          typeInput="text"
        )
        app-text-area
</template>

<script>
import AppInput from '../shared/AppInput.vue';
import AppTextArea from '../shared/AppTextArea.vue';
export default {
  components: {
    AppInput,
    AppTextArea
  }
}
</script>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  .main {
    flex: 3;
    padding: 15px;
  }
  .content {
    border: 1px solid $color-secondary;
    border-radius: 5px;
    padding: 20px;
    p {
      font-size: $font-size-small;
      text-align: justify;
    }
    form {
      display: flex;
      flex-direction: column;
      font-size: $font-size-small;
    }
  }
</style>