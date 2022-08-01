import { createStore } from 'vuex'

export default createStore({
  state: {
    userAuth:null,
    users: [],

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
      state.userAuth = payload ? payload : null;
    },

    /* getUsers(state, users){
      state.users = users
    } */
  },
  modules: {
  }
})
