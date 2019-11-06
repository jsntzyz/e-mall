import Vue from 'vue'
import App from './App.vue'
import router from './router(路由)/index'
import store from './store(状态管理)/indexStore'

Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


