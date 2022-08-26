<template >
  <div class="pb-10">

    <!-- Cargando informacion -->
    <div v-if="this.loader === true" class="fixed z-50 bg-white h-screen w-screen flex flex-col justify-center items-center">
      <i class="fi fi-rr-spinner flex justify-center items-center text-4xl text-primario animate-spin"></i>
      <p class="w-full max-w-xs text-center mt-5 animate-bounce">Estamos cargando esta linda familia para ti</p>
    </div>
    <!-- Seccion de la foto de perfil e informacion -->
    <div class="px-5 pt-24">
        <div class="relative bg-gray-100 flex flex-col items-center w-full h-auto rounded-lg px-5 pb-5">
          <div class=" absolute rounded-full bg-white w-24 h-24 -top-14 shadow-xl border-4 border-white ">
            <img :src="this.imgProfile" alt="Imagen de perfil" class="rounded-full object-cover h-auto size">
          </div>
          <p class="mt-14 text-lg font-bold text-primario one">{{this.currentInfo.fullname}}</p>
          <p class="text-xs text-texto font-light one">@{{this.currentInfo.rrss}}</p>
          <div class="grid grid-cols-2 w-full mt-7">
            <div class="grid grid-cols-2">
              <a :href="this.currentInfo.whatsapp" class="w-full flex flex-col items-center justify">
                <div class="bg-primario p-3 rounded-lg text-white h-auto w-max">
                  <i class="fi fi-brands-whatsapp flex justify-center items-center text-base"></i>
                </div>
                <p class="text-texto font-light text-xs">Whatsapp</p>
              </a>

              <a :href="this.currentInfo.contact_number" class="w-full flex flex-col items-center justify">
                <div class="bg-primario p-3 rounded-lg text-white h-auto w-max">
                  <i class="fi fi-rr-phone-call flex justify-center items-center text-base"></i>
                </div>
                <p class="text-texto font-light text-xs">Télefono</p>
              </a>
            </div>
            <div class="flex flex-col items-center w-max mx-auto">
              <p class="text-texto text-sm">Horario</p>
              <p class="text-primario font-bold leading-none text-lg">{{this.currentInfo.schedule}}</p>
              <p class="text-textoOscuro text-xs font-bold leading-none">{{this.currentInfo.type_schedule}}</p>
            </div>
          </div>
          <p class="mt-4 text-sm text-texto text-center">{{this.currentInfo.address}}  <span class="font-bold text-textoOscuro"><span class="font-light">Barrio:</span> {{this.currentInfo.district}}</span> </p>
          <p>{{}}</p>
        </div>
    </div>

<!-- Seccion descripcion -->
    <div  class="px-5 mt-9">
      <p class="text-texto mb-4 font-bold">Descripción</p>
      <p class="leading-none text-texto text-sm">{{this.currentInfo.description}}</p>
    </div>




  <!-- Seccion Galeria -->
  <div>
  <p class="mt-10 pl-5 text-texto font-bold">Galeria</p>
    <Carousel ref="galeria"  :settings="settings" :breakpoints="breakpoints" :wrap-around="true" class="pl-5 mt-3">
        <Slide v-for="img in this.imgs" :key="img.id" class="mr-3" @click="this.modalGalery = true">
          <div class="bg-white h-36 w-36 rounded-xl">
            <img :src="img.url" alt="Imagen de galeria" class="object-cover h-full w-full rounded-xl">
          </div>
        </Slide>
      </Carousel>
  </div>


  <!--  Seccion mapa -->

  <div class="px-5 pt-8">
    
    <div class="flex justify-between items-center">
      <p class= "text-texto font-bold">Dirección</p>
      <p class="pl-5 py-5 text-primario text-sm">Clic en el mapa</p>
    </div>
    <iframe :src="this.currentInfo.url_location" allowfullscreen=""  loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="h-40 w-full m-0 rounded-xl"></iframe>
  </div>

  <div class="flex justify-between items-center px-5 mt-8 mb-3">
    <p class="text-texto font-bold">Descripción del lugar</p>
    <p @click="activeClass"  class="text-primario"><span v-if="this.toggleVer === true">Ver menos</span> <span v-else>Ver mas</span></p>
  </div>

  <p :class="this.currentClass" class="text-texto font-light px-5 leading-tight" >{{this.currentInfo.address_description}}</p>




  <!-- Seccion de servicios seleccionables -->

<div class="flex flex-col p-5">
    <div class="flex items-center">
      <i class="fi fi-rr-badge-check flex justify-center items-center mr-5 text-secundario"></i>
      <p class="font-light text-texto">Garantía del servicio</p>
    </div>
    <div class="flex">
      <i class="fi fi-rr-badge-check flex justify-center items-center mr-5 text-secundario"></i>
      <p class="font-light text-texto">Prioridad de servicio</p> 
    </div>
    <div class="flex">
      <i class="fi fi-rr-badge-check flex justify-center items-center mr-5 text-secundario"></i>
      <p class="font-light text-texto">Excelente atención</p> 
    </div>
    <div class="flex">
      <i v-if="this.currentInfo.delivery === true" class="fi fi-rr-badge-check  justify-center items-center mr-5 text-secundario"></i>
      <i v-else class="fi fi-rr-ban  flex justify-center items-center mr-5 text-red-600"></i>
      <p class="font-light text-texto">Presta servicio a domicilio</p> 
    </div>
</div>

  <!-- Seccion de compartir -->

  <div class=" bg-white border border-primario rounded-xl py-2.5 px-14 w-max mx-auto text-primario mt-5">
    Compartir negocio
  </div>


<!-- Seccion galeria con toque -->

  <div  v-if="this.modalGalery === true" class=" fixed bg-white bg-opacity-80 w-screen h-screen top-0 right-0">

    <div class="bg-gray-200 p-3 rounded-md w-max absolute top-2 right-2 z-50" @click="this.modalGalery=false">
      <i class="fi fi-rr-cross-small flex justify-center"></i>
    </div>

    <Carousel  ref="galeria"  :wrap-around="true" class="h-screen w-full">
        <Slide v-for="img in this.imgs" :key="img.id" class="h-screen w-full" @click="this.modalGalery=true">
          <div class="bg-white h-max w-full ">
            <img :src="img.url" alt="Imagen de galeria" class="object-cover h-full w-full">
          </div>
        </Slide>
      </Carousel>
  </div>

    
  </div>
</template>
<script>
import { supabase } from "../../supabase/init"
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default {
  components: {
    Carousel,
    Slide,
    Navigation
  },
  
    data: () => ({
      
      loader: true,
      imgProfile: "",
      currentInfo : "",
      imgs: [
        {id:1, url:""},
      {id:2, url:""},
      {id:3, url:""},
      {id:4, url:""},
      {id:5, url:""},
      ],
      currentClass: "",
      toggleVer: "",
      modalGalery : false,
    // carousel settings
    settings: {
      itemsToShow: 2.5,
      snapAlign: 'start',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),

  async created() {
    this.currentId = this.$route.params.id;
    await this.scroll()
    this.toggleVer = false;
    this.currentClass = "two"
    this.loader = true
  },

    async mounted() {
      await this.getProveedor();
      await this.getImgProfile();
      await this.getGalery();
      
  },

  methods: {

    activeClass(){
      this.toggleVer = !this.toggleVer
      console.log(this.toggleVer);
      if(this.toggleVer === false){
        this.currentClass = "two"
      } else{
        this.currentClass = ""
      }
    },

    scroll(){
      window.scroll({
        top: 0
      });
    },

    async getProveedor(){
      try {
         const { data, error } = await supabase.from('proveedores').select('*').eq('id', `${this.currentId}`)
        this.currentInfo = data[0]
        this.currentInfo.fullname = data[0].fullname.toUpperCase()
        this.currentInfo.contact_number = "tel:" + data[0].contact_number
        this.currentInfo.whatsapp = "https://wa.me/57"+  data[0].whatsapp +  `?text=Hola ${this.currentInfo.fullname},  te encontré en HELPRIME 🥳. Me gustaría 🥺 recibir información de:`
        this.currentInfo.district = data[0].district.toUpperCase()
        setTimeout(() => {
          this.loader = false
        }, 500);
        if(error) throw error;
      } catch (error) {
        this.loader = true
      }
     
    },

    async getImgProfile(){
      try {
      const { data, error } = await supabase.storage
      .from('proveedores')
      .createSignedUrl(`${this.currentId}/profile/imgprofile`, 60) 
      this.imgProfile = data.signedURL
      setTimeout(() => {
          this.loader = false
        }, 500);
       if(error) throw error;
      } catch (error) {
        this.loader = true
      }
    },

    async getGalery(){
      try {
        for (let index = 1; index <= this.imgs.length; index++) {
            const { signedURL, error } = await supabase.storage.from('proveedores').createSignedUrl(`${this.currentId}/galery/galeryimg${index}`, 60)
            this.imgs.forEach(img => {
              if (img.id == index) {
                img.url = signedURL
              }
            });
            if(error) throw error;
          }
        this.loader = false 
        if(error) throw error;
        } catch (error) {
          if (error) {
            console.log(error);
            this.loader = true
          }
        }
      
    },


  /* async getGalery(){
      try {
        const { data, error } = await supabase.storage.from('proveedores').list(`${this.currentId}/galery`, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })
      console.log(data);
        data.forEach( async(img) => {
          const { signedURL, error } = await supabase.storage
            .from('proveedores')
            .createSignedUrl(`${this.currentId}/galery/${img.name}`, 60)
            this.imgs.push({
              name: img.name,
              url : signedURL
            })
      });
      
      if(error) throw error;
      } catch (error) {
        console.log(error);
        
      }
    },
 */
  }
}
</script>
<style scoped>
.two{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
}

</style>