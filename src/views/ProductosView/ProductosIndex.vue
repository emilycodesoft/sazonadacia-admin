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
      <router-link :to="`/productos/ver/${productoSeleccionado}`">
        <producto-card
          v-for="producto in productosBusqueda"
          :producto="producto"
          :key="producto.id"
          @click="productoSeleccionado = producto.id"
        ></producto-card>
      </router-link>
    </section>
    <router-view></router-view>
  </main>
</template>
<script>
import HeaderApp from '../../components/HeaderApp.vue'
import ProductoCard from '../../components/ProductoCard.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import SearchApp from '../../components/SearchApp.vue'
import { mapState } from 'vuex'
export default {
  components: { ProductoCard, SearchApp, ButtonApp, HeaderApp },
  data() {
    return {
      productoBuscado: '',
      productoSeleccionado: ''
    }
  },
  computed: {
    ...mapState(['productos']),
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
main {
  padding: 28px 24px;
  padding-bottom: 0;
}
h2 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
}
.actions {
  margin-bottom: 37px;
}

.list h2 {
  margin-bottom: 18px;
}
</style>
