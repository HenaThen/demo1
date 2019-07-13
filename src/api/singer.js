import axios from 'axios'
import {apiCommonParam, ERR_OK} from 'api/config'

// 旧的歌手数据接口
export function getSingerList () {
  let data = Object.assign({}, apiCommonParam, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })
  const url = '/api/singerList'
  return axios.get(url, {
    params: data
  }).then((res) => {
    return res.data
  })
}

// 新的歌手数据接口
export function newGetSingerList () {
  let data = Object.assign({}, apiCommonParam, {
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: JSON.stringify({
      'comm': {
        'ct': 24,
        'cv': 0
      },
      'singerList': {
        'module': 'Music.SingerListServer',
        'method': 'get_singer_list',
        'param': {
          'area': -100,
          'sex': -100,
          'genre': -100,
          'index': -100,
          'sin': 0,
          'cur_page': 1
        }
      }
    })
  })
  const url = '/api/test'
  return axios.get(url, {
    params: data
  }).then((res) => {
    if (res.data.code === ERR_OK) {
      return res.data.singerList
    }
  })
}
