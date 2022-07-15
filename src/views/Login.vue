<template>
  <form class="p-10 h-screen flex bg-white" @submit.prevent="onSubmit">
    <div class="w-full">
      <h1 class="mb-5 text-center text-primario font-bold text-xl">Login HELPRIME</h1>
      <p class="mb-5 text-center text-texto">Bienvenido a HELPRIME</p>
      <div class="mb-5 w-full">
        <p class="text-texto">Correo Electronico</p>
        <input
          class="px-2 py-1 w-full bg-blue-100 rounded-md"
          type="email"
          placeholder="Ingresa tu correo"
          v-model="this.accountData.email"
        />
      </div>
      <div class="mb-10 w-full">
        <p class="text-texto">Contraseña</p>
        <input
          class="px-2 py-1 w-full bg-blue-100 rounded-md"
          type="number"
          placeholder="Ingresa tu contraseña"
          v-model="this.accountData.password"
        />
      </div>
      <div class="flex flex-col items-center">
        <button class="px-2 py-1 mb-2 bg-primario text-white rounded-lg">Iniciar Sesion</button>
        <router-link to="/register">
          <p class="text-sm text-primario">Crear cuenta</p>
        </router-link>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      accountData: {
        email: "",
        password: ""
      }
    }
  },

  methods: {
  },
}
</script>
