<template>
  <div class="relative max-w-7xl mx-auto">
    <NavGeneral />
    <ContenidoGeneral />
    <!-- <ProveedorView /> -->
  </div>
</template>
<script>
import NavGeneral from "../components/Info/NavGeneral.vue";
import ContenidoGeneral from "../components/Info/ContenidoGeneral.vue";
/* import ProveedorView from '@/components/Agenda/ProveedorView.vue'; */
export default {
  components: { NavGeneral, ContenidoGeneral },
};
</script>
<style >
</style>