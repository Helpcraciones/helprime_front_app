<template>
    <div class="padding grid grid-cols-1 gap-5 mt-8">
        <router-link to="/polizas/vehiculares/1" class="relative bg-white shadow-lg w-full h-30 flex justify-center items-center p-5 rounded-2xl">
            <div class="absolute bg-primario bg-opacity-20 top-4 right-0 px-3 py-0.5 rounded-l-full">
                <p class="text-sm text-primario font-semibold">SOAT</p>
            </div>
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="Imagen de documento" class="h-12 w-12">
            <div class="w-full flex flex-col items-start justify-center ml-5">
                <div class="flex flex-col items-start justify-center">
                <p class="text-texto text-sm">Placa del vehiculo</p>
                <p class="text-texto font-semibold leading-none">XPK87F COLOMBIA</p>
                </div>
                <div class="flex flex-col items-start justify-cente my-1">
                <p class="text-texto text-sm">Fecha de vencimiento</p>
                <p class="text-texto font-semibold leading-none">28-DIC-2022</p>
                </div>
                <div class="flex flex-col items-start justify-center">
                <p class="text-primario text-sm">No. de emergencia</p>
                <p class="text-primario font-semibold leading-none">#444</p>
                </div>
            </div>
            <div class="flex justify-center items-center p-3">
                <i class="fi fi-rr-heart text-texto text-2xl flex justify-center items-center"></i>
            </div>
        </router-link>


        <div class="relative bg-white shadow-lg w-full h-30 flex justify-center items-center p-5 rounded-2xl">
            <div class="absolute bg-primario bg-opacity-20 top-4 right-0 px-3 py-0.5 rounded-l-full">
                <p class="text-sm text-primario font-semibold">SOAT</p>
            </div>
            <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/vehicles.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvdmVoaWNsZXMucG5nIiwiaWF0IjoxNjYzMzA0NjA4LCJleHAiOjE5Nzg2NjQ2MDh9.aJkhB1DKBzKUhGOUkJ5goLkFjQZsuxYD8JyGxVqYmvM" alt="Imagen de documento" class="h-12 w-12">
            <div class="w-full flex flex-col items-start justify-center ml-5">
                <div class="flex flex-col items-start justify-center">
                <p class="text-texto text-sm">Placa del vehiculo</p>
                <p class="text-texto font-semibold leading-none">XPK87F COLOMBIA</p>
                </div>
                <div class="flex flex-col items-start justify-cente my-1">
                <p class="text-texto text-sm">Fecha de vencimiento</p>
                <p class="text-texto font-semibold leading-none">28-DIC-2022</p>
                </div>
                <div class="flex flex-col items-start justify-center">
                <p class="text-primario text-sm">No. de emergencia</p>
                <p class="text-primario font-semibold leading-none">#444</p>
                </div>
            </div>
            <div class="flex justify-center items-center p-3">
                <i class="fi fi-rr-heart text-red-600 text-2xl flex justify-center items-center"></i>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: "Vehiculos"
}
</script>
<style scoped>
    
</style>