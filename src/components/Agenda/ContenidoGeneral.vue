<template>
  <div class="padding mt-6">

    <div v-if="this.loader " class="fixed right-0 left-0 z-40 bg-white h-screen w-screen flex flex-col justify-center items-center">
      <i class="fi fi-rr-spinner flex justify-center items-center text-4xl text-primario animate-spin"></i>
      <p class="w-full max-w-xs text-center mt-5 animate-bounce">Estamos cargando esta linda familia para ti</p>
    </div>
    <div class="flex flex-col justify-center items-center mb-5 lg:my-10 mt-5 lg:py-20 py-10 px-5 bg-primario bg-opacity-10 rounded-xl ">
            <p class="text-texto lg:text-4xl text-2xl font-light leading-tight text-center  ">Los mejores proveedores de servicios solo <span class="font-bold text-primario">para ti</span> </p>
            <p class="mt-2 text-texto lg:text-xl text-sm font-semibold leading-tight text-center  ">Excelente atencion, prioridad del servicio, garantía del servicio</p>
        </div>

        <p class="text-texto mb-5 text-opacity-80">Busca según tu interés</p>

        <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-2 w-full items-center">
          <div class="flex justify-between mb-2 lg:mb-0">
      <div class="w-full">
        <select v-model="this.department" @change="getCities"  class=" text-texto text-xs w-full bg-white border-0 border-b border-primario   focus:border-primario">
          <option disabled selected value= "">
            Departamento
          </option>
          <option v-for="department in this.departments" :key="department.id" :value="department.id" >{{department.name.toUpperCase()}}</option>
        </select>
      </div>
      <div class="w-full mx-2">
        <select v-model="this.city"  class=" text-texto text-xs w-full bg-white border-0 border-b border-primario   focus:border-primario">
          <option disabled selected value= "">Ciudades</option>
          <option v-for="city in this.cities" :key="city.id" :value="city.id" >{{city.name}}</option>
        </select>
      </div>
      <div class="w-full">
        <select v-model="this.category"  class=" text-texto text-xs w-full bg-white border-0 border-b border-primario   focus:border-primario">
          <option disabled selected value= "">
            Categoria
          </option>
          <option v-for="category in this.categories" :key="category.id" :value="category.id" >{{category.name.toUpperCase()}}</option>
        </select>
      </div>
          </div>
          <div class="flex mb-3 lg:mb-0 w-full">
            <button @click="filter" class="w-4/5 w- bg-primario bg-opacity-10 border focus:bg-primario focus:text-white mr-2 flex justify-center items-center text-primario py-2 rounded-md text-sm cursor-pointer">
              <p>{{this.change}}</p>
            </button>
            <div @click="clear" class="w-1/5 bg-primario border border-primario flex justify-center items-center rounded-md cursor-pointer">
              <i class="fi fi-rr-trash flex justify-center items-center text-white"></i>
            </div>
          </div>
        </div>
    <div class="w-full mb-10 lg:mt-10">
      <div v-if="this.proveedores.length != 0" class="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        <div v-for="(proveedor,index) in this.proveedores" :key="index">
          <router-link :to="`/agenda/${proveedor.id}`" class="bg-white shadow-lg w-full px-5 py-3 rounded-lg mb-5 flex items-center">
              <div class="h-16 w-16 min-w-max object-cover rounded-full">
                <img :src="proveedor.img" alt="Imagen de perfil" class="object-cover h-16 w-16 rounded-full shadow-md">
              </div>
              <div class="w-full ml-5 flex items-center justify-between">
                <div>
                  <p class="text-primario text-sm font-bold mb-2 one">{{proveedor.fullname.toUpperCase()}}</p>
                  <div>
                    <p class="text-xs text-texto">Direccion:</p>
                    <p class="text-sm text-primario leading-tight">{{proveedor.address}}</p>
                    <p class="text-xs text-texto">Barrio:</p>
                    <p class="text-sm text-primario font-bold leading-tight">{{proveedor.district.toUpperCase()}}</p>
                  </div>
                </div>
                <i class="fi fi-rr-plus-small text-primario text-2xl flex justify-center items-center ml-5"></i>
              </div>
          </router-link>
        </div>
      </div>

      <div v-else class="w-full h-40 bg-red-100 flex justify-center items-center flex-col rounded-md">
        <i class="fi fi-rr-sensor-alert text-3xl text-red-400 mb-2"></i>
        <p class="text-red-400 px-10 font-light">No se encontraron proveedores</p>
      </div>
      
    </div>

  


  </div>
</template>
<script>
import { supabase } from "../../supabase/init"
export default {
  name: "ContenidoGeneral",
  data() {
    return {
      change: "Filtrar proveedores",
      proveedores:[],
      category: "",
      department: "",
      departments :[],
      cities: [],
      city: "",
      categories: [],
      category: "",
      modal: false,
      currentData: {},
      loader: true
    }
  },
  created() {
    this.loader = true
  },

  async mounted() {
    await this.getProveedores()
    await this.getDepartments()
    await this.getCategories()
  },

  methods: {
    async getProveedores(){
      try{
        const { data, error } = await supabase.from('proveedores').select('*')
        data.forEach(async (proveedor) => {
          const { signedURL , error } = await supabase.storage
            .from('proveedores')
            .createSignedUrl(`${proveedor.id}/profile/imgprofile`, 60)
            this.proveedores.push({
              id: proveedor.id,
              created_at: proveedor.created_at,
              fullname: proveedor.fullname,
              address: proveedor.address,
              district: proveedor.district,
              whatsapp: proveedor.whatsapp,
              contact_number: proveedor.contact_number,
              type_schedule: proveedor.type_schedule,
              schedule: proveedor.schedule,
              description: proveedor.description,
              url_location: proveedor.url_location,
              city_id: proveedor.city,
              status: proveedor.status,
              category_id: proveedor.category_id,
              rrss: proveedor.rrss,
              img: signedURL
            })
        });
        setTimeout(() => {
          this.loader = false
        }, 500);
        if(error) throw error;
      } catch (error){
        this.loader = true
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

    async getCategories(){
      try{
        const { data, error } = await supabase.from('categories').select('*').order('name', { ascending: true })
        this.categories = data

        if(error) throw error;
      } catch (error){
        console.log(error.message)
      }
    },



    async filter(){
      this.change = "Proveedores filtrados"
      console.log(this.change);
      if (this.city != "" && this.category != "") {
        try{
          const { data, error } = await supabase.from('proveedores').select('*')
          .match({city_id: `${this.city}`, category_id: `${this.category}`})
          this.proveedores = []
          data.forEach(async (proveedor) => {
          const { signedURL , error } = await supabase.storage
            .from('proveedores')
            .createSignedUrl(`${proveedor.id}/profile/imgprofile`, 60)
            this.proveedores.push({
              id: proveedor.id,
              created_at: proveedor.created_at,
              fullname: proveedor.fullname,
              address: proveedor.address,
              district: proveedor.district,
              whatsapp: proveedor.whatsapp,
              contact_number: proveedor.contact_number,
              type_schedule: proveedor.type_schedule,
              schedule: proveedor.schedule,
              description: proveedor.description,
              url_location: proveedor.url_location,
              city_id: proveedor.city,
              status: proveedor.status,
              category_id: proveedor.category_id,
              rrss: proveedor.rrss,
              img: signedURL
            })
        });
        console.log(this.proveedores);
          if(error) throw error;
        } catch (error){
          console.log(error)
        }
      } else if (this.city != "" && this.category === "") {
        try{
          const { data, error } = await supabase.from('proveedores').select('*')
          .eq('city_id', `${this.city}`)
          this.proveedores = []
          data.forEach(async (proveedor) => {
          const { signedURL , error } = await supabase.storage
            .from('proveedores')
            .createSignedUrl(`${proveedor.id}/profile/imgprofile`, 60)
            this.proveedores.push({
              id: proveedor.id,
              created_at: proveedor.created_at,
              fullname: proveedor.fullname,
              address: proveedor.address,
              district: proveedor.district,
              whatsapp: proveedor.whatsapp,
              contact_number: proveedor.contact_number,
              type_schedule: proveedor.type_schedule,
              schedule: proveedor.schedule,
              description: proveedor.description,
              url_location: proveedor.url_location,
              city_id: proveedor.city,
              status: proveedor.status,
              category_id: proveedor.category_id,
              rrss: proveedor.rrss,
              img: signedURL
            })
        });
        console.log(this.proveedores);
          if(error) throw error;
        } catch (error){
          console.log(error)
        }
      } else if (this.category != "" && this.city === "") {
        try{
          const { data, error } = await supabase.from('proveedores').select('*')
          .eq('category_id', `${this.category}`)
          this.proveedores = []
          data.forEach(async (proveedor) => {
          const { signedURL , error } = await supabase.storage
            .from('proveedores')
            .createSignedUrl(`${proveedor.id}/profile/imgprofile`, 60)
            this.proveedores.push({
              id: proveedor.id,
              created_at: proveedor.created_at,
              fullname: proveedor.fullname,
              address: proveedor.address,
              district: proveedor.district,
              whatsapp: proveedor.whatsapp,
              contact_number: proveedor.contact_number,
              type_schedule: proveedor.type_schedule,
              schedule: proveedor.schedule,
              description: proveedor.description,
              url_location: proveedor.url_location,
              city_id: proveedor.city,
              status: proveedor.status,
              category_id: proveedor.category_id,
              rrss: proveedor.rrss,
              img: signedURL
            })
        });
        console.log(this.proveedores);
          if(error) throw error;
        } catch (error){
          console.log(error)
        }
      } else {
          this.clear()
      }
    },

    clear(){
      this.change = "Filtrar proveedores"
      if(this.city != "" && this.category != "" || this.city != "" || this.category != ""  ){
        this.proveedores = []
        this.city =""
        this.department = ""
        this.category = ""
        this.getProveedores()
      }
    }



  }
};
</script>
<style >
.one{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    overflow: hidden;
}

.size{
    width: 100% !important;
    height: -webkit-fill-available !important;

}
</style>