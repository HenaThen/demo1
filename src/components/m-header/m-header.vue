<template>
  <header class="m-header">
    <nav class="navbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">管理</li>
      </ul>
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">{{ title }}</li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">搜索</li>
      </ul>
    </nav>
    <tabs></tabs>
  </header>
</template>

<script>
import Tabs from 'components/m-header/tabs'
export default {
  data () {
    return {
      title: '万象枝桠'
    }
  },
  components: {
    Tabs
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "~common/stylus/variable"
 .m-header
  width: 100%
  color: $color-whtie
  background: $color-background-d
  .tabs
   display: inline-block
</style>
