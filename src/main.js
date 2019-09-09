import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMask from 'v-mask'

import App from './App.vue';
import router from './routes/router.js';
import store from './store';

import 'Styles/main.scss';

Vue.use(VeeValidate);
Vue.use(VueMask);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
