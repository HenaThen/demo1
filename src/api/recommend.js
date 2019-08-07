import axios from 'axios'
import {apiCommonParam} from 'api/config'
const debug = process.env.NODE_ENV !== 'production'
export function getRecommend () {
  const url = debug ? '/api/recommend' : 'http://localhost:9000/api/recommend'
  const data = Object.assign({}, apiCommonParam, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return res.data
  })
}
