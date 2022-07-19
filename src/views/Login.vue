<template>
  <div class="py-10 px-5 relative">
    <div class="fixed flex text-sm text-red-700 bg-red-100 rounded-lg top-5 right-5 transition-all" :class="this.classDiv" role="alert">
      <svg aria-hidden="true" :class="this.classText" class="inline flex-shrink-0 mr-3 w-5 h-5 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <div class="transition-all" :class="this.classText">
        <span class="font-medium">Alerta!</span>{{this.textAlert}}
      </div>
    </div>

    <form class="flex bg-white" @submit.prevent="onSubmit">
      <div class="w-full">
        <div class="mb-5 w-full flex flex-col items-center">
          <i class="mb-2 flex items-center text-7xl text-primario fi fi-rr-users"></i>
          <h1 class="text-center text-primario font-bold text-xl">Iniciar sesion</h1>
        </div>
        <div class="mb-5 w-full">
          <label for="email" class="mb-2 text-texto font-semibold  text-sm">Correo electronico</label>
          <div class="border-b border-primario">
            <input name="email" id="email" type="email" placeholder="Ingresa como quieres que te llamemos" v-model="this.loginData.email" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="password" class="mb-2 text-texto font-semibold  text-sm">Contraseña</label>
          <div class="border-b border-primario">
            <input name="password" id="password" type="password" placeholder="321385****" v-model="this.loginData.password" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <button @click="register" class="px-2 py-2 mb-2 w-full text-white bg-primario rounded-lg">Iniciar sesion</button>
        <router-link to="/register">
          <p class="text-center text-primario">No tienes una cuenta?</p>
        </router-link>
      </div>
    </form>
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

      verify: false,
      classDiv: "w-0 p-0",
      classText: "hidden",
      textAlert: ""

    }
  },

  mounted() {
    if(supabase.auth.user()){
      router.push('/')
    }
  },

  methods: {
    async register(){
       this.verifyData()
      if (!this.verify) {
        try{
          let { error } = await supabase.auth.signIn({
            email: this.loginData.email,
            password: this.loginData.password
          })

          if(error) throw error;
          router.push('/')

        } catch (e){
          console.log(e)
          if (e.message == "Invalid login credentials") {
            this.verify = true
            this.classDiv = "w-72 p-4"
            this.classText = "block"
            this.textAlert = " Correo o contraseña incorrectos."

            setTimeout(() => {
              this.verify = false
              this.classDiv = "w-0 p-0"
              this.classText = "hidden"
            }, 5000);
          }
          /* setTimeout(() => {
              this.verify = false
          }, 4000); */
          
        }  
      }
      /* if(this.password === this.confirmPassword){
        console.log(this.email, this.password, this.confirmPassword)
        this.verify = false
        try{
          let {error } = await supabase.auth.signUp({
            email: this.email,
            password: this.confirmPassword
          })
          if(error) throw error;
        }catch(error){
            console.log(error.message)
        }
      }else {
        this.verify = true
        console.log("Estoy mal")
      }  */
    },

    verifyData(){
      if (this.loginData.password != "") {
        this.verify = false
        this.classDiv = "w-0 p-0"
        this.classText = "hidden"

      }else {
        this.verify = true
        this.classDiv = "w-72 p-4"
        this.classText = "block"
        this.textAlert = " No se admiten campos vacios."

        setTimeout(() => {
          this.verify = false
          this.classDiv = "w-0 p-0"
          this.classText = "hidden"
        }, 5000);
      }
    }
  },
}
</script>

