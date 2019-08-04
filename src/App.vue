<template>
  <div id="app">
    <div class="content-view">
      <m-header></m-header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'

export default {
  components: {
    MHeader
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.content-view
 position: fixed
 top: 0
 left: 0
 right: 0
 bottom: 0
 background-image: url("./assets/bg-1.jpg")
 my-background()
 z-index: 2
</style>
