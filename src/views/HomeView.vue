<template>
<div>
  <div class=" lg:mb-16 max-w-7xl lg:mx-auto flex flex-col">
    <NavGeneral class="order-1"/>
    <InfoGeneral class="order-2"/>
    <!-- Seccion de saludo personalizado -->
    <div v-if="this.active"  class="order-3 padding my-7 lg:m-0 lg:flex flex-col static lg:fixed top-10 right-10 lg:bg-white lg:p-8 lg:shadow-xl lg:rounded-lg group z-40">
      <div class="relative group">
      <i @click="this.active = false" class="fi fi-rr-cross-circle hidden lg:flex justify-center items-center absolute -top-5 -right-5 group-hover:text-primario text-texto"></i>
      <p class="text-texto font-ligth text-xl">Hola<span v-if="this.user.alias != '' " class="font-bold text-primario">, {{this.user.alias}}</span> <span class="font-semibold" v-else>,  estamos super felices que estés aquí!</span> </p>
      <!-- <p class="text-texto leading-none">¿En qué te ayudamos hoy?</p> -->
      </div>
    </div>
    <UneteGeneral class="lg:order-6 order-8"/>
    <BannerGeneral class="order-5"/>
    <ManagementGeneral class="lg:order-4 order-6"/>
    <SellVehicle class="order-7 hidden"/>
    <MenuGeneral class="lg:hidden flex order-last" />
  </div>
  <div>
    <Footer class="order-last"/>
  </div>

  <div v-if="this.modal" class="bg-texto bg-opacity-60 w-screen h-screen fixed top-0 right-0 z-50">
<!-- Main modal -->
    <div class="flex justify-center items-center overflow-y-auto overflow-x-hidden z-50 py-10 px-5 w-full  h-modal md:h-full">
        <div class="relative w-full max-w-md h-full">
            <!-- Modal content -->
            <div class="bg-white rounded-lg shadow dark:bg-gray-700">
                
                <div class="py-6 px-6 lg:px-8 lg:py-10">
                  <div class="w-full flex flex-col items-center justify-center">
                    <i class="fi fi-rr-user text-primario text-6xl flex justify-center items-center"></i>
                    <p class=" text-xl text-primario mt-5 font-semibold">Registro de datos</p>
                    <p class="text-center leading-tight text-texto font-light mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem nulla dolore</p>
                </div>
                    <form class="space-y-6" action="#">
                      <div class="w-full flex flex-col mt-10">
                        <label for="fullname" class=" font-light text-primario text-sm">Nombre completo</label>
                        <input v-model="this.createData.fullname" type="text" name="fullname" id="fullname" class="text-texto border-t-0 border-r-0 border-l-0 border-b  border-primario px-4 " placeholder="Ingresa tu nombre completo">
                      </div>

                      <div class="w-full flex flex-col">
                        <label for="alias" class=" font-light text-primario text-sm">Como te llamamos?</label>
                        <input v-model="this.createData.alias" type="text" name="alias" id="alias" class="text-texto border-t-0 border-r-0 border-l-0 border-b  border-primario px-4 " placeholder="Ingresa tu apodo (alias)">
                      </div>

                      <div class="w-full flex flex-col">
                        <label for="identificacion" class=" font-light text-primario text-sm">Identificacion</label>
                        <div class="w-full flex">
                          <select v-model="this.createData.type_document" class="border-t-0 border-r-0 border-l-0 border-b  border-primario w-max text-texto ">
                            <option value="cc" selected>CC</option>
                            <option value="ti" >TI</option>
                            <option value="te" >TE</option>
                            <option value="nit" >NIT</option>
                          </select>
                          <input v-model="this.createData.document" type="number" name="document" id="identificacion" class="text-texto border-t-0 border-r-0 border-l-0 border-b  border-primario px-4  w-full" placeholder="Número de identificación">
                        </div>
                        <p class="text-xs text-texto mt-1">Si seleccionas NIT no incluyas el codigo de verificación</p>
                      </div>

                      <div class="w-full flex flex-col">
                        <label for="masculino" class=" font-light text-primario text-sm">Genero</label>
                      <div class="flex justify-between text-texto py-2">
                        <div class="flex items-center gap-1">
                          <input type="radio" id="masculino" class="text-primario" value="masculino" v-model="this.gender" />
                          <label for="masculino">Masculino</label>
                        </div>

                        <div class="flex items-center gap-1">
                          <input type="radio" id="femenino" class="text-primario" value="femenino" v-model="this.gender" />
                          <label for="femenino">Femenino</label>
                        </div>

                        <div class="flex items-center gap-1">
                          <input type="radio" id="otro" class="text-primario" value="otro" v-model="this.gender" />
                          <label for="otro">Otro</label>
                        </div>

                      </div>
                      </div>

                      <div class="w-full flex flex-col">
                        <label for="date" class=" font-light text-primario text-sm">Fecha de cumpleaños</label>
                        <input v-model="this.createData.date_of_birth" type="date" name="date" id="date" class="text-texto border-t-0 border-r-0 border-l-0 border-b  border-primario px-4 " placeholder="Ingresa tu fecha de cumpleaños">
                      </div>

                      <div class="w-full flex flex-col">
                        <label for="contact" class=" font-light text-primario text-sm">Número de contacto</label>
                        <input v-model="this.createData.contact_number" type="number" name="contact" id="contact" class="text-texto border-t-0 border-r-0 border-l-0 border-b  border-primario px-4 " placeholder="Ingresa tu número de contacto">
                      </div>

                      <div class="w-full flex flex-col">
                        <label for="" class=" font-light text-primario text-sm">Departamento y ciudad de origen</label>
                        <div class="flex gap-2">
                          <div class="w-full">
                        <select v-model="this.department" @change="getCities"  class=" text-texto  w-full bg-white border-0 border-b border-primario   focus:border-primario">
                          <option disabled selected value= "">
                            Departamentos
                          </option>
                          <option v-for="department in this.departments" :key="department.id" :value="department.id" >{{department.name.toUpperCase()}}</option>
                        </select>
                        </div>
                        <div class="w-full">
                          <select v-model="this.city"  class=" text-texto  w-full bg-white border-0 border-b border-primario   focus:border-primario">
                            <option disabled selected value= "">Ciudades</option>
                            <option v-for="city in this.cities" :key="city.id" :value="city.id" >{{city.name}}</option>
                          </select>
                        </div>
                        </div>
                      </div>

                      <div class="w-full flex flex-col">
                        <label for="email" class=" font-light text-primario text-sm">Correo de facturación</label>
                        <input v-model="this.createData.billing_email" type="email" name="email" id="email" class="text-texto border-t-0 border-r-0 border-l-0 border-b  border-primario px-4 " placeholder="Ingresa tu correo de facturación">
                      </div>

                      <div>
                        <div @click="dataRegister"  class="bg-primario text-white w-full flex justify-center items-center border-primario px-4 py-2.5 rounded-lg mt-5 cursor-pointer">
                          <p class="w-max">Registrar datos</p>
                        </div>

                        <div @click="cancelRegister" class="text-sm font-medium text-center text-texto text-opacity-70  underline mt-2 cursor-pointer">
                            Quieres cancelar el proceso?
                        </div>
                      </div>

                    </form>
                </div>
            </div>
        </div>
    </div> 
  </div>

    <div class="p-4 mb-4  rounded-lg " :class="this.color">
      <i class="fi fi-rr-exclamation flex justify-center items-center mr-3"></i>
      <p>{{this.alert}}</p>
  </div>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';
import { supabase } from "../supabase/init"
import NavGeneral from "../components/Home/NavGeneral.vue";
import BannerGeneral from "../components/Home/BannerGeneral.vue";
import ManagementGeneral from "../components/Home/ManagementGeneral.vue";
import SellVehicle from "../components/Home/SellVehicle.vue";
import MenuGeneral from "../components/Home/MenuGeneral.vue";
import InfoGeneral from "../components/Home/InfoGeneral.vue";
import UneteGeneral from "../components/Home/UneteGeneral.vue";
import Footer from "../components/Home/Footer.vue";
export default {
  components:{
    NavGeneral,
    BannerGeneral,
    ManagementGeneral,
    SellVehicle,
    MenuGeneral,
    InfoGeneral,
    UneteGeneral,
    Footer
  },
  data() {
    return {
      time: undefined,
      user: {},
      currentId: "",
      active: undefined,
      help: false,
      agencie: false,
      modal: false,
      gender: undefined,
      department: "",
      departments :[],
      cities: [],
      city: "",
      createData:{
          fullname: "",
          alias: "",
          type_document: "",
          document: "",
          date_of_birth: "",
          contact_number: "",
          billing_email: ""
      },
      sendData: {},
      color: "hidden"
    };
  },

  async created(){
    this.getDepartments()
    this.active = true
    if(!supabase.auth.user()){
      this.user.alias = ""
    } else{
      await this.getCurrentClient()
    }
  },

  async mounted() {

  },

  methods: {

    formUser(){
      if(this.help && this.agencie){
        this.user.alias = ""
        this.createData.type_document = "cc"
        this.modal = true
        console.log(this.currentClient.user);
      } else{
        this.modal = false
      }
    },

    async getCurrentClient(){
      if(this.currentClient === null){
        this.currentId = "" 
      } else {
        this.currentId = this.currentClient.user.id
      }
      try {
        const { data, error } = await supabase
        .from('clients_helprime')
        .select('*')
        .eq('id', this.currentId)
        if(error) throw error
        if (data.length <= 0) {
          this.help = true
          this.user = {}
          this.getCurrentClientAgencies()
        } else {
          this.user = data[0]
          this.user.alias = data[0].alias.toUpperCase()
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
          .eq('id', this.currentId)
          if (error) throw error
          if(data.length <= 0){
            this.agencie = true
            this.formUser()
          } else{
            this.user = data[0]
            this.user.alias = data[0].alias.toUpperCase()
          }
        } catch (error) {
          if(error){
            console.log(error);
          }
     }
    },

    async getDepartments(){
      try{
        const { data, error } = await supabase.from('departments').select('*').order('name', { ascending: true })
        this.departments = data
        if(error) throw error;
      } catch (error){
        console.log(error.message)
      }
    },

    async getCities(){
      this.city = ""
      try{
        const { data, error } = await supabase.from('cities').select('*').eq('department_id', this.department).order('name', { ascending: true })
        this.cities = data
        if(error) throw error;
      } catch (error){
        console.log(error.message)
      }
    },

    async dataRegister(){
      if(this.createData.fullname != "" && this.createData.alias != "" && this.createData.type_document != "" && this.createData.document != "" && this.gender != "" && this.createData.date_of_birth != "" && this.createData.contact_number != "" && this.department_id != "" && this.city_id != "" && this.createData.billing_email != ""){
        try {
        const { error } = await supabase
        .from('clients_helprime')
        .insert({ 
          id: this.currentClient.user.id, 
          created_at: this.currentClient.user.created_at,
          fullname: this.createData.fullname,
          alias: this.createData.alias,
          email: this.currentClient.user.email,
          type_document: this.createData.type_document,
          document: this.createData.document,
          gender: this.gender,
          date_of_birth: this.createData.date_of_birth,
          contact_number: this.createData.contact_number,
          department_id: this.department,
          city_id: this.city,
          billing_email: this.createData.billing_email
        })
        this.color = "bg-green-100 text-green-500 flex fixed top-2 left-2 zzz"
        this.alert = "Haz registrado tus datos con éxito"
        this.modal = false
        await this.getCurrentClient()
        setTimeout(() => {
          this.color= "hidden"
        }, 5000);
        this.sendData.to_name = this.createData.fullname
        this.sendData.email = this.currentClient.user.email
        emailjs.send('service_5njuyze', 'template_4qiipug', this.sendData, 'pfz8wFvetYK3c-deO')
        if (error) throw error
        } catch (error) {
          if(error){
            console.log(error);
          }
        }
      } else{
        this.modal = true
        this.color = "bg-yellow-100 text-yellow-500 flex fixed top-2 left-2 zzz"
        this.alert = "Todos los campos son obligatorios"
        setTimeout(() => {
          this.color= "hidden"
        }, 5000);
      }
      
    },

    async cancelRegister(){
      const { error } = await supabase.auth.signOut()
      this.color = "bg-red-100 text-red-500 flex fixed top-2 left-2 zzz"
      this.alert = "Haz cancelado el proceso de registro"
      setTimeout(() => {
          this.color= "hidden"
        }, 5000);
      this.modal = false
      this.user.alias = ""
    }

  },

  computed: {

    currentClient(){
      return this.$store.state.clientAuth
    }

  },
};
</script>
<style scoped>
.zzz{
  z-index: 200;
}
</style>