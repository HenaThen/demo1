<template>
  <div class="song-list">
    <scroll class="song-list">
      <div>
        <ul class="song-list-ul">
          <li class="song-list-item mt-3" v-for="(item, index) in singerContent" :key="index">
            <div class="index-1">{{ index }}</div>
            <div class="index-2">
              <p class="song-name">{{ item.songname }}</p>
              <p class="song-desc">{{ item.singer }} · {{ item.albumname }} · {{ item.albumdesc }}</p>
            </div>
            <div class="index-3">
              <img src="./play.png" width="44px">
            </div>
          </li>
        </ul>
        <div style="width: 100%; height: 4rem"></div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/base/scroll'
import {mapGetters} from 'vuex'
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
@import "~common/stylus/mixin"
.song-list
 width: 100%
 height: 100%
 overflow: hidden
.song-list-ul
 margin: 0 !important
 padding: 0 !important
 list-style: none
 .song-list-item
  position: relative
  display: flex
  font-size: 1.1rem
  &:after
   content: ''
   position: absolute
   bottom: -10px
   width: 100%
   height: 1px
   box-shadow: 0 1px 1px #ccc
  .index-1
   width: 10%
   text-align: center
   line-height: 44px
  .index-2
   width: 70%
   p
    margin: 0
   .song-desc
    no-wrap()
    font-size: 0.7rem
  .index-3
   width: 20%
   text-align: center
</style>
