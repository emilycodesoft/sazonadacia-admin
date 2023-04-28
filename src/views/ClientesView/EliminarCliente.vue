<template>
  <layer-app></layer-app>
  <modal-app>
    <template v-slot:body>
      <h2 class="body-title">Eliminar Cliente</h2>
      <p>Esta seguro que desea?</p>
    </template>
    <template v-slot:actions>
      <router-link to="/clientes">
        <button-app :text="'Eliminar Cliente'" :color="'red'"></button-app>
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
