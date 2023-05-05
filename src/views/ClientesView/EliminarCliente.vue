<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/clientes'">
    <template v-slot:body>
      <h2 class="body-title">Eliminar Cliente</h2>
      <p class="body-text">
        ¿Esta seguro que desea eliminar al cliente
        <span class="text--bold">{{ cliente.nombre }}</span
        >?
      </p>
    </template>
    <template v-slot:actions>
      <button-app :text="'Eliminar Cliente'" :color="'red'" @click="eliminarCliente"></button-app>
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
        nombre: 'Santiago Garcia'
      }
    }
  },
  created() {
    this.cliente = {
      ...this.clientes.find((cliente) => cliente.id === parseInt(this.$route.params.id))
    }
  },
  computed: {
    ...mapState(['clientes'])
  },
  methods: {
    ...mapActions(['eliminarClienteBD']),
    eliminarCliente() {
      this.eliminarClienteBD(this.cliente.id)
      this.$router.push('/clientes')
    }
  }
}
</script>
<style scoped>
@import url('../../assets/ModalStyles.css');
.body-text {
  font-family: 'Poppins';
  text-align: justify;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #a39797;
}
.text--bold {
  font-weight: 600;
  color: #323232;
}
</style>
