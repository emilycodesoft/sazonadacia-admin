<template>
  <layer-app></layer-app>
  <modal-app>
    <template v-slot:body>
      <h2 class="body-title">Agregar Cliente</h2>
      <form action="">
        <input type="text" placeholder="Nombre" v-model="cliente.nombre" />
        <input type="text" placeholder="Telefono" v-model="cliente.telefono" />
        <input type="text" placeholder="Direccion" v-model="cliente.direccion" />
      </form>
    </template>
    <template v-slot:actions>
      <router-link to="/clientes">
        <button-app :text="'Agregar Cliente'" @click="agregarClienteABd"></button-app>
      </router-link>
    </template>
  </modal-app>
</template>
<script>
import LayerApp from '../../components/LayerApp.vue'
import ModalApp from '../../components/ModalApp.vue'
import ButtonApp from '../../components/ButtonApp.vue'

export default {
  components: { ModalApp, ButtonApp, LayerApp },
  data() {
    return {
      cliente: {
        nombre: '',
        telefono: '',
        direccion: ''
      }
    }
  },
  methods: {
    agregarClienteABd() {
      console.log(this.cliente)
    }
  }
}
</script>
<style scoped></style>
