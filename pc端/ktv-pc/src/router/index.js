import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/',
    name: 'Index',
    component: index
  }
]

const router = new VueRouter({
  routes
})

export default router
