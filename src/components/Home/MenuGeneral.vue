<template >
  <div class="menu w-full grid items-center justify-center sticky bottom-0 bg-white rounded-t-3xl mt-10">
    <router-link to="/info" class="call flex flex-col justify-between items-center">
      <i class="fi fi-rr-info text-primario flex justify-center items-center text-xl"></i>
      <p class="text-texto">Info</p>
    </router-link>

    <div class="flex justify-center items-center bg-primario home">
      <i class="fi fi-rr-home flex justify-center items-center bg-primario text-white text-xl"></i>
    </div>

    <router-link to="/perfil" class="flex flex-col justify-center items-center">
      <i class="fi fi-rr-user text-primario flex justify-center items-center text-xl"></i>
      <p class="text-texto">Mi perfil</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "MenuGeneral",
};
</script>
<style scoped>
.menu {
  grid-template-columns: 1fr auto 1fr;
  height: 70px;
  box-shadow: 0px -6px 10px #e1e1e1;
}

.home {
  position: relative;
  top: -20px;
  width: 70px;
  height: 70px;
  margin: auto;
  border-radius: 100%;
}
</style>