<template>
    <div class="w-full pl-5 py-5 ">
        <Carousel :autoplay="4000"   :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
          <Slide v-for="banner in getBannerHome" :key="banner.id" class="">
            <a href="#" class="w-full max-h-72 flex rounded-xl p-3">
              <img
                :src="banner.img"
                alt="Banners"
                class="w-full object-cover rounded-xl"
              />
            </a>
          </Slide>
        </Carousel>
      </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default{
  name: 'BannerGeneral',
  components: {
    Carousel,
    Slide
  },

  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1.1,
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

    async mounted() {
       await this.$store.dispatch("getBanners")
    },

    computed:{
        getBannerHome(){
            return this.$store.state.bannersHome
        }
    }


};
</script>