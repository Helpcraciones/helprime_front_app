<template>
    <div class="w-full bg-primario bg-opacity-10" id="contactanos">
        <div class="max-w-7xl mx-auto padding lg:py-10 pt-10 pb-5">

            <div class="flex flex-col lg:flex-row lg:items-center justify-between">
                <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1661897865/APP/logo-01_etyrwc.svg" alt="" class="h-8 w-max">
                <p class="text-texto font-light">Todo lo que buscas en un solo lugar</p>
            </div>

            <div class="w-full border border-primario border-opacity-30 my-10"></div>

            <div class="my-10 grid justify-center lg:grid-cols-3 gap-10 lg:gap-0 lg:px-5">
                <div class="flex justify-center text-texto lg:hidden">
                    <p class="text-xl font-bold">Contactanos</p>
                </div>
                <div class="text-texto flex flex-col items-center">
                    <p class=" font-bold mb-3">Administrativo</p>
                    <p class="mt-2">helpcreaciones@gmail.com</p>
                    <p class="font-semibold mt-2">Colombia</p>
                    <a href="#" target="_blank" rel="" class="px-10 py-2 bg-primario text-white rounded-full mt-5 flex w-max">
                    <i class="fi fi-brands-whatsapp mr-2 flex justify-center items-center " title="Bogotá WhatsApp" aria-hidden="true">
                    </i> WhatsApp
                    </a>
                </div>
                <div class="text-texto flex flex-col items-center">
                    <p class=" font-bold mb-3">Desarrollo y marca</p>
                    <a href="http://helpcreaciones.com" target="_blank" class="leading-none">helpcreaciones.com</a>
                    <p class="font-semibold mt-2">Colombia</p>
                    <a href="#" target="_blank" rel="" class="px-10 py-2 bg-primario text-white rounded-full mt-5 flex w-max">
                    <i class="fi fi-brands-whatsapp mr-2 flex justify-center items-center " title="Bogotá WhatsApp" aria-hidden="true">
                    </i> WhatsApp
                    </a>
                </div>
                <div class="text-texto flex flex-col items-center gap-2 underline font-light">
                    <a href="/terminos-y-condiciones">Términos y Condiciones</a>
                    <a href="/politicas-tratamiento-datos">Políticas de Tratamiento de Datos</a>
                    <a href="/static/politica-cookies-co-v1">Política de Cookies</a>
                    <a href="/quienes-somos">Quiénes somos</a>

                </div>
            </div>

              <div class="w-full border border-primario border-opacity-30 my-10 lg:hidden"></div>

            <div class="flex flex-col lg:flex-row justify-between text-texto items-end text-sm gap-5 lg:gap-0">

                <div class="flex justify-center items-center gap-5 lg:order-1 mx-auto lg:mx-0">
                    <p>Síguenos</p>
                    <a aria-label="Siguenos en facebook" href="https://www.google.com" target="_blank"><i     class="fi fi-brands-facebook flex justify-center    items-center text-2xl"></i></a>
                    <a aria-label="Siguenos en instagram" href="https://www.google.com" target="_blank"><i class="fi fi-brands-instagram flex justify-center items-center text-2xl"></i></a>
                </div>

                <a href="https://helpcreaciones.com/" target="_blank" class="flex leading-none lg:order-2 order-3 text-center"> © Todos los derechos reservados HELPCREACIONES {{this.date}}</a>

                <a href="https://helpcreaciones.com/" target="_blank" class="flex flex-col lg:items-end items-center justify-center lg:order-3 order-2">
                    <p class="w-max">Un desarrollo de la familia:</p>
                    <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1671714522/APP/logo_largo_Mesa-de-trabajo-1-_1__okk2zn.webp" alt="" class="h-5 w-max opacity-80">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "footer",
    
    data() {
        const today = new Date();
        const year = today.getFullYear();
        return {
            date: year
        }
    },

}
</script>
<style  scoped>
    
</style>