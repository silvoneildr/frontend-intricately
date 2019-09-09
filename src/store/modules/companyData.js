import { SET_COMPANY_DATA, CHANGE_MODAL_NOTES } from '../mutation-types';

const state = {
  companyData: {
    name: '',
    spend: null,
    spendAbilityMin: null,
    spendAbilityMax: null,
    notes: '',
  },
  showModalNotes: false
};

const getters = {
  getCompanyData: state => state.companyData,
  getShowModalNotes: state => state.showModalNotes
};

const mutations = {
  [SET_COMPANY_DATA](state, companyData) {
    Object.assign(state.companyData, companyData);
  },
  [CHANGE_MODAL_NOTES](state, showModalNotes) {
    state.showModalNotes = showModalNotes;
  },
};

const atcions = { }

export default {
  namespaced: true,
  mutations,
  getters,
  atcions,
  state,
};