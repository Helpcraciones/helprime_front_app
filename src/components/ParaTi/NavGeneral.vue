<template>
    <div class="padding flex justify-between items-center">
        <i  @click="$router.go(-1)" class="fi fi-rr-arrow-left text-primario text-3xl pr-5 py-5 flex justify-center items-center"></i>
        <!-- <p class="text-primario font-bold text-3xl">Mis polizas</p> -->
    </div>
</template>
<script>
export default {
    name: "NavGeneral"
}
</script>
<style scoped>
    
</style>