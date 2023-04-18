<template>
    <div class="padding pt-3 lg:pt-5 flex justify-between items-center">
        <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1661897865/APP/logo-01_etyrwc.svg" alt="Logo vital seguros" @click="toggleColor" class="h-7 w-max lg:h-8  ">
            <i class="fi fi-rr-bell relative text-xl text-primario flex justify-center items-center lg:hidden">
                <div :class="{colorNotification: color}" class="rounded-full h-3 w-3 absolute -top-0.5 -right-0.5"></div>
            </i>

            <div class="lg:flex hidden gap-3 text-texto">
                <router-link to="/agencias" class="hover:text-primario transform transition-all duration-300 hover:scale-105">Agencias</router-link>
                <div class="border-primario border-r"></div>
                <router-link :to="{hash:'#categorias'}" class="hover:text-primario transform transition-all duration-300 hover:scale-105">Categorias</router-link>
                <div class="border-primario border-r"></div>
                <router-link :to="{hash:'#contactanos'}" class="hover:text-primario transform transition-all duration-300 hover:scale-105">Contactanos</router-link>
                
            </div>
            
            <div class="lg:flex hidden gap-3">
                <!-- <a href="https://dashboard.helprime.com" class="text-primario bg-primario bg-opacity-10 px-5 py-2 rounded-lg transform transition-all duration-300 hover:scale-105">Dashboard</a> -->
                <button @click="openProfile" class="text-white bg-primario px-5 py-2 rounded-lg transform transition-all duration-300 hover:scale-105">Mi perfil</button>
            </div>


            <div class="bg-gray-300 bg-opacity-60 fixed index top-0 right-0 transform transition-all duration-500 h-screen flex justify-end items-center w-0" :class="this.modal">
                <div class="transform transition-all duration-400 absolute bg-white h-screen overflow-y-auto w-0"  :class="this.profile" >
                    <div class="flex justify-between items-center padding mt-5">
                      <div @click="closeModal" class="p-2 cursor-pointer">
                        <i :class="this.general"  class="fi fi-rr-cross-circle flex justify-center items-center text-primario"></i>
                      </div>
                    <div class="bg-primario bg-opacity-10 text-primario rounded-full px-4 py-1">
                        Mi perfil
                    </div>
                    <i  class=" cursor-pointer fi fi-rr-menu-dots-vertical flex justify-center items-center text-primario"></i>
                    </div>
                <div class="padding mt-5">
                  <div class="flex flex-col justify-center items-center">
      <div v-if="this.user.suscription_helprime === 'premium' " class="p-2 rounded-full border-yellow-400 border-4 relative">
        <div class="rounded-full h-32 w-32 bg-yellow-400 bg-opacity-10 flex justify-center items-center">
          <i class="fi fi-rr-man-head flex justify-center items-center text-5xl text-yellow-400"></i>
        </div>
        <div class="absolute bg-yellow-400 p-2 rounded-full right-2 bottom-0.5 border-2 border-yellow-400"> 
          <i class="fi fi-rr-star flex justify-center items-center text-white text-xl"></i>
        </div>
      </div>

      <div v-else-if="this.user.suscription_helprime === 'basic' " class="p-2 rounded-full border-green-400 border-4 relative">
        <div class="rounded-full h-32 w-32 bg-green-400 bg-opacity-10 flex justify-center items-center">
          <i class="fi fi-rr-man-head flex justify-center items-center text-5xl text-green-400"></i>
        </div>
        <div class="absolute bg-green-400 p-2 rounded-full right-2 bottom-0.5 border-2 border-green-400">
          <i class="fi fi-rr-crown flex justify-center items-center text-white text-xl"></i>
        </div>
      </div>

      <div v-else class="p-2 rounded-full border-gray-400 border-4">
        <div class="rounded-full h-32 w-32 bg-gray-400 bg-opacity-10 flex justify-center items-center">
          <i class="fi fi-rr-man-head flex justify-center items-center text-5xl text-gray-400"></i>
        </div>
      </div>


      <div v-if="this.loading" class="flex flex-col items-center my-5 w-full">
        <p class="text-textoOscuro text-lg font-medium leading-none one text-center">{{ this.user.first_name }} {{ this.user.first_last_name }}</p>
        <p class="text-texto font-light">{{this.user.alias}}</p>
      </div>

      <div v-else  class="max-w-sm animate-pulse flex flex-col items-center my-5">
          <div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-3"></div>
          <div class="h-2.5 bg-gray-200 rounded-full  w-28 mb-1"></div>
      </div>


                </div>
                <div class="my-5">
                    <button type="button" @click="this.collapse = !this.collapse" class="flex items-center justify-between w-full py-5 font-medium text-left border-b  border-gray-300  rounded-t-xl">
                      <span class="text-texto font-light">Informacion general</span>
                      <i v-if="this.collapse" class="fi fi-rr-angle-small-up flex justify-center items-center text-texto"></i>
                      <i v-else class="fi fi-rr-angle-small-down flex justify-center items-center text-texto"></i>
                    </button>

                  <div v-if="this.collapse" class="flex flex-col px-2" >
                    <div class="grid grid-cols-2">
                      <label  class=" flex flex-col focus:border-transparent border-b border-primario mt-5">
                        <p class="text-texto font-light text-sm">Primer Nombre</p>
                        <input type="text" v-model="this.user.first_name" class="pr-1 border-none text-texto  focus:text-primario " spellcheck="false">
                      </label>
                      <label  class=" flex flex-col focus:border-transparent border-b border-primario mt-5">
                        <p class="text-texto font-light text-sm">Segundo Nombre</p>
                        <input type="text" v-model="this.user.second_name" class="pl-1 border-none text-texto  focus:text-primario " spellcheck="false">
                      </label>
                    </div>
                    <div class="grid grid-cols-2">
                      <label  class="pr-1 flex flex-col focus:border-transparent border-b border-primario mt-5">
                        <p class="text-texto font-light text-sm">Primer Apellido</p>
                        <input type="text" v-model="this.user.first_last_name" class="border-none text-texto  focus:text-primario " spellcheck="false">
                      </label>
                      <label  class="pl-1 flex flex-col focus:border-transparent border-b border-primario mt-5">
                        <p class="text-texto font-light text-sm">Segundo Apellido</p>
                        <input type="text" v-model="this.user.second_last_name" class="border-none text-texto  focus:text-primario " spellcheck="false">
                      </label>
                    </div>
                    <label  class="flex flex-col focus:border-transparent border-b border-primario mt-5">
                      <p class="text-texto font-light text-sm">Como te llamaremos</p>
                      <input type="text" v-model="this.user.alias" class="border-none text-texto  focus:text-primario " spellcheck="false">
                    </label>
                    <label  class="flex flex-col focus:border-transparent border-b border-primario mt-5">
                      <p class="text-texto font-light text-sm">Numero de contacto</p>
                      <input type="text" v-model="this.user.contact_number" class="border-none text-texto  focus:text-primario " spellcheck="false">
                    </label>
                    <label  class="flex flex-col focus:border-transparent border-b border-primario mt-5">
                      <p class="text-texto font-light text-sm">Email</p>
                      <input type="text" v-model="this.user.email" class="border-none text-texto text-opacity-50  focus:text-primario " spellcheck="false" disabled>
                    </label>
                    <label  class="flex flex-col focus:border-transparent border-b border-primario mt-5">
                      <p class="text-texto font-light text-sm">No. de identificacion</p>
                      <input type="text" v-model="this.user.document" class="border-none text-texto  focus:text-primario text-opacity-50 " spellcheck="false" disabled>
                    </label>

                    <button @click="updateClient" class='py-2 w-full bg-primario bg-opacity-10 text-primario rounded-lg my-5 hover:bg-opacity-100 transition-all duration-300 hover:text-white flex justify-center' >Actualizar datos</button>
                    
                  </div>

                </div>
                <div class="mt-5 mb-10">
                    <button type="button" @click="this.collapse2 = !this.collapse2" class="flex items-center justify-between w-full py-5 font-medium text-left border-b  border-gray-300  rounded-t-xl">
                      <span class="text-texto font-light">Subscripcion actual</span>
                      <i v-if="this.collapse2" class="fi fi-rr-angle-small-up flex justify-center items-center text-texto"></i>
                      <i v-else class="fi fi-rr-angle-small-down flex justify-center items-center text-texto"></i>
                    </button>

                  <div v-if="this.collapse2" class="flex flex-col px-2" >
                    <div class=" bg-gray-100 p-5 rounded-lg mt-5">
                      <div class="flex w-full items-center justify-between">
                        <div class="flex items-center">
                          <i class="fi fi-rr-kite text-4xl flex justify-center items-center text-texto mr-2"></i>
                          <div>
                            <p class="text-2xl text-texto font-semibold">Basico</p>
                            <p class="text-sm leading-none text-texto"><span class="font-bold">2</span> servicios incluidos</p>
                          </div>
                        </div>
                        <p class="text-texto font-bold">GRATIS</p>
                      </div>
                      <div class="w-full mx-auto border-b border-gray-300 my-5"></div>

                      <div class="flex mb-2">
                        <i class="fi fi-sr-badge-check flex justify-center items-center mr-5 text-secundario"></i>
                        <p class="font-light text-texto">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-sr-badge-check flex justify-center items-center mr-5 text-secundario"></i>
                        <p class="font-light text-texto">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-rr-cross-circle flex justify-center items-center mr-5 text-texto"></i>
                        <p class="font-light text-texto">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-rr-cross-circle flex justify-center items-center mr-5 text-texto"></i>
                        <p class="font-light text-texto">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-rr-cross-circle flex justify-center items-center mr-5 text-texto"></i>
                        <p class="font-light text-texto">Prioridad de servicio</p> 
                    </div>

                    <div class="w-full mx-auto border-b border-gray-300 my-5"></div>

                    <button @click="suscription(1)" class='py-2 w-full bg-gray-200 text-texto rounded-lg hover:bg-opacity-100 transition-all duration-300 hover:text-white flex justify-center' >Comienza gratis ahora </button>
                    

                    </div>

                    <div class=" bg-gray-900 p-5 rounded-lg mt-5 ">
                      <div class="flex w-full items-center justify-between">
                        <div class="flex items-center">
                          <i class="fi fi-rr-star text-4xl flex justify-center items-center text-yellow-400 mr-2"></i>
                          <div>
                            <p class="text-2xl text-white font-semibold">Premium</p>
                            <p class="text-sm leading-none text-white"><span class="font-bold">5</span> servicios incluidos</p>
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <p class="text-white font-bold text-3xl ">25K</p>
                          <p class="text-white font-light text-sm">Mensual</p>
                        </div>
                      </div>
                      <div class="w-full mx-auto border-b border-gray-300 my-5"></div>

                      <div class="flex mb-2">
                        <i class="fi fi-sr-badge-check flex justify-center items-center mr-5 text-yellow-400"></i>
                        <p class="font-light text-white">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-sr-badge-check flex justify-center items-center mr-5 text-yellow-400"></i>
                        <p class="font-light text-white">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-sr-badge-check flex justify-center items-center mr-5 text-yellow-400"></i>
                        <p class="font-light text-white">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-sr-badge-check flex justify-center items-center mr-5 text-yellow-400"></i>
                        <p class="font-light text-white">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-sr-badge-check flex justify-center items-center mr-5 text-yellow-400"></i>
                        <p class="font-light text-white">Prioridad de servicio</p> 
                    </div>

                    <div class="w-full mx-auto border-b border-gray-300 my-5"></div>

                    <button @click="suscription(2)"  class='py-2 w-full bg-yellow-400 text-textoOscuro rounded-lg hover:bg-opacity-100 transition-all duration-300 hover:text-white flex justify-center' >Elegir este plan </button>
                    

                    </div>

                    <div class=" bg-gray-100 p-5 rounded-lg mt-5">
                      <div class="flex w-full items-center justify-between">
                        <div class="flex items-center">
                          <i class="fi fi-rr-crown flex justify-center items-center text-4xl mr-3 text-green-400"></i>
                          <div>
                            <p class="text-2xl text-texto font-semibold">Basico</p>
                            <p class="text-sm leading-none text-texto"><span class="font-bold">3</span> servicios incluidos</p>
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <p class="text-texto font-bold text-3xl ">10K</p>
                          <p class="text-texto font-light text-sm">Mensual</p>
                        </div>
                      </div>
                      <div class="w-full mx-auto border-b border-gray-300 my-5"></div>

                      <div class="flex mb-2">
                        <i class="fi fi-sr-badge-check flex justify-center items-center mr-5 text-secundario"></i>
                        <p class="font-light text-texto">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-sr-badge-check flex justify-center items-center mr-5 text-secundario"></i>
                        <p class="font-light text-texto">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-sr-badge-check flex justify-center items-center mr-5 text-secundario"></i>
                        <p class="font-light text-texto">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-rr-cross-circle flex justify-center items-center mr-5 text-texto"></i>
                        <p class="font-light text-texto">Prioridad de servicio</p> 
                    </div>

                    <div class="flex mb-2">
                        <i class="fi fi-rr-cross-circle flex justify-center items-center mr-5 text-texto"></i>
                        <p class="font-light text-texto">Prioridad de servicio</p> 
                    </div>

                    <div class="w-full mx-auto border-b border-gray-300 my-5"></div>

                    <button @click="suscription(3)"  class='py-2 w-full bg-gray-200 text-texto rounded-lg hover:bg-opacity-100 transition-all duration-300 hover:text-white flex justify-center' >Elegir este plan</button>
                    

                    </div>
                  </div>

                </div>
                  <div v-if="this.alert != '' " :class="this.alertColor" class="px-5 py-2  leading-none rounded-lg flex items-center mb-5">
                    <i class="fi fi-rr-exclamation flex justify-center items-center mr-3"></i>
                    <p>{{ this.alert }}</p>
                  </div>
                  <button @click="signOut" class="py-3 w-full bg-primario bg-opacity-10 text-primario rounded-lg hover:bg-opacity-100 transition-all duration-300 hover:text-white flex justify-center">Cerrar sesion</button>
                  
                  <button @click="recoveyPassword" class="text-center mx-auto w-full mt-5 mb-10 underline text-texto text-sm font-light">Cambiar o recuperar contraseña</button>
                  
                </div>
                </div>
            </div>
    </div>
</template>
<script>
import router from '@/router'
import { supabase } from "../../supabase/init"
export default {
    name: 'NavGeneral',
    data() {
        return {
          alert: "",
            user: {},
            loading: false,
            collapse: false,
            collapse2: true,
            table: undefined,
            color: false,
            status: undefined,
            modal: undefined,
            transform: undefined
        }
    },

    created() {

    },

    

    methods: {
      
      async signOut(){
      await supabase.auth.signOut()
      this.general = "hidden"
      this.modal = "w-0"
      this.profile = "w-0"
      router.push("/")
    },

    async recoveyPassword(){
      try {
        const { data, error } = await supabase.auth.api.resetPasswordForEmail(this.userAuth.user.email)
        if(error) throw error
        this.alertColor = "bg-green-100 text-green-500 text-sm"
        this.alert = "Se ha enviado un correo para cambiar o recuperar tu contraseña "
        setTimeout(() => {
          this.general = "hidden"
          this.modal = "w-0"
          this.profile = "w-0"
          this.alertColor = "bg-none text-none"
          this.alert = ""
        }, 5000);
      } catch (error) {
        console.log(error);
        if(error.status = 429){
          this.alertColor = "bg-yellow-100 text-yellow-500 text-sm"
          this.alert = "Ya haz enviado una recuperación intentalo nuevamente en un minuto"
          setTimeout(() => {
            this.alertColor = "bg-none text-none"
            this.alert = ""
          }, 5000);
        } else{
          this.alertColor = "bg-red-100 text-yellow-red text-sm"
          this.alert = "Lo sentimos, no eres tu, somos nostros, ya pronto lo solucionaremos"
          setTimeout(() => {
            this.alertColor = "bg-none text-none"
            this.alert = ""
            this.general = "hidden"
            this.modal = "w-0"
            this.profile = "w-0"
          }, 5000);
        }
      }
    },

    closeModal(){
      this.general = "hidden"
      this.modal = "w-0"
      this.profile = "w-0"
    },


      toggleColor(){
          this.color = !this.color
      },


     async openProfile(){
        if(this.userAuth === null){
          router.push("/login")
        } else{
          this.loading = false
          this.general = "block"
          this.modal = "w-screen"
          this.profile = "max-w-sm w-full shadow-lg"
          this.getCurrentClient()
        }
          

      },

    async getCurrentClient(){
      try {
        const { data, error } = await supabase
        .from('clients_helprime')
        .select('*')
        .eq('id', this.userAuth.user.id)
        if(error) throw error
        if (data.length <= 0) {
          this.user = {}
          this.getCurrentClientAgencies()
        } else {
          this.table = "clients_helprime"
          this.user = data[0]
          this.user.alias = data[0].alias.toUpperCase()
          setTimeout(() => {
            this.loading = true
          }, 400);
        }
      } catch (error) {
        if(error){
          console.log(error);
        }
      }
    },

    async getCurrentClientAgencies(){
     try {
        const { data, error } = await supabase
          .from('clients_agencies')
          .select('*')
          .eq('id', this.userAuth.user.id)
          if (error) throw error
          this.table = "clients_agencies"
          this.user = data[0]
          this.user.alias = data[0].alias.toUpperCase()
          setTimeout(() => {
            this.loading = true
          }, 400);
        } catch (error) {
          if(error){
            console.log(error);
          }
     }
    },

    async updateClient(){
      const { error } = await supabase
      .from(this.table)
      .update(
        {
          first_name: this.user.first_name,
            second_name: this.user.second_name,
            first_last_name: this.user.first_last_name,
            second_last_name: this.user.second_last_name,
            alias: this.user.alias,
            contact_number: this.user.contact_number,
            suscription_helprime: this.user.suscription_helprime
        }
        )
      .eq('id', this.userAuth.user.id)
      this.collapse = false
      this.getCurrentClient()

    },

    async suscription(status){
      if(status === 1){
        const { error } = await supabase
        .from(this.table)
        .update(
        {
            suscription_helprime: "free"
        }
        )
      .eq('id', this.userAuth.user.id)
      this.getCurrentClient()
      } else if( status === 2){
         const { error } = await supabase
        .from(this.table)
        .update(
        {
            suscription_helprime: "premium"
        }
        )
      .eq('id', this.userAuth.user.id)
      this.getCurrentClient()
      } else if(status === 3){
         const { error } = await supabase
        .from(this.table)
        .update(
        {
            suscription_helprime: "basic"
        }
        )
      .eq('id', this.userAuth.user.id)
      this.getCurrentClient()
      } else{

      }
    }
  },

      computed:{
        userAuth(){
      return this.$store.state.clientAuth
    }
  }
}
</script>
<style scoped>
.colorNotification{
    @apply bg-green-400 !important
}

.index{
  z-index: 1999;
}


</style>
