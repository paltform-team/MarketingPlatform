import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import map from '@/components/map'
import combinationMarketing from '@/components/combinationMarketing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/combinationMarketing',
      children:[
        {
          path: 'combinationMarketing',
          name: 'combinationMarketing',
          component: combinationMarketing
        },
        {
          path: 'map',
          name: 'map',
          component: map
        },
      ]
    },
  ]
})
