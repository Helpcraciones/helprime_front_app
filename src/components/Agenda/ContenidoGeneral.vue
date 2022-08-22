<template>
  <div class="padding mt-6">

    <div v-if="this.loader === true" class="fixed right-0 left-0 z-40 bg-white h-screen w-screen flex flex-col justify-center items-center">
      <i class="fi fi-rr-spinner flex justify-center items-center text-4xl text-primario animate-spin"></i>
      <p class="w-full max-w-xs text-center mt-5 animate-bounce">Estamos cargando esta linda familia para ti</p>
    </div>

    <div class="flex justify-between mb-6">
      <div class="w-full mr-2">
        <select v-model="this.city" @change="getProveedores" class=" text-texto text-xs w-full bg-white border border-primario rounded-md  focus:border-primario">
          <option disabled selected value= "todos">Ciudad</option>
          <option value="todos">Todos</option>
          <option value="1">Villavicencio</option>
          <option value="2">Bogota</option>
        </select>
      </div>
      <div class="w-full ml-2">
        <select v-model="this.category"  class=" text-texto text-xs w-full bg-white border border-primario rounded-md  focus:border-primario">
          <option disabled selected value= "todos">
            Categoria
          </option>
          <option value="todos" >Todos</option>
          <option value="chorizo" >Tecnomecanicas</option>
        </select>
      </div>
    </div>
    <div class="w-full mb-10">
      <div v-for="(proveedor,index) in this.proveedores" :key="index">
        <router-link :to="`/agenda/${proveedor.id}`" class="bg-white shadow-lg w-full px-5 py-3 rounded-lg mb-5 flex items-center">
            <img :src="proveedor.img" alt="Imagen de perfil" class="object-cover h-16 w-16 rounded-full shadow-md">
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


  </div>
</template>
<script>
import { supabase } from "../../supabase/init"
export default {
  name: "ContenidoGeneral",
  data() {
    return {
      proveedores:[],
      city: "1",
      category: "todos",
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

  /*   async filter(){
      if (this.city != "todos" && this.category != "todos") {
        try{
          const { data, error } = await supabase.from('proveedores').select('*')
          .match({city_id: `${this.city}`, category_id: `${this.category}`})
          this.proveedores = data
          if(error) throw error;
        } catch (error){
          console.log(error)
        }
      } else if (this.city != "todos" && this.category === "todos") {
        try{
          const { data, error } = await supabase.from('proveedores').select('*')
          .eq('city_id', `${this.city}`)
          this.proveedores = data
          if(error) throw error;
        } catch (error){
          console.log(error)
        }
      } else if (this.category != "todos" && this.city === "todos") {
        try{
          const { data, error } = await supabase.from('proveedores').select('*')
          .eq('category_id', `${this.category}`)
          this.proveedores = data
          if(error) throw error;
        } catch (error){
          console.log(error)
        }
      } else {
          this.getProveedores()
      }
    } */
  }
};
</script>
<style>
.one{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    overflow: hidden;
}
</style>