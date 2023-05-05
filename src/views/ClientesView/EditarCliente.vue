<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/clientes'">
    <template v-slot:body>
      <h2 class="body-title">Editar Cliente</h2>
      <form @submit.prevent="editarCliente">
        <input
          type="text"
          placeholder="Nombre"
          v-model="cliente.nombre"
          required
          autocomplete="given-name"
        />
        <input type="text" placeholder="Telefono" v-model="cliente.telefono" required />
        <input type="text" placeholder="Telefono" v-model="cliente.email" />
        <input type="text" placeholder="Direccion" v-model="cliente.direccion" required />
        <div class="actions">
          <button-app type="submit" :text="'Editar Cliente'"></button-app>
        </div>
      </form>
    </template>
  </modal-app>
</template>
<script>
import LayerApp from '../../components/LayerApp.vue'
import ModalApp from '../../components/ModalApp.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

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
  async created() {
    this.cliente = {
      ...this.clientes.find((cliente) => cliente.id === parseInt(this.$route.params.id))
    }
  },
  computed: {
    ...mapState(['clientes'])
  },
  methods: {
    editarCliente() {
      this.editarClienteBD(this.cliente)
      this.$router.push('/clientes')
    },
    ...mapActions(['editarClienteBD'])
  }
}
</script>
<style scoped>
@import url('../../assets/ModalStyles.css');
</style>
