<template>
  <div class=" my-10 ">
    <p class="text-primario text-xl font-medium mb-10 pl-10  ">Mis vehículos</p>
    <!-- <Carousel :settings="settings" :wrap-around="true" class="pl-8">
      <Slide v-for="vehicle in getVehicles" :key="vehicle.id" class="mr-5 pb-5 ">
        <div class="bg-white sha text-black w-full h-full flex flex-col justify-between items-center rounded-xl ">
          <img class="max-h-32" :src="vehicle.type" alt="Tipo de vehiculo" >
          <div class="p-4 bg-white rounded-xl">
            <p class="text-primario text-3xl font-semibold">{{vehicle.license}}</p>
            <p class="text-texto text-2xl my-2 text font-medium">{{vehicle.brand}}</p>
          </div>
        </div>
      </Slide>
    </Carousel> -->
    <div class="padding mt-5">
      <div class=" bg-primario shadow-lg text-texto w-full h-max flex justify-evenly items-center rounded-3xl py-5 ">
        <i class="fi fi-rr-add text-3xl flex justify-center items-center bg-primario text-white"></i>
        <div class="py-4 rounded-xl bg-primario">
            <p class="text-white text-xl  bg-primario flex flex-col justify-center items-center">Agrega un  nuevo vehiculo</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* import { Carousel, Slide } from 'vue3-carousel'; */
export default {
    name:'MyVehicles',
     /* components: {
    Carousel,
    Slide
  }, */
     data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2.4,
      snapAlign: 'start',
    }
  }),

    computed:{
        /* getVehicles(){
            return this.$store.state.vehicles
        } */
    }
}
</script>

<style scoped>
    
    .text{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    overflow: hidden;
    }

    .sha{
        box-shadow:  5px 5px 5px #d3d3d3
    }

</style>
