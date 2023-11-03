<template>
    <div class="padding grid grid-cols-1 gap-5 mt-8">

        <div class="max-w-7xl w-full p-10 bg-primario bg-opacity-20 rounded-xl">
            <p class="text-2xl text-texto font-light text-center">Tus polizas de todo riesgo a <span class="text-primario font-semibold">un solo click</span> </p>
        </div>

        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">

        <div v-for="(policy, index) in this.viewPolicies" :key="index"  class="relative bg-white  border border-gray-100 shadow-md w-full h-30 flex justify-center items-center p-5 rounded-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
            <router-link :to="`riesgo/${policy.id}`" class="flex items-center w-full">
                <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/cumplimiento.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvY3VtcGxpbWllbnRvLnBuZyIsImlhdCI6MTY2NjYyNjQ2NSwiZXhwIjoxOTgxOTg2NDY1fQ.cg63yH8iDyLheOBQIOLLm2t6TF_ih7bbQHe9Nl3VFDw" alt="Imagen de documento" class="h-12 w-12">
                <div class="w-full flex flex-col items-start justify-center ml-5">
                <div class="flex flex-col items-start justify-center">
                <p class="text-texto text-sm">Producto</p>
                <p class="text-texto font-semibold leading-none">{{policy.product}}</p>
                </div>
                <div class="flex flex-col items-start justify-cente my-1">
                <p  class=" text-sm text-texto">Fecha de vencimiento</p>
                <p :class="policy.textColorDate" class="text-texto font-semibold leading-none">{{policy.expiration}}</p>
                </div>
                <div class="flex flex-col items-start justify-center">
                    <p class="text-primario text-sm">No. de emergencia</p>
                    <p class="text-primario font-semibold leading-none">{{policy.emergency_number}}</p>
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
import { supabase } from "../../supabase/init"
export default {
    name: "Vehiculos",
    data() {
        return {
            currentSelect: "todos",
            policies: [],
            textColor: "",
            filterPolicies: [],
            viewPolicies: []
        }
    },

    async created() {
        await this.fetchPolicies()
    },

    methods: {
        async fetchPolicies(){
            try {
                const { data, error } = await supabase
                .from('policies')
                .select('*')
                .eq('client_id', this.currentClient.id)
                .eq('category', 'riesgo')
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

        changeVehicul(){
                if(this.currentSelect === "todos"){
                    this.viewPolicies = this.policies
                } else {
                    this.viewPolicies = []
                    this.filterPolicies = []
                    this.policies.forEach(policy => {
                    if(policy.license_plate === this.currentSelect){
                        this.filterPolicies.push(policy)
                        }
                    });
                    this.viewPolicies = this.filterPolicies
                }
                
        },

        async changeFav(id, status){
            console.log(id, status);
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
        }
    }
}
</script>
<style scoped>
    
</style>