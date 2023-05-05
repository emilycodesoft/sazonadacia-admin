<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/clientes'">
    <template v-slot:body>
      <h2 class="body-title">Agregar Cliente</h2>
      <form @submit.prevent="agregarCliente">
        <input
          type="text"
          placeholder="Nombre"
          v-model="cliente.nombre"
          required
          autocomplete="given-name"
        />
        <input type="text" placeholder="Telefono" v-model="cliente.telefono" required />
        <input type="text" placeholder="Direccion" v-model="cliente.direccion" required />
        <input type="email" placeholder="Email" v-model="cliente.email" />
        <div class="actions">
          <button-app type="submit" :text="'Agregar Cliente'"></button-app>
        </div>
      </form>
    </template>
  </modal-app>
</template>
<script>
import LayerApp from '../../components/LayerApp.vue'
import ModalApp from '../../components/ModalApp.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { ModalApp, ButtonApp, LayerApp },
  data() {
    return {
      cliente: {
        nombre: '',
        telefono: '',
        direccion: '',
        email: ''
      }
    }
  },
  computed: {
    ...mapState(['clientes'])
  },
  methods: {
    agregarCliente() {
      if (this.clientes.some((cliente) => cliente.telefono == this.cliente.telefono)) {
        alert('El telefono ya existe')
      } else if (this.clientes.some((cliente) => cliente.email == this.cliente.email)) {
        alert('El email ya existe')
      } else {
        this.agregarClienteBD(this.cliente)
        this.$router.push('/clientes')
      }
    },
    ...mapActions(['agregarClienteBD'])
  }
}
</script>
<style scoped>
@import url('../../assets/ModalStyles.css');
</style>
