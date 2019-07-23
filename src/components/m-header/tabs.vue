/* eslint-enable */
<template>
  <div class="row content-opts-nav">
    <router-link tag="div" class="col-4 text-center p-1" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="col-4 text-center p-1" to="/singer">
      <span>歌手</span>
    </router-link>
    <router-link tag="div" class="col-4 text-center p-1" to="/radio">
      <span>电台</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped="" lang="stylus" rel="stylesheet/stylue">
 @import "~common/stylus/variable"
 .content-opts-nav
  div
   box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.5)
 .row
  margin: $margin-0
 &.router-link-active
  color: $color-red
  border-bottom: 2px solid $color-red
</style>
