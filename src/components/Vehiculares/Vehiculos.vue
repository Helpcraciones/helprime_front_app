<template>
  <div class="padding grid grid-cols-1 gap-5 mt-8">
    <div class="flex w-full ">
      <select name="" v-model="this.currentSelect" @change="changeVehicul" class="w-full rounded-lg border-primario text-sm text-texto focus:border-primario">
        <option value="todos" class="text-gray-300">Todos los vehiculos</option>
        <option v-for="vehicul in this.vehicules" :key="vehicul.id" :value="vehicul.license_plate">{{vehicul.license_plate}} - {{vehicul.brand}} - {{vehicul.line}}</option>
      </select>
    </div>

    <div v-if="this.currentSelect == 'todos'" class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div v-for="(risk, index) in this.vehicules" :key="index"  class="relative bg-white border border-gray-100 shadow-md w-full h-30 h-30 flex justify-center items-center p-5 rounded-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <div @click="changeSection(risk.license_plate)" class="flex items-center w-full">
          <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="Imagen de documento" class="h-12 w-12">
          <div class="w-full flex flex-col items-start justify-center ml-5">
            <div class="flex flex-col items-start justify-center">
              <p class="text-primario text-sm">Placa del vehiculo</p>
              <p class="text-primario font-semibold leading-none">{{risk.license_plate}}</p>
            </div>
            <div class="flex flex-col items-start justify-cente my-1">
              <p  class=" text-sm text-texto">Marca</p>
              <p class="text-texto font-semibold leading-none">{{risk.brand}}</p>
            </div>
            <div class="flex flex-col items-start justify-center">
              <p class="text-texto text-sm">Tipo</p>
              <p class="text-texto font-semibold leading-none">{{risk.type_vehicle}}</p>
            </div>
          </div>
        </div >
      </div>
    </div>

    <div v-else class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div v-for="(policy, index) in this.viewPolicies" :key="index"  class="relative bg-white border border-gray-100 shadow-md w-full h-30 flex justify-center items-center p-5 rounded-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <router-link :to="`vehiculares/${policy.id}`" class="flex items-center w-full">
          <div class="absolute bg-primario bg-opacity-20 top-4 right-0 px-3 py-0.5 rounded-l-full">
            <p class="text-sm text-primario font-semibold small">{{policy.product}}</p>
          </div>
          <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="Imagen de documento" class="h-12 w-12">
          <div class="w-full flex flex-col items-start justify-center ml-5">
            <div class="flex flex-col items-start justify-center">
              <p class="text-texto text-sm">Placa del vehiculo</p>
              <p class="text-texto font-semibold leading-none">{{policy.risks}}</p>
            </div>
            <div class="flex flex-col items-start justify-cente my-1">
              <p  class=" text-sm text-texto">Fecha de vencimiento</p>
              <p :class="policy.textColorDate" class="text-texto font-semibold leading-none">{{policy.expiration}}</p>
            </div>
            <div class="flex flex-col items-start justify-center">
              <p class="text-primario text-sm">No. de emergencia</p>
              <p class="text-primario font-semibold leading-none">{{policy.emergency_number}}</p>
              <p v-if="policy.is_insurance_company" class="text-primario text-sm">{{policy.insurance_company}}</p>
            </div>
          </div>
        </router-link >
        
        <div @click="changeFav(policy.id ,policy.favorite)" class="flex justify-center items-center p-3">
          <i v-if="policy.favorite === true" :class="policy.textColor" class="fi fi-sr-heart  text-2xl flex justify-center items-center"></i>
          <i v-else class="fi fi-rr-heart  text-2xl flex justify-center items-center text-texto"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router"
import { supabase } from "../../supabase/init"
export default {
    name: "Vehiculos",
    data() {
        return {
            currentSelect: "todos",
            vehicules: [],
            policies: [],
            textColor: "",
            filterPolicies: [],
            viewPolicies: []
        }
    },

    async created() {
        if (this.policyRedirect) {
            router.push(`vehiculares/${this.policyRedirect.id}`)
            this.$store.commit("SaveUrlPolicy", null)
        }
        await this.platesUser()
        await this.fetchPolicies()
    },

    methods: {
        async platesUser(){
            try {
                const { data, error } = await supabase
                .from('license_plates_agencies')
                .select('*')
                .eq('client_id', this.currentClient.id)
                .eq('status', true)
                this.vehicules = data
                if(error) throw error
            } catch (error) {
                if(error){
                console.log(error);
                }
            }
        },
        async fetchPolicies(){
            try {
                const { data, error } = await supabase
                .from('policies')
                .select('*')
                .eq('client_id', this.currentClient.id)
                .eq('category', 'autos')
                this.policies = data
                this.viewPolicies = this.policies
                this.policies.forEach(policy => {
                    const now = new Date();
                    const expire = new Date(policy.expiration);
                    this.time = expire - now;
                    const miliseconds = this.time;
                    const seconds = miliseconds/1000;
                    const minutes = seconds/60;
                    const days = minutes/1440
                    const result = Math.round(days)
                    if(result < 30){
                        policy.textColorDate = "text-red-600"
                    } else {
                        policy.textColorDate = "text-texto"
                    }
                    if(policy.favorite === true){
                        policy.textColor = "text-red-600"
                    } else{
                        policy.textColor = "text-texto"
                    }
                });
            } catch (error) {
                if(error){
                console.log(error);
                }
            }
        },

        changeSection(risk){
          this.currentSelect = risk
          this.changeVehicul()
        },

        changeVehicul(){
          if(this.currentSelect === "todos"){
            this.viewPolicies = this.policies
          } else {
            this.viewPolicies = []
            this.filterPolicies = []
            this.policies.forEach(policy => {
            if(policy.risks === this.currentSelect){
                this.filterPolicies.push(policy)
                }
            });
            this.viewPolicies = this.filterPolicies
          }
        },

        async changeFav(id, status){
            if(status === true){
                const { error } = await supabase
                .from("policies")
                .update(
                {
                    favorite: false
                }
                )
                .eq('id', id)
                this.policies =[]
                this.fetchPolicies() 
            } else {
                const { error } = await supabase
                .from("policies")
                .update(
                {
                    favorite: true
                }
                )
                .eq('id', id)
                this.policies =[]
                this.fetchPolicies() 
            }
        }

    },

    computed:{
        currentClient(){
            return this.$store.state.clientAuth.user
        },
        policyRedirect(){
            return this.$store.state.policyRedirect
        }
    }
}
</script>
<style scoped>
    
</style>