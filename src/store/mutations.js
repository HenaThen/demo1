import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_SINGER_CONTENT] (state, content) {
    state.singerContent = content
  },
  [types.SET_SONGLIST_ID] (state, id) {
    state.songlistId = id
  },
  [types.SET_SONGMID] (state, mid) {
    state.song.mid = mid
  }
}

export default mutations
