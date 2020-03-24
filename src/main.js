import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './style/index.css' // 禁用进度条

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css' // 引入样式
import 'vue-video-player/src/custom-theme.css' // 引入样式
import 'videojs-flash'

Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
