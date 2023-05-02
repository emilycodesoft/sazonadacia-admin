<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/clientes'">
    <template v-slot:body>
      <h2 class="body-title">Editar Cliente</h2>
      <form @submit.prevent="editarClienteBD">
        <input type="text" placeholder="Nombre" v-model="cliente.nombre" />
        <input type="text" placeholder="Telefono" v-model="cliente.telefono" />
        <input type="text" placeholder="Direccion" v-model="cliente.direccion" />
        <div class="actions">
          <button-app type="submit" :text="'Editar Cliente'"></button-app>
        </div>
      </form>
    </template>
    <!--  <template v-slot:actions>
      <button-app :text="'Editar Cliente'"></button-app>
    </template> -->
  </modal-app>
</template>
<script>
import LayerApp from '../../components/LayerApp.vue'
import ModalApp from '../../components/ModalApp.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import { mapActions } from 'vuex'

export default {
  components: { ModalApp, ButtonApp, LayerApp },
  data() {
    return {
      cliente: {
        id: 0,
        nombre: '',
        telefono: '',
        direccion: ''
      }
    }
  },
  created() {
    this.cliente = this.obtenerCliente(this.$route.params.id)
  },
  methods: {
    ...mapActions(['editarClienteBD'])
  }
}
</script>
<style scoped>
@import url('../../assets/ModalStyles.css');
</style>
