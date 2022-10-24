<template>
    <div class="padding pt-3 lg:pt-5 flex justify-between items-center">
        <router-link to="/">
        <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1661897865/APP/logo-01_etyrwc.svg" alt="Logo vital seguros" @click="toggleColor" class="h-7 lg:h-8  "></router-link>
        

            <div class="lg:flex hidden gap-3 text-texto">
                 <router-link to="/" class="hover:text-primario transform transition-all duration-300 hover:scale-105 ">Inicio</router-link>
                 <div class="border-primario border-r"></div>
                <router-link to="/agencias" class="text-primario transform transition-all duration-300 hover:scale-105 underline">Agencias</router-link>
                <div class="border-primario border-r"></div>
                <router-link to="/#categorias" class="hover:text-primario transform transition-all duration-300 hover:scale-105">Categorias</router-link>
                <div class="border-primario border-r"></div>
                <router-link to="/#contactanos" class="hover:text-primario transform transition-all duration-300 hover:scale-105">Contactanos</router-link>
                
            </div>
            
              <div class="lg:flex hidden gap-3">
                <router-link to="/perfil" class="text-primario bg-primario bg-opacity-10 px-5 py-2 rounded-lg transform transition-all duration-300 hover:scale-105">Dashboard</router-link>
                <router-link to="/perfil" class="text-white bg-primario px-5 py-2 rounded-lg transform transition-all duration-300 hover:scale-105">Mi perfil</router-link>
            </div>
            

    </div>
</template>
<script>
export default {
    name: 'NavGeneral',
    data() {
        return {
            color: false
        }
    },
    methods: {
            toggleColor(){
                this.color = !this.color
            }
        },
}
</script>
<style scoped>
.colorNotification{
    @apply bg-green-400 !important
}


</style>
