<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/pedidos'">
    <template v-slot:body>
      <h2 class="body-title">Ver Pedido</h2>
      <form @submit.prevent="editarPedido">
        <input type="number" placeholder="Cliente Telefono" v-model="pedido.id_cliente" disabled />
        <h3>Productos</h3>
        <div
          class="product-order-card"
          v-for="producto in pedido.productos"
          :key="producto.id"
          :producto="producto"
        >
          <div class="product-info">
            <p>{{ producto.nombre }}</p>
            <p>${{ producto.precio }}</p>
          </div>
          <div class="product-quantity">
            <button class="btn-quantity" @click.prevent="producto.cantidad--" disabled>-</button>
            <!-- Add some kind of format quantity -->
            <input type="number" v-model.number="producto.cantidad" min="0" disabled />
            <button class="btn-quantity" @click.prevent="producto.cantidad++" disabled>+</button>
          </div>
        </div>
        <select name="estado" v-model="pedido.estado" placeholder="Estado" disabled>
          <option disabled value="" selected>Estado</option>
          <option>Sin Entregar</option>
          <option>Entregado</option>
        </select>
        <input type="text" placeholder="Dirección" v-model="pedido.direccion" disabled />
        <select name="tipo-entrega" v-model="pedido.tipo_entrega" disabled>
          <option disabled value="">Tipo de Entrega</option>
          <option>Domicilio</option>
          <option>En Tienda</option>
        </select>
        <div class="prices">
          <p>Total: $ {{ $filters.formatPrice(pedido.precio_total) }}</p>
        </div>
        <div class="actions">
          <router-link to="/pedidos">
            <button-app tpye="submit" :text="'Aceptar'"></button-app>
          </router-link>
        </div>
      </form>
    </template>
  </modal-app>
</template>
<script>
// import ProductOrderCard from '@/components/ProductOrderCard.vue'
import LayerApp from '../../components/LayerApp.vue'
import ModalApp from '../../components/ModalApp.vue'
import ButtonApp from '../../components/ButtonApp.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: { ModalApp, ButtonApp, LayerApp },
  data() {
    return {
      pedido: {
        id_cliente: '',
        fecha_pedido: '',
        direccion: '',
        productos: [],
        estado: '',
        tipo_entrega: '',
        precio_total: ''
      }
    }
  },
  created() {
    this.pedido = {
      ...this.pedidos.find((pedido) => pedido.id === parseInt(this.$route.params.id))
    }
  },
  computed: {
    ...mapState(['pedidos'])
  },
  methods: {}
}
</script>
<style scoped>
@import url('../../assets/ModalStyles.css');
@import url('../../assets/ProductOrderCardStyles.css');

h3 {
  margin-bottom: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  color: #000000;
}
.prices p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 30px 0;
}
</style>
