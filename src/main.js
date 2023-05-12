import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import axios  from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
}).$mount('#app')
