<template>
  <div class="pb-16">
    <NavGeneral/>
    <!-- Seccion de saludo personalizado -->
    <div class="padding my-7">
      <p class="text-texto font-ligth text-xl">Hola<span v-if="this.user.alias != '' " class="font-bold">, {{user.alias}}</span> <span class="font-semibold" v-else>,  que gusto tenerte aqui</span> </p>
      <p class="text-texto leading-none">¿En qué te ayudamos hoy?</p>
    </div>
    <BannerGeneral/>

    <ManagementGeneral/>
    <SellVehicle/>
    <MenuGeneral />
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
export default {
  components:{
    NavGeneral,
    BannerGeneral,
    ManagementGeneral,
    SellVehicle,
    MenuGeneral
  },
  data() {
    return {
      user: {},
      currentId: ""
    };
  },

  async created(){
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
        console.log(this.currentId);
      }
      try {
        const { data, error } = await supabase
        .from('clients_helprime')
        .select('*')
        .eq('id', this.currentId)
        console.log(data);
        if(error) throw error
        if (data != []) {
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