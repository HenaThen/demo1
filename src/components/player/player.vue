<template>
  <div class="player">
    <header class="player-header">
      <div @click="goBack" style="margin-left: 0.5rem">
        <img src="@/assets/back.png" width="30px" style="margin: 5px auto">
      </div>
      <div>
        <p class="song-name">{{song.songname}}</p>
      </div>
    </header>
    <div class="song-content">
      <div class="song-pic-box">
        <div class="cd">
          <img :src="imgsrc" width="100%">
        </div>
      </div>
      <div class="player-controls">
        <div class="icon" @click="Stop">
          <img src="./stop1.png" width="40px">
        </div>
        <div class="icon" @click="Switch">
          <img src="./play.png" width="40px" v-if="playstatus">
          <img src="./pause.png" width="40px" v-else>
        </div>
        <div class="icon" @click="Replay">
          <img src="./replay.png" width="40px">
        </div>
      </div>
      <audio style="display: none;" ref="audio" id="h5audio_media" height="0" width="0" preload controls="controls"></audio>
    </div>
  </div>
</template>

<script>
import {getSongVkey} from 'api/song'
import {mapGetters} from 'vuex'
let currVM
export default {
  name: 'player',
  computed: {
    ...mapGetters([
      'song'
    ]),
    imgsrc () {
      var src = `http://y.gtimg.cn/music/photo_new/T002R300x300M000${this.song.albummid}.jpg?max_age=2592000`
      return src
    }
  },
  data () {
    return {
      songsrc: null,
      audio: {},
      playstatus: true,
      duration: ''
    }
  },
  created () {
    currVM = this
    this._getSongVkey(this.song.songmid)
  },
  methods: {
    _getSongVkey (songmid) {
      this.songsrc = this.songmid
      getSongVkey(songmid).then((res) => {
        let src1 = `http://ws.stream.qqmusic.qq.com/${res.items[0].filename}?guid=664453904&vkey=${res.items[0].vkey}&uin=4859&fromtag=66`
        this.songsrc = src1
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    Switch () {
      console.log(this.audio.duration)
      if (this.audio.paused) {
        this.audio.play()
        this.playstatus = false
      } else {
        this.audio.pause()
        this.playstatus = true
      }
    },
    Replay () {
      this.audio.currentTime = 0
      this.audio.play()
      this.playstatus = false
    },
    Stop () {
      this.audio.currentTime = 0
      this.audio.pause()
      this.playstatus = true
    }
  },
  watch: {
    songsrc () {
      this.audio = this.$refs['audio']
      this.audio.src = this.songsrc
      this.audio.load()
      this.audio.addEventListener('ended', function () {
        currVM.playstatus = true
      }, false)
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.player
 position: fixed
 top: 0
 bottom: 0
 width: 100%
 z-index: 0
 &:before
  content: ''
  position: fixed
  top: 0
  bottom: 0
  width: 100%
  background-image: url("../../assets/bg-1.jpg")
  my-background()
  z-index: -10
 &:after
  content: ''
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background: $color-background-d
  z-index: -10
 .player-header
  box-shadow: 0 3px 6px rgba(255, 255, 255, .3)
  .song-name
   height: 36px
   line-height: 36px
   margin: 6px 1rem
   color: white
  div
   display: inline-block
 .song-content
  height: calc(100% - 48px)
  .song-pic-box
   height: 70%
   width: 100%
   padding: 25% 15%
   .cd
    width: 100%
    border: 2px solid white
    border-radius: 50%
    box-shadow: 0 0 0 1rem rgba(255, 255, 255, .3)
    img
     border-radius: 50%
 .player-controls
  display: flex
  position: fixed
  bottom: 2.5rem
  width: 100%
  .icon
   width: 33.33%
   text-align: center
</style>
