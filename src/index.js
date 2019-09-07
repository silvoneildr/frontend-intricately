import Vue from 'vue';
import App from 'Components/App.vue';

import 'Styles/main.scss';

new Vue({
  render: createElement => createElement(App),
  el: '#app'
});
