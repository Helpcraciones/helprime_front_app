<template >
  <div>
    <NavGeneral />

    <button @click="recoveyPassword" class="py-3 w-full flex justify-center border font-semibold border-primario text-primario rounded-xl">Recuperar password</button>

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

  created() {
    if (this.userAuth === null) {
      this.userAuth = {}
    } else {
      console.log(this.userAuth.user.email)
    }
  },

  methods: {
    async signOut(){
      await supabase.auth.signOut()
      console.log(this.$store.state.clientAuth);
      router.push("/")
    },

    async recoveyPassword(){
      
      const { data, error } = await supabase.auth.api.resetPasswordForEmail(this.userAuth.user.email)
      console.log(data, error);
    },

  },

  computed:{
    userAuth(){
      return this.$store.state.clientAuth
    }
  }

}
</script>
<style >
  
</style>