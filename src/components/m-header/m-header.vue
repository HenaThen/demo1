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
  </header>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      title: '万象枝桠'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "~common/stylus/variable"

 .m-header
  color: $color-whtie
  background: $color-red
  .tabs
   display: inline-block
</style>
