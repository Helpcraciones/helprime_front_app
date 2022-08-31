<template>
  <div class="pb-16">
    <NavGeneral/>
    <!-- Seccion de saludo personalizado -->
    <div class="padding my-7">
      <p class="text-primario font-ligth text-xl">Hola<span class="font-bold">, Cristiano Ronaldo</span></p>
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
      classDiv: "w-0 p-0",
      classText: "hidden",
      textAlert: "",

      clientData:null,
      clients:null
    };
  },

  async mounted() {
    await this.getClients()

    this.validationEqual()
    setTimeout(() => {
      this.alertAuth()
    }, 500);

    /* this.alertAuth() */

  },

  methods: {
    validationEqual(){
      if(this.clientAuth){
        let idEqual = this.clients.find(client => client.id == this.clientAuth.id)
        /* console.log(idEqual); */
        if (idEqual) {
          this.clientData = idEqual
        }
      }
    },

    alertAuth(){
      if (this.clientData) {
        this.classDiv = "w-72 p-4"
        this.classText = "block"
        this.textAlert = `Bienvenido ${this.clientData.fullname}`

        setTimeout(() => {
          this.verify = false
          this.classDiv = "w-0 p-0"
          this.classText = "hidden"
        }, 5000)
      }
    },

    async getClients(){
      let res = await supabase.from('clients').select('*')
      this.clients = res.data
      console.log(this.clients);
    }
  },

  computed: {

    clientAuth(){
      return this.$store.state.clientAuth
    },

  },
};
</script>
<style>
</style>