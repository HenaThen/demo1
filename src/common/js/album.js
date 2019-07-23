class Album {
  constructor ({id, mid, name, adate, company, singer, list, desc}) {
    this.albumid = id
    this.albummid = mid
    this.albumpic = `https://y.gtimg.cn/music/photo_new/T002R150x150M000${mid}.jpg?max_age=2592000`
    this.albumadate = adate
    this.albumname = name
    this.albumcompany = company
    this.albumsinger = singer
    this.albumlist = list
    this.albumdesc = desc
  }
}

export function createAlbum (albumData) {
  if (!albumData) {
    return
  }
  return new Album({
    id: albumData.id,
    mid: albumData.mid,
    name: albumData.name,
    adate: albumData.aDate,
    company: albumData.company,
    singer: albumData.singername,
    list: albumData.list,
    desc: albumData.desc
  })
}

// 根据专辑发布时间排序，并选择获取的指定数目的条数返回
export function albumSort (array, num) {
  if (!Array.isArray(array)) {
    console.log('传入参数不是数组')
    return
  }
  let res = array.sort((item1, item2) => {
    if (Date.parse(item1.data.aDate) > Date.parse(item2.data.aDate)) {
      return 1
    } else {
      return -1
    }
  }).reverse()
  if (num === null) num = res.length
  return res.slice(0, num)
}
