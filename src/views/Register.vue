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

            <div class="w-full flex flex-col mt-10">
                <label for="email" class=" font-light text-primario text-sm">Email</label>
                <input v-model="this.registerData.email" type="email" name="password" id="email" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu correo electronico">
            </div>
            <div class="w-full flex flex-col my-5">
                <label for="password" class="text-primario font-light text-sm">Contraseña</label>
                <input v-model="this.registerData.password" type="password" name="password" id="password" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Ingresa tu contraseña">
            </div>

            <div class="w-full flex flex-col my-5">
                <label for="passwordConfirm" class="text-primario font-light text-sm">Contraseña</label>
                <input v-model="this.registerData.confirm_password" type="password" name="password" id="passwordConfirm" class="text-texto border-t-0 border-r-0 border-l-0 border-b focus:border-primario border-primario px-4" placeholder="Confirma tu contraseña">
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
      textAlert: ""

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

    async register(){
       this.verifyData()
       if (!this.verify) {
        console.log("registrado");
        try{
          let {error } = await supabase.auth.signUp({
            email: this.registerData.email,
            password: this.registerData.password
          })
          router.push('/perfil')
          if(error) throw error;
        }catch(error){
            console.log(error.message)
        }
      }

    },

    async cancelRegister(){
        const { error } = await supabase.auth.signOut()
        router.push('/')
        console.log(error);
      },

      async login(){
        router.push('/login')
      },

    verifyData(){
      if (this.registerData.email && this.registerData.password && this.registerData.confirm_password) {
        this.verify = false
        this.classDiv = "w-0 p-0"
        this.classText = "hidden"

        if(this.registerData.password === this.registerData.confirm_password){
          console.log("password igual")
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
    }
  },

  computed: {
    emailHome(){
      return this.$store.state.emailHome
    }
  },
}
</script>

