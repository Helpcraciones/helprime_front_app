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
    await this.changeUser()
    /* await this.getUsers() */
  },

  methods: {
    async changeUser(){
      await supabase.auth.onAuthStateChange((event, session) => {
        this.$store.commit("sessionChange", session)
      })
    },

    /* async getUsers(){
      let res = await supabase.from('users').select('*')
      this.$store.commit("getUsers", res.data)
    } */
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
