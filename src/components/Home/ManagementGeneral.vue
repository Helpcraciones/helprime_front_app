<template>
	<div class="w-full padding mt-7 flex flex-col lg:items-center mb-10 lg:mb-20 lg:pt-10" id="categorias"> 
		<p class="text-texto lg:text-4xl text-2xl font-light leading-tight text-center">Soluciones hechas <span class="font-bold text-primario">para ti</span> </p>


		<div class=" grid grid-cols-2 lg:grid-cols-6 gap-3 justify-center my-5 w-full">

			<router-link to="/agenda" class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out">
				<img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068519/APP/directorio_tvr5y5.png" alt="">
				<p class="text-primario text-lg  mt-3">Servicios</p>
			</router-link>

			<div @click="routeValidation" class="bg-white card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out">
				<img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653067972/APP/documentos_bz6lcd.png" alt="">
				<p class="text-primario text-lg mt-3">Mis polizas</p>
			</div>

            <router-link to="/identity"  class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out relative">
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
			</div>

        

            <div class=" bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-ou relative">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068552/APP/advice_jnkipr.png" alt="">
                <p class="text-primario text-lg  mt-3">Vencimientos</p>
                <div class="px-2 py-1 bg-yellow-50 text-yellow-500 text-xs rounded-l-full absolute top-3 right-0">
                    <p>Proximamente</p>
                </div>
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
			
		}
	},

	methods: {
		routeValidation(){
			if(!supabase.auth.user()){
				router.push('/agencias')
			} else {
				router.push('/polizas')
			}
		}
	},
}
</script>

<style scoped>
.card{
    width: 100%;
    max-height: 11rem;
    height: 100%;
    padding: 2rem;
}
</style>
