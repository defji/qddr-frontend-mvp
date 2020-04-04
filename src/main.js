import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import VeeValidate from 'vee-validate'
import VeeValidateLaravel from 'vee-validate-laravel'
import hu from 'vee-validate/dist/locale/hu'

Vue.config.productionTip = false

Vue.use(VeeValidate, {
  events: '',
  locale: document.documentElement.lang,
  dictionary: {
    hu: {
      messages: hu.messages,
      attributes: hu.attributes
    },
//        de: {messages: de.messages, attributes: de.attributes}
  }
})
Vue.use(VeeValidateLaravel)

new Vue({
  router,
  store,

  created () {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      this.$store.commit('setUserData', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')
