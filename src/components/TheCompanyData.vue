<template lang="pug">
  .content
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      | Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      | nisi ut aliquip ex ea commodo consequat.
    form
      label COMPANY NAME
      input.input-normal(
        type="text"
        name="Company Name"
        v-model="name"
        v-validate="'required'"
        placeholder="e.g. Your Company Name"
        :class="{'input-error' : errors.has('Company Name')}"
      )
      p.msg-error(v-if="errors.has('Company Name')")
        | {{ errors.first('Company Name') }}

      label COMPANY SPEND
      input.input-normal(
        type="text"
        name="Company Spend"
        v-model="spend"
        v-validate="'required'"
        placeholder="e.g. $150,000"
        :class="{'input-error' : errors.has('Company Spend')}"
      )
      p.msg-error(v-if="errors.has('Company Spend')")
        | {{ errors.first('Company Spend') }}

      label COMPANY SPEND ABILITY
      .input-spend-ability
        input.input-spend-ability(
          type="text"
          name="Company Spend Ability"
          v-model="spendAbilityMin"
          v-validate="'required'"
          placeholder="e.g. $150,000 "
          :class="{'input-error' : errors.has('Company Spend Ability')}"
        )
        input.input-spend-ability(
          type="text"
          name="Company Spend Ability"
          v-model="spendAbilityMax"
          v-validate="'required'"
          placeholder=" $330,000"
          :class="{'input-error' : errors.has('Company Spend Ability')}"
        )
      p.msg-error(v-if="errors.has('Company Spend Ability')")
        | {{ errors.first('Company Spend Ability') }}

      label NOTES
      textarea(
        v-model="notes"
        id="notes" name="notes"
        rows="10"
        placeholder="e.g. Good Tech Company"
        @click="handleModalAdditionalNotes()"
      )
      app-modal(titulo="ADDITIONAL NOTES" v-if="showModalNotes")
        template(slot="body")
          textarea(
            v-model="notes"
            id="notes" name="notes"
            rows="10"
            placeholder="e.g. Good Tech Company"
            @click="handleModalAdditionalNotes()"
            @mouseEnter="handleModalAdditionalNotes()"
          )
        template(slot="footer")
          .btn-save
            button SAVE
</template>

<script>
import AppModal from '../components/shared/AppModal.vue'
export default {
  components: {
    AppModal,
  },
  computed: {
    companyData() {
      return this.$store.getters['companyData/getCompanyData'];
    },
    showModalNotes() {
      return this.$store.getters['companyData/getShowModalNotes'];
    },
    name: {
      get() {return this.companyData.name},
      set(name) {this.setCompanyDataField('name', name)},
    },
    spend: {
      get() {return this.companyData.spend},
      set(spend) {this.setCompanyDataField('spend', spend)},
    },
    spendAbilityMin: {
      get() {return this.companyData.spendAbilityMin},
      set(spendAbilityMin) {this.setCompanyDataField('spendAbilityMin', spendAbilityMin)},
    },
    spendAbilityMax: {
      get() {return this.companyData.spendAbilityMax},
      set(spendAbilityMax) {this.setCompanyDataField('spendAbilityMax', spendAbilityMax)},
    },
    notes: {
      get() {return this.companyData.notes},
      set(notes) {this.setCompanyDataField('notes', notes)},
    },
    modalNotesActive: {
      get() {return this.companyData.modalNotesActive},
      set(modalNotmodalNotesActivees) {this.setCompanyDataField('modalNotesActive', modalNotesActive)},
    },
  },
  methods: {
    handleModalAdditionalNotes() {
      if (!this.showModalNotes) {
        this.$store.commit(`companyData/CHANGE_MODAL_NOTES`,  true);
      }
    },
    setCompanyDataField(fieldName, fieldValue) {
      this.$store.commit(`companyData/SET_COMPANY_DATA`, { [fieldName]: fieldValue });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  .input-error {
    border: 1px solid $color-danger !important;
  }
  .msg-error {
    color: $color-danger !important;
  }
  .content {
    display: flex;
    flex-direction: column;
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
      label {
        padding: 10px 0;
      }
      .input-spend-ability {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: $font-color;
        border-radius:5px !important;
        border: 1px solid $color-secondary;
        -moz-border-radius:5px;
        -webkit-border-radius:5px;
        box-shadow: 2px 2px 10px $color-secondary;
        -moz-box-shadow: 2px 2px 10px $color-secondary;
        -webkit-box-shadow: 2px 2px 10px $color-secondary;
        background: $color-white;
        width: 50%;
        height: 50px;
        .input-min-max {
          border: none;
        }
        span {
          height: 50px;
        }
      }
      .input-normal {
        display: flex;
        flex-direction: row;
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
        width: 50%;
        height: 50px;
      }
      .input-normal:hover, textarea:hover {
        background: transparent;
        border:1px solid $color-primary;
      }
      textarea {
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
      .input-spend-ability {
        border-style: none !important;
        input {
          padding: 10px 15px;
          border: none;
          border-radius: 0;
        }
      }
      .btn-save {
        width: 100%;
        text-align: right;
        button {
          cursor: pointer;
          background: $color-primary;
          color: $color-light;
          height: 40px;
          width: 100px;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          &:hover {
            background: $color-secondary;
            color: $color-primary;
          }
        }
      }
    }
  }
</style>