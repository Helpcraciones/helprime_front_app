<template>
  <div class="padding mt-6">


    <div class="flex justify-between mb-6">

      <div class="w-full mr-2">
        <select v-model="this.city" @change="filter" class=" text-texto text-xs w-full bg-white border border-primario rounded-md  focus:border-primario">
          <option disabled selected value= "todos">Ciudad</option>
          <option value="todos">Todos</option>
          <option value="1">Villavicencio</option>
          <option value="2">Bogota</option>
        </select>
      </div>

      <div class="w-full ml-2">
        <select v-model="this.category" @change="filter" class=" text-texto text-xs w-full bg-white border border-primario rounded-md  focus:border-primario">
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
          
            <img src="https://i0.wp.com/lamiradafotografia.es/wp-content/uploads/2014/07/simpson-rock.jpg" alt="Imagen de perfil" class="object-cover h-16 w-16 rounded-full shadow-md">

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
      city: "todos",
      category: "todos",
      modal: false,
      currentData: {}
    }
  },

  async mounted() {
    await this.getProveedores()
  },

  methods: {
    async getProveedores(){
      try{
        const { data, error } = await supabase.from('proveedores').select('*').order("city_id", { ascending: true })
        this.proveedores = data
        if(error) throw error;
      } catch (error){
        console.log(error)
      }
    },

    async filter(){
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
    }
  },
  

  computed:{
  }
};
</script>
<style scoped>
.one{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    overflow: hidden;
}
</style>