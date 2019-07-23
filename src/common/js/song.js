export default class Song {
  // 构造
  constructor ({songid, songmid, songname, albumid, albummid, albumname, albumdesc, singer, interval}) {
    this.songid = songid
    this.songmid = songmid
    this.songname = songname
    this.albumid = albumid
    this.albummid = albummid
    this.albumname = albumname
    this.albumdesc = albumdesc
    this.singer = singer
    this.interval = interval
  }
}

export function createSong (musicData) {
  return new Song({
    songid: musicData.songid,
    songmid: musicData.songmid,
    songname: musicData.songname,
    albumid: musicData.albumid,
    albummid: musicData.albummid,
    albumname: musicData.albumname,
    albumdesc: musicData.albumdesc,
    singer: filterSinger(musicData.singer),
    interval: musicData.interval
  })
}

// 获得歌手名字的拼接
function filterSinger (array) {
  let name = ''
  array.forEach((item, index) => {
    if (index > 0) {
      name = name + ' · ' + item.name
    } else {
      name += item.name
    }
  })
  return name
}
