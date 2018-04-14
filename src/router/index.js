import Vue from 'vue'
import Router from 'vue-router'
import checkAll from '@/components/checkAll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'checkAll',
      component: checkAll
    }
  ]
})
