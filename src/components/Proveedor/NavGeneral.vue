<template>
    <div class="padding pt-3 flex justify-between items-center">
        <i  @click="$router.go(-1)" class="fi fi-rr-arrow-left text-primario text-2xl pr-5 flex justify-center items-center"></i>
        <p class="text-primario font-bold">Villavicencio</p>
    </div>
</template>
<script>
export default {
    name: "NavGeneral"
}
</script>
<style scoped>
    
</style>