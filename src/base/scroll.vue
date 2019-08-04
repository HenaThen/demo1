<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    getData: {
      type: Boolean,
      default: false
    }
  },
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
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType
      })
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
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
