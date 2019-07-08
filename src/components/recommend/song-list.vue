<template>
  <div class="mt-1">
    <div class="song-list" v-if="songList.length">
      <div class="song-list-title mt-1">推荐歌单</div>
      <div v-for="(item, index) in songList" :key="index" class="song-list-item">
        <div>
          <img :src="item.picUrl" width="100%">
          <span>{{ item.accessnum }}</span>
          <p class="song-list-desc"> {{item.songListDesc}} </p>
          <p> {{item.songListAuthor}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import {getRecommend2} from 'api/recommend'
export default {
  data () {
    return {
      songList: []
    }
  },
  mounted () {
    this._getSongList()
  },
  methods: {
    _getSongList: function () {
      getRecommend2().then((res) => {
        if (res.code === 0) {
          this.songList = res.data.songList
        }
        this.changeAccessNum()
      })
    },
    changeAccessNum: function () {
      this.songList.forEach(function (item) {
        var _accessnum = 0
        _accessnum = item.accessnum / 10000
        if (_accessnum > 1) {
          _accessnum = _accessnum.toFixed(1)
          item.accessnum = _accessnum
        }
        item.accessnum = item.accessnum + '万'
      })
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import '~common/stylus/variable'
  .song-list
   border-top:1px solid #ddd
   .song-list-title
    margin-left: 1.75%
   .song-list-item
    position: relative
    background: $color-sub-theme
    min-width: 0
    display: inline-flex
    width: 31%
    margin-left: 1.75%
    margin-top: 1.75%
    span
     position: absolute
     top: 0.2rem
     right: 0.2rem
     color: $color-sub-theme
     font-size: 0.8rem
    div
     min-width: 0
     img
      max-width: 300px
      border-radius: 0.3rem
     p
      font-size: 0.85rem
      margin: 0
      padding: 0 0.3rem
      overflow: hidden;
      width: 100%
      white-space: nowrap;
      text-overflow: ellipsis;
     .song-list-desc
      margin-top: 0.3rem
</style>
