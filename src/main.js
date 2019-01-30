// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
// import BaiduMap from 'vue-baidu-map'
=======
import BaiduMap from 'vue-baidu-map'
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622

import '@/assets/iconfont/iconfont.css'

/**
 * baidu map引入
//  */
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: '0HA7GgOSLtSGtWTbLnkvRFpHW0sZax7x'
// })
<<<<<<< HEAD
=======
// Vue.config.productionTip = false
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622


/**
 * swiper引入
 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
import '../static/swiper/swiper-4.1.0.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

/**
 * 'axios'
 */
import axios from 'axios'
Vue.prototype.axios=axios;
<<<<<<< HEAD



=======
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
