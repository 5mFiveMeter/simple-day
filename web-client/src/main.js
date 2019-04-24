// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index"

//初始化样式
import "./public/reset.css"
//引入rem
import "./public/rem.js"
//vant
import {Tab,Tabs,Field,Button,CellGroup} from "vant"
Vue.use(Tab).use(Tabs).use(Field).use(Button).use(CellGroup)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
