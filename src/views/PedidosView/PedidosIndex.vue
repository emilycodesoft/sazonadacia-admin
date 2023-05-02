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
      <router-link :to="`/pedidos/ver/${pedidoSeleccionado}`">
        <pedido-card
          v-for="pedido in pedidosBusqueda"
          :pedido="pedido"
          :key="pedido.id"
          @click="pedidoSeleccionado = pedido.id"
        ></pedido-card>
      </router-link>
    </section>
    <router-view></router-view>
  </main>
</template>
<script>
import HeaderApp from '../../components/HeaderApp.vue'
import PedidoCard from '../../components/PedidoCard.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import SearchApp from '../../components/SearchApp.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: { PedidoCard, SearchApp, ButtonApp, HeaderApp },
  data() {
    return {
      pedidoBuscado: '',
      pedidoSeleccionado: ''
    }
  },
  methods: {
    ...mapActions(['obtenerCliente'])
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
