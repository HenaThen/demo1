<template>
  <div :class="['singer']">
    <loading v-show="!getData"></loading>
    <scroll :getData="getData" class="singer-content">
      <div>
        <div v-for="(classify, index) in newSingerList" :key="index">
          <h5 :class="['group-title']">{{ classify.title }}</h5>
          <div @click="selectItem(item)" v-for="(item, index) in classify.list" :key="index" :class="['singer-item']">
            <div>
              <img :src="item.singer_pic" class="singer-img" width="88px">
              <span :class="['singer-name']">{{ item.singer_name }}</span>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import Loading from '@/base/loading'
import {newGetSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
import Scroll from '@/base/scroll'
import {mapMutations} from 'vuex'

export default {
  components: {
    Scroll,
    Loading
  },
  data () {
    return {
      newSingerList: [],
      getData: false
    }
  },
  mounted () {
    this._getNewSingerList()
  },
  methods: {
    selectItem: function (item) {
      this.$router.push({
        path: `/singer/${item.singer_id}`
      })
      this.setSinger(item)
    },
    _getNewSingerList: function () {
      newGetSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.newSingerList = this.processSingerList(res.data.singerlist)
        }
      })
    },
    processSingerList: function (list) {
      const HOT_NAME = '热门'
      const USA = '欧美'
      const JPKR = '日韩'
      const HKTW = '港台'
      const PRC = '内地'
      const OTHER = '其他'
      const HOT_LIST_LEN = 10
      const RegUSA = /加拿大|荷兰|澳大利亚|英国|美国/
      const RegJPKR = /日本|韩国/
      const RegHKTW = /香港|台湾/
      const RegPRC = /内地/

      let map = {
        HOT_NAME: {
          title: HOT_NAME,
          list: []
        },
        PRC: {
          title: PRC,
          list: []
        },
        HKTW: {
          title: HKTW,
          list: []
        },
        USA: {
          title: USA,
          list: []
        },
        JPKR: {
          title: JPKR,
          list: []
        },
        OTHER: {
          title: OTHER,
          list: []
        }
      }
      for (let k in list) {
        let item = list[k]
        if (item.country.match(RegUSA)) {
          map.USA.list.push(item)
        } else if (item.country.match(RegJPKR)) {
          map.JPKR.list.push(item)
        } else if (item.country.match(RegHKTW)) {
          map.HKTW.list.push(item)
        } else if (item.country.match(RegPRC)) {
          map.PRC.list.push(item)
        } else {
          map.OTHER.list.push(item)
        }

        if (k < HOT_LIST_LEN) {
          map.HOT_NAME.list.push(item)
        }
      }

      return map
    },
    ...mapMutations({
      setSinger: 'setSinger'
    })
  },
  watch: {
    newSingerList: function () {
      this.getData = true
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
@import "~common/stylus/variable"
.singer
 background: $color-background-d
 position: fixed
 width: 100%
 top: 74px
 bottom: 0
 .singer-content
  position: relative
  width: 100%
  height: 100%
  overflow: hidden
  .group-title
   padding: 0.5rem
   padding-left: 1rem
   background: $color-background-d
   color: $color-text-ll
  .singer-item
   padding: 0.7rem 1rem
   .singer-name
    margin-left: 0.9rem
    font-size: 1.1rem
    color: $color-text-ll
   .singer-img
    border-radius: 50%
</style>
