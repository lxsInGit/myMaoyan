import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    city: "深圳",
    isDisplay: true
  },
  mutations: {
    changeDisplay(state, canshu){
      state.isDisplay = canshu
    },
    changeCity(state,canshu){
      state.city = canshu
    }
  },
  actions: {

  }
})
