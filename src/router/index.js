import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesIndex from '../views/ClientesView/ClientesIndex.vue'
import AgregarCliente from '../views/ClientesView/AgregarCliente.vue'
import EditarCliente from '../views/ClientesView/EditarCliente.vue'
import EliminarCliente from '../views/ClientesView/EliminarCliente.vue'

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
    }
    /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

export default router
