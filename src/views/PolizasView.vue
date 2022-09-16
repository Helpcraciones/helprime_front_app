<template >
  <div class=" h-full mb-8">
    <NavGeneral/>
    <div class="padding">

      <!-- Seccion saludo -->

      <div class="pt-8">
        <p class="text-texto">{{this.dateCurrent}}</p>
        <p class="text-primario text-xl font-semibold leading-none">Cristiano Ronaldo</p>
      </div>

    <!-- Seccion info general -->

      <div class="bg-gray-500 bg-opacity-10 w-full h-auto mt-8 rounded-2xl flex justify-around  items-center px-5 py-5">
        <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/insurance-policy.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvaW5zdXJhbmNlLXBvbGljeS5zdmciLCJpYXQiOjE2NjMzMDI5NTYsImV4cCI6MTk3ODY2Mjk1Nn0.z3sbheqImPC-GvZIh71Yg1g0gR901aRZYv_5Zm_TBBI" alt="Poliza" class="h-20 mr-5">
        <div class="w-full flex flex-col items-start justify-center">

          <div class="flex items-center justify-between w-full mb-1">
            <p class="text-primario text-lg font-semibold">Polizas activas</p>
            <div class="bg-primario bg-opacity-30 w-max py-1 px-3 rounded-xl">
              <p class="text-primario font-semibold">222</p>
            </div>
          </div>

          <div class="flex items-center justify-between w-full">
            <p class="text-texto">Polizas a vencerse</p>
            <div class="bg-yellow-400 bg-opacity-30 w-max py-1 px-3 rounded-xl">
              <p class="text-yellow-600 font-semibold">2</p>
            </div>
          </div>

          <div class="border border-primario w-full border-opacity-30 my-3"></div>

          <p class="text-texto leading-none"> Estas al <span class="text-primario font-bold" >25%</span> de estar <br> <span class="text-primario font-bold">100% protegido</span></p>

        </div>
      </div>

      <!-- Seccion categorias -->

      <p class="text-xl font-semibold text-texto my-8">Categorias</p>

      <div class="grid grid-cols-3 gap-5 w-full">

        <router-link to="/polizas/vehiculares" class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="h-24 w-24 bg-white shadow-lg  rounded-2xl flex justify-center items-center">
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="Vehiculares" class="w-12 h-12">
          </div>
          <p class="text-texto font-light text-sm mt-3">Vehiculares</p>
        </router-link>


        <div class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="h-24 w-24 bg-white shadow-lg rounded-2xl flex justify-center items-center">
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/home.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvaG9tZS5wbmciLCJpYXQiOjE2NjMzMDUwMjcsImV4cCI6MTk3ODY2NTAyN30.meVR9SNdP-dYoRTu1A-vHQ1JzjQGznzTl2-EJEDeTPA" alt="Vehiculares" class="w-12 h-12">
          </div>
          <p class="text-texto font-light text-sm mt-3">Hogar</p>
        </div>

         <div class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="h-24 w-24 bg-white shadow-lg  rounded-2xl flex justify-center items-center">
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/first-aid-kit.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvZmlyc3QtYWlkLWtpdC5wbmciLCJpYXQiOjE2NjMzMDUwNDQsImV4cCI6MTk3ODY2NTA0NH0.Jg-jucY0Q8DRGa_iB-Ew7f4LY180BxyormrY213R4nk" alt="Vehiculares" class="w-12 h-12">
          </div>
          <p class="text-texto font-light text-sm mt-3">Medicos</p>
        </div>

         <div class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="h-24 w-24 bg-white shadow-lg  rounded-2xl flex justify-center items-center">
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/health-insurance.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvaGVhbHRoLWluc3VyYW5jZS5wbmciLCJpYXQiOjE2NjMzMDUwMzcsImV4cCI6MTk3ODY2NTAzN30.F_51wVzAE6H_d90EfY6ajRgZw6wyifv1n5lgxpXMwIw" alt="Vehiculares" class="w-12 h-12">
          </div>
          <p class="text-texto font-light text-sm mt-3">Vida</p>
        </div>

         <div class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out" >
          <div class="h-24 w-24 bg-white shadow-lg  rounded-2xl flex justify-center items-center">
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/danger-sign.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvZGFuZ2VyLXNpZ24ucG5nIiwiaWF0IjoxNjYzMzA1MDQwLCJleHAiOjE5Nzg2NjUwNDB9.1N9254CJl-xpN9I7OB5rQKsvVBeMi2QhMDCDmTfPZmg" alt="Vehiculares" class="w-12 h-12">
          </div>
          <p class="text-texto font-light text-sm mt-3">T. Riesgo</p>
        </div>

         <div class="flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="h-24 w-24 bg-white shadow-lg  rounded-2xl flex justify-center items-center">
            <i class="fi fi-rr-menu-dots flex justify-center items-center text-3xl text-primario"></i>
          </div>
          <p class="text-texto font-light text-sm mt-3">Varios</p>
        </div>

      </div>

      <!-- Seccion fav -->

      <p class="text-xl font-semibold text-texto my-8">Polizas favorita</p>

      <div class="w-full grid grid-cols-1 gap-5">
        <div class="relative bg-white shadow-lg w-full h-30 flex justify-center items-center p-5 rounded-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div class="absolute bg-primario bg-opacity-20 top-4 right-0 px-3 py-0.5 rounded-l-full">
            <p class="text-sm text-primario font-semibold">SOAT</p>
          </div>
          <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="Imagen de documento" class="h-12 w-12">
          <div class="w-full flex flex-col items-start justify-center ml-5">
            <div class="flex flex-col items-start justify-center">
              <p class="text-texto text-sm">Placa del vehiculo</p>
              <p class="text-texto font-semibold leading-none">XPK87F COLOMBIA</p>
            </div>
            <div class="flex flex-col items-start justify-cente my-1">
              <p class="text-texto text-sm">Fecha de vencimiento</p>
              <p class="text-texto font-semibold leading-none">28-DIC-2022</p>
            </div>
            <div class="flex flex-col items-start justify-center">
              <p class="text-primario text-sm">No. de emergencia</p>
              <p class="text-primario font-semibold leading-none">#444</p>
            </div>
          </div>
          <div class="flex justify-center items-center p-3">
              <i class="fi fi-rr-heart text-red-600 text-2xl flex justify-center items-center"></i>
          </div>
        
        </div>
        <div class="relative bg-white shadow-lg w-full h-30 flex justify-center items-center p-5 rounded-2xl">
          <div class="absolute bg-primario bg-opacity-20 top-4 right-0 px-3 py-0.5 rounded-l-full">
            <p class="text-sm text-primario font-semibold">SOAT</p>
          </div>
          <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="Imagen de documento" class="h-12 w-12">
          <div class="w-full flex flex-col items-start justify-center ml-5">
            <div class="flex flex-col items-start justify-center">
              <p class="text-texto text-sm">Placa del vehiculo</p>
              <p class="text-texto font-semibold leading-none">XPK87F COLOMBIA</p>
            </div>
            <div class="flex flex-col items-start justify-cente my-1">
              <p class="text-texto text-sm">Fecha de vencimiento</p>
              <p class="text-texto font-semibold leading-none">28-DIC-2022</p>
            </div>
            <div class="flex flex-col items-start justify-center">
              <p class="text-primario text-sm">No. de emergencia</p>
              <p class="text-primario font-semibold leading-none">#444</p>
            </div>
          </div>
          <div class="flex justify-center items-center p-3">
              <i class="fi fi-rr-heart text-red-600 text-2xl flex justify-center items-center"></i>
          </div>
        
        </div>
        <div class="relative bg-white shadow-lg w-full h-30 flex justify-center items-center p-5 rounded-2xl">
          <div class="absolute bg-primario bg-opacity-20 top-4 right-0 px-3 py-0.5 rounded-l-full">
            <p class="text-sm text-primario font-semibold">SOAT</p>
          </div>
          <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="Imagen de documento" class="h-12 w-12">
          <div class="w-full flex flex-col items-start justify-center ml-5">
            <div class="flex flex-col items-start justify-center">
              <p class="text-texto text-sm">Placa del vehiculo</p>
              <p class="text-texto font-semibold leading-none">XPK87F COLOMBIA</p>
            </div>
            <div class="flex flex-col items-start justify-cente my-1">
              <p class="text-texto text-sm">Fecha de vencimiento</p>
              <p class="text-texto font-semibold leading-none">28-DIC-2022</p>
            </div>
            <div class="flex flex-col items-start justify-center">
              <p class="text-primario text-sm">No. de emergencia</p>
              <p class="text-primario font-semibold leading-none">#444</p>
            </div>
          </div>
          <div class="flex justify-center items-center p-3">
              <i class="fi fi-rr-heart text-red-600 text-2xl flex justify-center items-center"></i>
          </div>
        
        </div>
        <div class="relative bg-white shadow-lg w-full h-30 flex justify-center items-center p-5 rounded-2xl">
          <div class="absolute bg-primario bg-opacity-20 top-4 right-0 px-3 py-0.5 rounded-l-full">
            <p class="text-sm text-primario font-semibold">SOAT</p>
          </div>
          <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="Imagen de documento" class="h-12 w-12">
          <div class="w-full flex flex-col items-start justify-center ml-5">
            <div class="flex flex-col items-start justify-center">
              <p class="text-texto text-sm">Placa del vehiculo</p>
              <p class="text-texto font-semibold leading-none">XPK87F COLOMBIA</p>
            </div>
            <div class="flex flex-col items-start justify-cente my-1">
              <p class="text-texto text-sm">Fecha de vencimiento</p>
              <p class="text-texto font-semibold leading-none">28-DIC-2022</p>
            </div>
            <div class="flex flex-col items-start justify-center">
              <p class="text-primario text-sm">No. de emergencia</p>
              <p class="text-primario font-semibold leading-none">#444</p>
            </div>
          </div>
          <div class="flex justify-center items-center p-3">
              <i class="fi fi-rr-heart text-red-600 text-2xl flex justify-center items-center"></i>
          </div>
        
        </div>
      </div>



    </div>
  </div>
</template>
<script>
import NavGeneral from '../components/Polizas/NavGeneral.vue'
export default {
  components: {
    NavGeneral
  },
  data() {
    return {
      dateCurrent: ""
    }
  },

  created() {
    this.currentDateChange()
  },

  mounted() {
    
  },

  methods: {
    currentDateChange(){
      let date = new Date()
      let time =date.toLocaleTimeString()
      if(time > "00:00:00" && time <= "12:00:00"){
        this.dateCurrent = "Buenos dias"
      } else if (time >"12:00:00" && time <= "18:00:00"  ) {
        this.dateCurrent = "Buenas tardes"
      } else{
         this.dateCurrent = "Buenas noches"
      }
    }
  },

  computed:{
    userCurrent(){
      return this.$store.state.clientAuth
    }
  }
}
</script>
