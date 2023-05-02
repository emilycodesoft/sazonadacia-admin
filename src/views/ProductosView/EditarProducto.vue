<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/productos'">
    <template v-slot:body>
      <h2 class="body-title">Editar Producto</h2>
      <form @submit.prevent="editarProductoBD">
        <input type="text" placeholder="Nombre" v-model="producto.nombre" required />
        <textarea type="text" placeholder="Descripcion" v-model="producto.descripcion"></textarea>
        <input type="number" placeholder="Precio" v-model.number="producto.precio" required />
        <input
          type="number"
          placeholder="Cantidad Disponible"
          v-model.number="producto.cantidadDisponible"
          required
        />
        <div class="actions">
          <button-app :text="'Editar Producto'"></button-app>
        </div>
      </form>
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
      producto: {
        id: 0,
        nombre: '',
        descripcion: '',
        precio: '',
        cantidadDisponible: ''
      }
    }
  },
  created() {
    /* const productoIndex = this.productos.findIndex(
      (producto) => producto.id === this.$route.params.id
    )
    productoIndex != -1 ? (this.producto = { ...this.productos[productoIndex] }) : null */
  },
  methods: {
    ...mapActions(['editarProductoBD'])
  }
}
</script>
<style scoped>
@import url('../../assets/ModalStyles.css');
</style>
