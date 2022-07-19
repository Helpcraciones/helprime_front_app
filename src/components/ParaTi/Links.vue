<template>
  <div class="">
    <div class="px-5 mb-10" v-for="(card, index) in list" :key="card.id">
      <div class="py-6 border-t border-gray-100 rounded-3xl shadow-lg" @click="toggleOpenedItems(index)">
        <div class="grid" style="grid-template-columns: auto 1fr auto">
          <div class="px-5 flex items-center">
            <img class="w-28" :src="card.img" :alt="card.name"/>
          </div>
          <div class="flex items-center">
            <p class="text-primario font-bold text-lg">Qué es {{card.name}}?</p>
          </div>
          <div class="px-5 flex justify-center items-center" >
            <svg v-if="!this.openedItems.includes(index)" class="w-6 h-6 text-primario" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" ></path>
            </svg>
            <svg v-if="this.openedItems.includes(index)" class="w-6 h-6 text-primario" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 15l7-7 7 7"></path></svg>
          </div>
        </div>
        <div class="pt-5 px-5" v-if="this.openedItems.includes(index)">
          <p class="mb-5 text-gray-700">{{card.description}}</p>
          <div class="flex justify-center">
            <router-link :to="card.url" class="web__dofree py-2 px-4 flex justify-between items-center shadow-lg rounded-r-full rounded-bl-3xl bg-primario">
              <p class="text-xl text-white font-medium">{{card.red_social}}</p>
              <svg class="w-6 h-6 ml-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavGeneral",
  data() {
    return {
      openedItems: [],
      list: [
        {
          id:1,
          name: "2DAZO",
          img: "https://res.cloudinary.com/segundazo/image/upload/v1628277930/USADOS/LOGO-02_htlsen.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia, facere, repudiandae nesciunt incidunt accusamus id beatae minima omnis sed ad ipsam blanditiis sit odit, dolor quae earum excepturi. Commodi.",
          red_social: "Ir a la Web",
          url: ""
        },
        {
          id:2,
          name: "Dofree",
          img: require("../../assets/dofree.png"),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia, facere, repudiandae nesciunt incidunt accusamus id beatae minima omnis sed ad ipsam blanditiis sit odit, dolor quae earum excepturi. Commodi.",
          red_social: "Ir a la Web",
          url: ""
        },
        {
          id:3,
          name: "ImporBox",
          img: require("../../assets/imporbox.png"),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia, facere, repudiandae nesciunt incidunt accusamus id beatae minima omnis sed ad ipsam blanditiis sit odit, dolor quae earum excepturi. Commodi.",
          red_social: "Ir a la Web",
          url: ""
        },
        {
          id:3,
          name: "Go Diego",
          img: require("../../assets/go_diego.png"),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia, facere, repudiandae nesciunt incidunt accusamus id beatae minima omnis sed ad ipsam blanditiis sit odit, dolor quae earum excepturi. Commodi.",
          red_social: "Instagram",
          url: ""
        },
      ]
    };
  },

  methods: {
    toggleOpenedItems(index) {
      if (this.openedItems.includes(index)) {
        /* console.log("remove " + index); */
        this.openedItems = this.openedItems.filter((item) => item != index);
      } else {
        this.openedItems.push(index);
        /* console.log("push " + index); */
      }
    },
  },
};
</script>
<style scoped>
.web__dofree {
    transition: 500ms;
    text-decoration: none;
    border-radius: 0px 50px 50px 50px;
}
</style>