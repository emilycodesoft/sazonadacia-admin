<template>
  <main>
    <!-- Header Component -->
    <header-app :name="'Pedidos'"></header-app>
    <div class="actions">
      <router-link to="/pedidos/agregar">
        <button-app :text="'Agregar Pedido'"></button-app>
      </router-link>
    </div>
    <section class="list">
      <h2>Lista de Pedidos</h2>
      <search-app v-model="pedidoBuscado"></search-app>
      <div class="cards-container" v-if="pedidos.length">
        <pedido-card
          v-for="pedido in pedidosBusqueda"
          :pedido="pedido"
          :key="pedido.id"
          @click="pedidoSeleccionado = pedido.id"
        ></pedido-card>
      </div>
      <not-found :name="'Pedidos'" v-else></not-found>
    </section>
    <router-view></router-view>
  </main>
</template>
<script>
import HeaderApp from '../../components/HeaderApp.vue'
import PedidoCard from '../../components/PedidoCard.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import SearchApp from '../../components/SearchApp.vue'
import NotFound from '../../components/NotFound.vue'

import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  components: { PedidoCard, SearchApp, ButtonApp, HeaderApp, NotFound },
  data() {
    return {
      pedidoBuscado: '',
      pedidoSeleccionado: ''
    }
  },

  computed: {
    ...mapState(['pedidos']),
    pedidosBusqueda() {
      if (this.pedidoBuscado.length) {
        return this.pedidos.filter((pedido) => pedido.nombre.includes(this.pedidoBuscado))
      } else {
        return this.pedidos
      }
    }
  }
}
</script>

<style scoped>
@import url('../../assets/IndexStyles.css');
</style>
