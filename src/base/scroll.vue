<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      changeValue: 0,
      scroll: {}
    }
  },
  mounted () {
    setTimeout(() => {
      this.changeValue = 1
      if (this.changeValue === 1) {
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    }, 20)
  },
  methods: {
    _initScroll: function () {
      this.srcoll = new BScroll(this.$refs.wrapper, {
        probeType: 1
      })
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    getData () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>
