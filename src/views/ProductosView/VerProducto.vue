<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/productos'">
    <template v-slot:body>
      <h2 class="body-title">Ver Producto</h2>
      <form>
        <div class="inputs">
          <input type="text" placeholder="Nombre" v-model="producto.nombre" disabled />
          <textarea
            type="text"
            placeholder="Descripcion"
            v-model="producto.descripcion"
            disabled
          ></textarea>
          <input type="number" placeholder="Precio" v-model.number="producto.precio" disabled />
          <input
            type="number"
            placeholder="Cantidad Disponible"
            v-model.number="producto.cantidad_disponible"
            disabled
          />
        </div>
        <div class="actions">
          <router-link to="/productos">
            <button-app type="submit" :text="'Aceptar'"></button-app>
          </router-link>
        </div>
      </form>
    </template>
  </modal-app>
</template>
<script>
import LayerApp from '../../components/LayerApp.vue'
import ModalApp from '../../components/ModalApp.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: { ModalApp, ButtonApp, LayerApp },
  data() {
    return {
      producto: {
        nombre: '',
        descripcion: '',
        precio: '',
        cantidad_disponible: ''
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
    ...mapMutations(['obtenerProducto'])
  }
}
</script>
<style scoped>
@import url('../../assets/ModalStyles.css');
</style>
