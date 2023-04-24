<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 h-screen bg">
     <div class="h-screen lg:flex hidden justify-center items-center bg-primario bg-opacity-10">
        <!-- <atropos :shadow='false' class="p-10">
          <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1666648250/APP/104_ojgfo2.png" data-atropos-offset="0" />
        </atropos> -->
      </div>

      <div class="w-full flex flex-col justify-center items-center lg:px-10 lg:max-w-lg mx-auto px-5">
        <div class="w-full flex flex-col items-center justify-center">
          <i class="fi fi-rr-key text-primario text-7xl flex justify-center items-center"></i>
          <p class=" text-xl text-primario mt-5 font-semibold">Registrate en esta familia</p>
        </div>

        <div class="w-full flex flex-col mt-10 mb-5">
          <label for="email" class=" font-light text-primario text-sm">Email</label>
          <input v-model="this.registerData.email" type="email" name="password" id="email" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu correo electronico">
        </div>

        <div class="w-full flex flex-col">
          <label for="password" class="text-primario font-light text-sm">Contraseña</label>
          <input v-model="this.registerData.password" type="password" name="password" id="password" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu contraseña">
        </div>

        <div class="w-full flex flex-col my-5">
          <label for="passwordConfirm" class="text-primario font-light text-sm">Contraseña</label>
          <input v-model="this.registerData.confirm_password" type="password" name="password" id="passwordConfirm" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Confirma tu contraseña">
        </div>
        
        <div class="w-full flex text-sm text-red-700 bg-red-100 rounded-lg top-5 right-5 transition-all" :class="this.classDiv" role="alert">
          <svg aria-hidden="true" :class="this.classText" class="inline flex-shrink-0 mr-3 w-5 h-5 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <div class="transition-all" :class="this.classText">
            <span class="font-medium">Alerta!</span>{{this.textAlert}}
          </div>
        </div>

        <div @click="register" class="bg-primario text-white w-full flex justify-center items-center border-primario px-4 py-3 rounded-lg mt-5 cursor-pointer">
          <p class="w-max">Registrarte</p>
        </div>

        <div class=" flex justify-around w-full lg:flex-row flex-col items-center"> 
          <p @click="login" class="text-texto font-light text-sm mt-5 underline cursor-pointer select-none">Ya tienes cuenta?, Ingresa</p>

        <p @click="cancelRegister" class="text-texto font-light text-sm mt-5 underline cursor-pointer select-none">Cancelar registro</p>
        </div>
      </div>
    </div>
</template>
<script>
import router from '@/router'
import { supabase } from "../supabase/init"

export default {
  data() {
    return {
      registerData: {
        email: "",
        password: "",
        confirm_password: "",
      },

      verify: false,
      classDiv: "w-0 p-0",
      classText: "hidden",
      textAlert: "",
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
        console.log("registro");
        try{
          let {user, session, error } = await supabase.auth.signUp({
            email: this.registerData.email.toLowerCase(),
            password: this.registerData.password
          })
          if(supabase.auth.user()){
            router.push('/')
          }
          if(error) throw error;
        }catch(error){
          if (error.message == "User already registered") {
            this.verify = true
            this.classDiv = "w-72 p-4"
            this.classText = "block"
            this.textAlert = " Este correo ya ha sido registrado."

            setTimeout(() => {
              this.verify = false
              this.classDiv = "w-0 p-0"
              this.classText = "hidden"
            }, 5000);
          }
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
      if (this.registerData.email && this.registerData.password && this.registerData.confirm_password) {
        this.verify = false
        this.classDiv = "w-0 p-0"
        this.classText = "hidden"

        if(this.registerData.password === this.registerData.confirm_password){
          this.verify = false
        }else{
          this.textAlert = " La contraseña no coincide."
          this.verify = true
          this.classDiv = "w-72 p-4"
          this.classText = "block"

          setTimeout(() => {
            this.verify = false
            this.classDiv = "w-0 p-0"
            this.classText = "hidden"
          }, 5000);
        }
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

    /* async register(){
      if(this.verify){
        try{
          const {error} = await supabase.auth.signUp({
            email: this.registerData.email,
            password: this.registerData.password
          })
        if(error) throw error;
        this.notification = "Te haz registrado con éxito"
        this.style = "bg-green-100 text-green-600 w-max px-5 py-3"
        this.text = "flex"
        setTimeout(() => {
        this.style = "w-0  p-0"
        this.text = "sr-only"
         router.push('/') 
        }, 2000);
          console.log(error);
        }catch(error){
          if(error.status === 422){
            this.notification = 'Un minimo de 6 caracteres'
            this.style = "bg-yellow-100 text-yellow-600 w-max px-5 py-3"
            this.text = "flex"
            setTimeout(() => {
            this.style = "w-0  p-0"
            this.text = "sr-only"
            }, 3000);
          } else if (error.status === 400){
            this.notification = 'Usuario ya registrado'
            this.style = "bg-red-100 text-red-600 w-max px-5 py-3"
            this.text = "flex"
            setTimeout(() => {
            this.style = "w-0  p-0"
            this.text = "sr-only"
            router.push("/login")
            }, 3000);
          }
        }
      } else {
        this.notification = "No se puede hacer el registro, intenta más tarde"
      }
    }, */

    async cancelRegister(){
        const { error } = await supabase.auth.signOut()
        router.push('/')
        console.log(error);
      },

      async login(){
        router.push('/login')
      }
  },

  computed: {
  },
}
</script>

