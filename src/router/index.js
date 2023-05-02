import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesIndex from '../views/ClientesView/ClientesIndex.vue'
import AgregarCliente from '../views/ClientesView/AgregarCliente.vue'
import EditarCliente from '../views/ClientesView/EditarCliente.vue'
import EliminarCliente from '../views/ClientesView/EliminarCliente.vue'
import ProductosIndex from '../views/ProductosView/ProductosIndex.vue'
import AgregarProducto from '../views/ProductosView/AgregarProducto.vue'
import EditarProducto from '../views/ProductosView/EditarProducto.vue'
import VerProducto from '../views/ProductosView/VerProducto.vue'
import EliminarProducto from '../views/ProductosView/EliminarProducto.vue'
import PedidosIndex from '../views/PedidosView/PedidosIndex.vue'
import AgregarPedido from '../views/PedidosView/AgregarPedido.vue'
import EditarPedido from '../views/PedidosView/EditarPedido.vue'
import VerPedido from '../views/PedidosView/VerPedido.vue'
import EliminarPedido from '../views/PedidosView/EliminarPedido.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesIndex,
      children: [
        {
          path: 'agregar',
          name: 'clientes-agregar',
          component: AgregarCliente
        },
        {
          path: 'editar/:id',
          name: 'clientes-editar',
          component: EditarCliente
        },
        {
          path: 'eliminar/:id',
          name: 'clientes-eliminar',
          component: EliminarCliente
        }
      ]
    },
    {
      path: '/productos',
      name: 'productos',
      component: ProductosIndex,
      children: [
        {
          path: 'agregar',
          name: 'productos-agregar',
          component: AgregarProducto
        },
        {
          path: 'editar/:id',
          name: 'productos-editar',
          component: EditarProducto
        },
        {
          path: 'ver/:id',
          name: 'productos-ver',
          component: VerProducto
        },
        {
          path: 'eliminar/:id',
          name: 'productos-eliminar',
          component: EliminarProducto
        }
      ]
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: PedidosIndex,
      children: [
        {
          path: 'agregar',
          name: 'pedidos-agregar',
          component: AgregarPedido
        },
        {
          path: 'editar/:id',
          name: 'pedidos-editar',
          component: EditarPedido
        },
        {
          path: 'ver/:id',
          name: 'pedidos-ver',
          component: VerPedido
        },
        {
          path: 'eliminar/:id',
          name: 'pedidos-eliminar',
          component: EliminarPedido
        }
      ]
    }
  ]
})

export default router
