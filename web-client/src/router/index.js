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
    },
    {
      path:"/nonsense",
      name:"nonsense",
      component:resolve=>require(["@/views/nonsense/nonsense"],resolve)
    },
    {
      path:"/person",
      name:"person",
      component:resolve=>require(["@/views/person/person"],resolve)
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(from.path === "/"){
    next()
  }else{
    let token = localStorage.getItem("WillMe_token")
    if(token === null || token === ""){
      next("/")
    }else{
      next()
    }
  }
})

export default router;
