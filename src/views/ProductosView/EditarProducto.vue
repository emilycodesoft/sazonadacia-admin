<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/productos'">
    <template v-slot:body>
      <h2 class="body-title">Editar Producto</h2>
      <form @submit.prevent="editarProducto">
        <input type="text" placeholder="Nombre" v-model="producto.nombre" required />
        <textarea type="text" placeholder="Descripcion" v-model="producto.descripcion"></textarea>
        <input type="number" placeholder="Precio" v-model.number="producto.precio" required />
        <input
          type="number"
          placeholder="Cantidad Disponible"
          v-model.number="producto.cantidad_disponible"
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
import { mapActions, mapState } from 'vuex'

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
    ...mapActions(['editarProductoBD']),
    editarProducto() {
      this.editarProductoBD(this.producto)
      this.$router.push('/productos')
    }
  }
}
</script>
<style scoped>
@import url('../../assets/ModalStyles.css');
</style>
