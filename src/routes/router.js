import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import TheCompanyPage from '../components/TheCompanyPage.vue';
import TheCompanyData from '../components/TheCompanyData.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'the-company-page',
      component: TheCompanyPage,
      meta: {
        menu: 'the-company-page',
      },
    },
    {
      path: '/the-company-data',
      name: 'the-company-data',
      component: TheCompanyData,
      meta: {
        menu: 'the-company-data',
      },
    },
  ]
});
