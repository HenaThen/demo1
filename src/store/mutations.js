import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_SINGER_CONTENT] (state, content) {
    state.singerContent = content
  }
}

export default mutations
