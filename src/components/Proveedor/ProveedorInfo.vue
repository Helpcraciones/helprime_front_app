<template >
  <div class="padding w-full h-screen z-50">
    <div class="p-6 mt-40 mb-10 flex justify-center items-center bg-texto bg-opacity-5 relative rounded-2xl">
      <img :src="currentProveedor.imgProfile" alt="Img de perfil" class="h-40 w-40 object-cover rounded-full absolute -top-24 shadow-xl">
      <div class="w-full flex justify-center flex-col items-center mt-14 ">
        <p class="mx-auto text-primario text-2xl font-bold  uppercase m-0">{{currentProveedor.name}}</p>
        <p class="mx-auto mb-5 text-texto text-lg font-normal  uppercase">@{{currentProveedor.name_rrss}}</p>
        <div class="mb-5 w-full grid grid-cols-2">
          <div class="w-full flex justify-evenly">
            <div class="flex flex-col items-center justify-center">
              <div class="flex justify-center">
                <div class="w-10 h-10 flex justify-center items-center bg-primario rounded-lg">
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.57139 16C12.9096 15.9993 15.8456 13.7923 16.7739 10.5858C17.7023 7.37922 16.3996 3.94506 13.5781 2.16099C10.7566 0.376918 7.09553 0.672444 4.59672 2.88598C2.0979 5.09952 1.36289 8.69817 2.79356 11.7143L1 16L5.70569 14.9286C6.87236 15.6317 8.2092 16.0023 9.57139 16Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.87533 6.3833C5.88047 5.49774 6.60114 4.78328 7.48671 4.78583C8.37228 4.78838 9.08883 5.50698 9.08887 6.39255V6.39497C9.08459 7.28472 8.36027 8.00278 7.47051 7.99934L7.46809 7.99933C6.58255 7.99162 5.8702 7.26885 5.87533 6.3833Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0539 10.5519C10.0586 9.66272 10.7824 8.9452 11.6716 8.94825C12.3256 8.94919 12.9146 9.34444 13.1633 9.94941C13.4121 10.5546 13.2712 11.2501 12.8065 11.7108C12.3418 12.1714 11.6451 12.3063 11.0421 12.0522C10.4393 11.7983 10.0492 11.2059 10.0539 10.5519Z" fill="white"/><path d="M6.3571 6.39258C6.3421 10.1072 9.8928 12.0679 11.6703 11.6618" stroke="white" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <p class="text-center text-sm text-gray-700">Whatsapp</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="flex justify-center">
                <div class="w-10 h-10 flex justify-center items-center bg-primario rounded-lg">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.69311 5.84903C2.40084 5.09841 2.65069 4.89359 2.95308 4.79709C3.16182 4.74209 3.38081 4.73877 3.59111 4.78743C3.86777 4.86893 3.94069 4.92898 4.84787 5.83295C5.6446 6.62646 5.72395 6.71332 5.80116 6.86773C5.94739 7.14056 5.97003 7.46288 5.86336 7.75347C5.78508 7.97437 5.66819 8.1202 5.18565 8.61132L4.87039 8.93302C4.78533 9.01798 4.76575 9.14854 4.82213 9.25472C5.52271 10.4498 6.51665 11.4463 7.70989 12.15C7.84728 12.2233 8.01635 12.1995 8.12809 12.091L8.43156 11.7929C8.61886 11.6006 8.81721 11.4195 9.02562 11.2503C9.34963 11.0452 9.75643 11.0213 10.1022 11.187C10.2706 11.2664 10.3263 11.3168 11.1488 12.1371C11.997 12.9821 12.0206 13.0089 12.1139 13.203C12.2908 13.523 12.2908 13.9114 12.1139 14.2313C12.0228 14.4115 11.967 14.4769 11.4909 14.9637C11.2024 15.2576 10.9322 15.5289 10.8893 15.5664C10.495 15.8933 9.98869 16.0533 9.47814 16.0125C8.54635 15.9275 7.64448 15.6394 6.83595 15.1686C5.0451 14.2193 3.52066 12.8364 2.40191 11.1463C2.15733 10.7932 1.93974 10.4222 1.75101 10.0364C1.24797 9.17277 0.988557 8.18885 1.00039 7.18943C1.03864 6.6668 1.28891 6.18254 1.69311 5.84903Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0196 0.500002C11.7435 0.500002 11.5196 0.72386 11.5196 1C11.5196 1.27614 11.7435 1.5 12.0196 1.5V0.500002ZM16.0001 1.5C16.2762 1.5 16.5001 1.27614 16.5001 1C16.5001 0.72386 16.2762 0.500002 16.0001 0.500002V1.5ZM16.5 1C16.5 0.72386 16.2762 0.500002 16 0.500002C15.7239 0.500002 15.5 0.72386 15.5 1H16.5ZM15.5 4.75312C15.5 5.02926 15.7239 5.25312 16 5.25312C16.2762 5.25312 16.5 5.02926 16.5 4.75312H15.5ZM16.3536 1.35355C16.5489 1.15829 16.5489 0.841709 16.3536 0.646447C16.1583 0.451184 15.8417 0.451184 15.6465 0.646447L16.3536 1.35355ZM10.0168 6.27612C9.82155 6.47138 9.82155 6.78797 10.0168 6.98323C10.2121 7.17849 10.5287 7.17849 10.7239 6.98323L10.0168 6.27612ZM12.0196 1.5H16.0001V0.500002H12.0196V1.5ZM15.5 1V4.75312H16.5V1H15.5ZM15.6465 0.646447L10.0168 6.27612L10.7239 6.98323L16.3536 1.35355L15.6465 0.646447Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <p class="text-center text-sm text-gray-700">Telefono</p>
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <p class="text-center text-gray-700">Horario</p>
            <p v-if="this.currentProveedor.continuous_hours" class="text-center text-xl font-bold text-primario">Abierto 24 horas</p>
            <p v-else class="text-center text-xl font-bold text-primario">{{this.currentProveedor.schedule}}</p>
            <p v-if="!this.currentProveedor.continuous_hours" class="text-center font-bold text-gray-700">Jornada continua</p>
          </div>
        </div>
        <div class="w-4/5 flex justify-center">
          <p class=" text-gray-700">{{this.currentProveedor.address}}</p>
          <p class="ml-2 text-gray-700 font-bold">{{this.currentProveedor.barrio}}</p>
        </div>
      </div>
    </div>

    <div class="mb-10">
      <p class="mb-2 text-2xl font-bold text-gray-700">Descripcion</p>
      <p class="text-xl text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam debitis neque asperiores, atque libero repudiandae quae omnis iure minus illo itaque enim reprehenderit adipisci eius sunt ullam magnam dolores!</p>
    </div>

    <div class="mb-10">
      <p class="mb-5 text-2xl font-bold text-gray-700">Galeria</p>
      <div class="">
        <!-- <Carousel  :settings="settings" :breakpoints="breakpoints"  :wrap-around="true">
          <Slide v-for="image in this.images" :key="image.id" class="p-2 slide-class">
            <div class=" shadow text-texto w-full rounded-xl">
              <img class="rounded-xl" style="width: 150px heigth: 150px" src="https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg" alt="">
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel> -->
      </div>
    </div>

    <div class="mb-10">
      <div class="flex justify-between">
        <p class="mb-2 text-2xl font-bold text-gray-700">Direccion</p>
        <p class="mb-5 text-2xl text-right text-primario">Clic para ver el mapa</p>
      </div>
      <iframe class="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15917.858130553102!2d-73.61957654382346!3d4.128617612389812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1655010762618!5m2!1ses!2sco" width="100%" height="150px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class=" pb-10">
      <p class="mb-5 text-2xl font-bold text-gray-700">Calificacion</p>
      <div class="w-full grid items-center" style="grid-template-columns: 1fr auto">
        <div class="pt-2 w-full flex items-center">
          <i class="mr-2 text-2xl text-yellow-400 fi fi-rr-star"></i>
          <p class="mr-5 text-xl font-bold text-gray-700">4.9</p>
          <p class="text-lg text-gray-700">(150 calificaciones)</p>
        </div>
        <div class="flex justify-between">
          <button class="mr-5 px-10 pt-2 flex justify-center items-center bg-primario rounded-xl"><i class=" text-2xl fi fi-rr-thumbs-up text-white"></i></button>
          <button class="px-10 pt-2 flex justify-center items-center bg-primario rounded-xl"><i class=" text-2xl fi fi-rr-thumbs-down text-white"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel"; */
export default {
  /* components: {
    Carousel,
    Slide
  }, */
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1.2,
      snapAlign: "start",
    },
    
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },

    currentId: null,
    currentProveedor:{},
    images: [
      {
        id: 1,
        url: "",
      },
      {
        id: 1,
        url: "",
      },
      {
        id: 1,
        url: "",
      }
    ]
  }),

  methods: {
    SetProveedor(){
      this.GetProveedores.forEach(proveedor => {
        if(proveedor.id == this.currentId){
          this.currentProveedor = proveedor
          console.log(this.currentProveedor)
        }
      });
    }
  },

  computed:{
    GetProveedores(){
        return this.$store.state.proveedores
    }
  },

  mounted() {
    this.currentId = this.$route.params.id 
    this.SetProveedor()
  },
}
</script>
<style scoped>
  .carousel__item {
    min-height: 150px;
    min-width: 150px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
</style>