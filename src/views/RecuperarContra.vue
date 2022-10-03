<template>
    <div v-if="this.view" class="padding grid grid-cols-1 lg:grid-cols-2 h-screen bg">

        <div class="w-full flex flex-col justify-center items-center lg:px-10">
            <div class="w-full flex flex-col items-center justify-center">
                <i class="fi fi-rr-password text-primario text-7xl flex justify-center items-center"></i>
                <p class=" text-xl text-primario mt-5 font-semibold">Reestablecer contraseña</p>
                <p class="text-center leading-tight text-texto font-light px-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem nulla dolore</p>
            </div>

            <div class="w-full flex flex-col mt-10">
                <label for="password" class=" font-light text-primario text-sm">Contraseña nueva</label>
                <input v-model="this.password" type="password" name="password" id="password" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Agrega tu nueva contraseña">
            </div>
            <div class="w-full flex flex-col my-5">
                <label for="passwordConfirm" class="text-primario font-light text-sm">Confirmar contraseña</label>
                <input v-model="this.confirmPassword" type="password" name="password" id="passwordConfirm" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Agrega tu nueva contraseña">
            </div>
            

            <div @click="resetPassword" class="bg-primario text-white w-full flex justify-center items-center border-primario px-4 py-3 rounded-lg mt-5 cursor-pointer">
                <p class="w-max">Actualizar contraseña</p>
            </div>

            <p @click="cancelProcess" class="text-texto font-light text-sm mt-5 underline cursor-pointer select-none">Cancelar recuperacion</p>
        </div>
    </div>
</template>
<script>
import router from '@/router'
import { supabase } from "../supabase/init"
export default {

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
        eventState(){
            if(this.currentEvent === 'PASSWORD_RECOVERY'){
                this.view = true
            } else {
                this.view = false
                router.push('/')
            }
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
          /*   return this.$store.state.eventCurrent */
            return 'PASSWORD_RECOVERY'
        }
    }

}



</script>
<style scoped>
    .bg{
        background: white
    }

    @media screen and (min-width:1024px) {
        .bg{
        background: rgb(125,65,240);
        background: linear-gradient(90deg, rgba(125,65,240,1) 0%, rgba(255,255,255,0.3029586834733894) 100%);
            }
    }
</style>