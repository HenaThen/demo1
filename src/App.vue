<template>
  <div id="app">
    <m-header></m-header>
    <Tabs></Tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tabs from 'components/tabs/tabs'

export default {
  components: {
    MHeader,
    Tabs
  }
}

</script>
