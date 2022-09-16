<template>
    <div class="w-full padding mt-7">
        <p class=" text-primario text-lg mt-3  mb-5 ">Soluciones hechas para ti</p>
        <div class=" grid grid-cols-2 gap-3 justify-center items-center my-5">

            <router-link to="/mis-vehiculos" class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1661907987/APP/insurance_ttdipo.svg" alt="">
                <p class="text-primario text-lg  mt-3 text-center">Bitácora</p>
            </router-link>

            <router-link to="/agenda" class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068519/APP/directorio_tvr5y5.png" alt="">
                <p class="text-primario text-lg  mt-3">Servicios</p>
            </router-link>
            <router-link to="/polizas" class="bg-white card flex flex-col justify-center items-center shadow-xl rounded-2xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653067972/APP/documentos_bz6lcd.png" alt="">
                <p class="text-primario text-lg mt-3">Mis polizas</p>
            </router-link>

            

            <router-link to="/para-ti" class=" bg-white card flex flex-col justify-center items-center shadow-xl rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1661907795/APP/sirena_hple14.svg" alt="">
                <p class="text-primario text-lg  mt-3">Urgencias</p>
            </router-link>

            <div class=" bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068552/APP/advice_jnkipr.png" alt="">
                <p class="text-primario text-lg  mt-3">Tips</p>
            </div>

            <div class="bg-white  card flex flex-col justify-center items-center shadow-xl rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068618/APP/asistente-personal_mjqjtt.png" alt="">
                <p class="text-primario text-lg  mt-3">PQRS</p>
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
    max-width: 11rem;
    width: 100%;
    max-height: 11rem;
    height: 100%;
    padding: 2rem;
}
</style>
