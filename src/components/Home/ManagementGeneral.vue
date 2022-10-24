<template>
    <div class="w-full padding mt-7 flex flex-col lg:items-center mb-10 lg:mb-20 lg:pt-10" id="categorias"> 
        <p class="text-texto lg:text-4xl text-2xl font-light leading-tight text-center">Soluciones hechas <span class="font-bold text-primario">para ti</span> </p>


        <div class=" grid grid-cols-2 lg:grid-cols-6 gap-3 justify-center my-5 w-full">

            <div class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1666649209/APP/e-payment_kmbsv5.png" alt="">
                <p class="text-primario text-lg  mt-3">E-Card</p>
            </div>

            <router-link to="/mis-vehiculos" class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1661907987/APP/insurance_ttdipo.svg" alt="">
                <p class="text-primario text-lg  mt-3 text-center">Bitácora</p>
            </router-link>

            <router-link to="/agenda" class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068519/APP/directorio_tvr5y5.png" alt="">
                <p class="text-primario text-lg  mt-3">Servicios</p>
            </router-link>
            <router-link to="/polizas" class="bg-white card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653067972/APP/documentos_bz6lcd.png" alt="">
                <p class="text-primario text-lg mt-3">Mis polizas</p>
            </router-link>

            

            <router-link to="/para-ti" class=" bg-white card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1661907795/APP/sirena_hple14.svg" alt="">
                <p class="text-primario text-lg  mt-3">Urgencias</p>
            </router-link>

            <div class=" bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068552/APP/advice_jnkipr.png" alt="">
                <p class="text-primario text-lg  mt-3">Tips</p>
            </div>
            
        </div>
    </div>
</template> 
<script>

export default {
    name: 'optionsGeneral',
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
