import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
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

router.beforeEach((to,from,next)=>{
  if(to.path === "/"){
    next()
  }else{
    let token = localStorage.getItem("Token")
    if(token === "null" || token === ""){
      next("/")
    }else{
      next()
    }
  }
})

export default router;
