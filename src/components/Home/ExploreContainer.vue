<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <p>Explore <a  target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    <strong>{{number}}</strong>
    <i class="fi fi-rr-add"></i>
    <i class="fi fi-rr-address-book"></i>
    <i class="fi fi-rr-apps"></i>
  </div>
</template>

<script >

export default {
  name: 'ExploreContainer',
  props: {
    name: String,
    number: String
  },

  methods:{
    enviarDatos(){
      this.$emit('frase', "Hola mundo")
    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

i{
  font-size: 25px;
}
</style>