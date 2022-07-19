<template>
  <div class="pb-16 pt-5">
    <NavGeneral/>
    <!-- Seccion de saludo personalizado -->
    <div class="welcome padding  ">
      <h4 class="text-texto font-semibold mb-0 ">Hola, <span class="font-medium text-primario">Juan!</span> </h4>
      <p class="">¿En qué te ayudamos hoy?</p>
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
    };
  },

  async mounted() {
    /* await this.$store.dispatch("getUsers"); */
  },

  computed: {
    async signOut(){
      await supabase.auth.signOut()
      router.push('/login')
      /* this.$store.commit("changeRegistered")
      this.$store.commit('userCurrent', null) */
    },
  },
};
</script>
<style>
</style>