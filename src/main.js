import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Http from 'esc-ui/lib/http'
import 'tcon'
import urlMap from './views-template'

Vue.config.productionTip = false
Vue.prototype.$http = new Http({
  // baseUrl: 'http://app.e.uban360.net',
  urlMap: {
    ...(urlMap || {})
  },
  beforeThen (data, attaches) {
    console.log(data, attaches)
    return data
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
