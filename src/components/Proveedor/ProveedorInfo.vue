<template >
  <div class="">

    <!-- Cargando informacion -->
    <div v-if="this.loader === true" class="fixed z-50 bg-white h-screen w-screen flex flex-col justify-center items-center">
      <i class="fi fi-rr-spinner flex justify-center items-center text-4xl text-primario animate-spin"></i>
      <p class="w-full max-w-xs text-center mt-5 animate-bounce">Estamos cargando esta linda familia para ti</p>
    </div>
    <!-- Seccion de la foto de perfil e informacion -->
    <div class="px-5 pt-24">
        <div class="relative bg-gray-100 flex flex-col items-center w-full h-auto rounded-lg px-5 pb-5">
          <div class=" absolute rounded-full bg-white w-24 h-24 -top-14 shadow-xl border-4 border-white ">
            <img :src="this.imgProfile" alt="Imagen de perfil" class="rounded-full object-cover h-auto">
          </div>
          <p class="mt-14 text-lg font-bold text-primario one">{{this.currentInfo.fullname}}</p>
          <p class="text-xs text-texto font-light leading-none one">{{this.currentInfo.rrss}}</p>
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
          <p class="mt-4 text-sm text-texto text-center">{{this.currentInfo.address}}  <span class="font-bold text-textoOscuro">{{this.currentInfo.district}}</span> </p>
        </div>
    </div>

<!-- Seccion descripcion -->
    <div  class="px-5 mt-9">
      <p class="text-texto mb-4 font-bold">Descripción</p>
      <p class="leading-none text-texto text-sm">{{this.currentInfo.description}}</p>
    </div>

    <div>
    <button @click="next">Next</button>
    <button @click="prev">Prev</button>
  </div>


  <!-- Seccion Galeria -->
    <Carousel ref="galeria"  :settings="settings" :breakpoints="breakpoints" :wrap-around="true" class="pl-5">
        <Slide v-for="img in this.imgs" :key="img.id" class="pr-3">
          <div class="bg-primario w-full">
            <img :src="img.url" alt="Imagen de galeria">
          </div>
        </Slide>
      </Carousel>
    
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
    Navigation,
  },
    data: () => ({
      loader: true,
      imgProfile: "",
      currentInfo : "",
      imgs: [],
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
    await this.scroll()
  },

    async mounted() {
    this.loader = true
    this.currentId = this.$route.params.id;
    await this.getGalery();
    await this.getImgProfile();
    await this.getProveedor();
  },

  methods: {

    next() {
      this.$refs.galeria.next()
    },
    prev() {
      this.$refs.galeria.prev()
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
        this.currentInfo.whatsapp = "https://wa.me/57"+  data[0].whatsapp +  `?text=Hola ${this.currentInfo.fullname}, vengo de la aplicacion HELPRIME y me interesa sus servicios`
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
        const { data, error } = await supabase.storage.from('proveedores').list(`${this.currentId}/galery`, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })
        data.forEach( async(img) => {
        const { signedURL, error } = await supabase.storage
          .from('proveedores')
          .createSignedUrl(`${this.currentId}/galery/${img.name}`, 60)
          this.imgs.push({
            name: img.name,
            url : signedURL
          })
          if(error) throw error;
      });
      setTimeout(() => {
          this.loader = false
        }, 500);
      if(error) throw error;
      } catch (error) {
        this.loader = true
      }
    },

  }
}
</script>
<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>