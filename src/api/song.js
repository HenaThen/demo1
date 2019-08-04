import axios from 'axios'
export function getSongVkey (songmid) {
  const url = '/app/song'
  const data = Object.assign({}, {
    g_tk: '1278911659',
    hostUin: 0,
    format: 'jsonp',
    callback: 'callback',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    cid: '205361747',
    uin: 0,
    songmid: songmid,
    filename: `C400${songmid}.m4a`,
    guid: '3655047200'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return res.data
  })
}
