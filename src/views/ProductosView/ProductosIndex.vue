<template>
  <main>
    <!-- Header Component -->
    <header-app :name="'Productos'"></header-app>
    <div class="actions">
      <router-link to="/productos/agregar">
        <button-app :text="'Agregar Producto'"></button-app>
      </router-link>
    </div>
    <section class="list">
      <h2>Lista de Productos</h2>
      <search-app :placeholder="'Buscar Producto'" v-model="productoBuscado"></search-app>
      <div class="cards-container" v-if="productos.length">
        <producto-card
          v-for="producto in productosBusqueda"
          :producto="producto"
          :key="producto.id"
        ></producto-card>
      </div>
      <not-found :name="'Productos'" v-else></not-found>
    </section>
    <router-view></router-view>
  </main>
</template>
<script>
import HeaderApp from '../../components/HeaderApp.vue'
import ProductoCard from '../../components/ProductoCard.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import SearchApp from '../../components/SearchApp.vue'
import NotFound from '../../components/NotFound.vue'

import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  components: { ProductoCard, SearchApp, ButtonApp, HeaderApp, NotFound },
  data() {
    return {
      productoBuscado: '',
      productoSeleccionado: ''
    }
  },
  computed: {
    ...mapGetters(['productos']),
    productosBusqueda() {
      if (this.productoBuscado.length) {
        return this.productos.filter((producto) => producto.nombre.includes(this.productoBuscado))
      } else {
        return this.productos
      }
    }
  }
}
</script>

<style scoped>
@import url('../../assets/IndexStyles.css');
</style>
