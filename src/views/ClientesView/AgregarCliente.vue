<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/clientes'">
    <template v-slot:body>
      <h2 class="body-title">Agregar Cliente</h2>
      <form @submit.prevent="agregarClienteBD">
        <input type="text" placeholder="Nombre" v-model="cliente.nombre" />
        <input type="text" placeholder="Telefono" v-model="cliente.telefono" />
        <input type="text" placeholder="Direccion" v-model="cliente.direccion" />
        <div class="actions">
          <button-app type="submit" :text="'Agregar Cliente'"></button-app>
        </div>
      </form>
    </template>
    <!-- <template v-slot:actions>
      <button-app :text="'Agregar Cliente'"></button-app>
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
        nombre: '',
        telefono: '',
        direccion: ''
      }
    }
  },
  methods: {
    ...mapActions(['agregarClienteBD'])
  }
}
</script>
<style scoped>
@import url('../../assets/ModalStyles.css');
</style>
