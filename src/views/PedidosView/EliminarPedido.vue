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
      <router-link to="/productos">
        <button-app :text="'Eliminar Pedido'" :color="'red'"></button-app>
      </router-link>
    </template>
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
      pedido: {
        id: 2
      }
    }
  },
  created() {
    this.pedido.id = this.$route.params.id
  },
  methods: {
    ...mapActions(['eliminarPedidoBD'])
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
