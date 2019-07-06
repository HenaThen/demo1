<template>
  <div class="row action mt-1">
    <div class="col-3 text-center divxx" v-for="(item, index) in tabsData" :key="index">
      <div class="yuan p-1 mx-auto">
        <img :src="item.picUrl" width="65%" class="mx-auto">
      </div>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      tabsData: [
        {name: '私人FM', picUrl: require('@/assets/1.png')},
        {name: '每日推荐', picUrl: require('@/assets/2.png')},
        {name: '歌单', picUrl: require('@/assets/3.png')},
        {name: '排行榜', picUrl: require('@/assets/4.png')}
      ]
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
    border: 2px solid #707070;
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
