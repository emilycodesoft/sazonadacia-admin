<template>
  <card-app>
    <template v-slot:info>
      <div class="card-info">
        <h2 class="info--id">#{{ pedido.id }}</h2>
        <p class="info--bold">{{ cliente.nombre }}</p>
        <p class="info--bold">{{ pedido.direccion || 'En Tienda' }}</p>
        <p class="info--text">Estado: {{ pedido.estado }}</p>
      </div>
    </template>
    <template v-slot:actions>
      <router-link :to="`/pedidos/ver/${pedido.id}`">
        <SeeIcon></SeeIcon>
      </router-link>
      <router-link :to="`/pedidos/editar/${pedido.id}`">
        <EditIcon></EditIcon>
      </router-link>
      <router-link :to="`/pedidos/eliminar/${pedido.id}`">
        <DeleteIcon></DeleteIcon>
      </router-link>
    </template>
  </card-app>
</template>

<script>
import CardApp from './CardApp.vue'

import EditIcon from './icons/EditIcon.vue'
import DeleteIcon from './icons/DeleteIcon.vue'
import SeeIcon from './icons/SeeIcon.vue'
import { mapState } from 'vuex'
export default {
  components: { EditIcon, DeleteIcon, SeeIcon, CardApp },
  props: {
    pedido: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['clientes']),
    cliente() {
      return { ...this.clientes.find((cliente) => cliente.id === parseInt(this.pedido.id_cliente)) }
    }
  }
}
</script>

<style>
.card-info > * {
  margin-bottom: 11px;
}

.info--id {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  color: #000000;
}
.info--bold {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  color: #000000;
}
</style>
