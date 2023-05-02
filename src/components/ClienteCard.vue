<template>
  <card-app>
    <template v-slot:info>
      <div class="card-info">
        <h2 class="info--id">#{{ cliente.id }}</h2>
        <p class="info--bold">{{ cliente.nombre }}</p>
        <p class="info--bold">{{ cliente.telefono }}</p>
        <p class="info--text">{{ cliente.direccion }}</p>
      </div>
    </template>
    <template v-slot:actions>
      <router-link :to="`/clientes/editar/${cliente.id}`">
        <EditIcon></EditIcon>
      </router-link>
      <router-link :to="`/clientes/eliminar/${cliente.id}`">
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
    cliente: {
      type: Object,
      required: true
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
