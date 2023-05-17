import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ResetPassword from '../views/ResetPassword.vue'
import HomeView from '../views/HomeView.vue'
import Agencias from '../views/Agencias.vue'
import Polizas from "../views/PolizasView.vue"
import Vehiculos from "../views/VehiculosView.vue"
import Hogar from "../views/HogarView.vue"
import Salud from "../views/SaludView.vue"
import Generales from "../views/GeneralesView.vue"
import Vencimientos from "../views/VencimientosView.vue"
import Vida from "../views/VidaView.vue"
import Riesgo from "../views/RiesgoView.vue"
import Documento from "../views/DocumentoView.vue"
import DocumentoVida from "../views/DocVidaView.vue"
import DocumentoHogar from "../views/DocHogarView.vue"
import DocumentoGenerales from "../views/DocGeneralesView.vue"
import DocumentoSalud from "../views/DocSaludView.vue"
import DocumentoRiesgo from "../views/DocRiesgoView.vue"
import Agenda from "../views/AgendaView.vue"
import ParaTiView from "../views/ParaTiView.vue"
import ProveedorView from "../views/ProveedorView.vue"
import Profile from "../views/Profile.vue"
import Formulario from "../views/Formulario.vue"
import Recuperacion from "../views/RecuperarContra.vue"
import Info from "../views/InfoView.vue"
import Identity from "../views/IdentityView.vue"
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
    path: '/agencias',
    name: 'agencias',
    component: Agencias,
    meta:{
      title: 'agencias',
      auth: false
    },
  },
  {
    path: '/identity',
    name: 'identity',
    component: Identity,
    meta:{
      title: 'identity',
      auth: false
    },
  },
  {
    path: '/info',
    name: 'info',
    component: Info,
    meta:{
      title: 'info',
      auth: false
    },
  },
  {
    path: '/registro',
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
    path: '/reset-password',
    name: 'resetPassword',
    component: ResetPassword,
    meta:{
      title: 'ResetPassword',
      auth: false
    },
  },
  {
    path: '/reestablecer',
    name: 'reestablecer',
    component: Recuperacion,
    meta:{
      title: 'reestablecer',
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
    path: '/polizas/vehiculares',
    name: 'vehiculos',
    component: Vehiculos,
    meta:{
      title: 'vehiculos',
      auth: false
    },
  },
  {
    path: '/polizas/vehiculares/:id',
    name: 'docuemento',
    component: Documento,
    meta:{
      title: 'vehiculosId',
      auth: false
    },
  },
  {
    path: '/polizas/vida',
    name: 'vida',
    component: Vida,
    meta:{
      title: 'vida',
      auth: false
    },
  },
  {
    path: '/polizas/vida/:id',
    name: 'docuementoVida',
    component: DocumentoVida,
    meta:{
      title: 'VidaId',
      auth: false
    },
  },
  {
    path: '/polizas/hogar',
    name: 'hogar',
    component: Hogar,
    meta:{
      title: 'hogar',
      auth: false
    },
  },
  {
    path: '/polizas/hogar/:id',
    name: 'documentoHogar',
    component: DocumentoHogar,
    meta:{
      title: 'HogarId',
      auth: false
    },
  },
  {
    path: '/polizas/generales',
    name: 'generales',
    component: Generales,
    meta:{
      title: 'generales',
      auth: false
    },
  },
  {
    path: '/polizas/generales/:id',
    name: 'documentoGenerales',
    component: DocumentoGenerales,
    meta:{
      title: 'GeneralId',
      auth: false
    },
  },
  {
    path: '/polizas/salud',
    name: 'salud',
    component: Salud,
    meta:{
      title: 'generales',
      auth: false
    },
  },
  {
    path: '/polizas/salud/:id',
    name: 'documentoSalud',
    component: DocumentoSalud,
    meta:{
      title: 'SaludId',
      auth: false
    },
  },

  {
    path: '/polizas/riesgo',
    name: 'riesgo',
    component: Riesgo,
    meta:{
      title: 'riesgo',
      auth: false
    },
  },

  {
    path: '/polizas/riesgo/:id',
    name: 'documentoRiesgo',
    component: DocumentoRiesgo,
    meta:{
      title: 'RiesgoId',
      auth: false
    },
  },

  {
    path: '/polizas/vencimientos',
    name: 'vencimientos',
    component: Vencimientos,
    meta:{
      title: 'vencimeintos',
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
    path: '/para-ti',
    name: 'ParaTi',
    component: ParaTiView,
    meta:{
      title: 'ParaTi',
      auth: false
    },
  },
  {
    path: '/perfil',
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
  routes,
  scrollBehavior (to, ) {
    return {
      el: to.hash
    }
  }
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
