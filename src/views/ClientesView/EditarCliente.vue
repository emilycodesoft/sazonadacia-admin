<template>
  <layer-app></layer-app>
  <modal-app>
    <template v-slot:body>
      <h2 class="body-title">Editar Cliente</h2>
      <form action="">
        <input type="text" placeholder="Nombre" v-model="cliente.nombre" />
        <input type="text" placeholder="Telefono" v-model="cliente.telefono" />
        <input type="text" placeholder="Direccion" v-model="cliente.direccion" />
      </form>
    </template>
    <template v-slot:actions>
      <router-link to="/clientes">
        <button-app :text="'Editar Cliente'" @click="EditarClienteBd"></button-app>
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
      cliente: {},
      clienteId: null
    }
  },
  created() {
    this.clientesId = this.$route.params.id
    this.obtenerClientePorId()
  },
  methods: {
    editarClienteBd() {
      console.log(this.clienteId)
    },
    obtenerClientePorId() {
      console.log(this.clienteId)
    }
  }
}
</script>
<style scoped></style>
