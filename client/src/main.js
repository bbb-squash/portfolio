import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

Vue.use(VueGtag, { config: { id: process.env.VUE_APP_GA_ID } })

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
