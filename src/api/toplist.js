import axios from 'axios'
import {apiCommonParam, ERR_OK} from 'api/config'
const debug = process.env.NODE_ENV !== 'production'
export function getTopList () {
  const url = debug ? '/api/toplist' : 'http://39.108.189.17/api/toplist'
  const data = Object.assign({}, apiCommonParam, {
    platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: 4
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    if (res.data.code === ERR_OK) {
      return res.data
    }
  })
}
