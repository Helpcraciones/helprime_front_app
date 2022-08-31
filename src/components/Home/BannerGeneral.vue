<template>
    <div class="w-full ">
        <Carousel :autoplay="4000" :settings="settings" :breakpoints="breakpoints" :wrap-around="true" class="mt-3">
          <Slide v-for="(banner, index) in this.banners" :key="index" class="mr-5 ">
            <div class="bg-white h-full max-h-48 w-full rounded-lg">
              <img :src="banner.url" alt="Imagen de galeria" class="object-cover h-full w-full rounded-lg">
            </div>
          </Slide>
      </Carousel>

      <vueper-slides class="hidden">
        <vueper-slide class="hidden"
          v-for="(slide, i) in 2"
          :key="i"/>
      </vueper-slides>
      </div>
</template>

<script>
import { supabase } from "../../supabase/init"
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default{
  name: 'BannerGeneral',
  components: {
    Carousel,
    Slide,
    VueperSlides, VueperSlide
  },
  data: () => ({

    banners: [
      {id:1, url:""},
      {id:2, url:""},
      {id:3, url:""}
      ],

    // carousel settings
    settings: {
      itemsToShow: 1.2,
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

  created() {
    this.getBanners()
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
          if(error) throw error;
        } catch (error) {
          console.log(error);
        }
      }
    }
  },

};
</script>