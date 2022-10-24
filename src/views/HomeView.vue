<template>
<div>
  <div class=" lg:mb-16 max-w-7xl lg:mx-auto flex flex-col">
    <NavGeneral class="order-1"/>

    <InfoGeneral class="order-2"/>


    <!-- Seccion de saludo personalizado -->
    <div v-if="this.active"  class="order-3 padding my-7 lg:m-0 lg:flex flex-col static lg:fixed top-10 right-10 lg:bg-white lg:p-8 lg:shadow-xl lg:rounded-lg group z-50">
      <div class="relative group">
        <i @click="this.active = false" class="fi fi-rr-cross-circle hidden lg:flex justify-center items-center absolute -top-5 -right-5 group-hover:text-primario text-texto"></i>
      <p class="text-texto font-ligth text-xl">Hola<span v-if="this.user.alias != '' " class="font-bold text-primario">, {{this.user.alias}}</span> <span class="font-semibold" v-else>,  que gusto tenerte aqui</span> </p>
      <p class="text-texto leading-none">¿En qué te ayudamos hoy?</p>
      </div>
    </div>

    <UneteGeneral class="lg:order-6 order-8"/>

    <BannerGeneral class="order-5"/>

    <ManagementGeneral class="lg:order-4 order-6"/>
    <SellVehicle class="order-7 hidden"/>
    <MenuGeneral class="lg:hidden flex order-last" />
    
  </div>
  <div>
      <Footer class="order-last"/>
    </div>
    
      
    </div>
</template>
<script>

import router from '@/router'
import { supabase } from "../supabase/init"
import NavGeneral from "../components/Home/NavGeneral.vue";
import BannerGeneral from "../components/Home/BannerGeneral.vue";
import ManagementGeneral from "../components/Home/ManagementGeneral.vue";
import SellVehicle from "../components/Home/SellVehicle.vue";
import MenuGeneral from "../components/Home/MenuGeneral.vue";
import InfoGeneral from "../components/Home/InfoGeneral.vue";
import UneteGeneral from "../components/Home/UneteGeneral.vue";
import Footer from "../components/Home/Footer.vue";
export default {
  components:{
    NavGeneral,
    BannerGeneral,
    ManagementGeneral,
    SellVehicle,
    MenuGeneral,
    InfoGeneral,
    UneteGeneral,
    Footer
  },
  data() {
    return {
      user: {},
      currentId: "",
      active: undefined
    };
  },

  async created(){
    this.active = true
    if(!supabase.auth.user()){
      this.user.alias = ""
    } else{
      await this.getCurrentClient()
    }
    
  },

  async mounted() {

  },

  methods: {

    async getCurrentClient(){
      if(this.currentClient === null){
        this.currentId = "" 
      } else {
        this.currentId = this.currentClient.user.id
      }
      try {
        const { data, error } = await supabase
        .from('clients_helprime')
        .select('*')
        .eq('id', this.currentId)
        if(error) throw error
        if (data.length <= 0) {
          this.user = {}
          console.log('No soy de helprime');
          this.getCurrentClientAgencies()
        } else {
          this.user = data[0]
          this.user.alias = data[0].alias.toUpperCase()
        }
      } catch (error) {
        if(error){
          console.log(error);
        }
      }
    },

    async getCurrentClientAgencies(){
     try {
        const { data, error } = await supabase
          .from('clients_agencies')
          .select('*')
          .eq('id', this.currentId)
          if (error) throw error
          console.log('soy de las agencias');
          this.user = data[0]
          this.user.alias = data[0].alias.toUpperCase()
          console.log(this.user);
        } catch (error) {
          if(error){
            console.log(error);
          }
     }
    }
  },

  computed: {

    currentClient(){
      return this.$store.state.clientAuth
    }

  },
};
</script>
<style>
</style>