<template>
  <div class="song-list">
    <div class="song-list-header">
      <div class="back" @click="goBack" style="text-align: center">
        <img src="@/assets/back.png" width="36px" style="margin: 6px auto">
      </div>
      <div class="desc">
        <h5>歌单</h5>
        <div class="s-font">{{ songList.desc }}</div>
      </div>
    </div>
    <div class="song-list-content" :class="[isShadow ? 'list-shadow' : '']">
      <div class="cdlist-card" ref="cd-card" style="transform: translateY(0);">
        <div class="img-box">
          <img :src="songList.logo" width="100%">
        </div>
        <div class="desc-box">
          <h4 class="desc-box-title">{{songList.dissname}}</h4>
          <p class="desc-box-nickname">{{songList.nickname}}</p>
        </div>
      </div>
      <scroll ref="scroll" :getData="getData" :listenScroll="listenScroll" :probeType="probeType" @scroll="myScroll">
        <ul class="cdlist-list">
          <li @click="select(item)" class="cdlist-item" v-for="(item, index) in songList.songlist" :key="index">
            <p class="song-name">{{item.songname}}</p>
            <p class="singer-name">{{item.singer}}</p>
          </li>
        </ul>
      </scroll>
      <loading v-show="!getData"></loading>
    </div>
  </div>
</template>

<script>
import Loading from '@/base/loading'
import Scroll from '@/base/scroll'
import {mapGetters, mapMutations} from 'vuex'
import {getSonglistDetail} from 'api/songlist'
import {createSong} from 'common/js/song'
export default {
  components: {
    Loading,
    Scroll
  },
  computed: {
    ...mapGetters([
      'songlistId',
      'song'
    ])
  },
  data () {
    return {
      songList: [],
      getData: false,
      probeType: 3,
      listenScroll: true,
      isShadow: false
    }
  },
  created () {
    if (typeof (this.songlistId) !== 'string') {
      this.goBack()
      return
    }
    this._getSonglistDetail(this.songlistId)
  },
  methods: {
    goBack: function () {
      this.$router.push('/recommend')
    },
    _getSonglistDetail: function (songlistId) {
      getSonglistDetail(songlistId).then((res) => {
        this.songList = res.cdlist[0]
        setTimeout(() => {
          this.setScrollHeight()
        })
        let map = []
        this.songList.songlist.forEach((item) => {
          var musicData = {
            songid: item.id,
            songmid: item.mid,
            songname: item.name,
            albumid: item.album.id,
            albummid: item.album.mid,
            albumname: item.album.name,
            albumdesc: '',
            singer: item.singer,
            interval: ''
          }
          map.push(createSong(musicData))
        })
        this.songList.songlist = map
        console.log(this.songList)
        // console.log(this.songList)
      })
    },
    myScroll (e) {
      if (e.y > -170) {
        this.isShadow = false
      } else {
        this.isShadow = true
      }
      this.$refs['cd-card'].style.transform = `translateY(${e.y}px)`
    },
    setScrollHeight () {
      var redunceH = this.$refs['cd-card'].offsetHeight + document.getElementsByClassName('song-list-header')[0].offsetHeight
      var initH = this.$refs['scroll'].$refs.wrapper.parentNode.offsetHeight
      redunceH += 50
      var finalH = initH - redunceH
      this.$refs['scroll'].$refs.wrapper.style.height = finalH + 'px'
    },
    select (song) {
      this.setSong(song)
      if (song === this.song) {
        this.$router.push('/player')
      }
    },
    ...mapMutations({
      setSong: 'setSong'
    })
  },
  watch: {
    songList: function () {
      this.getData = true
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

.list-shadow
 box-shadow: 0 -3px 6px rgba(255, 255, 255, 0.3)
.song-list
 position: fixed
 z-index: 33
 top: 0
 bottom: 0
 width: 100%
 &:before
  content: ""
  position: fixed
  top: 0
  bottom: 0
  width: 100%
  background-image: url("../../assets/bg-1.jpg")
  my-background()
  z-index: -10
 &:after
  content: ""
  position: fixed
  top: 0
  bottom: 0
  width: 100%
  background: $color-background-d
  z-index: -2
 .song-list-header
  display: flex
  width: 100%
  height: 48px
  margin-top: 5px
  .back
   width: 15%
   height: 100%
  .desc
   margin-left: 0.5rem
   width: 60%
   height: 100%
   .s-font
    width: 100%
    no-wrap()
    font-size: 0.7rem
 .song-list-content
  margin-top: 15px
  width: 100%
  height: 100%
  overflow: hidden
  .cdlist-card
   padding: 1rem
   display: flex
   position: relative
   &:before
    content: ''
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    box-shadow: 0 3px 6px rgba(255, 255, 255, 0.3)
    z-index: 0
   .img-box
    width: 40%
    img
     border-radius: 5px
   .desc-box
    position: relative
    margin-left: 0.5rem
    margin-top: 0.5rem
    width: 60%
    .desc-box-title
     font-size: 1.4rem
    .desc-box-nickname
     position: absolute
     bottom: 5px
     width: 100%
     font-size: 1.2rem
     margin: 0
     no-wrap()
  .cdlist-list
   padding: 0 1rem
  .cdlist-item
   width 80%
   height: 40px
   margin-top: 1rem
   list-style: none
   .song-name
    font-size: 1rem
   .singer-name
    font-size: 0.75rem
    color: #ccc
   p
    margin: 0
    no-wrap()
</style>
