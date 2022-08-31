<template>
  <router-view class="bg-gray-100"/>
</template>
<script>

import {supabase} from './supabase/init'

export default {
  data() {
    return {
    }
  },
  async mounted() {
    await this.changeClient()
  },

  methods: {
    async changeClient(){
      await supabase.auth.onAuthStateChange((event, session) => {
        this.$store.commit("sessionChange", session)
      })
    },
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "poppins", sans-serif;
  touch-action: manipulation;
}

input:focus{
  box-shadow: none !important;
}
select:focus{
  box-shadow: none !important;
}

.padding{
    padding: 0 1.25rem;
}




@import url("https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css");
@import url('https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css');

</style>
