<template>
    <div>
          <div class='gridd lg:pb-10 px-5 pb-5 mt-5 lg:mt-0'>
              <div v-for="agency in this.agencies" :key="agency.id" class=" bg-white w-full  rounded-lg mb-10 shadow-xl flex flex-col justify-start items-start transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out relative cursor-pointer ">
                <div class=' w-full h-40 rounded-t-lg mb-5 lg:mb-0'>
                      <img src="https://pbs.twimg.com/ext_tw_video_thumb/1046886486581366784/pu/img/B1HFldZ9FPVv4DRS.jpg:large" alt="" class='w-full object-cover h-full rounded-t-lg' />
                </div>
                <div class='px-5 pb-5 mt-5'>
                
                  <p class='text-gray-600 font-semibold text-xl one'>{{agency.fullname.toUpperCase()}}</p>
                  <div class='leading-none text-xs text-green-500 px-3 py-1.5 my-1 bg-green-500 bg-opacity-10 w-max rounded-full'>Villavicencio - Meta</div>
                  <p class='leading-tight text-gray-500 text-sm three mt-2 two'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et quod perspiciatis amet velit necessitatibus sint alias porro dolore unde vel repudiandae, deserunt assumenda mollitia fugit rerum aspernatur illum doloribus!</p>

                <div class='flex gap-3 mt-5'>
                  <a :href='agency.web' target="_blank" class='py-2 w-full bg-primario bg-opacity-10 text-primario rounded-full hover:bg-opacity-100 transition-all duration-300 hover:text-white flex justify-center' >Ver mas informacion</a>
                  <div class='bg-white shadow-lg rounded-full p-3 group ' >
                  <i class="fi fi-brands-whatsapp cursor-pointer  text-green-500 flex justify-center items-center transition-all transform duration-300 ease-in-out"></i>
                </div>
          </div>
                  </div>
                </div>
            </div>
    </div>
</template>
<script>


import { supabase } from "../../supabase/init"

export default {
    name: "agencys",
    data() {
      return {
            agencies: []
      }
    },

    async created() {
      await this.getAgencies()
    },
    mounted() {
      
    },
    methods: {
      async getAgencies(){
        const { data, error } = await supabase
        .from('agencies')
        .select('*')
          this.agencies = data
      }
    },
    computed: {
      
    },
}
</script>
<style  scoped>
    .gridd{
display: grid;
justify-items: center;
grid-column-gap: 30px;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

}
</style>