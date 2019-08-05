import Vue from 'vue';
import App from './views/app/app.vue';
import router from './routes';
import {store} from './store';
import axios from 'axios';


window.Bus=new Vue;
window.axios=axios;

window.token= localStorage.getItem('token');
window.user= localStorage.getItem('user');
window.baseURL = 'https://reqres.in/api'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render(h) {
    return h(App)
  },
});
