<template>
  <div class="singer-album">
    <scroll class="singer-album">
      <div>
        <ul>
          <li class="singer-album-item mt-3" v-for="(item, index) in singerContent" :key="index">
            <div class="album-pic">
              <img class="rounded" :src="item.albumpic" width="88px">
            </div>
            <div class="album-desc">
              <p class="album-desc-name">{{ item.albumname }}</p>
              <p class="album-desc-compony mt-2">{{ item.albumsinger }} · {{ item.albumadate }}</p>
              <p class="album-desc-time mt-2">{{ item.albumcompany }}</p>
            </div>
          </li>
        </ul>
        <div style="width: 100%; height: 4rem"></div>
      </div>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from '@/base/scroll'
export default {
  computed: {
    ...mapGetters([
      'singerContent'
    ])
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang="stylus">
.singer-album
 width: 100%
 height: 100%
 overflow: hidden
 ul
  margin: 0
  padding: 0
  list-style: none
 .singer-album-item
  position: relative
  display: flex
  border-bottom: 1px solid #ccc
  padding: 0.5rem 0
  &:after
   content: ""
   position: absolute
   top: 0
   right: 0
   width: 70%
   height: 1px
   border-top: 1px solid #ccc
  .album-pic
   width: 25%
   margin-left: 3%
  .album-desc
   width: 70%
   padding-left: 3%
   .album-desc-name
    margin: 0
    padding: 0
    font-size: 1.1rem
   .album-desc-compony
    margin: 0
    padding: 0
    font-size: 0.7rem
   .album-desc-time
    margin: 0
    padding: 0
    font-size: 0.7rem
</style>
