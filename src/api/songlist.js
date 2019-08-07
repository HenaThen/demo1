import {apiCommonParam, ERR_OK} from 'api/config'
import axios from 'axios'
const debug = process.env.NODE_ENV !== 'production'
export function getSonglistDetail (id) {
  const url = debug ? '/api/songlistDetail' : 'http://localhost:9000/api/songlistDetail'
  const data = Object.assign({}, apiCommonParam, {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    picmid: 1,
    nosign: 1,
    song_begin: 0,
    song_num: 1000,
    needNewCode: 1,
    platform: 'h5',
    new_format: 1,
    pic: 500,
    disstid: id
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    if (res.data.code === ERR_OK) {
      return res.data
    }
  })
}
