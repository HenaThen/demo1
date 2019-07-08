<template>
  <div class="mt-1">
    <div class="radio-list">
      <div class="radio-list-title mt-1">万象电台</div>
      <div class="radio-list-content mt-1">
        <div class="radio-list-item" v-for="(item, index) in recommendRadio" :key="index">
          <div>
            <img :src="item.picUrl" width="100%">
            <p class="mt-1"> {{ item.Ftitle}} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['recommendRadio']
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "~common/stylus/variable"
 .radio-list
  border-top: 1px solid #ccc
  margin: 0 1.75%
  .radio-list-content
   display: flex
   .radio-list-item
    width: 47.5%
    display: inline-flex
    div
     background: $color-whtie
     box-shadow: 1px 1px 3px #ccc
    img
     border-radius: 0.3rem
    p
     margin: 0
     margin-bottom: 0.5rem
     padding: 0.3rem
   .radio-list-item:nth-of-type(2)
    margin-left: 5%
</style>
