<template>
  <transition appear name="slide">
    <div class="singer-detail">
      <div class="singer-detail-header">
        <div class="header-nav mt-1">
          <img @click="goBackSingerList()" src="@/assets/back.png">
          <span class="ml-3">{{ singer.singer_name }}</span>
        </div>
        <div class="header-img mt-1">
          <img :src="singer.singer_pic" style="border-radius: 50%;">
        </div>
      </div>
      <div class="singer-detail-content">
        <div class="content-tabs">
          <div :class="['content-tabs-item', view === 'SingerSong' ? 'active' : '']" @click="handleChange($event)" data="SingerSong">热门</div>
          <div :class="['content-tabs-item', view === 'SingerAlbum' ? 'active' : '']" @click="handleChange($event)" data="SingerAlbum">专辑</div>
          <div :class="['content-tabs-item', view === 'SingerAudio' ? 'active' : '']" @click="handleChange($event)" data="SingerAudio">视频</div>
          <div :class="['content-tabs-item', view === 'SingerInfo' ? 'active' : '']" @click="handleChange($event)" data="SingerInfo">歌手信息</div>
        </div>
        <div class="content-box">
          <loading v-show="!getData"></loading>
          <transition name="component-fade" mode="out-in">
            <component v-bind:is="view"></component>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'
import Loading from '@/base/loading'
import {getSingerDetail} from 'api/singer'
import {getAlbumInfo, getAlbummid} from 'api/album'
import SingerSong from './singer-song'
import SingerAlbum from './singer-album'
import SingerAudio from './singer-audio'
import SingerInfo from './singer-info'
import {createSong} from 'common/js/song'
import {albumSort, createAlbum} from 'common/js/album'
export default {
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  components: {
    'SingerAudio': SingerAudio,
    'SingerSong': SingerSong,
    'SingerAlbum': SingerAlbum,
    'SingerInfo': SingerInfo,
    Loading
  },
  data () {
    return {
      singerDetailInfo: [],
      songList: [],
      albumList: [],
      view: false,
      getData: false, // 数据是否获取成功
      axiosView: false // 异步还未完成，保存选定的状态
    }
  },
  created () {
    if (!this.singer.singer_mid) {
      this.goBackSingerList()
      return
    }
    this._getSingerDetail(this.singer.singer_mid)
  },
  methods: {
    _getSingerDetail: function (singerMid) {
      getSingerDetail(singerMid).then((res) => {
        this.singerDetailInfo = res
      })
    },
    goBackSingerList: function () {
      this.$router.push('/singer')
    },
    handleChange: function (e) {
      let handle = e.target.getAttribute('data')
      if (handle === 'SingerSong') {
        this.view = handle
        this.setSingerContent(this.songList)
      } else if (handle === 'SingerAlbum') {
        if (this.albumList.length === 0) {
          this.view = false
          this.getData = false
          this.axiosView = 'SingerAlbum'
        } else {
          this.view = handle
          this.setSingerContent(this.albumList)
        }
      } else if (handle === 'SingerInfo') {
        this.view = handle
      } else if (handle === 'SingerAudio') {
        this.view = handle
      }
    },
    filterSongList: function (list) {
      let _songList = []
      list.forEach((item, index) => {
        let song = createSong(item.musicData)
        _songList.push(song)
      })
      return _songList
    },
    ...mapMutations({
      setSingerContent: 'setSingerContent'
    })
  },
  watch: {
    singerDetailInfo: function () {
      console.log(this.singerDetailInfo.list[0].musicData.url)
      this.songList = this.filterSongList(this.singerDetailInfo.list)
      this.view = 'SingerSong'
      this.setSingerContent(this.songList)
      let albumidList = getAlbummid(this.songList)
      let albumMap = []
      albumidList.forEach((item) => {
        albumMap.push(getAlbumInfo(item.albummid))
      })
      axios.all(albumMap).then((res) => {
        let map = res.filter((item) => {
          if (item) {
            return item
          }
        })
        albumSort(map, 10).forEach((item) => {
          this.albumList.push(createAlbum(item.data))
        })
      })
    },
    songList () {
      if (this.view === 'SingerSong') {
        this.getData = true
      }
    },
    albumList () {
      if (this.axiosView === 'SingerAlbum') {
        this.getData = true
        this.view = this.axiosView
        this.setSingerContent(this.albumList)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
@keyframes opacity-change
 0%
  opacity 0
 100%
  opacity 1

.singer-detail:before
 content: ""
 position: fixed
 top: 0
 bottom: 0
 width: 100%
 background-image: url("../../assets/bg-1.jpg")
 my-background()
 z-index: -2
.singer-detail:after
 content: ""
 position: fixed
 top: 0
 bottom: 0
 left: 0
 right: 0
 background: $color-background-d
 z-index: -1
.singer-detail
 position: fixed
 z-index: 33
 top: 0
 bottom: 0
 width: 100%
 .singer-detail-header
  .header-nav
   width: 100%
   height: 40px
   line-height: 40px
   color: white
   span
    height: 30px
    display: inline-block
    line-height: 30px
   img
    display: inline-block
    height: 30px
  .header-img
   text-align: center
   background: #fcfbfc
   padding: 20px
   img
    box-shadow: 3px 6px 10px #a1a1a1
 .singer-detail-content
  position: fixed
  top: 240px
  bottom: 0
  width: 100%
  .content-tabs
   display: flex
   .content-tabs-item
    width: 25%
    text-align: center
    height: 2rem
    line-height: 2rem
    color: rgba(255, 255, 255, .7)
   .active
    position: relative
    color: white
    background: rgba(0, 0, 0, 0.15)
    border-radius: 5px
   .active:before
    content: ""
    position: absolute
    left: 20%
    bottom: 1px
    width: 60%
    height: 1px
    animation: opacity-change 1.5s
    border-bottom: 2px solid #fff
  .content-box
   color: white
   margin-top: 0.8rem
   height: 100%
   width: 100%

.slide-enter-active, .slide-leave-active
 transition: all .5s

.slide-enter, .slide-leave-to
  transform: translateX(100%)

.component-fade-enter-active, .component-fade-leave-active
 transition: all .3s
.component-fade-enter, .component-fade-leave-to
 opacity: 0
 transform: translateX(100%)
</style>
