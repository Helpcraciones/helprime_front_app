<template>
  <div class=" relative">
    <NavGeneral />
    <ContenidoGeneral />
    <!-- <ProveedorView /> -->
  </div>
</template>
<script>
import NavGeneral from "../components/Agenda/NavGeneral.vue";
import ContenidoGeneral from "../components/Agenda/ContenidoGeneral.vue";
/* import ProveedorView from '@/components/Agenda/ProveedorView.vue'; */
export default {
  components: { NavGeneral, ContenidoGeneral },
};
</script>
<style >
</style>