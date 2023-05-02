import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
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
      ],
      productos: [
        {
          id: 1,
          nombre: 'Pastel de Pollo',
          descripcion: 'Delicioso pastel de Pollo con arroz.',
          precio: 15000,
          cantidadDisponible: 20,
          cantidad: 0
        },
        {
          id: 2,
          nombre: 'Pastel de Carne',
          descripcion: 'Delicioso pastel de Carne con arroz.',
          precio: 15000,
          cantidadDisponible: 20,
          cantidad: 0
        },
        {
          id: 3,
          nombre: 'Pastel Mixto',
          descripcion: 'Delicioso pastel Mixto con arroz.',
          precio: 20000,
          cantidadDisponible: 20,
          cantidad: 0
        }
      ],
      pedidos: [
        {
          id: 1,
          clienteId: 1,
          fecha: 0,
          direccion: 'Cra 36 No 34-42 Villa Verde',
          productos: [],
          estado: 'entregado',
          tipoEntrega: 'domicilio',
          precioTotal: 10000
        },
        {
          id: 1,
          clienteId: 1,
          fecha: 0,
          direccion: 'Cra 36 No 34-42 Villa Verde',
          productos: [],
          estado: 'entregado',
          tipoEntrega: 'domicilio',
          precioTotal: 10000
        },
        {
          id: 1,
          clienteId: 2,
          fecha: 0,
          direccion: 'Cra 36 No 34-42 Villa Verde',
          productos: [],
          estado: 'entregado',
          tipoEntrega: 'domicilio',
          precioTotal: 10000
        }
      ]
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    obtenerCliente({ state }, payload) {
      const clienteIndex = state.clientes.findIndex((cliente) => cliente.id === payload)
      return clienteIndex != -1 ? { ...state.clientes[clienteIndex] } : null
    },
    agregarClienteBd({ state }) {
      console.log(state.cliente)
    },
    editarClienteBD({ state }) {
      console.log(state.cliente)
    },
    eliminarClienteBD({ state }) {
      console.log(state.cliente)
    },
    obtenerProducto({ state }, payload) {
      const productoIndex = state.productos.findIndex((producto) => producto.id === payload)
      return productoIndex != -1 ? { ...state.productos[productoIndex] } : null
    },
    agregarProductoBd({ state }) {
      console.log(state.producto)
    },
    editarProductoBD({ state }) {
      console.log(state.producto)
    },
    eliminarProductoBD({ state }) {
      console.log(state.producto)
    }
  }
})

export default store
