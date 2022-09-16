<template>
    <div class="bg-primario bg-opacity-20 h-screen w-full rounded-t-3xl">

        <div class="padding pt-3 flex justify-between items-center">
        <router-link to="/polizas/vehiculares" >
            <i   class="fi fi-rr-arrow-left text-primario text-2xl flex justify-center items-center"></i>
        </router-link>
        <div class="bg-white text-primario rounded-full px-4 py-1">
            SOAT
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
                <p class="text-xl font-bold text-texto">XPK87F COLOMBIA</p>
                <p class="text-gray-400 font-light">MOTO TVS APACHE 200 FI GRIS NEBULOSA</p>
            </div>

            <div class="padding mt-8">
                <p class="text-texto font-light leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda deserunt magni fuga, commodi laborum porro iusto voluptatem vero repellendus fugit sapiente illum. Itaque illo facilis in, a sed adipisci?</p>
            </div>


            <div class="padding mt-10 w-full flex justify-between items-center">
                <div class="flex flex-col justify-center items-start">
                    <div class="flex items-center">
                        <i class="fi fi-rr-calendar-clock text-primario mr-2 text-xl flex justify-center items-center"></i>
                        <p class="text-primario font-light">Vigencia:</p>
                    </div>
                    <p class="text-texto font-semibold text-xl">
                        24 Dic, 2022
                    </p>
                </div>
                <div>
                    <div class="flex flex-col justify-center items-start">
                        <div class="flex items-center">
                            <i class="fi fi-rr-phone-call text-primario mr-2 text-xl flex justify-center items-center"></i>
                            <p class="text-primario font-light">No. de emergencia:</p>
                        </div>
                        <p class="text-texto font-semibold text-xl">
                        #444
                    </p>
                    </div>
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
                    <p class="text-texto font-semibold text-xl">
                        Seguros del estado
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
                        <p class="text-primario font-light">Proveedor del documento :</p>
                    </div>
                    <p class="text-texto font-semibold text-xl">
                        Diego Cardenaz
                    </p>
                    <p class="text-texto font-light leading-tight">
                        3144049124
                    </p>
                </div>
            </div>

            <div @click="this.file = true" class="w-max flex items-center bg-primario rounded-full px-5 py-3 text-white mt-10 sticky bottom-5 ">
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
             <iframe src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/resousers/00008475OPT.PDF?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXNlcnMvMDAwMDg0NzVPUFQuUERGIiwiaWF0IjoxNjYzMzE5MDczLCJleHAiOjE5Nzg2NzkwNzN9.1kpniSPs91dP6AlAgeAWurTEgU0Ks62NmXBJFE-PyWI" class="w-full h-full "></iframe>
           </div>
        

    </div>
</template>
<script>

export default {
    data() {
        return {
            file: false
        }
    },
}
</script>
<style scoped>
    .left{
        left: 85%;
    }
</style>