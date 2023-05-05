<template>
  <layer-app></layer-app>
  <modal-app :return-to="'/pedidos'">
    <template v-slot:body>
      <h2 class="body-title">Agregar Pedido</h2>
      <form @submit.prevent="agregarPedido">
        <input
          list="clientes"
          type="number"
          placeholder="Cliente Telefono"
          v-model="pedido.id_cliente"
          required
        />
        <datalist id="clientes">
          <option v-for="cliente in clientes" :value="cliente.id" :key="cliente.id">
            {{ cliente.telefono }}
          </option>
        </datalist>
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
            <button class="btn-quantity" @click.prevent="producto.cantidad--">-</button>
            <!-- Add some kind of format quantity -->
            <input type="number" v-model.number="producto.cantidad" min="0" />
            <button class="btn-quantity" @click.prevent="producto.cantidad++">+</button>
          </div>
        </div>
        <select name="estado" v-model="pedido.estado" placeholder="Estado" required>
          <option disabled value="" selected>Estado</option>
          <option>Sin Entregar</option>
          <option>Entegado</option>
        </select>
        <input type="text" placeholder="Dirección" v-model="pedido.direccion" required />
        <select name="tipo-entrega" v-model="pedido.tipo_entrega" required>
          <option disabled value="">Tipo de Entrega</option>
          <option>Domicilio</option>
          <option>En Tienda</option>
        </select>
        <div class="prices">
          <p>Total: $ {{ $filters.formatPrice(totalPrice) }}</p>
        </div>
        <div class="actions">
          <button-app tpye="submit" :text="'Agregar Pedido'"></button-app>
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
    this.productos.forEach((producto) => {
      this.pedido.productos.push({ cantidad: 0, ...producto })
    })
  },
  computed: {
    ...mapState(['productos', 'clientes']),
    totalPrice() {
      if (this.pedido.productos.length) {
        let totalPrice = 0
        this.pedido.productos.forEach((producto) => {
          totalPrice += producto.precio * parseInt(producto.cantidad)
        })
        this.pedido.precio_total = totalPrice
        return totalPrice
      }
      return 0
    }
  },

  methods: {
    ...mapActions(['agregarPedidoBD']),
    agregarPedido() {
      if (this.clientes.some((cliente) => cliente.id === this.pedido.id_cliente)) {
        if (this.pedido.productos.some((producto) => producto.cantidad > 0)) {
          /* Añado la fecha en formato MySQL */
          this.pedido.fecha_pedido = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`
          /* Filtra los productos que se van a pedir */
          this.pedido.productos = this.pedido.productos.filter((producto) => producto.cantidad > 0)
          this.agregarPedidoBD(this.pedido)
          this.$router.push('/pedidos')
        } else {
          alert('Debe seleccionar al menos un producto')
        }
      } else {
        alert('El cliente no existe')
      }
    }
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
