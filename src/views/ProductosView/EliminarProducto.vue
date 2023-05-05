<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/productos'">
    <template v-slot:body>
      <h2 class="body-title">Eliminar Producto</h2>
      <p class="body-text">
        ¿Esta seguro que desea eliminar al Producto
        <span class="text--bold">{{ producto.nombre }}</span
        >?
      </p>
    </template>
    <template v-slot:actions>
      <button-app :text="'Eliminar Producto'" @click="eliminarProducto" :color="'red'"></button-app>
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
      producto: {
        nombre: 'Pastel de Pollo'
      }
    }
  },
  async created() {
    this.producto = {
      ...this.productos.find((producto) => producto.id === parseInt(this.$route.params.id))
    }
  },
  computed: {
    ...mapState(['productos'])
  },
  methods: {
    ...mapActions(['eliminarProductoBD']),
    eliminarProducto() {
      this.eliminarProductoBD(this.producto.id)
      this.$router.push('/productos')
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
