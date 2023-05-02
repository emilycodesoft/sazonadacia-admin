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
            v-model.number="producto.cantidadDisponible"
            disabled
          />
        </div>
        <div class="actions">
          <router-link to="/productos">
            <button-app :text="'Aceptar'"></button-app>
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
import { mapMutations } from 'vuex'

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
  methods: {
    ...mapMutations(['obtenerProducto'])
  }
}
</script>
<style scoped>
@import url('../../assets/ModalStyles.css');
</style>
