// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(MuseUI)
Vue.use(ElementUI)
Vue.use(VueLazyload)

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})
