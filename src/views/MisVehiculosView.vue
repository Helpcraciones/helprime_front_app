<template >
  <div class="h-screen">
    <NavGeneral />
    <MyVehicles />
  </div>
</template>
<script>
import NavGeneral from "../components/MisVehiculos/NavGeneral.vue";
import MyVehicles from "@/components/MisVehiculos/MyVehicles.vue";
export default {
  components: {
    NavGeneral,
    MyVehicles,
  },
};
</script>
