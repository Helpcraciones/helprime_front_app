<template>
  <div class="flex justify-between items-center mt-10 padding">
    <p class="text-texto font-medium text-xl">Vehiculares</p>
    <div class="flex items-center">
        <select v-model="this.vehicle" class="text-texto border-0 text-xl outline-none box">
         <option disabled selected value="">Mis polizas</option>
            <option  v-for="poliza in polizas" :key="poliza.id" >{{poliza.typeVehicle}} {{poliza.license}}</option>
        </select>
    </div>
  </div>

  <div class=" mt-5" v-if="polizas.length > 0">
    <!-- <Carousel  :settings="settings" :breakpoints="breakpoints"  :wrap-around="true">
      <Slide v-for="poliza in polizas" :key="poliza.id" class="pl-8 py-10">
        
        <div class="bg-white shadow-lg text-texto p-5 w-full rounded-2xl flex justify-between relative">

          <div class="flex flex-col px-4 justify-between">
            <i class="fi fi-rr-car-side text-primario text-7xl flex justify-center items-center"></i>
            <p class="text-2xl font-bold text-primario w-max">{{poliza.license}}</p>
          </div>
          <div class="text-red-600 flex flex-col items-start mx-auto">
            <p class="text-texto text-2xl w-max">Tienes</p>
            <p class="text-green-400 text-2xl font-bold  w-max ">{{polizas.length}} Productos <span class="font-normal text-primario">activos</span> </p>


            <div @click="currentVehicle(poliza.id)" class="bg-primario text-xl text-white w-full py-2 rounded-lg mt-3 flex justify-center items-center">
              Ver polizas
              <i v-if="this.collapse === false" class="fi fi-rr-angle-small-down text-white bg-primario text-4xl flex justify-center items-center ml-5"></i>
              <i v-if="this.collapse === true" class="fi fi-rr-angle-small-up text-white bg-primario text-4xl flex justify-center items-center ml-5"></i>
            </div>
          </div>
          
        </div>
       

      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel> -->
  </div>

  <div v-if="this.collapse == true" class="padding">
    <div class="bg-white shadow-lg p-10 rounded-xl">
      <div class=" p-8 bg-primario bg-opacity-20 w-max mx-auto rounded-full"> 
          <i class="fi fi-rr-car-side text-primario text-7xl flex justify-center items-center bg-transparent"></i>
      </div>

      <div class="flex justify-evenly mt-10">
        <div class="text-texto text-2xl">Placa: <span class="text-primario font-bold">{{this.currentData.license}}</span></div>
         <div class="text-texto text-2xl">Modelo: <span class="text-primario font-bold">{{this.currentData.model}}</span></div>
      </div>


      <select v-model="this.poliza" @change="imprimir" class="text-texto text-xl outline-none box w-full bg-white border border-primario rounded-xl mt-10 focus:border-primario">
        <option disabled selected value="">Selecciona la poliza que quieres visualizar</option>
          <option  v-for="poliza in polizas" :key="poliza.id" >{{poliza.typeVehicle}} {{poliza.license}} - Vence: 10/07/2023 <div class="w-5 h-5 rounded-full bg-green-400"></div>  </option>
      </select>

        <div class="mt-10 bg-primario bg-opacity-20 w-full p-10 rounded-xl" v-if='this.poliza != ""  '>

          <div class="mb-5">
            <p class="text-texto text-xl  font-medium">Tipo de poliza</p>
            <p class="text-primario text-2xl font-semibold ">Seguro obligatorio</p>
          </div>

          <div class="mb-5">
            <p class="text-texto text-xl  font-medium">Fecha de vencimiento</p>
            <p class="text-primario text-2xl font-semibold ">28 de Diciembre del 2022</p>
          </div>

          <div class="mb-5">
            <p class="text-texto text-xl  font-medium">No. de emergencia</p>
            <p class="text-primario text-2xl font-semibold ">#444</p>
          </div>

          <div class="mb-5">
            <p class="text-texto text-xl  font-medium">Aseguradora</p>
            <p class="text-primario text-2xl font-semibold ">Seguros bolivar</p>
          </div>


          <div class="mb-5">
            <p class="text-texto text-xl  font-medium">Agente de seguros</p>
            <p class="text-primario text-2xl font-normal ">Diego Cardenaz</p>
            <p class="text-primario text-2xl font-semibold ">314 404 9124</p>
          </div>

          <div  class=" w-full bg-primario rounded-lg py-4">
            <p class="w-max mx-auto bg-primario text-xl font-medium">Ver documento</p>
          </div>
        </div>

        <div class="mt-10 w-full px-10 rounded-xl" v-if='this.poliza != ""  '>

          <div class="mb-5">
            <p class="text-primario text-2xl text-center font-semibold ">Acá puedes agregar más información para tu vehículo</p>
          </div>

          <div  class=" w-full bg-primario rounded-lg py-4">
            <p class="w-max mx-auto bg-primario text-xl font-medium">Has clic aquí</p>
          </div>
        </div>
    </div>
  </div>

  <div class="px-5 mt-2">
    <button @click="createPoliza" class="py-3 w-full flex justify-center border font-semibold border-primario text-primario rounded-xl">Adquiere una poliza vehicular</button>
  </div>
</template>
<script>
/* import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel"; */
import router from '@/router'
import { supabase } from "../../supabase/init"

export default {
  name: "MyPolizas",
  /* components: {
    Carousel,
    Slide
  }, */

  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1.2,
      snapAlign: "start",
    },
    
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },

    users: null,

    vehicle: "",
    poliza: "",
    collapse: false,
    currentData: {},
    currentLicense: "XPK 87F",
    currentModelo: "2007",

  }),

  async mounted() {
    await this.getUsers()

    /* console.log(this.users);
    console.log(this.userAuth) */
    if(this.userAuth){
      let idEqual = this.users.find(user => user.id == this.userAuth.id)
      console.log(idEqual);
      if (idEqual == undefined) {
        router.push("/form-datos")
      }else{
        console.log(idEqual);
      }
    }
  },

  methods: {
    createPoliza(){
      if(this.userAuth){
        console.log(this.userAuth);
      } else{
        router.push("/login")
      }
    },

    currentVehicle(id){
      this.collapse = !this.collapse
      this.polizas.forEach(poliza => {
        if(poliza.id == id){
          this.currentData = poliza
        }
      });
    },

    async getUsers(){
      let res = await supabase.from('users').select('*')
      this.users = res.data
    }

  },

  computed: {
    polizas() {
      return this.$store.state.polizas;
    },

    userAuth(){
      return this.$store.state.userAuth
    },
  },
};
</script>

<style scoped>

    .box{
        box-shadow: none;
    }

</style>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>