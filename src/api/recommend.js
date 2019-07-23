import axios from 'axios'
import {apiCommonParam} from 'api/config'

export function getRecommend () {
  const url = '/api/recommend'
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
