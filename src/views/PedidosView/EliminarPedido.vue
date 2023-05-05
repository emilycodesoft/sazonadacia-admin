<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/pedidos'">
    <template v-slot:body>
      <h2 class="body-title">Eliminar Pedido</h2>
      <p class="body-text">
        ¿Esta seguro que desea eliminar el Pedido
        <span class="text--bold">#{{ pedido.id }}</span
        >?
      </p>
    </template>
    <template v-slot:actions>
      <router-link to="/pedidos">
        <button-app :text="'Eliminar Pedido'" :color="'red'" @click="eliminarPedido"></button-app>
      </router-link>
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
      pedido: {}
    }
  },
  created() {
    this.pedido = {
      ...this.pedidos.find((pedido) => pedido.id === parseInt(this.$route.params.id))
    }
  },
  computed: {
    ...mapState(['pedidos'])
  },
  methods: {
    ...mapActions(['eliminarPedidoBD']),
    eliminarPedido() {
      this.eliminarPedidoBD(this.pedido.id)
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
