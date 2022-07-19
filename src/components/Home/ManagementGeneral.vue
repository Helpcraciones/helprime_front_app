<template>
    <div class="w-full padding">
        <p class=" text-primario text-xl mt-3  mb-5 ">Soluciones hechas para ti</p>
        <div class=" grid grid-cols-2 gap-5 justify-center items-center my-5">

            <router-link to="/polizas" class=" w-full px-5 py-10 flex flex-col justify-center items-center shadow-lg mx-auto rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653067972/APP/documentos_bz6lcd.png" alt="">
                <p class="text-primario text-xl  mt-5">Polizas</p>
            </router-link>

             <router-link to="/agenda" class=" w-full px-5 py-10 flex flex-col justify-center items-center shadow-lg mx-auto rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068519/APP/directorio_tvr5y5.png" alt="">
                <p class="text-primario text-xl  mt-5">Servicios 24/7</p>
            </router-link>

            <div class="  w-full px-5 py-10 flex flex-col justify-center items-center shadow-lg mx-auto rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068552/APP/advice_jnkipr.png" alt="">
                <p class="text-primario text-xl  mt-5">Tips</p>
            </div>

             <div class=" w-full px-5 py-10 flex flex-col justify-center items-center shadow-lg mx-auto rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068618/APP/asistente-personal_mjqjtt.png" alt="">
                <p class="text-primario text-xl  mt-5">PQRS</p>
            </div>

            <router-link to="/mis-vehiculos" class=" w-full px-5 py-10 flex flex-col justify-center items-center shadow-lg mx-auto rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068618/APP/asistente-personal_mjqjtt.png" alt="">
                <p class="text-primario text-xl  mt-5 text-center">Mis vehiculos</p>
            </router-link>

            <router-link to="/para-ti" class=" w-full px-5 py-10 flex flex-col justify-center items-center shadow-lg mx-auto rounded-3xl">
                <img class="h-16 w-16" src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068618/APP/asistente-personal_mjqjtt.png" alt="">
                <p class="text-primario text-xl  mt-5">Para ti</p>
            </router-link>
            
        </div>
    </div>
</template> 
<script>

export default {
    name: 'optionsGeneral',
}
</script>
