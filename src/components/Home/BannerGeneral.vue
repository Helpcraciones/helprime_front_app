<template>
  <div class="w-full lg:mb-20">
    <div class="flex justify-center mb-5">
      <p class="hidden lg:block text-4xl text-texto font-light"> Esta informacion <span class="text-primario font-bold">es para ti</span> </p>
    </div>
    <div class="p-2 lg:p-5 w-full flex justify-center rounded-lg">
      <img src="https://krsoztbtqokoxqpeajxe.supabase.co/storage/v1/object/sign/banners/inicio/anuncio1?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYW5uZXJzL2luaWNpby9hbnVuY2lvMSIsImlhdCI6MTY5NjU5MzkzNywiZXhwIjoxNzI4MTI5OTM3fQ.h9YrOgT5V7kjwVh7qzUc-tVFh1NgYjRZPve9PGYC2PU&t=2023-10-06T12%3A05%3A36.029Z" alt="" class="w-full bg-gray-200 rounded-lg">
    </div>
    <!-- <Carousel :autoplay="4000"  :settings="settings" :breakpoints="breakpoints" :wrap-around="true" class="mt-3 lg:mt-10">
      <Slide aria-hidden="false" v-for="(banner, index) in this.banners" :key="index" class="pr-2 lg:pr-5 rounded-lg ">
        <div class="bg-white h-48 lg:h-96 w-full rounded-lg">
          <div v-if="this.loading" class="flex justify-center items-center mb-4 h-48 lg:h-96 h bg-gray-200 rounded-lg animate-pulse">
              <i class="fi fi-rr-picture text-5xl text-gray-100 flex justify-center items-center"></i>  
          </div>
          <a  href="https://google.com" v-else>
            <img  :src="banner.url" alt="Imagen de galeria" class="object-cover h-full w-full rounded-lg">
          </a>
          
        </div>
      </Slide>

      <template #addons>
        <Navigation  class="lg:block hidden text-primario"  />
      </template>
    </Carousel>

    <vueper-slides class="hidden">
      <vueper-slide class="hidden" v-for="(slide, i) in 2" :key="i"/>
    </vueper-slides> -->
  </div>
</template>

<script>
import { supabase } from "../../supabase/init"
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default{
  name: 'BannerGeneral',
  components: {
    Carousel,
    Slide,
    Navigation,
    VueperSlides, VueperSlide
  },
  data: () => ({

    banners: [
      {id:1, url:""},
      {id:2, url:""},
      {id:3, url:""}
      ],

      loading: undefined,

    // carousel settings
    settings: {
      itemsToShow: 1.1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2.1,
        snapAlign: 'start',
      },
      // 1024 and up
      1024: {
        itemsToShow: 1.2,
        snapAlign: 'center',
      },
    },
  }),

  created() {
    this.loading = true
    /* this.getBanners() */
  },

  methods: {
    async getBanners(){
      for (let i = 1; i <= this.banners.length; i++) {
        try {
          const { signedURL, error } = await supabase.storage.from('banners').createSignedUrl(`inicio/anuncio${i}`, 60)
          this.banners.forEach(img => {
            if (img.id == i) {
              img.url = signedURL
            }
          });
          setTimeout(() => {
            this.loading = false
          }, 2000);
          if(error) throw error;
        } catch (error) {
          console.log(error);
        }
      }
    }
  },

};
</script>

<style>
  .carousel__viewport{
    @apply rounded-lg;
  }
</style>