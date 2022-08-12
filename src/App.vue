<template>
  <router-view/>
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
}

input:focus{
  box-shadow: none !important;
}
select:focus{
  box-shadow: none !important;
}


@import url("https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css");
</style>
