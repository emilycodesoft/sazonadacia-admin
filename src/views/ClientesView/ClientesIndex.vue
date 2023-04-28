<template>
  <main>
    <header class="header">
      <h2>Clientes</h2>
    </header>
    <div class="actions">
      <router-link to="/clientes/agregar">
        <button-app :text="'Agregar Cliente'"></button-app>
      </router-link>
    </div>
    <section class="list">
      <h2>Lista de CLientes</h2>
      <search-app v-model="clienteBuscado"></search-app>
      <card-app v-for="cliente in clientesBusqueda" :cliente="cliente" :key="cliente.id"></card-app>
    </section>
    <router-view></router-view>
  </main>
</template>
<script>
import CardApp from '../../components/CardApp.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import SearchApp from '../../components/SearchApp.vue'

export default {
  components: { CardApp, SearchApp, ButtonApp },
  data() {
    return {
      clienteBuscado: '',
      clientes: [
        {
          id: 1,
          nombre: 'Emily Perea Córdoba',
          telefono: '3206834465',
          direccion: 'Cra 36 #34-42 Villa Verde'
        },
        {
          id: 2,
          nombre: 'Lesty Shair Córdoba',
          telefono: '3206834465',
          direccion: 'Cra 36 #34-42 Villa Verde'
        }
      ]
    }
  },
  computed: {
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
main {
  padding: 28px 24px;
}
.header {
  margin-bottom: 37px;
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
