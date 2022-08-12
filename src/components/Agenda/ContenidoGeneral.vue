<template>
  <div class="padding mt-10">
    <div class="flex justify-between mb-10">
      <div class="w-full mr-2">
        <select v-model="this.city" @change="imprimir" class=" text-texto text-lg outline-none box w-full bg-white border border-primario rounded-xl mt-10 focus:border-primario">
          <option disabled selected value= "null">Ciudad</option>
          <option value="1">Villavicencio</option>
        </select>
      </div>
      <div class="w-full ml-2">
        <select v-model="this.category" @change="imprimir" class=" text-texto text-lg outline-none box w-full bg-white border border-primario rounded-xl mt-10 focus:border-primario">
          <option disabled selected value= "null">
            Categoria
          </option>
          <option  value="1">Tecnomecanicas</option>
        </select>
      </div>
    </div>
    <div class="w-full mb-10">
      <div v-for="(proveedor,index) in this.proveedores" :key="index">
        <div class="bg-white shadow-lg px-5 py-3 rounded-lg mb-5 flex items-center">
          <img src="https://i0.wp.com/lamiradafotografia.es/wp-content/uploads/2014/07/simpson-rock.jpg" alt="Imagen de perfil" class="object-cover h-16 w-16 rounded-full mr-2 shadow-md">
          <div class="w-full pl-4 flex items-center justify-between">
            <div>
              <p class="text-primario text-sm font-bold mb-3">{{proveedor.fullname}}</p>
              <div>
                <p class="text-xs text-texto">Direccion:</p>
                <p class="text-sm text-primario font-bold">{{proveedor.address}}</p>
                <p class="text-sm text-primario font-bold">{{proveedor.district}}</p>
              </div>
            </div>
            <i class="fi fi-rr-plus-small text-primario text-3xl flex justify-center items-center ml-10"></i>
          </div>
        </div>
        <!-- <router-link :to="`/agenda/${proveedor.id}`" class="bg-white shadow-lg px-10 py-8 rounded-lg mb-5 flex items-center">
          <img :src="proveedor.imgProfile" alt="Imagen de perfil" class="object-cover h-28 w-28 rounded-full mr-2 shadow-md">
          <div class="w-full pl-4 flex items-center justify-between">
            <div>
              <p class="text-primario text-2xl font-bold mb-3">{{proveedor.fullname}}</p>
              <div>
                <p class="text-xl text-texto">Direccion:</p>
                <p class="text-2xl text-primario font-semibold">{{proveedor.address}}</p>
              </div>
            </div>
            <i class="fi fi-rr-plus-small text-primario text-3xl flex justify-center items-center ml-10"></i>
          </div>
        </router-link> -->
      </div>
    </div>

    <!-- <div v-if="this.modal == true" class="padding bg-white w-full h-screen top-0 right-0 overflow-auto fixed z-50">
      <div class="flex justify-between mt-10">
        <i @click="this.modal = false" class="fi fi-rr-arrow-left flex justify-center items-center text-primario text-3xl"></i>
        <i class="fi fi-rr-heart  flex justify-center  items-center text-primario text-3xl"></i>
      </div>

      <div class="bg-texto bg-opacity-5  flex justify-center items-center relative p-10 mt-40 rounded-2xl">
        <img :src="currentData.imgProfile" alt="Img de perfil" class="h-40 w-40 object-cover rounded-full absolute -top-24 shadow-xl">
        <div class="flex justify-center flex-col mx-auto items-center mt-14 ">
          <p class="text-primario text-2xl font-bold  uppercase m-0">{{currentData.name}}</p>
          <p class="text-texto text-lg font-normal  uppercase">@{{currentData.name_rrss}}</p>
        </div>
      </div>


    </div> -->

  </div>
</template>
<script>
import { supabase } from "../../supabase/init"
export default {
  name: "ContenidoGeneral",
  data() {
    return {
      proveedores:[],
      city: null,
      category: null,
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
        const { data, error } = await supabase.from('proveedores').select('*')
        this.proveedores = data

        if(error) throw error;
      } catch (error){
        console.log(error.message)
      }
    },

    currentProveedor(id){
      this.modal = !this.modal
      this.getProveedores.forEach(proveedor => {
        if(proveedor.id == id){
          this.currentData = proveedor
          console.log(this.currentData)
        }
      });
    }
  },
  

  computed:{
  }
};
</script>
<style scoped>
</style>