<template>
	<div class="padding grid grid-cols-1 gap-5 mt-8">
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
			<div v-for="(policy, index) in this.policies" :key="index"  class="relative bg-white  border border-gray-100 shadow-md w-full h-30 flex justify-center items-center p-5 rounded-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
				<div class="flex items-center w-full">
					<img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/insurance-policy.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvaW5zdXJhbmNlLXBvbGljeS5zdmciLCJpYXQiOjE2ODQzMjE3OTQsImV4cCI6MTcxNTg1Nzc5NH0.wOAKwSZLWAR-urppA9J2tr0d_rxIq4_myL8T29ocyxs&t=2023-05-17T11%3A09%3A54.950Z" alt="Imagen de documento" class="h-12 w-12">
					<div class="w-full flex flex-col items-start justify-center ml-5">
						<div class="flex flex-col items-start justify-center">
							<p class="text-texto text-sm">Producto</p>	
							<p class="text-texto font-semibold leading-none">{{policy.product}}</p>
						</div>
						<div class="flex flex-col items-start justify-cente my-1">
							<p  class=" text-sm text-texto">Riesgo</p>
							<p class="text-texto font-semibold leading-none">{{policy.risks}}</p>
						</div>
						<div class="flex flex-col items-start justify-center">
							<p class="text-primario text-sm">Vencimiento</p>
							<p class="text-primario font-semibold leading-none">{{policy.expiration}}</p>
						</div>
					</div>
          <div v-if="policy.remainingDays < 1" class="px-2 py-1 bg-red-600 text-white text-xs rounded-l-full absolute top-3 right-0">
            <p>Vencido</p>
          </div>
          <div v-else-if="policy.remainingDays < 60 && policy.remainingDays >= 30" class="px-2 py-1 bg-yellow-100 text-yellow-400 text-xs rounded-l-full absolute top-3 right-0">
            <p>1 a 2 meses</p>
          </div>
          <div v-else-if="policy.remainingDays < 30" class="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-l-full absolute top-3 right-0">
            <p>-1 mes</p>
          </div>
          <div v-else class="px-2 py-1 bg-green-100 text-green-400 text-xs rounded-l-full absolute top-3 right-0">
            <p>+2 meses</p>
          </div>
				</div >
			</div>
		</div>
		<!-- <div class="px-3 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-left">
        <thead class=" text-texto bg-gray-50 ">
          <tr>
            <th scope="col" class="pr-6 py-3 text-center font-semibold">No.</th>
            <th scope="col" class="pr-6 py-3 text-center font-semibold">Producto</th>
            <th scope="col" class="pr-6 py-3 text-center font-semibold">Riesgo</th>
            <th scope="col" class="pr-6 py-3 text-center font-semibold">Vencimiento</th>
            <th scope="col" class="px-6 py-3 text-center font-semibold">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(policy, index) in this.policies" :key="index" class="bg-white text-texto border-b">
            <td class="pr-6 py-4 text-center cursor-pointer" @click="redirectPolicy(policy)">{{index + 1}}</td>
            <td class="pr-6 py-4 text-center cursor-pointer" @click="redirectPolicy(policy)">{{policy.product}}</td>
            <td class="pr-6 py-4 text-center cursor-pointer" @click="redirectPolicy(policy)">{{policy.risks}}</td>
            <td class="pr-6 py-4 text-center cursor-pointer" @click="redirectPolicy(policy)">{{policy.expiration}}</td>
            <td class="px-6 py-4 text-center cursor-pointer" @click="redirectPolicy(policy)">
              <div v-if="policy.remainingDays < 1" class="py-1 px-4 rounded-xl bg-red-600"><p class="text-white">Vencido</p></div>
              <div v-else-if="policy.remainingDays < 60 && policy.remainingDays >= 30" class="py-1 px-4 rounded-xl bg-yellow-100"><p class="text-yellow-400">1 a 2 meses</p></div>
              <div v-else-if="policy.remainingDays < 30" class="py-1 px-4 rounded-xl bg-red-100"><p class="text-red-600">-1 mes</p></div>
              <div v-else class="py-1 px-4 rounded-xl bg-green-100"><p class="text-green-400">+2 meses</p></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
	</div>
</template>
<script>
  import router from "@/router"
  import { supabase } from "../../supabase/init"
  export default {
    name: "Vencimientos",
    data() {
      return {
        policies: [],
        meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
      }
    },

    async created() {
      await this.getPolicies()
    },

    methods: {
      async getPolicies(){
      try{
        let dataPolicies1 = []
        const { data, error } = await supabase.from('policies').select('*').eq('client_id', this.currentClient.id).order('created_at', { ascending: true })
          data.forEach(async (policy) => {
            try {
              const { data, error } = await supabase.from('clients_agencies').select('*').eq('id', policy.client_id)

              policy.first_name = data[0].first_name
              policy.second_name = data[0].second_name
              policy.first_last_name = data[0].first_last_name
              policy.second_last_name = data[0].second_last_name
              policy.document = data[0].document
              policy.contact_number = data[0].contact_number
              policy.email = data[0].email

              if(error) throw error;
            } catch (error){
              console.log(error.message)
            }

            const now = new Date();
            const competition = new Date(policy.expiration);
            this.time = competition - now;
            const miliseconds = this.time;
            const seconds = miliseconds/1000;
            const minutes = seconds/60;
            const days = minutes/1440
            const result = Math.round(days)
            policy.remainingDays = result

            let fecha = new Date(policy.expiration)
            policy.expiration = fecha.getDate() + ' de ' + this.meses[fecha.getMonth()] + ' ' + fecha.getUTCFullYear()

            let fecha2 = new Date(policy.start_creation)
            policy.start_creation = fecha2.getDate() + ' de ' + this.meses[fecha2.getMonth()] + ' ' + fecha2.getUTCFullYear()

            this.policies.unshift(policy)
            this.policies.sort(function(a, b){
              return a.remainingDays - b.remainingDays
            })
          });

          this.policies = dataPolicies1

          if(error) throw error;
        } catch (error){
          console.log(error.message)
        }
      },
    },

    computed:{
      currentClient(){
        return this.$store.state.clientAuth.user
      },
    }
  }
</script>
<style scoped>
    
</style>