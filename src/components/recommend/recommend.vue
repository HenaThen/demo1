<template>
  <div class="recommend">
    <loading v-show="!getData"></loading>
    <scroll v-if="getData" class="recommend-content" :getData="getData">
      <div>
        <slider :recommendSlider="recommend.slider"></slider>
        <recommend-tabs></recommend-tabs>
        <song-list :recommendSongList="recommend.songList"></song-list>
        <radio-list :recommendRadio="recommend.radioList"></radio-list>
        <m-footer></m-footer>
      </div>
    </scroll>
  </div>
</template>

<script>
import MFooter from '@/base/m-footer'
import Loading from '@/base/loading'
import {getRecommend} from 'api/recommend'
import Scroll from '@/base/scroll'
import Slider from 'components/recommend/slider'
import RecommendTabs from 'components/recommend/recommend-tabs'
import SongList from 'components/recommend/song-list'
import RadioList from 'components/recommend/radio-list'

export default {
  components: {
    Slider,
    RecommendTabs,
    SongList,
    Scroll,
    RadioList,
    Loading,
    MFooter
  },
  data () {
    return {
      recommend: [],
      getData: null
    }
  },
  created () {
    this._getCommend()
  },
  methods: {
    _getCommend: function () {
      getRecommend().then((res) => {
        this.recommend = res.data
      })
    }
  },
  watch: {
    recommend () {
      this.getData = true
      console.log(this.recommend)
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
 @import '~common/stylus/variable'
 .recommend
  position: fixed
  top: 74px
  bottom: 0
  width: 100%
  color: $color-text-ll
  background: $color-background-d
  .recommend-content
   height: 100%
   overflow: hidden
</style>
