// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index"

import axios from "axios"

//初始化样式
import "./public/reset.css"
//引入rem
import "./public/rem.js"
//vant
import {Tab,Tabs,Field,Button,CellGroup} from "vant"
Vue.use(Tab).use(Tabs).use(Field).use(Button).use(CellGroup)

Vue.config.productionTip = false

//设置axios拦截
axios.interceptors.request.use((config)=>{
  if(config.url != "/"){
    config.headers.Token = localStorage.getItem("Token")
  }
  return config;
},err=>{
  return Promise.reject(err)
});
//设置响应拦截
axios.interceptors.response.use((response)=>{
  if(response.status === 401){
    localStorage.removeItem("Token")
    this.$router.push("/")
  }
  return response;
},err=>{
  return Promise.reject(err)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
