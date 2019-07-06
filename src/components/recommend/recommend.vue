<template>
    <div>
      <Slider :recommends="recommends"></Slider>
      <recommend-tabs></recommend-tabs>
    </div>
</template>

<script>
import {getRecommend} from 'api/recommend'
import Slider from 'components/recommend/slider'
import RecommendTabs from 'components/recommend/recommend-tabs'

export default {
  components: {
    Slider,
    RecommendTabs
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
