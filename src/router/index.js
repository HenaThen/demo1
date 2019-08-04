import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Radio from 'components/radio/radio'
import Player from 'components/player/player'
import SingerDetail from 'components/singer-detail/singer-detail'
import SonglistDetail from 'components/song-list/songlist-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: SonglistDetail
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/radio',
      component: Radio
    },
    {
      path: '/player',
      component: Player
    }
  ]
})
