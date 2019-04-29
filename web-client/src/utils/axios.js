import axios from "axios"
import Vue from "vue"

axios.interceptors.request.use(config=>{
  if(config.url != "/"){
    config.headers.Token = localStorage.getItem("Token")
  }
  return config;
},err=>{
  return Promise.reject(err)
})

Vue.prototype.axios = axios;


