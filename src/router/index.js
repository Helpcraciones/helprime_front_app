import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import HomeView from '../views/HomeView.vue'
import Polizas from "../views/PolizasView.vue"
import Agenda from "../views/AgendaView.vue"
import MisVehiculos from "../views/MisVehiculosView.vue"
import ParaTiView from "../views/ParaTiView.vue"
import ProveedorView from "../views/ProveedorView.vue"
import Profile from "../views/Profile.vue"
import Formulario from "../views/Formulario.vue"
import { supabase } from '@/supabase/init'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title: 'home',
      auth: false
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta:{
      title: 'register',
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      title: 'login',
      auth: false
    }
  },
  {
    path: '/polizas',
    name: 'polizas',
    component: Polizas,
    meta:{
      title: 'polizas',
      auth: false
    },
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: Agenda,
    meta:{
      title: 'agenda',
      auth: false
    },
  },
  {
    path: '/agenda/:id',
    name: 'ProveedorView',
    component: ProveedorView,
    meta:{
      title: 'ProveedorView',
      auth: false
    },
  },
  {
    path: '/mis-vehiculos',
    name: 'Mis-Vehiculos',
    component: MisVehiculos,
    meta:{
      title: 'Mis-Vehiculos',
      auth: false
    },
  },
  {
    path: '/para-ti',
    name: 'ParaTi',
    component: ParaTiView,
    meta:{
      title: 'ParaTi',
      auth: false
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{
      title: 'ParaTi',
      auth: false
    },
  },
  {
    path: '/form-datos',
    name: 'Formulario',
    component: Formulario,
    meta:{
      title: 'Formulario',
      auth: false
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) =>{
  const user = supabase.auth.user();
  if(to.matched.some((res)=> res.meta.auth)){
    if(user){
      next();
      return
    }
    next({name: "login"})
    return
  }
  next();
})

export default router
