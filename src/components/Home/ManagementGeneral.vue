<template>
	<div class="w-full padding mt-7 flex flex-col lg:items-center mb-10 lg:mb-20 lg:pt-10" id="categorias"> 
		<p class="text-texto lg:text-4xl text-2xl font-light leading-tight text-center">Soluciones hechas <span class="font-bold text-primario">para ti</span> </p>


		<div class=" grid grid-cols-3 lg:grid-cols-3 gap-3 justify-center my-5 w-full">
			<router-link to="/agenda" class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out">
				<img class="h-12 w-12 md:h-16 md:w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068519/APP/directorio_tvr5y5.png" alt="">
				<p class="text-primario text-sm md:text-lg mt-3">Servicios</p>
			</router-link>

			<div @click="routeValidation" class="bg-white card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out">
				<img class="h-12 w-12 md:h-16 md:w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653067972/APP/documentos_bz6lcd.png" alt="">
				<p class="text-primario text-sm md:text-lg mt-3">Mis polizas</p>
			</div>

			<!-- <router-link to="/identity"  class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out relative">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1666649209/APP/e-payment_kmbsv5.png" alt="">
                <p class="text-primario text-lg  mt-3">E-identity</p>
                <div class="px-2 py-1 bg-yellow-50 text-yellow-500 text-xs rounded-l-full absolute top-3 right-0">
                    <p>Proximamente</p>
                </div>
            </router-link >

			<div class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out relative">
				<img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1661907987/APP/insurance_ttdipo.svg" alt="">
				<p class="text-primario text-lg  mt-3 text-center">Bitácora</p>
				<div class="px-2 py-1 bg-yellow-50 text-yellow-500 text-xs rounded-l-full absolute top-3 right-0">
						<p>Proximamente</p>
				</div>
			</div>

			<div class=" bg-white card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out relative">
				<img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1661907795/APP/sirena_hple14.svg" alt="">
				<p class="text-primario text-lg  mt-3">Siniestros</p>
				<div class="px-2 py-1 bg-yellow-50 text-yellow-500 text-xs rounded-l-full absolute top-3 right-0">
						<p>Proximamente</p>
				</div>
			</div> -->

				<div @click="routeValidation2" class=" bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-ou relative">
					<img class="h-12 w-12 md:h-16 md:w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068552/APP/advice_jnkipr.png" alt="">
					<div v-if="this.numberPolicies != 0 && this.expiredPolicies !=0" class="absolute h-6 w-6 text-sm text-white text-center bg-red-600 shadow-md  rounded -top-1 -right-1 flex justify-center items-center">
						<p>{{ this.numberPolicies }}</p>
					</div>
					<div v-else-if="this.numberPolicies != 0 && this.oneMonthPolicies !=0" class="absolute h-6 w-6 text-sm text-white text-center bg-red-400 shadow-md  rounded -top-1 -right-1 flex justify-center items-center">
						<p>{{ this.numberPolicies }}</p>
					</div>
					<div v-else-if="this.numberPolicies != 0 && this.oneOrTwoMonthPolicies !=0" class="absolute h-6 w-6 text-sm text-white text-center bg-yellow-300 shadow-md  rounded -top-1 -right-1 flex justify-center items-center">
						<p>{{ this.numberPolicies }}</p>
					</div>
					<div v-else-if="this.numberPolicies != 0 && this.twoMonthPolicies !=0" class="absolute h-6 w-6 text-sm text-white text-center bg-green-400 shadow-md  rounded -top-1 -right-1 flex justify-center items-center">
						<p>{{ this.numberPolicies }}</p>
					</div>
					<p class="text-primario text-sm md:text-lg mt-3">Vencimientos</p>
					<!-- <div class="px-2 py-1 bg-yellow-50 text-yellow-500 text-xs rounded-l-full absolute top-3 right-0">
							<p>Proximamente</p>
					</div> -->
				</div>
		</div>
  </div>
</template> 
<script>
import { supabase } from "../../supabase/init"
import router from '@/router'

export default {
	name: 'optionsGeneral',
	data() {
		return {
			policies: [],
			expiredPolicies: 0,
			oneMonthPolicies: 0,
			oneOrTwoMonthPolicies: 0,
			twoMonthPolicies: 0,
			numberPolicies: 0
		}
	},

	async created() {
		if(supabase.auth.user()){
			await this.getPolicies()
		}
	},

	methods: {
		routeValidation(){
			if(!supabase.auth.user()){
				router.push('/agencias')
			} else {
				router.push('/polizas')
			}
		},
		routeValidation2(){
			if(!supabase.auth.user()){
				router.push('/agencias')
			} else {
				router.push('/polizas/vencimientos')
			}
		},

		async getPolicies(){
      try{
        const { data, error } = await supabase.from('policies').select('*').eq('client_id', this.currentClient.id).order('created_at', { ascending: true })
					if(error) throw error;
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

						this.numberPolicies = this.numberPolicies+1
            this.policies.unshift(policy)
            this.policies.sort(function(a, b){
              return a.remainingDays - b.remainingDays
            })

						if (policy.remainingDays < 1) {
							this.expiredPolicies = this.expiredPolicies+1
						} else if(policy.remainingDays < 60 && policy.remainingDays >= 30) {
							this.oneOrTwoMonthPolicies = this.oneOrTwoMonthPolicies+1
						} else if(policy.remainingDays < 30) {
							this.oneMonthPolicies = this.oneMonthPolicies+1
						} else{
							this.twoMonthPolicies = this.twoMonthPolicies+1
						}
          });

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
.card{
    width: 100%;
    max-height: 11rem;
    height: 100%;
    padding: 1rem;
}

@media (min-width: 768px) {
	.card{
    padding: 2rem;
	}
}
</style>
