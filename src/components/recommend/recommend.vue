<template>
  <div class="recommend">
    <scroll class="recommend-content" :getData="getData">
      <div>
        <slider :recommendSlider="recommend.slider"></slider>
        <recommend-tabs></recommend-tabs>
        <song-list></song-list>
        <radio-list :recommendRadio="recommend.radioList"></radio-list>
      </div>
    </scroll>
  </div>
</template>

<script>
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
    RadioList
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
  background: $color-theme-background = #f4f4f4
  .recommend-content
   height: 100%
   overflow: hidden
</style>
