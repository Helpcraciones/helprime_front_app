<template>
	<div class="padding flex justify-center flex-col items-center ">
		<p class="text-texto lg:text-4xl text-2xl font-light leading-tight text-center">Disfruta de nuestros servicios <span class="font-bold text-primario">HELPRIME</span></p>
		<div class="grid lg:grid-cols-3 grid-cols-1 w-full gap-10 lg:mt-10 mt-5">
			<div class="rounded-lg bg-white shadow-xl">
				<img src="https://res.cloudinary.com/vital-seguros/image/upload/v1671712033/APP/woman-driving-automobile_1_zwkfqj-_1__jovz2u.webp" alt="" class="rounded-t-lg w-full h-auto">
				<div class="p-5 text-center">
					<p class="text-primario font-semibold text-xl leading-tight mb-5">Reune toda la informacion de tus polizas en un solo lugar</p>
					<p class="two text-sm leading-tight text-texto">Tenemos una plataforma muy completa, donde vas a poder afiliarte a una aseguradora y ver cuando desees todos tus seguros adquiridos.</p>
					<div @click="routeValidation">
						<button class="w-full bg-primario rounded-lg py-3 mt-5 bg-opacity-10 text-primario font-medium hover:bg-opacity-100 hover:text-white transition-all duration-300 ease-in-out border ">
								Quiero mas informacion
						</button>
					</div>
				</div>
			</div>
			<div class="rounded-lg bg-white shadow-xl">
					<img src="https://res.cloudinary.com/vital-seguros/image/upload/v1666303919/APP/confident-call-center-operator-talking-with-client_74855-4059_oqws5n.webp" alt="" class="rounded-t-lg w-full h-auto">
					<div class="p-5 text-center">
							<p class="text-primario font-semibold text-xl leading-tight mb-5">Quiero ser proveedor <br> de servicios</p>
							<p class="two text-sm leading-tight text-texto">Si eres una empresa relacionada al gremio y te gustan los medios digitales, HELPRIME es tu mejor aliado para ofrecer tus servicios a la comunidad.</p>
							<router-link to="/info">
									<button class="w-full bg-primario rounded-lg py-3 mt-5 bg-opacity-10 text-primario font-medium hover:bg-opacity-100 hover:text-white transition-all duration-300 ease-in-out border ">
											Quiero mas informacion
									</button>
							</router-link>
					</div>
			</div>
			<div class="rounded-lg bg-white shadow-xl ">
					<img src="https://res.cloudinary.com/vital-seguros/image/upload/v1671712148/APP/group-graphic-designers-discussing-laptop-their-desk_juzomt-_1__eqdztc.webp" alt="" class="rounded-t-lg w-full h-auto">
					<div class="p-5 text-center">
							<p class="text-primario font-semibold text-xl leading-tight mb-5">Quiero ser <br> agencia HELPRIME</p>
							<p class="two text-sm leading-tight text-texto">HELPRIME ofrece sus plataformas a las Agencias que deseen vincularse, digitalizar su negocio y tener un control total de sus clientes sin tener que gastar una millonada en desarrollo.</p>
							<router-link to="/info">
									<button class="w-full bg-primario rounded-lg py-3 mt-5 bg-opacity-10 text-primario font-medium hover:bg-opacity-100 hover:text-white transition-all duration-300 ease-in-out border ">
											Quiero mas informacion
									</button>
							</router-link>
					</div>
			</div>
		</div>
	</div>
</template>
<script>
import { supabase } from "../../supabase/init"
import router from '@/router'

export default {
	name: "uneteGeneral",
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
    
</style>