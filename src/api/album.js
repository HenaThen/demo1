import axios from 'axios'
import {ERR_OK} from 'api/config'

// 获取专辑ID
export function getAlbummid (array) {
  let map = []
  let _map = []
  array.forEach((item, index) => {
    let albumid = item.albumid
    if (!map[albumid]) {
      map[albumid] = {
        albumname: item.albumname,
        albummid: item.albummid,
        albumid: item.albumid
      }
    }
  })
  map.forEach((item) => {
    _map.push(item)
  })
  return _map
}

// 通过专辑ID获取专辑信息
export function getAlbumInfo (albummid) {
  const url = '/api/album'
  const data = Object.assign({}, {
    albummid: albummid
  })
  return axios(url, {
    params: data
  }).then((res) => {
    if (res.data.code === ERR_OK) {
      return res.data
    }
  })
}
