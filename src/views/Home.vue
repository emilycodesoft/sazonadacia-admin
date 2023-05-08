<template>
  <main>
    <div>
      <img src="../../chinese-food.png" class="icon" alt="" />
    </div>
    <h1>SazonaDacia</h1>
    <div class="menu">
      <router-link to="/clientes">
        <button class="menu-btn">Clientes</button>
      </router-link>
      <router-link to="/productos">
        <button class="menu-btn">Productos</button>
      </router-link>
      <!-- <button class="menu-btn" disabled>Mensajes</button> -->
      <router-link to="/pedidos">
        <button class="menu-btn">Pedidos</button>
      </router-link>
      <!-- <button class="menu-btn" disabled>Actividad</button> -->
      <button class="menu-btn btn--red" @click="cerrarSesion">Cerrar Sesión</button>
    </div>
  </main>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    cerrarSesion() {
      this.$store.dispatch('cerrarSesion')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
h1 {
  margin-bottom: 40px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.menu {
  display: flex;
  flex-direction: column;
  grid-row-gap: 34px;
}
.menu-btn {
  width: 176px;
  height: 54px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  border: 0px;
  background: #f8fb57;
  cursor: pointer;
}
.btn--red {
  background-color: #f05454;
}
</style>
