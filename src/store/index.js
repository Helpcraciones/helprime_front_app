import { createStore } from 'vuex'

export default createStore({
  state: {
    clientAuth:null,
    eventCurrent: null
  },
  getters: {
  },
  actions: {
  },
  mutations: {
    sessionChange(state, payload ){
      state.clientAuth = payload ? payload : null;
    },

    eventChange(state, event ){
      state.eventCurrent = event
    },
  },
  modules: {
  }
})
