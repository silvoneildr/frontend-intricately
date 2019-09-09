import { SET_COMPANY_DATA, CHANGE_MODAL_STATE } from '../mutation-types';

const state = {
  companyData: {
    name: '',
    spend: 0.0,
    spendAbility: 0.0,
    notes: '',
    modalNotesActive: false
  }
};

const getters = {
  getCompanyData: state => state.companyData,
};

const mutations = {
  [SET_COMPANY_DATA](state, companyData) {
    Object.assign(state.companyData, companyData);
  },
};

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};