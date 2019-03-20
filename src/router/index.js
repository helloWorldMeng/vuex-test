import Vue from 'vue'
import Router from 'vue-router'
import productList from '@/views/productList'
import product1 from '@/views/product1'
import product2 from '@/views/product2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/productList',
      component: productList
    }, {
      path: '/product1',
      component: product1
    }, {
      path: '/product2',
      component: product2
    }
  ]
})
