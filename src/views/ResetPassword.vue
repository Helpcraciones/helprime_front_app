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
          <p class=" text-xl text-primario mt-5 font-semibold">Recuperar contraseña</p>
      </div>

      <div class="mb-5 w-full flex flex-col mt-10">
          <label for="email" class=" font-light text-primario text-sm">Email</label>
          <input v-model="this.email" type="email" name="password" id="email" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu correo electronico">
      </div>

      
      <button v-if="this.viewLoader == 'reset'" @click="metodoPrueba" class="px-2 py-2 mb-2 w-full text-white rounded-lg" :class="this.bg_button">Enviar link de recuperacion</button>
      <button v-if="this.viewLoader == 'loader' || this.viewLoader == 'send' || this.viewLoader == 'error'" class=" mb-2 w-full text-white rounded-xl" :class="this.bg_button">
        <div v-if="this.viewLoader == 'loader'" class="px-2 py-2 w-full flex justify-center cursor-wait">
          <p class="mr-3">enviando</p>
          <div class="flex justify-center items-center">
            <span class="loader"></span>
          </div>
        </div>
        <div v-if="this.viewLoader == 'error'" class="px-2 py-2 w-full flex justify-center cursor-pointer">
          <p class="mr-3">Error</p>
        </div>
        <div v-if="this.viewLoader == 'send'" class="px-2 py-2 w-full flex justify-center cursor-pointer">
          <p class="mr-3">Enviado</p>
        </div>
      </button>

      <div class="w-full flex text-sm text-red-700 bg-red-100 rounded-lg top-5 right-5 transition-all" :class="this.classDiv" role="alert">
        <svg aria-hidden="true" :class="this.classText" class="inline flex-shrink-0 mr-3 w-5 h-5 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div class="transition-all" :class="this.classText">
          <span class="font-medium">Alerta!</span>{{this.textAlert}}
        </div>
      </div>

      <div class=" flex lg:flex-row flex-col justify-around w-full items-center "> 
        <p @click="login" class="text-texto font-light text-sm mt-5 underline cursor-pointer select-none">Ya tienes cuenta?, Ingresa</p>
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
      email: "",

      verify: false,
      classDiv: "w-0 p-0",
      classText: "hidden",
      textAlert: "",

      viewLoader: 'reset',
      bg_button: 'bg-primario',
    }
  },

  mounted() {
    if(supabase.auth.user()){
      router.push('/')
    }
  },

  methods: {
    async metodoPrueba(){
      this.viewLoader = 'loader'
      if (this.email != '') {
        this.email = this.email.toLowerCase()
        try {
          const { data, error } = await supabase.from('clients_helprime').select('*').eq('email', `${this.email}`)
          if (data[0]) {
            if (data[0].status) {
              try {
                const { data, error } = await supabase.auth.api.resetPasswordForEmail(this.email)
                setTimeout(() => {
                  this.viewLoader = 'send'
                  this.bg_button = 'bg-green-400'
                  setTimeout(() => {
                    this.viewLoader = 'reset'
                    this.bg_button = 'bg-primario'
                    
                  }, 3000);
                }, 3000);
                
                if(error) throw error;
              } catch (error) {
                console.log(error.message);
              }
            } else {
              setTimeout(() => {
                this.viewLoader = 'error'
                this.bg_button = 'bg-red-500'
                this.classDiv = "w-72 p-4"
                this.classText = "block"
                this.textAlert = " La cuenta del correo ingresado se encuentra inactiva."
                setTimeout(() => {
                  this.viewLoader = 'reset',
                  this.bg_button = 'bg-primario',
                  this.classDiv = "w-0 p-0"
                  this.classText = "hidden"
                }, 3000);
              }, 1000);
            }
          } else{
            try {
              const { data, error } = await supabase.from('clients_agencies').select('*').eq('email', `${this.email}`)
              if (data[0]) {
                if (data[0].status) {
                  try {
                    const { data, error } = await supabase.auth.api.resetPasswordForEmail(this.email)
                    setTimeout(() => {
                      this.viewLoader = 'send'
                      this.bg_button = 'bg-green-400'
                      setTimeout(() => {
                        this.viewLoader = 'reset'
                        this.bg_button = 'bg-primario'
                        
                      }, 3000);
                    }, 3000);
                    
                    if(error) throw error;
                  } catch (error) {
                    console.log(error.message);
                  }
                } else {
                  setTimeout(() => {
                    this.viewLoader = 'error'
                    this.bg_button = 'bg-red-500'
                    this.classDiv = "w-72 p-4"
                    this.classText = "block"
                    this.textAlert = " La cuenta del correo ingresado se encuentra inactiva."
                    setTimeout(() => {
                      this.viewLoader = 'reset',
                      this.bg_button = 'bg-primario',
                      this.classDiv = "w-0 p-0"
                      this.classText = "hidden"
                    }, 3000);
                  }, 1000);
                }
              } else{
                setTimeout(() => {
                  this.viewLoader = 'error'
                  this.bg_button = 'bg-red-500'
                  this.classDiv = "w-72 p-4"
                  this.classText = "block"
                  this.textAlert = " El correo ingresado no existe."
                  setTimeout(() => {
                    this.viewLoader = 'reset',
                    this.bg_button = 'bg-primario',
                    this.classDiv = "w-0 p-0"
                    this.classText = "hidden"
                  }, 3000);
                }, 1000);
              }

              if(error) throw error;
            } catch (error) {
              console.log(error.message);
            }
          }

          if(error) throw error;
        } catch (error) {
          console.log(error.message);
        }
      } else{
        setTimeout(() => {
          this.viewLoader = 'reset'
          this.classDiv = "w-72 p-4"
          this.classText = "block"
          this.textAlert = " No se admiten campos vacios."
          setTimeout(() => {
            this.classDiv = "w-0 p-0"
            this.classText = "hidden"
          }, 3000);
        }, 1000);
      }
      
    },

    login(){
      router.push('/login')
    },

    async cancelLogin(){
      const { error } = await supabase.auth.signOut()
      router.push('/')
      console.log(error);
    }

  },

}
</script>

