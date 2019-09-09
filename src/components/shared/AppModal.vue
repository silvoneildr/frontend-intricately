<template lang="pug">
  transition(name='modal')
    .modal-mask(@click.self="closeModal()")
      .modal-wrapper(@click.self="closeModal()")
        .modal-container
          .modal-header
            p.title {{ titulo }}
            span(
              class="close rounded"
              @click="closeModal()",
            )
            //- button.btn(
            //-   type="text",
            //-   @click="closeModal()",
            //-   @mouseover.native="hover",
            //-   @mouseout.native="leave",
            //-   :style="getColor",
            //-   size="mini"
            //- )
              i.material-icons.icon close

          .modal-body
            slot(name="body")
          .modal-footer
            slot(name="footer")

</template>

<script>

export default {

  props: {
    titulo: {
      type: String,
      required: true,
    },
  },

  computed: {
    getColor() {
      if (this.colorCopy) {
        return `color: ${this.colorCopy}`;
      }
      return '';
    },
  },

  methods: {
    closeModal() {
      this.$emit('closeModal');
    },

    hover() {
      this.colorCopy = this.hoverColor;
    },

    leave() {
      this.colorCopy = this.cor;
    },
  },

};

</script>

<style scoped lang="scss">
  @import 'Styles/main.scss';
  .modal-mask {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    margin-top: 35vh;
  }

  .modal-container {
    width: 850px;
    padding: 20px;
    min-height: 200px;
    max-height: 84vh;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius:5px;
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .modal-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    overflow-y: auto;
    max-height: 70vh;
    flex-grow: 1;
  }

  .modal-footer {
    padding: 20px;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .title {
    margin: 0;
    font-size: 18px;
    color: $font-color;
    padding: 0 10px;
  }

  .btn {
    padding-right: 5px;
    color: $color-gray;

    .icon {
      font-size: 18px;
    }
  }
  .close{
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    overflow: hidden;
    &:hover {
      &::before, &::after {
        background: $color-primary;
      }
    }

    &::before, &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      margin-top: -1px;
      background: $color-secondary;
    }
    &::before {
      transform: rotate(45deg)
    }
    &::after {
      transform: rotate(-45deg);
    }
    &.rounded {
      &::before, &::after {
        border-radius: 5px;
      }
    }
  }
</style>