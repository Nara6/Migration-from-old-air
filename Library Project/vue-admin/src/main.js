import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.$cookies.config('1d')

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
