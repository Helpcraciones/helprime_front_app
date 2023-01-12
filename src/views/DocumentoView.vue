<template>
    <div class="bg-gray-500 bg-opacity-20 h-screen w-full rounded-t-3xl max-w-7xl mx-auto">
        <div class="padding pt-3 flex justify-between items-center">
        <router-link to="/polizas/vehiculares" >
            <i   class="fi fi-rr-arrow-left text-primario text-2xl flex justify-center items-center"></i>
        </router-link>
        <div class="bg-white text-primario rounded-full px-4 py-1 one font-bold">
            {{document.product}}
        </div>
        <i class="fi fi-rr-menu-dots-vertical flex justify-center items-center text-primario"></i>
        </div>

        <div class="relative top-24 left bg-white rounded-full p-3 w-max">
            <i class="fi fi-rr-camera flex justify-center items-center text-primario"></i>
        </div>

        <div class="mt-28 bg-white w-full h-full rounded-t-3xl flex flex-col items-center justify-start">
            <div class="relative -top-10 rounded-full bg-white">
                <div class=" w-24 h-24 bg-primario bg-opacity-20 border-2 border-white rounded-full  flex justify-center items-center shadow-lg" >
                    <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="" class="w-12 h-12">
                </div>
            </div>
            <div class="w-full flex flex-col justify-start items-start padding">
                <p class="text-sm text-primario">Placa del vehiculo</p>
                <p class="text-xl font-bold text-texto">{{document.license_plate}} </p>
            </div>

            <div class="padding mt-8">
                <p class="text-texto font-light leading-tight">{{document.observations}}</p>
            </div>


            <div class="padding mt-10 w-full flex justify-between items-center">
                <div class="flex flex-col justify-center items-start">
                    <div class="flex items-center">
                        <i class="fi fi-rr-calendar-clock text-primario mr-2 text-xl flex justify-center items-center"></i>
                        <p class="text-primario font-light">Vigencia hasta:</p>
                    </div>
                    <p class="text-texto font-semibold text-xl">
                        {{document.expiration}}
                    </p>
                </div>
                <div>
                    <a :href=" 'tel:'+document.emergency_number" class="flex flex-col justify-center items-start">
                        <div class="flex items-center">
                            <i class="fi fi-rr-phone-call text-primario mr-2 text-xl flex justify-center items-center"></i>
                            <p class="text-primario font-light">No. de emergencia:</p>
                        </div>
                        <p class="text-texto font-semibold text-xl underline">
                        {{document.emergency_number}}
                    </p>
                    </a>
                </div>
            </div>

            <div class="padding w-full my-10">
                <div class="w-full border border-primario border-opacity-20"></div>
            </div>


            <div class="padding w-full flex justify-between items-center">
                <div class="flex flex-col justify-center items-start">
                    <div class="flex items-center">
                        <i class="fi fi-rr-users text-primario mr-2 text-xl flex justify-center items-center"></i>
                        <p class="text-primario font-light">Proveedor del documento :</p>
                    </div>
                    <p class="text-texto font-semibold text-xl one">
                        {{document.insurance_company}}
                    </p>
                </div>
            </div>

            <div class="padding w-full my-10">
                <div class="w-full border border-primario border-opacity-20"></div>
            </div>

            <div class="padding w-full flex justify-between items-center">
                <div class="flex flex-col justify-center items-start">
                    <div class="flex items-center">
                        <i class="fi fi-rr-following text-primario mr-2 text-xl flex justify-center items-center"></i>
                        <p class="text-primario font-light">Asesor comercial :</p>
                    </div>
                    <p class="text-texto font-semibold text-xl">
                        {{this.manager.fullname}}
                    </p>
                    <p class="text-texto font-light leading-tight">
                        {{this.manager.whatsapp}}
                    </p>
                </div>
            </div>

            <div @click="this.file = true" class="w-max flex items-center bg-primario rounded-full px-5 py-3 text-white mt-10 sticky bottom-5 cursor-pointer select-none ">
                <i class="fi fi-rr-document flex justify-center items-center text-xl mr-5"></i>
                <p>Ver documento</p>
            </div>
        </div>


           <div v-if="this.file" class=" bg-white w-screen h-screen sticky bottom-0 right-0">
            <div class="padding pt-3 flex justify-between items-center">
                <div @click="this.file = false">
                    <i   class="fi fi-rr-x text-primario flex justify-center items-center"></i>
                </div>
                <div class="bg-white text-primario rounded-full px-4 py-1">
                    SOAT
                </div>

            </div>
             <iframe :src="this.pdf" class="w-full h-screen "></iframe>
           </div>
        

    </div>
</template>
<script>
import { supabase } from "../supabase/init"
import router from '@/router'
export default {
    data() {
        return {
            file: false,
            document: {},
            manager: {}
        }
    },
    async created() {
        this.currentId = this.$route.params.id;
        await this.getPolicy()
        await this.getManager()
        await this.downloadPdf()
    },

    methods: {
        async getPolicy(){
            try {
                const { data, error } = await supabase
                .from('policies')
                .select('*')
                .eq('id', this.currentId)
                this.document = data[0]
                this.policyId = this.document.id
                console.log(this.document);
            } catch (error) {
                if(error){
                console.log(error);
                }
            }
        },

        async getManager(){
            try {
                const { data, error } = await supabase
                .from('users_agencies')
                .select('*')
                .eq('id', this.document.business_manager_id)
                this.manager = data[0]
                console.log(this.manager);
            } catch (error) {
                if(error){
                console.log(error);
                }
            }
        },

        async downloadPdf(){
            try {
                const { signedURL, error } = await supabase.storage.from('policies').createSignedUrl(`${this.currentClient.id}/${this.policyId}/document`, 60)
                this.pdf = signedURL
                if(error) throw error;
            } catch (error) {
                console.log(error.message)
            }
    },
    },

    computed:{
    currentClient(){
      return this.$store.state.clientAuth.user
    }
  }
}
</script>
<style scoped>
    .left{
        left: 85%;
    }
</style>