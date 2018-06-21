// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'css/reset.css'
import 'normalize.css'
import 'css/base.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import 'font-awesome/css/font-awesome.css'
import 'css/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
