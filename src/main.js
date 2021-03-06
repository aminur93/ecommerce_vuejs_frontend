import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

//sweet alert import
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

//mixins import
import titleMixins from './mixins/titleMixins';
Vue.mixin(titleMixins);

//text editor
import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

Vue.config.productionTip = false;

store.dispatch('attempt', localStorage.getItem('token'));

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
