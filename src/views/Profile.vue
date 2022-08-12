<template >
  <div>
    <NavGeneral />
    <button @click="signOut" class="py-3 w-full flex justify-center border font-semibold border-primario text-primario rounded-xl">Cerrar sesion</button>
  </div>
</template>
<script>
import router from '@/router'
import { supabase } from "../supabase/init"
import NavGeneral from "../components/Profile/NavGeneral.vue"
export default {
  components:{
    NavGeneral
  },

  methods: {
    async signOut(){
      await supabase.auth.signOut()
      router.push("/")
    },
  },
}
</script>
<style >
  
</style>