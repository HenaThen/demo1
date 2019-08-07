<template>
  <div class="top-list">
    <div>
      <header class="top-list-header">
        <div style="margin-left: 0.5rem">
          <img @click="goBack" src="@/assets/back.png" width="30px" style="margin: 5px auto">
        </div>
        <div>
          {{topInfo.ListName}}
        </div>
      </header>
      <scroll class="top-list-content mt-3">
        <ul>
          <li @click="select(item)" class="top-list-item" v-for="(item, index) in songList" :key="index">
            <span>{{index + 1}}</span>
            <span>{{item.data.songname}}</span>
            <span>HOT {{item.in_count}}%</span>
          </li>
        </ul>
      </scroll>
    </div>
  </div>
</template>

<script>
import {getTopList} from 'api/toplist'
import Scroll from '@/base/scroll'
import {createSong} from 'common/js/song'
import {mapGetters, mapMutations} from 'vuex'
export default {
  components: {
    Scroll
  },
  computed: {
    ...mapGetters([
      'song'
    ])
  },
  created () {
    this._getTopList()
  },
  data () {
    return {
      songList: [],
      topInfo: []
    }
  },
  methods: {
    _getTopList () {
      getTopList().then((res) => {
        this.songList = res.songlist
        this.songList.forEach((item) => {
          let musicData = {
            songid: item.data.songid,
            songmid: item.data.songmid,
            songname: item.data.songname,
            albumid: item.data.albumid,
            albummid: item.data.albummid,
            albumname: item.data.albumname,
            albumdesc: '',
            singer: item.data.singer,
            interval: ''
          }
          item['in_count'] = item['in_count']
          item.data = createSong(musicData)
        })
        this.topInfo = res.topinfo
      })
    },
    goBack () {
      this.$router.push('/recommend')
    },
    select (song) {
      this.setSong(song.data)
      if (this.song === song.data) {
        this.$router.push('/player')
      }
    },
    ...mapMutations({
      setSong: 'setSong'
    })
  },
  watch: {
    songList () {
      // console.log(this.songList)
      this.songList.forEach((item) => {
        item.in_count = Math.floor(Number(item.in_count) * 100)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.top-list:before
 content: ""
 position: fixed
 top: 0
 bottom: 0
 width: 100%
 background-image: url("../../assets/bg-1.jpg")
 my-background()
 z-index: -2
.top-list:after
 content: ""
 position: fixed
 top: 0
 bottom: 0
 left: 0
 right: 0
 background: $color-background-d
 z-index: -1
.top-list
 position: fixed
 z-index: 33
 top: 0
 bottom: 0
 width: 100%
 .top-list-header
  box-shadow: 0 3px 6px rgba(255, 255, 255, .3)
  .title
   height: 36px
   line-height: 36px
   margin: 6px 1rem
   color: white
  div
   display: inline-block
 .top-list-content
  position: fixed
  top: 40px
  bottom: 0
  width: 100%
  overflow: hidden
  ul
   padding: 0 1rem
  .top-list-item
   margin: 0.5rem auto
   height: 2.5rem
   list-style: none
   overflow: hidden
</style>
