<template>
  <div>
    <div class="mb-5 px-3 lg:p-0 grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-2 w-full items-center">
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

    <div v-if="this.agencies.length != 0" class='card_agency lg:pb-10 px-5 pb-5 mt-5 lg:mt-0'>
      <div v-for="agency in this.agencies" :key="agency.id" class=" bg-white w-full  rounded-lg mb-10 shadow-xl flex flex-col justify-start items-start transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out relative cursor-pointer " style="height: 350px">
        <div class=' w-full h-40 rounded-t-lg mb-5 flex justify-center items-center bg-gray-50'>
          <img v-if="agency.profile != '' " :src="agency.profile" alt="Img" class="h-36 w-36 object-cover rounded-full">
          <i v-else class="fi fi-rr-building flex justify-center items-center text-3xl text-green-500"></i>
        </div>
        <div class='px-5 pb-5 w-full grid' style="grid-template-row: auto 1fr auto;">  
          <div>
            <p class='text-gray-600 font-semibold text-xl one'>{{agency.fullname.toUpperCase()}}</p>
            <div class='leading-none text-xs text-green-500 px-3 py-1.5 my-1 bg-green-500 bg-opacity-10 w-max rounded-full'>{{agency.city}} - {{agency.department}}</div>
          </div>

          <div>
            <p class='leading-tight text-gray-500 text-sm three mt-2 two'>{{agency.description}}</p>
          </div>

          <div class='flex gap-3 mt-5'>
            <a :href='agency.web' target="_blank" class='py-2 w-full bg-primario bg-opacity-10 text-primario rounded-lg hover:bg-opacity-100 transition-all duration-300 hover:text-white flex justify-center' >Ver mas informacion</a>
            <div class='bg-white shadow-lg rounded-full p-3 group ' >
            <a :href="agency.whatsapp_link" target="_blank">
              <i class="fi fi-brands-whatsapp cursor-pointer  text-green-500 flex justify-center items-center transition-all transform duration-300 ease-in-out"></i>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="w-full h-40 bg-red-100 flex justify-center items-center flex-col rounded-md">
        <i class="fi fi-rr-sensor-alert text-3xl text-red-400 mb-2"></i>
        <p class="text-red-400 px-10 font-light">No se encontraron Agencias</p>
      </div>
  </div>
</template>
<script>


import { supabase } from "../../supabase/init"

export default {
    name: "agencys",
    data() {
      return {
        agencies: [],
        departments: [],
        department: "",
        cities: [],
        city: "",
        change: "Filtrar proveedores",
      }
    },

    async created() {
      await this.getAgencies()
      await this.getDepartments()
    },
    mounted() {
      
    },
    methods: {
      async getAgencies(){
        const { data, error } = await supabase
        .from('agencies')
        .select('*')
        .eq("app_status", true)
          this.agencies = data

          this.agencies.forEach((agency) => {
            agency.whatsapp_link = `https://api.whatsapp.com/send?phone=57${agency.whatsapp}&text=Hola ${agency.fullname}, te encontré en HELPRIME 🥳. Me gustaría recibir información de:`
          })

          this.downloadImage()
          this.getDepartmentsAgency()
          this.getCitiesAgency()
      },

      async getDepartmentsAgency(){
        this.agencies.forEach(async (agency) => {
          try{
            const { data, error } = await supabase.from('departments').select('*').eq('id', agency.department_id)
            agency.department = data[0].name.toUpperCase()

            if(error) throw error;
          } catch (error){
            console.log(error.message)
          }
        });
      },

      async getCitiesAgency(){
        this.agencies.forEach(async (agency) => {
          try{
            const { data, error } = await supabase.from('cities').select('*').eq('id', agency.city_id)
            agency.city = data[0].name
    
            if(error) throw error;
          } catch (error){
            console.log(error.message)
          }
        });
      },

      downloadImage(){
        this.agencies.forEach(async (agency) => {
          try {
            const { signedURL, error } = await supabase.storage.from('agencies').createSignedUrl(`${agency.id}/profile/imgprofile`, 60)
            agency.profile = signedURL
            if(error) throw error;
          } catch (error) {
            console.log(error.message)
          }
        });
      },

      async getDepartments(){
        try{
          const { data, error } = await supabase.from('departments').select('*').order('name', { ascending: true })
          this.departments = data
          this.getCities()
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

      async filter(){
        this.change = "Proveedores filtrados"
        if (this.city != "" && this.department != "") {
          try{
            const { data, error } = await supabase.from('agencies').select('*')
            .match({city_id: `${this.city}`, department_id: `${this.department}`})
            this.agencies = []
            this.agencies = data
            this.downloadImage()
            this.getDepartmentsAgency()
            this.getCitiesAgency()
            if(error) throw error;
          } catch (error){
            console.log(error)
          }
        } else if (this.category != "" && this.city === "") {
          try{
            const { data, error } = await supabase.from('agencies').select('*')
            .eq('department_id', `${this.department}`)
            this.agencies = []
            this.agencies = data
            this.downloadImage()
            this.getDepartmentsAgency()
            this.getCitiesAgency()
            if(error) throw error;
          } catch (error){
            console.log(error)
          }
        }
      },

      clear(){
        this.change = "Filtrar proveedores"
        this.agencies = []
        this.city = ""
        this.department = ""
        this.getAgencies()
      }
    },

    computed: {
      
    },
}
</script>
<style  scoped>
  .card_agency{
  display: grid;
  justify-items: center;
  grid-column-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  }
</style>