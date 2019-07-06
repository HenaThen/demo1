import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Hot from 'components/hot/hot'
import Radio from 'components/radio/radio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/hot',
      component: Hot
    },
    {
      path: '/radio',
      component: Radio
    }
  ]
})
