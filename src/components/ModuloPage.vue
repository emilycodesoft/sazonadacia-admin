<template>
  <main>
    <!-- Header Component -->
    <header-app :name="'Productos'"></header-app>
    <div class="actions">
      <router-link to="/producto/agregar">
        <button-app :text="'Agregar Producto'"></button-app>
      </router-link>
    </div>
    <section class="list">
      <h2>Lista de Productos</h2>
      <search-app v-model="productoBuscado"></search-app>
      <card-app v-for="item in itemsBusqueda" :item="item" :key="item.id"></card-app>
    </section>
    <router-view></router-view>
  </main>
</template>
<script>
import HeaderApp from '../../components/HeaderApp.vue'
import CardApp from '../../components/CardApp.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import SearchApp from '../../components/SearchApp.vue'
import { mapState } from 'vuex'
export default {
  components: { CardApp, SearchApp, ButtonApp, HeaderApp },
  data() {
    return {
      productoBuscado: ''
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
