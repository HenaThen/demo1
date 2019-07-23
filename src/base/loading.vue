<template>
  <div class="loading">
    <img src="./loading.gif">
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在加载中'
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
@import '~common/stylus/variable'

.loading
 position: absolute
 top: 0
 left: 0
 bottom: 0
 right: 0
 text-align: center
 img
  margin-top: 50%
 .title
  color: $color-text-l
  line-height: 20px
  font-size: 20px
</style>
