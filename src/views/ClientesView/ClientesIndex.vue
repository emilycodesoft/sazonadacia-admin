<template>
  <main>
    <!-- Header Component -->
    <header-app :name="'Clientes'"></header-app>
    <div class="actions">
      <router-link to="/clientes/agregar">
        <button-app :text="'Agregar Cliente'"></button-app>
      </router-link>
    </div>
    <section class="list">
      <h2>Lista de CLientes</h2>
      <search-app v-model="clienteBuscado"></search-app>
      <div class="cards-container" v-if="clientes.length">
        <cliente-card
          v-for="cliente in clientesBusqueda"
          :cliente="cliente"
          :key="cliente.id"
        ></cliente-card>
      </div>
      <not-found :name="'Clientes'" v-else></not-found>
    </section>
    <router-view></router-view>
  </main>
</template>
<script>
import HeaderApp from '../../components/HeaderApp.vue'
import ClienteCard from '../../components/ClienteCard.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import SearchApp from '../../components/SearchApp.vue'
import NotFound from '../../components/NotFound.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: { ClienteCard, SearchApp, ButtonApp, HeaderApp, NotFound },
  data() {
    return {
      clienteBuscado: ''
    }
  },
  computed: {
    ...mapState(['clientes']),
    clientesBusqueda() {
      if (this.clienteBuscado.length) {
        return this.clientes.filter((cliente) => cliente.nombre.includes(this.clienteBuscado))
      } else {
        return this.clientes
      }
    }
  }
}
</script>

<style scoped>
@import url('../../assets/IndexStyles.css');
</style>
