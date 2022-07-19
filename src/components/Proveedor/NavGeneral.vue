<template>
    <div class="padding flex justify-between items-center">
        <i  @click="$router.go(-1)" class="fi fi-rr-arrow-left text-primario text-3xl pr-5 py-5 flex justify-center items-center"></i>
        <i class="fi fi-rr-heart  flex justify-center  items-center text-primario text-3xl"></i>
    </div>
</template>
<script>
export default {
    name: "NavGeneral"
}
</script>
<style scoped>
    
</style>