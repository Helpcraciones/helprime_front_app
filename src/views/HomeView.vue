<template>
  <div class="pb-16 pt-5">
    <div class="fixed flex text-sm text-primario bg-blue-100 rounded-lg top-5 right-5 transition-all z-10" :class="this.classDiv" role="alert">
      <svg aria-hidden="true" :class="this.classText" class="inline flex-shrink-0 mr-3 w-5 h-5 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <div class="transition-all" :class="this.classText">
        <span class="font-medium">Hola!</span>
        <p>{{this.textAlert}}</p>
      </div>
    </div>
    <NavGeneral/>
    <!-- Seccion de saludo personalizado -->
    <div class="welcome padding  ">
      <h4 v-if="this.userData != null" class="text-texto font-semibold mb-0 ">Hola, <span class="font-medium text-primario">{{this.userData.fullname}}!</span> </h4>
      <p class="">¿En qué te ayudamos hoy?</p>
    </div>
    <div class="px-5 mt-2">
  </div>
    <!-- <BannerGeneral/> -->

    <ManagementGeneral/>

    <SellVehicle/>

    <MenuGeneral />
  </div>
</template>
<script>

import router from '@/router'
import { supabase } from "../supabase/init"
import NavGeneral from "../components/Home/NavGeneral.vue";
/* import BannerGeneral from "../components/Home/BannerGeneral.vue"; */
import ManagementGeneral from "../components/Home/ManagementGeneral.vue";
import SellVehicle from "../components/Home/SellVehicle.vue";
import MenuGeneral from "../components/Home/MenuGeneral.vue";
export default {
  components:{
    NavGeneral,
    /* BannerGeneral, */
    ManagementGeneral,
    SellVehicle,
    MenuGeneral
  },
  data() {
    return {
      classDiv: "w-0 p-0",
      classText: "hidden",
      textAlert: "",

      userData:null,
      users:null
    };
  },

  async mounted() {
    await this.getUsers()

    this.validationEqual()
    setTimeout(() => {
      this.alertAuth()
    }, 500);

    /* this.alertAuth() */

  },

  methods: {
    validationEqual(){
      if(this.userAuth){
        let idEqual = this.users.find(user => user.id == this.userAuth.id)
        /* console.log(idEqual); */
        if (idEqual) {
          this.userData = idEqual
        }
      }
    },

    alertAuth(){
      if (this.userData) {
        this.classDiv = "w-72 p-4"
        this.classText = "block"
        this.textAlert = `Bienvenido ${this.userData.fullname}`

        setTimeout(() => {
          this.verify = false
          this.classDiv = "w-0 p-0"
          this.classText = "hidden"
        }, 5000)
      }
    },

    async getUsers(){
      let res = await supabase.from('users').select('*')
      this.users = res.data
    }
  },

  computed: {

    userAuth(){
      return this.$store.state.userAuth
    },

  },
};
</script>
<style>
</style>