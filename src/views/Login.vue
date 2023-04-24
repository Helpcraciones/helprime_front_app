<template>
  <div class="flex flex-col lg:grid lg:grid-cols-2 h-screen bg">
    <div class="h-screen hidden lg:flex justify-center items-center bg-primario bg-opacity-10">
      <atropos :shadow='false' class="p-10">
        <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1666648250/APP/104_ojgfo2.png" data-atropos-offset="0" />
      </atropos>
    </div>

    <div class="px-5 pt-5 w-full flex lg:hidden">
      <router-link to="/" >
        <i class="fi fi-rr-arrow-left text-primario text-2xl flex justify-center text-left"></i>
      </router-link>
    </div>


    <div class="w-full h-full flex flex-col justify-center items-center lg:px-10 lg:max-w-lg mx-auto px-5">
      <div class="w-full flex flex-col items-center justify-center">
          <i class="fi fi-rr-key text-primario text-7xl flex justify-center items-center"></i>
          <p class=" text-xl text-primario mt-5 font-semibold">Inicio de sesion</p>
      </div>

      <div class="w-full flex flex-col mt-10">
          <label for="email" class=" font-light text-primario text-sm">Email</label>
          <input v-model="this.loginData.email" type="email" name="password" id="email" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu correo electronico">
      </div>
      <div class="w-full flex flex-col my-5">
          <label for="passwordConfirm" class="text-primario font-light text-sm">Contraseña</label>
          <input v-model="this.loginData.password" type="password" name="password" id="passwordConfirm" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu contraseña">
      </div>

      <div class="w-full flex text-sm text-red-700 bg-red-100 rounded-lg top-5 right-5 transition-all" :class="this.classDiv" role="alert">
        <svg aria-hidden="true" :class="this.classText" class="inline flex-shrink-0 mr-3 w-5 h-5 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div class="transition-all" :class="this.classText">
          <span class="font-medium">Alerta!</span>{{this.textAlert}}
        </div>
      </div>
      
      <div @click="verifyLogin" class="bg-primario text-white w-full flex justify-center items-center border-primario px-4 py-3 rounded-lg mt-5 cursor-pointer">
          <p class="w-max">Iniciar sesion</p>
      </div>

      <div class=" flex lg:flex-row flex-col justify-around w-full items-center "> 
        <p @click="register" class="text-texto font-light text-sm mt-5 underline cursor-pointer select-none">No te haz registrado?, Registrate</p>

      <p @click="cancelLogin" class="text-texto font-light text-sm mt-5 underline cursor-pointer select-none">Cancelar ingreso</p>
      </div>
    </div>
  </div>
</template>
<script>
import Atropos from 'atropos/vue';
import router from '@/router'
import { supabase } from "../supabase/init"

export default {

  components: {
      Atropos,
    },

  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
      verify: false,
      classDiv: "w-0 p-0",
      classText: "hidden",
      textAlert: "",

      res1: {},
      res2: {},
      currentData: null
    }
  },

  mounted() {
    if(supabase.auth.user()){
      router.push('/')
    }
  },

  methods: {
    /* async login(){
      
      try {
        const { user, session, error } = await supabase.auth.signIn({
          email: this.loginData.email,
          password: this.loginData.password,
        })
          if(error) throw error
          router.push("/#categorias")
      } catch (error) {
        if (error){
          console.log(error.message);
        }
      }
        
    }, */

    async verifyLogin(){
      this.verifyData()
      if (!this.verify) {
        try{
          const { data, error } = await supabase.from('clients_helprime').select('*').eq('email', this.loginData.email )
          if(error) throw error;
          if (data.length) {
            this.res1 = data[0]
            this.currentData = data[0]
          } else{
            try{
              const { data, error } = await supabase.from('clients_agencies').select('*').eq('email', this.loginData.email )
              this.res2 = data[0]
              this.currentData = data[0]
              if(error) throw error;
            } catch (e){
              console.log(e)
            }
          }
        } catch (e){
          console.log(e)
        }  

        this.login()
        
      }
    },

    async login(){
      if (this.currentData) {
        if (this.currentData.status) {
          try {
            let { user, error } = await supabase.auth.signIn({
              email: this.loginData.email,
              password: this.loginData.password
            })

            if(supabase.auth.user()){
              router.push('/')
            }

            if(error) throw error;
          } catch (error) {
            if (error.message == "Invalid login credentials") {
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
          }
        } else{
          this.verify = true
          this.classDiv = "w-72 p-4"
          this.classText = "block"
          this.textAlert = " La cuenta ingresada se encuentra inactiva"

          setTimeout(() => {
            this.verify = false
            this.classDiv = "w-0 p-0"
            this.classText = "hidden"
          }, 5000);
        }
      } else{
        this.verify = true
        this.classDiv = "w-72 p-4"
        this.classText = "block"
        this.textAlert = " La cuenta ingresada no existe o no tiene acceso en este sitio"

        setTimeout(() => {
          this.verify = false
          this.classDiv = "w-0 p-0"
          this.classText = "hidden"
        }, 5000);
      }
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
    },

    register(){
      router.push('/registro')
    },

    async cancelLogin(){
      const { error } = await supabase.auth.signOut()
      router.push('/')
      console.log(error);
    }

  },

}
</script>

