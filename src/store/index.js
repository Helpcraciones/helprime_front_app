import { createStore } from 'vuex'

export default createStore({
  state: {
    clientAuth:null,
    clients: [],

    name: '',
    currentUser: {},
    polizas: [],
    vehicles: [],
    userId: null,
    bannersHome: [],
    proveedores: []
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
