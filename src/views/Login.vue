<template>

  <div class="padding grid grid-cols-1 lg:grid-cols-2 h-screen bg">
        <div class="w-full flex flex-col justify-center items-center lg:px-10">
            <div class="w-full flex flex-col items-center justify-center">
                <i class="fi fi-rr-key text-primario text-7xl flex justify-center items-center"></i>
                <p class=" text-xl text-primario mt-5 font-semibold">Inicio de sesion</p>
                <p class="text-center leading-tight text-texto font-light px-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem nulla dolore</p>
            </div>

            <div class="w-full flex flex-col mt-10">
                <label for="email" class=" font-light text-primario text-sm">Email</label>
                <input v-model="this.loginData.email" type="email" name="password" id="email" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu correo electronico">
            </div>
            <div class="w-full flex flex-col my-5">
                <label for="passwordConfirm" class="text-primario font-light text-sm">Contraseña</label>
                <input v-model="this.loginData.password" type="password" name="password" id="passwordConfirm" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu contraseña">
            </div>
            

            <div @click="login" class="bg-primario text-white w-full flex justify-center items-center border-primario px-4 py-3 rounded-lg mt-5 cursor-pointer">
                <p class="w-max">Iniciar sesion</p>
            </div>

            <p @click="cancelLogin" class="text-texto font-light text-sm mt-5 underline cursor-pointer select-none">Cancelar inicio</p>
        </div>
    </div>
</template>
<script>
import router from '@/router'
import { supabase } from "../supabase/init"

export default {
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    }
  },

  created() {
    if(supabase.auth.user()){
      router.push('/')
    }
  },

  methods: {
    async login(){
      
      try {
        const { user, session, error } = await supabase.auth.signIn({
          email: this.loginData.email,
          password: this.loginData.password,
        })
          if(error) throw error
          router.push("/")
      } catch (error) {
        if (error){
          console.log(error.message);
        }
      }
        
      },

      async cancelLogin(){
        const { error } = await supabase.auth.signOut()
        router.push('/')
        console.log(error);
      }


    },

  }
</script>

