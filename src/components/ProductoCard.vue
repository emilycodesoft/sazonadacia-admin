<template>
  <card-app>
    <template v-slot:info>
      <div class="card-info">
        <h2 class="info--id">#{{ producto.id }}</h2>
        <p class="info--bold">{{ producto.nombre }}</p>
        <p class="info--bold">${{ $filters.formatPrice(producto.precio) }}</p>
        <p class="info--text">Cantidad disponible: {{ producto.cantidadDisponible }}</p>
      </div>
    </template>
    <template v-slot:actions>
      <router-link :to="`/productos/editar/${producto.id}`">
        <EditIcon></EditIcon>
      </router-link>
      <router-link :to="`/productos/eliminar/${producto.id}`">
        <DeleteIcon></DeleteIcon>
      </router-link>
    </template>
  </card-app>
</template>

<script>
import CardApp from './CardApp.vue'

import EditIcon from './icons/EditIcon.vue'
import DeleteIcon from './icons/DeleteIcon.vue'
export default {
  components: { EditIcon, DeleteIcon, CardApp },
  props: {
    producto: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(price) {
      return price
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
