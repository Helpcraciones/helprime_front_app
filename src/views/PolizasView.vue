<template >
  <div class=" h-full">
    <NavGeneral/>
    <div class="px-5">
      <p class=" text-primario text-xl font-bold">Semaforo</p>
    </div>
    <!-- <div class=" grid" style="grid-template-columns: 1fr auto;">
      <div class="p-5">
        <div class="flex">
          <div class="mr-5">
            <div class="p-2 grid justify-center bg-gray-200 rounded-full">
              <div class="mb-2 w-8 h-8 rounded-full bg-green-400"></div>
              <div class="mb-2 w-8 h-8 rounded-full bg-amarillo"></div>
              <div class="w-8 h-8 rounded-full bg-red-500"></div>
            </div>
          </div>
          <div class="py-2 flex flex-col justify-between">
            <p class=" text-gray-700">Poliza activa</p>
            <p class=" text-gray-700">Poliza a vencerse</p>
            <p class=" text-gray-700">Poliza vencida</p>
          </div>
        </div>
      </div>
      <div class="p-5 flex items-center">
        <div class="">
          <p class="text-center text-xl text-primario font-medium">Cuentas con</p>
          <p class="text-center text-5xl text-primario font-bold">99</p>
          <p class="text-center text-xl text-primario font-medium">Polizas en total</p>
        </div>
      </div>
    </div> -->
    <PolizasVehiculares/>
    <PolizasHogar/>
    <PolizasMedica/>
    <PolizasVida/>
  </div>
  <!-- <div class="absolute bottom-5 right-5">
    <div class="h-full w-full p-10 rounded-full bg-red-600 border-2 border-white shadow-xl">
    </div>
  </div> -->
</template>
<script>
import NavGeneral from '../components/Polizas/NavGeneral.vue'
import PolizasVehiculares from '../components/Polizas/PolizasVehiculares.vue'
import PolizasHogar from '@/components/Polizas/PolizasHogar.vue';
import PolizasMedica from '@/components/Polizas/PolizasMedica.vue';
import PolizasVida from '@/components/Polizas/PolizasVida.vue';
export default {
  components: {
    NavGeneral,
    PolizasVehiculares,
    PolizasHogar,
    PolizasMedica,
    PolizasVida
  },
/* 
  mounted() {
    console.log(this.session);
  },

  computed:{
    session(){
      return  this.$store.state.userAuth
    }
  } */
}
</script>
