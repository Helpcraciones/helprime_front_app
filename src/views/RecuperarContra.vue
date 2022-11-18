<template>
        <div v-if="this.view" class="grid grid-cols-1 lg:grid-cols-2 h-screen bg">
            <div class="h-screen hidden lg:flex justify-center items-center bg-primario bg-opacity-10">
            <atropos :shadow='false' class="p-10">
            <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1666648250/APP/104_ojgfo2.png" data-atropos-offset="0" />
            </atropos>
            </div>

        <div class="w-full flex flex-col justify-center items-center lg:px-10 lg:max-w-lg mx-auto px-5">
            <div class="w-full flex flex-col items-center justify-center">
                <i class="fi fi-rr-password text-primario text-7xl flex justify-center items-center"></i>
                <p class=" text-xl text-primario mt-5 font-semibold">Actualizar contraseña</p>
                <p class="text-center leading-tight text-texto font-light px-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem nulla dolore</p>
            </div>

            <div class="w-full flex flex-col mt-10">
                <label for="email" class=" font-light text-primario text-sm">Contraseña</label>
                <input v-model="this.password" type="email" name="password" id="email" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu contraseña">
            </div>
            <div class="w-full flex flex-col my-5">
                <label for="passwordConfirm" class="text-primario font-light text-sm">Confirmar contraseña</label>
                <input v-model="this.passwordConfirm" type="password" name="password" id="passwordConfirm" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Confirma tu contraseña">
            </div>
            

            <div @click="resetPassword" class="bg-primario text-white w-full flex justify-center items-center border-primario px-4 py-3 rounded-lg mt-5 cursor-pointer">
                <p class="w-max">Actualizar contraseña</p>
            </div>


            <p @click="cancelProcess" class="text-texto font-light text-sm mt-5 underline cursor-pointer select-none">Cancelar actualizacion</p>
        </div>
    </div>
</template>
<script>
import Atropos from 'atropos/vue';
import router from '@/router'
import { supabase } from "../supabase/init"
export default {

    components:{
        Atropos
    },
    data() {
        return {
            view: undefined,
            alert: "",
            check: false,
            password:"",
            confirmPassword:""
        }
    },

    created() {
        this.eventState();

        
    },

    mounted() {
        
    },

    methods: {
        async eventState(){
               setTimeout(() => {
                 if(this.currentEvent === 'PASSWORD_RECOVERY'){
                    this.view = true
                    console.log('soy la recuperacion');
                } else{
                    console.log('no soy el password recovery');
                    this.view = false
                    router.push('/')
                }
               }, 1000);
        },

        async cancelProcess(){
            const { error } = await supabase.auth.signOut()
            router.push("/")
        },

        async resetPassword(){
            if (this.password != '' && this.confirmPassword != '') {
                if (this.password === this.confirmPassword) {
                try {
                    const { error, data } = await supabase.auth.update({password: this.confirmPassword,})
                    if(error) throw error;
                    router.push('/')
                } catch (error) {
                    console.log(error.message);
                }
                } else {
                    this.alert = "Las contrasenias no coinciden"
                }
            } else {
                this.check = true
            }
    },


    },

    computed:{
        currentEvent(){
            return this.$store.state.eventCurrent
        }
    }

}



</script>
<style scoped>

</style>