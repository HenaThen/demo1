<template>
  <div class="row action mt-1">
    <div class="col-3 text-center divxx" v-for="(item, index) in tabsData" :key="index" @click="action(item.action)">
      <div class="yuan p-1 mx-auto">
        <img :src="item.picUrl" width="65%" class="mx-auto">
      </div>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
  data () {
    return {
      tabsData: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData: function () {
      const url = '/api/recommendTaps'
      axios.get(url).then((res) => {
        if (res.data.code === 0) {
          this.tabsData = res.data.tabsData.tabsData
          this.tabsData.forEach(function (item) {
            item.picUrl = require('@/assets' + item.picUrl)
          })
        }
      })
    },
    action: function (action) {
      if (action !== 'none') {
        this.$router.push(`recommend/${action}`)
      } else {
        alert('暂未开放')
      }
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet">
 @import "~common/stylus/variable"
 .action
  font-size: 0.9rem
  .row
   margin: $margin-0
  .divxx
   height: 0
   padding:0 0 25% 0
   overflow: hidden
   .yuan
    border: 2px solid rgba(255, 255, 255, 0.9);
    width: 3.5rem
    height: 3.5rem
    border-radius: 50%
  img
   display: block;
   margin-top: 0.5rem
  span
   margin-top: 0.5rem
   display: block
</style>
