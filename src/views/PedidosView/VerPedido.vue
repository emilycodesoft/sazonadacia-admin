<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/pedidos'">
    <template v-slot:body>
      <h2 class="body-title">Ver Pedido</h2>
      <form @submit.prevent="agregarPedidoBD">
        <input type="text" placeholder="Cliente ID" v-model="pedido.clienteId" disabled />
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
            <button class="btn-quantity" @click="producto.cantidad--" disabled>-</button>
            <!-- Add some kind of format quantity -->
            <input type="number" v-model.number="producto.cantidad" min="0" disabled />
            <button class="btn-quantity" @click="producto.cantidad++" disabled>+</button>
          </div>
        </div>
        <select name="estado" v-model="pedido.estado" placeholder="Estado" disabled>
          <option disabled value="" selected>Estado</option>
          <option>Sin Entregar</option>
          <option>Entegado</option>
        </select>
        <input type="text" placeholder="Dirección" v-model="pedido.direccion" disabled />
        <select name="tipo-entrega" v-model="pedido.tipoEntrega" disabled>
          <option disabled value="">Tipo de Entrega</option>
          <option>Domicilio</option>
          <option>En Tienda</option>
        </select>
        <div class="prices">
          <p>Total: $ {{ this.pedido.precioTotal || $filters.formatPrice(totalPrice) }}</p>
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
import { mapState, mapMutations } from 'vuex'

export default {
  components: { ModalApp, ButtonApp, LayerApp },
  data() {
    return {
      pedido: {
        id: '',
        clienteId: '',
        fecha: '',
        direccion: '',
        productos: [],
        estado: '',
        tipoEntrega: '',
        precioTotal: ''
      }
    }
  },
  created() {
    this.productos.forEach((producto) => {
      this.pedido.productos.push({ ...producto })
    })
  },
  computed: {
    ...mapState(['productos']),
    totalPrice() {
      if (this.pedido.productos.length) {
        let totalPrice = 0
        this.pedido.productos.forEach((producto) => {
          totalPrice += producto.precio * parseInt(producto.cantidad)
        })
        return totalPrice
      }
      return 0
    }
  },
  methods: {
    ...mapMutations(['obtenerPedido'])
  }
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
