import axios from 'axios'
import {apiCommonParam, ERR_OK} from 'api/config'
const debug = process.env.NODE_ENV !== 'production'
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
  const url = debug ? '/api/singerList' : 'http://39.108.189.17/api/singerList'
  return axios.get(url, {
    params: data
  }).then((res) => {
    if (res.data.code === ERR_OK) {
      return res.data.singerList
    }
  })
}

// 获取歌手详情
export function getSingerDetail (singerMid) {
  const url = '/api/singerDetail'
  const url = debug ? '/api/singerDetail' : 'http://39.108.189.17/api/singerDetail'
  const data = Object.assign({}, apiCommonParam, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerMid
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    if (res.data.code === ERR_OK) {
      return res.data.data
    }
  })
}
