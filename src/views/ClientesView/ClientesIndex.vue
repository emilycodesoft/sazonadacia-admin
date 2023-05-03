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
      <cliente-card
        v-for="cliente in clientesBusqueda"
        :cliente="cliente"
        :key="cliente.id"
      ></cliente-card>
    </section>
    <router-view></router-view>
  </main>
</template>
<script>
import HeaderApp from '../../components/HeaderApp.vue'
import ClienteCard from '../../components/ClienteCard.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import SearchApp from '../../components/SearchApp.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: { ClienteCard, SearchApp, ButtonApp, HeaderApp },
  data() {
    return {
      clienteBuscado: ''
    }
  },
  created() {
    this.obtenerClientes()
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
  },
  methods: {
    ...mapActions(['obtenerClientes'])
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
