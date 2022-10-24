<template>
    <div class="lg:mb-16 max-w-7xl lg:mx-auto flex flex-col">
        <NavGeneral/>
        <div class="flex justify-center items-center lg:my-10 mt-5 py-20 px-5 bg-primario bg-opacity-10 rounded-xl ">
            <p class="text-texto lg:text-4xl text-2xl font-light leading-tight text-center  ">La mejores agencias solo <span class="font-bold text-primario">para ti</span> </p>
        </div>
        <Profile/>
    </div>
</template>
<script>
import NavGeneral from "../components/Agencias/NavGeneral.vue";
import Profile from "../components/Agencias/Profile.vue";
export default {
    components:{
        NavGeneral,
        Profile
    }
}
</script>
<style scoped>

</style>