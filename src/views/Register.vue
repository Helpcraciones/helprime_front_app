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
          <h1 class="text-center text-primario font-bold text-xl">Registrate</h1>
        </div>
        <div class="mb-5 w-full">
          <label for="fullname" class="mb-2 text-texto font-semibold text-sm">Nombre completo</label>
          <div class="border-b border-primario">
            <input name="fullname" id="fullname" type="text" placeholder="Ingresa tu nombre" v-model="this.registerData.fullname" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="alias" class="mb-2 text-texto font-semibold  text-sm">Alias</label>
          <div class="border-b border-primario">
            <input name="alias" id="alias" type="text" placeholder="Ingresa como quieres que te llamemos" v-model="this.registerData.alias" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="email" class="mb-2 text-texto font-semibold  text-sm">Correo electronico</label>
          <div class="border-b border-primario">
            <input name="email" id="email" type="email" placeholder="Ingresa como quieres que te llamemos" v-model="this.registerData.email" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="type_document" class="mb-2 text-texto font-semibold  text-sm">Tipo de documento</label>
          <div class="border-b border-primario">
            <select v-model="this.registerData.type_document" class="w-full px-3 py-2 border border-none rounded-lg text-blueGray-600" name="type_document" id="type_document">
              <option value="" disabled selected>Seleccionar</option>
              <option value="cc" >cc</option>
              <option value="ti" >ti</option>
            </select>
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="document" class="mb-2 text-texto font-semibold  text-sm">Número de documento</label>
          <div class="border-b border-primario">
            <input name="document" id="document" type="text" placeholder="112194****" v-model="this.registerData.document" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="gender" class="mb-2 text-texto font-semibold  text-sm">Genero</label>
          <div class="border-b border-primario">
            <select v-model="this.registerData.gender" class="w-full px-3 py-2 border border-none rounded-lg text-blueGray-600" name="gender" id="gender">
              <option value="" disabled selected>Seleccionar</option>
              <option value="masculino" >Masculino</option>
              <option value="femenino" >Femenino</option>
            </select>
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="date_birth" class="mb-2 text-texto font-semibold  text-sm">Fecha de cumpleaños</label>
          <div class="border-b border-primario">
            <input name="date_birth" id="date_birth" type="date" v-model="this.registerData.date_birth" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="phone" class="mb-2 text-texto font-semibold  text-sm">Teléfono</label>
          <div class="border-b border-primario">
            <input name="phone" id="phone" type="number" placeholder="321385****" v-model="this.registerData.phone" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="password" class="mb-2 text-texto font-semibold  text-sm">Contraseña</label>
          <div class="border-b border-primario">
            <input name="password" id="password" type="number" placeholder="321385****" v-model="this.registerData.password" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-10 w-full">
          <label for="confirm_password" class="mb-2 text-texto font-semibold  text-sm">Confirmar contraseña</label>
          <div class="border-b border-primario">
            <input name="confirm_password" id="confirm_password" type="number" placeholder="321385****" v-model="this.registerData.confirm_password" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <button @click="verifyData" class="px-2 py-2 w-full text-white bg-primario rounded-lg">Registrarme</button>
      </div>
    </form>
  </div>
</template>
<script>
/* import router from '@/router'
import { supabase } from "../supabase" */

export default {
  data() {
    return {
      registerData: {
        fullname: "",
        alias: "",
        email: "",
        type_document: "",
        document: "",
        gender: "",
        date_birth: "",
        phone: "",
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
  },

  methods: {
    async register(){
      this.verifyData()
      if (this.verify) {
        console.log("registrado");
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
      if (this.registerData.fullname && this.registerData.alias && this.registerData.email && this.registerData.type_document && this.registerData.document && this.registerData.gender && this.registerData.date_birth && this.registerData.phone && this.registerData.password && this.registerData.confirm_password) {
        this.verify = false
        this.classDiv = "w-0 p-0"
        this.classText = "hidden"

        if(this.registerData.password === this.registerData.confirm_password){
          console.log("password igual")
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
}
</script>

