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
          <h1 class="text-center text-primario font-bold text-xl">Datos personales</h1>
        </div>
        <div class="mb-5 w-full">
          <label for="fullname" class="mb-2 text-texto font-semibold  text-sm">Nombre completo</label>
          <div class="border-b border-primario">
            <input name="fullname" id="fullname" type="text" placeholder="Ingresa como quieres que te llamemos" v-model="this.formData.fullname" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="alias" class="mb-2 text-texto font-semibold  text-sm">Alias</label>
          <div class="border-b border-primario">
            <input name="alias" id="alias" type="text" placeholder="Ingresa como quieres que te llamemos" v-model="this.formData.alias" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="email" class="mb-2 text-texto font-semibold  text-sm">Correo electronico</label>
          <div class="border-b border-primario">
            <input name="email" id="email" type="email" placeholder="Ingresa como quieres que te llamemos" v-model="this.formData.email" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="type_document" class="mb-2 text-texto font-semibold  text-sm">Tipo de documento</label>
          <div class="border-b border-primario">
            <!-- <input name="type_document" id="type_document" type="text" placeholder="Ingresa como quieres que te llamemos" v-model="this.formData.type_document" class="px-5 py-1 w-full border-none"/> -->
            <select name="type_document" id="type_document" v-model="this.formData.type_document" class="px-5 py-1 w-full border-none">
              <option selected disabled>Seleccionar</option>
              <option value="cc">CC</option>
              <option value="ce">CE</option>
              <option value="ti">TI</option>
            </select>
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="document" class="mb-2 text-texto font-semibold  text-sm">No. documento</label>
          <div class="border-b border-primario">
            <input v-model="this.formData.document" name="document" id="document" type="text" placeholder="Ingresa como quieres que te llamemos" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="gender" class="mb-2 text-texto font-semibold  text-sm">Genero</label>
          <div class="border-b border-primario">
            <!-- <input name="gender" id="gender" type="text" placeholder="Ingresa como quieres que te llamemos" v-model="this.formData.gender" class="px-5 py-1 w-full border-none"/>  -->
            <select name="gender" id="gender" v-model="this.formData.gender" class="px-5 py-1 w-full border-none">
              <option selected disabled>Seleccionar</option>
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
            </select>
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="date_of_birth" class="mb-2 text-texto font-semibold  text-sm">Fecha de nacimiento</label>
          <div class="border-b border-primario">
            <input name="date_of_birth" id="date_of_birth" type="date" placeholder="Ingresa como quieres que te llamemos" v-model="this.formData.date_of_birth" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <div class="mb-5 w-full">
          <label for="phone" class="mb-2 text-texto font-semibold  text-sm">No. de celular</label>
          <div class="border-b border-primario">
            <input name="phone" id="phone" type="number" placeholder="Ingresa como quieres que te llamemos" v-model="this.formData.phone" class="px-5 py-1 w-full border-none"/> 
          </div>
        </div>
        <button @click="register" class="px-2 py-2 mb-2 w-full text-white bg-primario rounded-lg">Ingresar datos</button>
        <router-link to="/">
          <p class="text-center text-primario">Cancelar</p>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import router from '@/router'
import { supabase } from '@/supabase/init'
export default {
  data() {
    return {
      formData:{
        id: "",
        fullname: "",
        alias: "",
        email: "",
        type_document: "Seleccionar",
        document: "",
        gender: "Seleccionar",
        date_of_birth: "",
        phone: "",
      },

      clients: [],
      clientAuth: supabase.auth.user(),

      verify: false,
      classDiv: "w-0 p-0",
      classText: "hidden",
      textAlert: ""
    }
  },

  async mounted() {
    await this.getClients()

    if(this.clientAuth){
      let idEqual = this.clients.find(client => client.id == this.clientAuth.id)
      if (idEqual !== undefined) {
        router.push("/")
      }
    }

    this.formData.id = this.clientrAuth.id
    this.formData.email = this.clientrAuth.email
  },

  methods: {
    verifyData(){
      if (this.formData.fullname && this.formData.alias && this.formData.email && this.formData.type_document && this.formData.document && this.formData.gender && this.formData.date_of_birth && this.formData.phone && this.formData.type_document != "Seleccionar" && this.formData.gender != "Seleccionar") {
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

    async register(){
       this.verifyData()
      if (!this.verify) {
        try{
          const { data, error } = await supabase
          .from('clients')
          .insert([
            {
              id: this.formData.id,
              fullname: this.formData.fullname,
              alias: this.formData.alias,
              email: this.formData.email,
              type_document: this.formData.type_document,
              document: this.formData.document,
              gender: this.formData.gender,
              date_of_birth: this.formData.date_of_birth,
              phone: this.formData.phone,
            }
          ])
          router.push('/')
          if(error) throw error;
        }catch(error){
            console.log(error.message)
        }
      }
    },

    async getClients(){
      let res = await supabase.from('clients').select('*')
      this.clients = res.data
    }
  },

  computed:{
  }
}
</script>
<style >
  
</style>