// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'

import '@/assets/iconfont/iconfont.css'

/**
 * baidu map引入
//  */
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: '0HA7GgOSLtSGtWTbLnkvRFpHW0sZax7x'
// })
// Vue.config.productionTip = false


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
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
