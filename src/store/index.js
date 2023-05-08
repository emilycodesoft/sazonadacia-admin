import { createStore } from 'vuex'
import axios from 'axios'
// Create a new store instance.
const store = createStore({
  state() {
    return {
      clientes: [],
      productos: [],
      pedidos: []
    }
  },
  mutations: {
    setClientes(state, payload) {
      state.clientes = payload
    },
    setProductos(state, payload) {
      state.productos = payload
    },
    setPedidos(state, payload) {
      state.pedidos = payload
    },
    agregarCliente(state, payload) {
      state.clientes.unshift(payload)
    },
    editarCliente(state, payload) {
      const clienteIndex = state.clientes.findIndex((cliente) => cliente.id === payload.id)
      state.clientes[clienteIndex] = payload
    },
    eliminarCliente(state, payload) {
      const clienteIndex = state.clientes.findIndex((cliente) => cliente.id === payload)
      state.clientes.splice(clienteIndex, 1)
    },
    agregarProducto(state, payload) {
      state.productos.unshift(payload)
    },
    editarProducto(state, payload) {
      const productoIndex = state.productos.findIndex((producto) => producto.id === payload.id)
      state.productos[productoIndex] = payload
    },
    eliminarProducto(state, payload) {
      /* const productoIndex = state.productos.findIndex((producto) => producto.id === payload)
      state.productos.splice(productoIndex, 1) */
      const productoIndex = state.productos.findIndex((producto) => producto.id === payload)
      state.productos[productoIndex].estado_logico = 0
    },
    agregarPedido(state, payload) {
      state.pedidos.unshift(payload)
    },
    editarPedido(state, payload) {
      const pedidoIndex = state.pedidos.findIndex((pedido) => pedido.id === payload.id)
      state.pedidos[pedidoIndex] = payload
    },
    eliminarPedido(state, payload) {
      const pedidoIndex = state.pedidos.findIndex((pedido) => pedido.id === payload)
      state.pedidos.splice(pedidoIndex, 1)
    }
  },
  getters: {
    productos(state) {
      return state.productos.filter((producto) => producto.estado_logico)
    }
  },
  actions: {
    async obtenerClientes({ commit }, payload) {
      try {
        const res = await axios.get('http://localhost:3000/clientes')
        commit('setClientes', res.data)
      } catch (err) {
        console.log(err)
      }
    },
    async agregarClienteBD({ commit }, payload) {
      try {
        const res = await axios.post('http://localhost:3000/clientes', payload)
        console.log(res)
        commit('agregarCliente', { id: res.data.insertId, ...payload })
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    async editarClienteBD({ commit }, payload) {
      try {
        const res = await axios.patch(`http://localhost:3000/clientes/${payload.id}`, payload)
        commit('editarCliente', payload)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    async eliminarClienteBD({ commit }, payload) {
      try {
        const res = await axios.delete(`http://localhost:3000/clientes/${payload}`, payload)
        commit('eliminarCliente', payload)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    async obtenerProductos({ commit }, payload) {
      try {
        const res = await axios.get('http://localhost:3000/productos')
        commit('setProductos', res.data)
      } catch (err) {
        console.log(err)
      }
    },
    async agregarProductoBD({ commit }, payload) {
      try {
        const res = await axios.post('http://localhost:3000/productos', payload)
        commit('agregarProducto', { id: res.data.insertId, ...payload })
      } catch (err) {
        console.log(err)
      }
    },
    async editarProductoBD({ commit }, payload) {
      try {
        const res = await axios.patch(`http://localhost:3000/productos/${payload.id}`, payload)
        commit('editarProducto', payload)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    async eliminarProductoBD({ commit }, payload) {
      try {
        const res = await axios.delete(`http://localhost:3000/productos/${payload}`, payload)
        commit('eliminarProducto', payload)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    async obtenerPedidos({ commit }) {
      try {
        const res = await axios.get('http://localhost:3000/pedidos')
        commit('setPedidos', res.data)
      } catch (err) {
        console.log(err)
      }
    },
    async agregarPedidoBD({ state, commit, dispatch }, payload) {
      try {
        const res = await axios.post('http://localhost:3000/pedidos', payload)
        commit('agregarPedido', { id: res.data.insertId, ...payload })
        dispatch('obtenerProductos')
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    async editarPedidoBD({ commit }, payload) {
      try {
        const res = await axios.patch(`http://localhost:3000/pedidos/${payload.id}`, payload)
        commit('editarPedido', payload)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    async eliminarPedidoBD({ commit }, payload) {
      try {
        const res = await axios.delete(`http://localhost:3000/pedidos/${payload}`, payload)
        commit('eliminarPedido', payload)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    cerrarSesion() {
      localStorage.removeItem('token')
    }
  }
})

export default store
