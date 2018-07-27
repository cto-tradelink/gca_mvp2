// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$http.defaults.xsrfCookieName = 'csrftoken';
Vue.prototype.$http.defaults.xsrfHeaderName = 'X-CSRFToken';


Vue.prototype.baseURI = "http://13.209.21.165"


//Vue.prototype.baseURI = "http://127.0.0.1:890"
Vue.prototype.HOST = "http://gconnect.kr"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
