<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 h-screen bg">

     <div class="h-screen lg:flex hidden justify-center items-center bg-primario bg-opacity-10">
        <atropos :shadow='false' class="p-10">
          <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1666648250/APP/104_ojgfo2.png" data-atropos-offset="0" />
      </atropos>
      </div>

        <div class="w-full flex flex-col justify-center items-center lg:px-10 lg:max-w-lg mx-auto px-5">
            <div class="w-full flex flex-col items-center justify-center">
                <i class="fi fi-rr-key text-primario text-7xl flex justify-center items-center"></i>
                <p class=" text-xl text-primario mt-5 font-semibold">Registrate en esta familia</p>
                <p class="text-center leading-tight text-texto font-light px-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem nulla dolore</p>
            </div>

            <div class="w-full flex flex-col mt-10 mb-5">
                <label for="email" class=" font-light text-primario text-sm">Email</label>
                <input v-model="this.registerData.email" type="email" name="password" id="email" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu correo electronico">
            </div>
            <div class="w-full flex flex-col">
                <label for="password" class="text-primario font-light text-sm">Contraseña</label>
                <input @change="passwordEqual" v-model="this.registerData.password" type="password" name="password" id="password" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu contraseña">
            </div>

            <div class="w-full flex flex-col my-5">
                <label for="passwordConfirm" class="text-primario font-light text-sm">Contraseña</label>
                <input @change="passwordEqual" v-model="this.registerData.confirm_password" type="password" name="password" id="passwordConfirm" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Confirma tu contraseña">
            </div>

            <div v-if="this.registerData.confirm_password != '' " class="mr-auto text-texto font-light text-sm flex items-center"><i v-if="this.alert ==='Las contraseñas no coinciden' " class="fi fi-rr-cross-circle flex justify-center items-end text-red-500"></i> <i v-else class="fi fi-rr-badge-check flex justify-center items-center text-green-500"></i><p class="ml-2">{{this.alert}}</p></div>
            

            <div @click="register" class="bg-primario text-white w-full flex justify-center items-center border-primario px-4 py-3 rounded-lg mt-5 cursor-pointer">
                <p class="w-max">Registrarte</p>
            </div>

            <div class=" flex justify-around w-full lg:flex-row flex-col items-center"> 
              <p @click="login" class="text-texto font-light text-sm mt-5 underline cursor-pointer select-none">Ya tienes cuenta?, Ingresa</p>

            <p @click="cancelRegister" class="text-texto font-light text-sm mt-5 underline cursor-pointer select-none">Cancelar registro</p>
            </div>

        </div>

        <div :class="this.style" class="absolute  top-5 left-5 rounded-lg shadow-lg transform ease-in-out transition-all duration-300">
          <div :class="this.text">
          <i class="fi fi-rr-exclamation flex justify-center items-center"></i> <p class="ml-3">{{this.notification}}</p>
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
      style: "",
      text: "sr-only",
      notification : "",
      alert : "Las contraseñas no coinciden"
    }
  },

  mounted() {
    console.log(this.emailHome);
    if(supabase.auth.user()){
      router.push('/')
    }
      this.emailChange()
  },

  methods: {

    emailChange(){
      if(this.emailHome != ""){
        this.registerData.email = this.emailHome
      } else{
        this.registerData.email = ""
      }
    },

    passwordEqual(){
      if(this.registerData.password === this.registerData.confirm_password){
        this.verify = true
        this.alert = "Las contraseñas coinciden "
      } else{
        this.verify = false
        this.alert = "Las contraseñas no coinciden"
      }
    },

    async register(){
      if(this.verify){
        try{
          const {error } = await supabase.auth.signUp({
            email: this.registerData.email,
            password: this.registerData.password
          })
          
        this.notification = "Te haz registrado con éxito"
        this.style = "bg-green-100 text-green-600 w-max px-5 py-3"
        this.text = "flex"
        setTimeout(() => {
        this.style = "w-0  p-0"
        this.text = "sr-only"
         router.push('/') 
        }, 2000);
          
          console.log(error);
          if(error) throw error;
        }catch(error){
          if(error.status === 422){
            this.notification = 'Unminimo de 6 caracteres'
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
    },

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
    emailHome(){
      return this.$store.state.emailHome
    }
  },
}
</script>

