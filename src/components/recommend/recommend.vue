<template>
  <div class="recommend">
    <loading v-show="!getData"></loading>
    <scroll v-if="getData" class="recommend-content" :getData="getData">
      <div>
        <slider :recommendSlider="recommend.slider"></slider>
        <recommend-tabs></recommend-tabs>
        <song-list @select="showSongListDetail" :recommendSongList="recommend.songList"></song-list>
        <radio-list :recommendRadio="recommend.radioList"></radio-list>
        <m-footer></m-footer>
      </div>
    </scroll>
    <transition name="slide" appear>
      <router-view></router-view>
    </transition>
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
import songlistDetail from 'components/song-list/songlist-detail'
import RadioList from 'components/recommend/radio-list'
import {mapMutations} from 'vuex'
import TopList from 'components/top-list/top-list'

export default {
  components: {
    Slider,
    RecommendTabs,
    SongList,
    Scroll,
    RadioList,
    Loading,
    MFooter,
    songlistDetail,
    TopList
  },
  data () {
    return {
      recommend: [],
      getData: null,
      songList: [],
      listshow: false
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
    },
    showSongListDetail: function (data) {
      this.setSonglistId(data.id)
      this.$router.push({
        path: `/recommend/cdlist`
      })
    },
    ...mapMutations({
      setSonglistId: 'setSonglistId'
    })
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
  width: 100%
  color: $color-text-ll
  background: $color-background-d
  .recommend-content
   height: 100%
   overflow: hidden

.slide-enter-active, .slide-leave-active
 transition: all .5s

.slide-enter, .slide-leave-to
  transform: translateX(100%)
</style>
