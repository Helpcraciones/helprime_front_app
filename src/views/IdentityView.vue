<template>
    <div class="flex w-full flex-col gap-5 text-texto">
        <NavGeneral/>
        <div class="px-5">
            <div class="text-texto">
                <p><span class="font-semibold">Buenos días,</span> que bueno volver a verte</p>
                <p class="text-primario text-xl font-semibold leading-none">Diego Cardenaz</p>
            </div>
        </div>
        <div class="px-5 ">
            <div class="bg-primario h-40 w-full rounded-xl bg-opacity-20"></div>
        </div>
        <div class="px-5 flex flex-col w-full gap-5">
            <p class="text-lg font-semibold text-texto">Mis documentos</p>
            <div class="grid grid-cols-2 gap-5 items-center">
                <div class="bg-white shadow-lg w-full flex items-center justify-between p-7 rounded-xl flex-col gap-2 h-full">
                    <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1677533344/APP/agreement_aw9ppt.png" alt="" class="max-h-16">
                    <div class="flex flex-col items-center gap-0">
                        <p class="font-light">Documento</p>
                        <p class="font-semibold text-lg leading-none">Cédula</p>
                    </div>
                </div>
                <div class="bg-white shadow-lg w-full flex items-center justify-center p-7 rounded-xl flex-col gap-2 h-full">
                    <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1677533344/APP/agreement_aw9ppt.png" alt="" class="max-h-16">
                    <div class="flex flex-col items-center gap-0">
                        <p class="font-light">Documento</p>
                        <p class="font-semibold text-lg leading-none text-center">Licencia de conducción</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-5 flex flex-col w-full gap-5">
            <p class="text-lg font-semibold text-texto">Mis vehiculos</p>
            <div class="p-5 bg-primario bg-opacity-20 rounded-xl flex justify-center items-center gap-5 flex-col">
                <i class="fi fi-rr-cars flex items-center justify-center text-primario text-5xl"></i>
                <p class="font-light text-lg text-center leading-none">Añade un vehiculo para agregar documentacion individual</p>
                <button class="px-3 py-1 bg-white text-primario flex gap-2 items-center rounded-md font-light">Añadir vehiculo <i class="fi fi-rr-plus-small flex justify-center items-center"></i></button>
            </div>
        </div>
        <div class="px-5 flex flex-col w-full gap-5">
            <p class="text-lg font-semibold text-texto">Links de ayudas</p>
                <div>
                    
                </div>
        </div>
    </div>
</template>
<script>
import NavGeneral from '../components/Identity/NavGeneral.vue'
export default {
    components: { 
        NavGeneral 
        }
    
}
</script>
<style scoped>
    
</style>