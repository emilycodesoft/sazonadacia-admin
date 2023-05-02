<template>
  <main>
    <h1>SazonaDacia</h1>
    <div class="menu">
      <router-link to="/clientes">
        <button class="menu-btn">Clientes</button>
      </router-link>
      <router-link to="/productos">
        <button class="menu-btn">Productos</button>
      </router-link>
      <button class="menu-btn">Mensajes</button>
      <router-link to="/pedidos">
        <button class="menu-btn">Pedidos</button>
      </router-link>
      <button class="menu-btn">Actividad</button>
    </div>
  </main>
</template>

<script></script>

<style scoped>
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
}
</style>
