import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  user_name:""
}
const actions = {}

const mutations = {
  CHANGE_USER_NAME (state,name) {
    state.user_name = name
  }
}


const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store
