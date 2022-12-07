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
        this.$store.commit("eventChange", event)
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

html{
    scroll-behavior: smooth;
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



</style>
