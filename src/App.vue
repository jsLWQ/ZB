<template>
  <div>
    <div :key="isKey">
      8082{{isShow}}{{detailsObj.startTime}}{{new Date()}}
      <videoPlayer v-show="isShow" class="vjs-custom-skin videoPlayer" x-webkit-airplay playsinline webkit-playsinline :options="playerOptions"></videoPlayer>
      <div v-show="!isShow">老师离开{{detailsObj.startTime}}</div>
      <button>截图</button>
      <a href="http://www.adobe.com/go/getflashplayer" id="start_flash" rel="nofollow" target="_blank" title="升级Flash插件">启用flash</a>
      
    </div>
    <div class="div">
      <!-- <div v-for="(item,index) in arr" :key="index" class="div">{{item.name}}</div> -->
      <aA />
    </div>
  </div>
</template> 
<script>
import aA from './components/a'
import 'video.js/dist/video-js.css'
import {videoPlayer} from 'vue-video-player'

// hls 和 flash一起引入报错
import 'videojs-flash'

import "videojs-contrib-hls"

// ios
// import 'videojs-contrib-hls'
export default {
    props: {
    },
    data() {
      return {
        arr: [
          {
            name: 'hha '
          },
          {
            name: 'heihei'
          },
          {
            name: '789'
          },
          {
            name: '456'
          }
        ],
        isShow: false,
        isKey: 1,
        playerOptions: {
          height: '300',
          sources: [
            //  有进度条
            {
              src: "rtmp://58.200.131.2:1935/livetv/hunantv", //湖南台的直流地址
              type: 'rtmp/mp4',
            },
            //  // 无进度条  切换h5时显示
            {
              type: "application/x-mpegURL",
              src: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" //你的m3u8地址（必填） 
            }
          ],
         notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          techOrder: ['flash','html5'],
          autoplay: true,
          controls: true
        },
        detailsObj: {
          startTime: '2020-02-22 14:54:00' // YYYY/MM/DD HH:mm:ss
        }
//         playerOptions : {
//          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
//          autoplay: true, //如果true,浏览器准备好时开始回放。
//          muted: false, // 默认情况下将会消除任何音频。
//          loop: false, // 导致视频一结束就重新开始。
//          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
//          language: 'zh-CN',
//          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
//          techOrder: ['flash', 'html5'],      // 兼容顺序
//  　　　　flash: {
//            hls: { withCredentials: false },
//            swf: './static/media/video-js.swf'         // 引入静态文件swf
//          },
//          html5: { hls: { withCredentials: false } },
//          sources: [
//           { // 流配置，数组形式，会根据兼容顺序自动切换
//            type: 'rtmp/hls',
//            src: 'rtmp://192.168.1.199:10935/hls/stream_1'
//          }, {
//            withCredentials: false,
//            type: 'application/x-mpegURL',
//            src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8'
//          }],
//          poster: "", //你的封面地址
//          // width: document.documentElement.clientWidth,
//          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//          controlBar: {
//            timeDivider: true,
//            durationDisplay: true,
//            remainingTimeDisplay: false,
//            fullscreenToggle: true  //全屏按钮
//          }
//         }
//         playerOptions: {
// //        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
//           autoplay: false, //如果true,浏览器准备好时开始回放。
//           muted: false, // 默认情况下将会消除任何音频。
//           loop: false, // 导致视频一结束就重新开始。
//           preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
//           language: 'zh-CN',
//           aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
//           fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
//           // techOrder: ['flash', 'html5'],      // 兼容顺序
//     // 　　　　flash: {
//     //         hls: { withCredentials: false },
//     //         swf: './static/media/video-js.swf'         // 引入静态文件swf
//     //       },
//     //       html5: { hls: { withCredentials: false } },
//           sources: [{
//             type: "application/x-mpegURL",
//             src: "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8" //你的m3u8地址（必填）
//           }],
//           poster: "poster.jpg", //你的封面地址
//           width: document.documentElement.clientWidth,
//           // notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//           // controlBar: {
//           //   timeDivider: true,
//           //   durationDisplay: true,
//           //   remainingTimeDisplay: false,
//           //   fullscreenToggle: true  //全屏按钮
//           // }
//         }
      }
    },
    computed: {
    },
    created() {
      this.goToClass()
    },
    mounted() {
    },
    watch: {
    },
    methods: {
    // 倒计时
      goToClass () {
        console.log(this.detailsObj.startTime)
        if(!this.detailsObj.startTime) return;
        // 上课
        this.detailsObj.startTime = this.detailsObj.startTime.replace(/-/g,"/")
        let time = this.sumAge(this.detailsObj.startTime)
        console.log(time)
        if(time>0) {
          this.isShow = false
          clearTimeout(this.setTimeId)
          // 定时器，如果超出直播时间，就提示
          this.setTimeId = setTimeout(() => {
            this.isShow = true
            this.isKey++
          },time)
        }else if(time<=0) {
          this.isShow = true
          this.isKey++
        }
        console.log(this.isShow)
      },
      // 计算指定时间与当前的时间差
      sumAge(data){
        var nowtime = new Date(),  //获取当前时间
        endtime = new Date(data);  //定义结束时间
        var lefttime = endtime.getTime() - nowtime.getTime()  //距离结束时间的毫秒数
        return lefttime
      },
    },
    components: {
      videoPlayer,
      aA
    },
};
</script>
<style lang="sass" scoped>
// .div {
//   color: green;
// }
// .div{
//   display: inline-block;
//   border: 1px solid #000;
//   text-align: center;
//   width: 19%;
//   padding-top: 4px;
//   padding-bottom: 4px;
//   font-size: 14px;
//   display: flex;
//   margin-left: -1px;
// }
</style>
