import { createStore } from 'vuex'

export default createStore({
  state: {
    clientAuth:null,
  },
  getters: {
  },
  actions: {
  },
  mutations: {
    sessionChange(state, payload ){
      state.clientAuth = payload ? payload : null;
    },
  },
  modules: {
  }
})
