<template>
  <RouterView v-if="render" />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      render: false
    }
  },
  async created() {
    await this.obtenerClientes()
    await this.obtenerPedidos()
    await this.obtenerProductos()
    this.render = true
  },
  methods: {
    ...mapActions(['obtenerProductos', 'obtenerPedidos', 'obtenerClientes'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  margin: 0;
  scroll-behavior: smooth;
}
body {
  margin: 0;
}
a {
  text-decoration: none;
  color: #000000;
}
</style>
