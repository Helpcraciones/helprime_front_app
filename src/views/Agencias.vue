<template>
    <div class="lg:mb-16 max-w-7xl lg:mx-auto flex flex-col">
        <NavGeneral/>
        <div class="mb-5 flex justify-center items-center lg:my-10 mt-5 py-20 px-5 bg-primario bg-opacity-10 rounded-xl ">
            <p class="text-texto lg:text-2xl text-xl font-light leading-tight text-center  ">Estas <span class="font-bold text-primario">Agencias de Seguros</span>, están disponibles para ofrecer sus servicios y así vas a poder habilitar este botón tan bonito </p>
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