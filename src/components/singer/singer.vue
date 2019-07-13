<template>
  <div>
    <div v-for="(classify, index) in singerList" :key="index">
      <h4>{{ classify.title }}</h4>
      <div v-for="(item, index) in classify.list" :key="index">
        {{ item.name}}
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import {getSingerList, newGetSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
import Singer from 'common/js/singer'

const HOT_NAME = '热门'
const HOT_LIST_LEN = 10
const SPECIAL_NAME = '*'

export default {
  data () {
    return {
      singerList: [],
      newSingerList: []
    }
  },
  mounted () {
    this._getSingerList()
    this._getNewSingerList()
  },
  methods: {
    _getSingerList: function () {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singerList = this.processSingerList(res.data.list)
        }
      })
    },
    _getNewSingerList: function () {
      newGetSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.newSingerList = res.data
          console.log(this.newSingerList)
        }
      })
    },
    processSingerList: function (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          list: []
        },
        special: {
          title: SPECIAL_NAME,
          list: []
        }
      }

      list.forEach((item, index) => {
        if (index < HOT_LIST_LEN) {
          map.hot.list.push(new Singer(item.Fsinger_id, item.Fsinger_name, item.Fsinger_mid))
        }

        if (!map[item.Findex]) {
          if (!item.Findex.match(/[0-9]/)) {
            map[item.Findex] = {
              title: item.Findex,
              list: []
            }
          }
        }

        if (item.Findex.match(/[0-9]/)) {
          map.special.list.push(new Singer(item.Fsinger_id, item.Fsinger_name, item.Fsinger_mid))
        } else {
          map[item.Findex].list.push(new Singer(item.Fsinger_id, item.Fsinger_name, item.Fsinger_mid))
        }
      })

      let hot = []
      let common = []
      let special = []
      for (let k in map) {
        let item = map[k]
        if (item.title === HOT_NAME) {
          hot.push(item)
        } else if (item.title.match(/[a-zA-Z]/)) {
          common.push(item)
        } else {
          special.push(item)
        }
      }
      common.sort((a, b) => {
        if (a.title.charCodeAt(0) > b.title.charCodeAt(0)) {
          return 1
        } else {
          return -1
        }
      })
      return hot.concat(common, special)
    }
  },
  watch: {
    singerList: function () {
      console.log(this.singerList)
    }
  }
}
</script>
