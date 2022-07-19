<template >
  <div class="h-screen">
    <NavGeneral />
    <Links />
  </div>
</template>
<script>
import NavGeneral from "../components/ParaTi/NavGeneral.vue";
import Links from "@/components/ParaTi/Links.vue";
export default {
  components: {
    NavGeneral,
    Links,
  },
};
</script>
