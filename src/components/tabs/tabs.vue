/* eslint-enable */
<template>
  <div class="row mt-1 content-opts-nav">
    <router-link tag="div" class="col-4 text-center p-1" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="col-4 text-center p-1" to="/hot">
      <span>热门</span>
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
  box-shadow: 0px 1px 1px #ddd
  button
   border: none
   background: none
 .row
  margin: $margin-0
 &.router-link-active
  color: $color-red
</style>
