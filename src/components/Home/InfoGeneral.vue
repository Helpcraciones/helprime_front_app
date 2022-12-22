<template>
    <div class="lg:grid hidden gridd padding mx-auto w-11/12 mt-20 max-w-7xl">
        <div class="my-auto">
            <p class="text-6xl leading-8 text-primario font-light">Todo lo que <br> <span class="font-bold text-9xl">buscas</span> <br> en un  solo lugar</p>
            <p class="leading-tight text-texto mt-8 w-5/6 font-light">Llega a este mundo la solucion para que tengas toda la documentacion de tus cosas al alcance de un clic.</p>
            <div class="flex w-5/6 justify-start items-center mt-10 bg-gray-50 rounded-l-lg shadow-2xl p-2 rounded-lg">
                <input v-model="this.email" type="text" class="w-full border-none bg-transparent text-texto px-5 font-light" placeholder="Correo electronico">
                <button @click="sendEmail" class=" w-max  px-5 py-3 bg-primario bg-opacity-10 text-primario  rounded-lg  hover:text-white hover:bg-primario transition-all duration-300 ease-in-out hover:scale-105 transform"><p class="w-max">Comienza ahora!</p></button>
            </div>
        </div>
        <div class=" w-full">
            <img rel="dns-prefetch"  src="https://res.cloudinary.com/vital-seguros/image/upload/v1671712266/APP/37_2_hslesk-_1__knetdl.webp" alt="" class="w-96 h-auto mx-auto">
        </div>
    </div>
</template>
<script>
import router from '@/router'
export default {
    name : 'info',
    data() {
        return {
            email: ""
        }
    },



    methods: {
        sendEmail(){
            this.$store.commit("emailRegister", this.email)
            router.push('/registro')
        }
    },

    computed: {
        
    },
}
</script>
<style scoped>

.gridd{
    grid-template-columns: 55% 45%;
}

</style>