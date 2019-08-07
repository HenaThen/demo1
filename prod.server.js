var express = require('express')
const data = require('./build/data')
var config = require('./config/index')
var axios = require('axios')
// 请求server
const app = express()
app.use(express.static('./dist'))
const apiRoutes = express.Router()
// 通过路由请求数据
app.use('/api', apiRoutes)
app.get('/api/recommendTaps', (req, res) => {
  res.json({
    code: 0,
    tabsData: data
  })
})
app.get('/api/recommend', (req, res) => {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/m/index.html',
      origin: 'https://y.qq.com'
    },
    param: req.query
  }).then((response) => {
    res.json(response.data)
  })
})
app.get('/api/singerDetail', (req, res) => {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  })
})
app.get('/api/songlistDetail', (req, res) => {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/portal/playlist.html'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  })
})
app.get('/api/toplist', (req, res) => {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/',
      origin: 'https://y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  })
})
app.get('/api/singerList', (req, res) => {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com',
      host: 'u.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  })
})
app.get('/api/songkey', (req, res) => {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/',
      origin: 'https://y.qq.com'
    },
     params: req.query
   }).then((response) => {
     res.json(response.data)
   })
})
app.get('/api/album', (req, res) => {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com',
      host: 'c.y.qq.com'
    },
     params: req.query
  }).then((response) => {
    res.json(response.data)
  })
})
var port = 9000
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listen at http://localhost:' + port)
})