<template>
    <div class="mx-5 mb-6 text-texto text-xl flex justify-between ">
        <img src="https://res.cloudinary.com/vital-seguros/image/upload/v1653068076/APP/logo_helprime_owutwj.svg" alt="Logo vital seguros" @click="toggleColor" class="h-10 ">
            <i class="fi fi-rr-bell relative text-3xl text-primario flex justify-center items-center">
                 <div :class="{colorNotification: color}" class="rounded-full h-4 w-4 absolute -top-1 -right-1"></div>
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
    background: var(--morado) !important;
}

.bgNone{
    background: none;
}

</style>

<style>
    .padding{
    padding: 0 20px;
}
</style>