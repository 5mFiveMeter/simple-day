import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: resolve => require(["@/views/login/login"],resolve)
    },
    {
      path:"/home",
      name:"Home",
      component:resolve=>require(["@/views/home/home"],resolve)
    }
  ]
})
