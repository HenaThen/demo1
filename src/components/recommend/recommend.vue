<template>
    <div>
      <Slider :recommends="recommends"></Slider>
      <recommend-tabs></recommend-tabs>
      <song-list></song-list>
    </div>
</template>

<script>
import {getRecommend} from 'api/recommend'
import Slider from 'components/recommend/slider'
import RecommendTabs from 'components/recommend/recommend-tabs'
import SongList from 'components/recommend/song-list'

export default {
  components: {
    Slider,
    RecommendTabs,
    SongList
  },
  data () {
    return {
      recommends: []
    }
  },
  created () {
    this._getCommend()
  },
  mounted () {

  },
  methods: {
    _getCommend: function () {
      getRecommend().then((res) => {
        this.recommends = res.data.slider
      })
    }
  }
}
</script>
