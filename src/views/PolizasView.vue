<template >
  <div v-if="this.view" class=" h-full mb-5 max-w-7xl mx-auto">
    <NavGeneral/>
    <div class="padding">
      <!-- Seccion saludo -->
      <div class="pt-8">
        <p class="text-texto">{{this.dateCurrent}}</p>
        <p class="text-texto text-xl font-semibold leading-tight one">{{this.user.first_name}}</p>
      </div>
      
    <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-5">
      <div class="bg-green-500 bg-opacity-10 w-full mt-5 rounded-2xl flex justify-start  items-center px-5 py-5">

        <div class="rounded-full h-20 w-20 border-2 border-white mr-5 min flex justify-center items-center">
          <img v-if="this.agency.profile != '' " :src="this.agency.profile" alt="Img" class="h-full object-cover rounded-full w-20">
          <i v-else class="fi fi-rr-building flex justify-center items-center text-3xl text-green-500"></i>
        </div>


        <div class="w-full flex flex-col ">
            <p class="text-texto text-sm">Hola! Somos tu agencia</p>
            <p class="text-green-400 font-bold one max text-lg leading-tight"> {{this.agency.fullname}}</p>
            <p class="text-texto mt-2 leading-tight text-sm">Estamos para ti</p>
            <a :href="this.agency.api" target="_blank" class="w-auto border bg-green-400 py-1 px-4 flex justify-center items-center rounded-lg text-white cursor-pointer">
              <i class="fi fi-brands-whatsapp flex justify-center items-center mr-3 "></i>
              <p class="font-light">Escríbenos</p>
            </a>
        </div>
        
      </div>
    <!-- Seccion info general -->

      <div class="bg-gray-500 bg-opacity-10 w-full h-auto mt-5 rounded-2xl flex justify-around  items-center px-5 py-5">
        <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/insurance-policy.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvaW5zdXJhbmNlLXBvbGljeS5zdmciLCJpYXQiOjE2NjMzMDI5NTYsImV4cCI6MTk3ODY2Mjk1Nn0.z3sbheqImPC-GvZIh71Yg1g0gR901aRZYv_5Zm_TBBI" alt="Poliza" class="h-20 mr-5">
        <div class="w-full flex flex-col items-start justify-center">

          <div class="flex items-center justify-between w-full mb-1">
            <p class="text-primario text-lg font-semibold">Polizas activas</p>
            <div class="bg-primario bg-opacity-30 w-max py-1 px-3 rounded-xl">
              <p class="text-primario font-semibold">{{this.policies.length}}</p>
            </div>
          </div>

          <div class="flex items-center justify-between w-full">
            <p class="text-texto">Polizas a vencerse</p>
            <div class="bg-yellow-400 bg-opacity-30 w-max py-1 px-3 rounded-xl">
              <p class="text-yellow-600 font-semibold">{{this.dateExpire}}</p>
            </div>
          </div>

          <div class="border border-primario w-full border-opacity-30 my-3"></div>

          <p class="text-texto leading-none">Contacta a tu agencia <span class="text-primario font-semibold">para agregar nuevas polizas</span> </p>

        </div>
      </div>

    </div>

      <!-- Seccion agencia -->

      
      <!-- Seccion categorias -->

      <p class="text-xl font-semibold text-texto my-8">Categorias</p>

      <div class="grid grid-cols-3 lg:grid-cols-6 gap-3 w-full">

        <router-link to="/polizas/vehiculares" class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out relative">
          <div v-if="this.numberAutos != 0" class="absolute h-6 w-6 text-sm text-white text-center bg-green-400 shadow-md  rounded -top-1 -right-1 flex justify-center items-center">
          <p>
            {{ this.numberAutos }}
          </p>
        </div>
          <div class="h-24 w-24 lg:w-full lg:h-40  bg-white  border border-gray-100 shadow-md  rounded-2xl flex justify-center items-center">
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="Vehiculares" class="w-12 h-12 lg:h-16 lg:w-auto">
          </div>
          <p class="text-texto font-light text-sm mt-3">Autos</p>
        </router-link>

         <router-link to="/polizas/vida"  class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="h-24 w-24 lg:w-full lg:h-40 bg-white  border border-gray-100 shadow-md  rounded-2xl flex justify-center items-center relative">
            <div v-if="this.numberVida != 0" class="absolute h-6 w-6 text-sm text-white text-center bg-green-400 shadow-md  rounded -top-1 -right-1 flex justify-center items-center">
          <p>
            {{ this.numberVida }}
          </p>
        </div>
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/health-insurance.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvaGVhbHRoLWluc3VyYW5jZS5wbmciLCJpYXQiOjE2NjMzMDUwMzcsImV4cCI6MTk3ODY2NTAzN30.F_51wVzAE6H_d90EfY6ajRgZw6wyifv1n5lgxpXMwIw" alt="Vehiculares" class="w-12 h-12 lg:h-16 lg:w-auto">
          </div>
          <p class="text-texto font-light text-sm mt-3">Vida</p>
        </router-link >

        <router-link to="/polizas/hogar" class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="h-24 w-24 lg:w-full lg:h-40 bg-white  border border-gray-100 shadow-md rounded-2xl flex justify-center items-center relative">
            <div v-if="this.numberHogar != 0" class="absolute h-6 w-6 text-sm text-white text-center bg-green-400 shadow-md  rounded -top-1 -right-1 flex justify-center items-center">
          <p>
            {{ this.numberHogar }}
          </p>
        </div>
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/home.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvaG9tZS5wbmciLCJpYXQiOjE2NjMzMDUwMjcsImV4cCI6MTk3ODY2NTAyN30.meVR9SNdP-dYoRTu1A-vHQ1JzjQGznzTl2-EJEDeTPA" alt="Vehiculares" class="w-12 h-12 lg:h-16 lg:w-auto">
          </div>
          <p class="text-texto font-light text-sm mt-3">Hogar</p>
        </router-link>

         <router-link to="/polizas/salud" class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="h-24 w-24 lg:w-full lg:h-40 bg-white  border border-gray-100 shadow-md  rounded-2xl flex justify-center items-center relative">
            <div v-if="this.numberSalud != 0" class="absolute h-6 w-6 text-sm text-white text-center bg-green-400 shadow-md  rounded -top-1 -right-1 flex justify-center items-center">
          <p>
            {{ this.numberSalud }}
          </p>
        </div>
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/first-aid-kit.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvZmlyc3QtYWlkLWtpdC5wbmciLCJpYXQiOjE2NjMzMDUwNDQsImV4cCI6MTk3ODY2NTA0NH0.Jg-jucY0Q8DRGa_iB-Ew7f4LY180BxyormrY213R4nk" alt="Vehiculares" class="w-12 h-12 lg:h-16 lg:w-auto">
          </div>
          <p class="text-texto font-light text-sm mt-3">Salud</p>
         </router-link>


         <router-link to="/polizas/generales" class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out" >
          <div class="h-24 w-24 lg:w-full lg:h-40 bg-white  border border-gray-100 shadow-md  rounded-2xl flex justify-center items-center relative">
            <div v-if="this.numberGenerales != 0" class="absolute h-6 w-6 text-sm text-white text-center bg-green-400 shadow-md  rounded -top-1 -right-1 flex justify-center items-center">
          <p>
            {{ this.numberGenerales }}
          </p>
        </div>
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/generales.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvZ2VuZXJhbGVzLnBuZyIsImlhdCI6MTY2NjYyNjQ1NSwiZXhwIjoxOTgxOTg2NDU1fQ.xSwvrDBDZrttSCJDSgWmchtzm62i_vmA7prfnMCHrG8" alt="Generales" class="w-12 h-12 lg:h-16 lg:w-auto">
          </div>
          <p class="text-texto font-light text-sm mt-3">Generales</p>
         </router-link>

         <router-link to="/polizas/vencimientos" class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="h-24 w-24 lg:w-full lg:h-40 bg-white  border border-gray-100 shadow-md  rounded-2xl flex justify-center items-center">
            <div v-if="this.numberRiesgo != 0" class="absolute h-6 w-6 text-sm text-white text-center bg-green-400 shadow-md  rounded -top-1 -right-1 flex justify-center items-center">
              <p>
                {{ this.numberRiesgo }}
              </p>
            </div>
            <img class="w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068552/APP/advice_jnkipr.png">
          </div>
          <p class="text-texto font-light text-sm mt-3">Vencimientos</p>
         </router-link>

      </div>

      <!-- Seccion fav -->

      <p class="text-xl font-semibold text-texto my-8">Polizas favorita</p>
      <p class="leading-none text-texto text-sm font-light mb-5">Para agregar polizas a favoritos, ve a la sección de tu preferencia y en la poliza que quieres añadir pulsa sobre corazoncito</p>
      <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div v-if="(this.favorite.length == 0)">
          <div class="relative bg-gray-100  border border-gray-100 shadow-md w-full h-30 flex justify-center items-center p-5 rounded-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="absolute bg-primario bg-opacity-20 top-4 right-0 px-3 py-0.5 rounded-l-full">
            <p class="text-sm text-primario font-semibold">SOAT</p>
          </div>
          <div class="w-full flex flex-col items-start justify-center ml-5 filter blur-sm">
            <div class="flex flex-col items-start justify-center">
              <p class="text-texto text-sm">Placa del vehiculo</p>
              <p class="text-texto font-semibold leading-none">XXX XXX COLOMBIA</p>
            </div>
            <div class="flex flex-col items-start justify-cente my-1">
              <p class="text-texto text-sm">Fecha de vencimiento</p>
              <p class="text-texto font-semibold leading-none">XX-XX-XXXX</p>
            </div>
            <div class="flex flex-col items-start justify-center">
              <p class="text-primario text-sm">No. de emergencia</p>
              <p class="text-primario font-semibold leading-none">#XXX</p>
            </div>
          </div>
          <div class="flex justify-center items-center p-3">
              <i class="fi fi-sr-heart text-red-600 text-3xl flex justify-center items-center"></i>
          </div>
        </div>
        </div>

        <div v-else v-for="(fav, index) in this.favorite" :key="index" @click="redirectPolicyFav(fav)"  class="relative bg-white  border border-gray-100 shadow-md w-full h-30 flex justify-center items-center p-5 rounded-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="absolute bg-primario bg-opacity-20 top-4 right-0 px-3 py-0.5 rounded-l-full">
            <p class="text-sm text-primario font-semibold small">{{fav.product}}</p>
          </div>
          <div v-for="(icon, index) in this.iconsFav" :key="index">
            <img v-if="icon.category == fav.category" :src="icon.url" alt="Imagen de documento" class="h-auto w-16">
          </div>
          <div class="w-full flex flex-col items-start justify-center ml-5">
            <div v-if="fav.category == 'autos' || fav.category == 'hogar' || fav.category == 'generales'" class="flex flex-col items-start justify-center">
              <p v-if="fav.category == 'autos'" class="text-texto text-sm">Placa del vehiculo</p>
              <p v-else-if="fav.category == 'hogar'" class="text-texto text-sm">Hogar</p>
              <p v-else class="text-texto text-sm">Riesgo</p>
              <p class="text-texto font-semibold leading-none">{{fav.risks}}</p>
            </div>
            <div v-else class="flex flex-col items-start justify-center">
              <p class="text-texto text-sm">Seguro</p>
              <p class="text-texto font-semibold leading-none">{{fav.category.toUpperCase()}}</p>
            </div>
            <div class="flex flex-col items-start justify-cente my-1">
              <p class="text-texto text-sm">Fecha de vencimiento</p>
              <p class="text-texto font-semibold leading-none">{{fav.expiration}}</p>
            </div>
            <div class="flex flex-col items-start justify-center">
              <p class="text-primario text-sm">No. de emergencia</p>
              <p class="text-primario font-semibold leading-none">{{fav.emergency_number}}</p>
              <p v-if="fav.is_insurance_company" class="text-primario text-sm">{{fav.insurance_company}}</p>
            </div>
          </div>
          <div @click="deleteFav(fav.id)" class="flex justify-center items-center p-3">
              <i class="fi fi-sr-heart text-red-600 text-2xl flex justify-center items-center"></i>
          </div>
        </div>
      </div>

    

    </div>

    
  </div>
</template>
<script>
import { supabase } from "../supabase/init"
import router from '@/router'
import NavGeneral from '../components/Polizas/NavGeneral.vue'
export default {
  components: {
    NavGeneral
  },
  data() {
    return {
      view: false,
      dateCurrent: "",
      agency:{},
      currentId: "",
      user: {},
      policies:[],
      dateExpire: 0,
      favorite: [],
      numberAutos: 0,
      numberVida : 0,
      numberHogar : 0,
      numberSalud : 0,
      numberGenerales : 0,
      numberRiesgo: 0,

      iconsFav:[
        {
          url:"https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM",
          category:"autos"
        },
        {
          url:"https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/first-aid-kit.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvZmlyc3QtYWlkLWtpdC5wbmciLCJpYXQiOjE2ODI1MzAwODMsImV4cCI6MTcxNDA2NjA4M30.1OguqpWLK9UTVzZjVMxNnBTWVWF8XDInYI1olTmX_Cs&t=2023-04-26T17%3A28%3A03.562Z",
          category:"salud"
        },
        {
          url:"https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/home.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvaG9tZS5wbmciLCJpYXQiOjE2ODI1MzAwNTQsImV4cCI6MTcxNDA2NjA1NH0.5blcGEmqMRQsDmaDh3PxRgomBCsyaMupfK911PwSeks&t=2023-04-26T17%3A27%3A34.725Z",
          category:"hogar"
        },
        {
          url:"https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/health-insurance.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvaGVhbHRoLWluc3VyYW5jZS5wbmciLCJpYXQiOjE2ODI1MzAxMTQsImV4cCI6MTcxNDA2NjExNH0.-okdiN9EJqsaoicKWV-yywIPeKTfhVXlwSmmUdm51H4&t=2023-04-26T17%3A28%3A34.397Z",
          category:"vida"
        },
        {
          url:"https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/generales.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvZ2VuZXJhbGVzLnBuZyIsImlhdCI6MTY4MjUzMDAzMSwiZXhwIjoxNzE0MDY2MDMxfQ.pCwSwqJfj8zaa9_3qn6qgTVr_RN5Ge8oWF0yV-u02ZY&t=2023-04-26T17%3A27%3A11.896Z",
          category:"generales"
        },
      ]
      }
  },

  async created() {
    this.agency.profile = ""
    this.scroll()
    this.currentDateChange()
    await this.getCurrentClient()
    await this.currentAgency()
    await this.downloadImage()
    await this.whatsApp()
    await this.fetchPolicies()
    await this.getNumberAutos()
    await this.getNumberVida()
    await this.getNumberHogar()
    await this.getNumberSalud()
    await this.getNumberGenerales()
    await this.getNumberRiesgo()
  },

  mounted() {

  },

  methods: {

    async getNumberRiesgo(){
      const { data, error } = await supabase
        .from('policies')
        .select('*')
        .eq('client_id', this.currentClient.user.id)
        .eq('category', "riesgo")
        this.numberRiesgo= data.length
    },

    async getNumberGenerales(){
      const { data, error } = await supabase
        .from('policies')
        .select('*')
        .eq('client_id', this.currentClient.user.id)
        .eq('category', "generales")
        this.numberGenerales= data.length
    },

    async getNumberSalud(){
      const { data, error } = await supabase
        .from('policies')
        .select('*')
        .eq('client_id', this.currentClient.user.id)
        .eq('category', "salud")
        this.numberSalud= data.length
    },

    async getNumberHogar(){
      const { data, error } = await supabase
        .from('policies')
        .select('*')
        .eq('client_id', this.currentClient.user.id)
        .eq('category', "hogar")
        this.numberHogar= data.length
    },

    async getNumberAutos(){
      const { data, error } = await supabase
        .from('policies')
        .select('*')
        .eq('client_id', this.currentClient.user.id)
        .eq('category', "autos")
        this.numberAutos = data.length
    },

    async getNumberVida(){
      const { data, error } = await supabase
        .from('policies')
        .select('*')
        .eq('client_id', this.currentClient.user.id)
        .eq('category', "vida")
        this.numberVida = data.length
    },



    whatsApp(){
      this.agency.api = "https://wa.me/57"+ `${this.agency.whatsapp}` +  `?text=Hola ${this.agency.fullname},  necesito de tu ayuda.`
    },

    scroll(){
      window.scroll({
        top: 0
      });
    },

    currentDateChange(){
      let date = new Date()
      let time = date.toLocaleTimeString()
      if(time > "00:00:00" && time <= "12:00:00"){
        this.dateCurrent = "Buenos dias"
      } else if (time >"12:00:00" && time <= "18:00:00"  ) {
        this.dateCurrent = "Buenas tardes"
      } else{
         this.dateCurrent = "Buenas noches"
      }
    },

    async getCurrentClient(){
      try {
        const { data, error } = await supabase
        .from('clients_agencies')
        .select('*')
        .eq('id', this.currentClient.user.id)
        if(error) throw error
        if(data.length === 0){
          this.view = false
          router.push("/agencias")
        }else{
          this.view = true
          this.user = data[0]
        }
      } catch (error) {
        if(error){
          console.log(error);
        }
      }
    },

    async currentAgency(){
      try {
        const { data, error } = await supabase
        .from('agencies')
        .select('*')
        .eq('id', this.user.agency_id)
        this.agency = data[0]
        this.agency.profile = ""
      } catch (error) {
        if(error){
          console.log(error);
        }
      }
    },

    async downloadImage(){
      try {
        const { signedURL, error } = await supabase.storage.from('agencies').createSignedUrl(`${this.user.agency_id}/profile/imgprofile`, 60)
        this.agency.profile = signedURL
        if(error) throw error;
      } catch (error) {
        console.log(error.message)
      }
    },

    async fetchPolicies(){
      try {
        const { data, error } = await supabase
        .from('policies')
        .select('*')
        .eq('client_id', this.currentClient.user.id)
        this.policies = data
        this.policies.forEach(policy => {
            const now = new Date();
            const expire = new Date(policy.expiration);
            this.time = expire - now;
            const miliseconds = this.time;
            const seconds = miliseconds/1000;
            const minutes = seconds/60;
            const days = minutes/1440
            const result = Math.round(days)
            if(result < 30){
              this.dateExpire = this.dateExpire + 1
            }
            if(policy.favorite === true){
              this.favorite.push(policy)
            }

        });
      } catch (error) {
        if(error){
          console.log(error);
        }
      }
    },

    async deleteFav(id){
      const { error } = await supabase
        .from("policies")
        .update(
        {
            favorite: false
        }
        )
      .eq('id', id)
      this.favorite =[]
      this.fetchPolicies()
    },

    redirectPolicyFav(policy){
      if (policy.category == 'autos') {
        this.$store.commit("SaveUrlPolicy", policy)
        router.push('/polizas/vehiculares')

      } else if (policy.category == 'vida'){
        this.$store.commit("SaveUrlPolicy", policy)
        router.push('/polizas/vida')

      }else if (policy.category == 'hogar'){
        this.$store.commit("SaveUrlPolicy", policy)
        router.push('/polizas/hogar')

      }else if (policy.category == 'salud'){
        this.$store.commit("SaveUrlPolicy", policy)
        router.push('/polizas/salud')

      }else if (policy.category == 'generales'){
        this.$store.commit("SaveUrlPolicy", policy)
        router.push('/polizas/generales')
      }else if (policy.category == 'vencimientos'){
        this.$store.commit("SaveUrlPolicy", policy)
        router.push('/polizas/vencimientos')
      }
    }
  },

  computed:{
    currentClient(){
      return this.$store.state.clientAuth
    }
  }
}
</script>

<style scoped>

  .max{
    max-width: 200px;
  }

  .min{
    min-width: 5rem;
  }

</style>

<style>

  .small{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    overflow: hidden;
    max-width: 48px;
  }

</style>
