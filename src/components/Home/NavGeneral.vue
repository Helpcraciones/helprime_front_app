<template>
    <div class="padding pt-3 flex justify-between items-center">
        <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1661897865/APP/logo-01_etyrwc.svg" alt="Logo vital seguros" @click="toggleColor" class="h-7 ">
            <i class="fi fi-rr-bell relative text-xl text-primario flex justify-center items-center">
                <div :class="{colorNotification: color}" class="rounded-full h-3 w-3 absolute -top-0.5 -right-0.5"></div>
            </i>
    </div>
</template>
<script>
export default {
    name: 'NavGeneral',
    data() {
        return {
            color: false
        }
    },
    methods: {
            toggleColor(){
                this.color = !this.color
            }
        },
}
</script>
<style scoped>
.colorNotification{
    @apply bg-green-400 !important
}


</style>
