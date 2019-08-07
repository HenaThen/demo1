import axios from 'axios'
import {apiCommonParam} from 'api/config'
const debug = process.env.NODE_ENV !== 'production'
export function getSongVkey (songmid) {
  const url = debug ? '/api/songkey' : 'http://39.108.189.17/api/songkey'
  let data = Object.assign({}, apiCommonParam, {
    guid: 664453904,
    hostUin: 0,
    platform: 'h5',
    uin: 4859,
    needNewCode: 0,
    cid: 205361747,
    songmid: songmid,
    filename: `C400${songmid}.m4a`
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return res.data.data
  })
}
