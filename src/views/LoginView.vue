<template>
  <div class="container">
    <h3>SazonaDacia</h3>
    <form @submit.prevent="submit">
      <input type="email" v-model="email" placeholder="Correo Electronico" />
      <input type="password" v-model="password" placeholder="Contraseña" />
      <button class="menu-btn" type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  data: function () {
    return {
      email: '',
      emailBlured: false,
      valid: false,
      submitted: false,
      password: '',
      passwordBlured: false
    }
  },

  methods: {
    submit: async function () {
      try {
        const res = await axios.post('http://localhost:3000/login', {
          email: this.email,
          password: this.password
        })
        localStorage.setItem('token', res.token)
        this.$router.push('/')
        toast.success('Inicio de Sesión Satisfactorio', {
          position: 'bottom-right'
        })
      } catch (e) {
        toast.error('El correo o la contraseña son incorrectos', {
          position: 'bottom-right'
        })
      }
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -50px;
}
.container h3 {
  font-family: 'Poppins';
  margin-bottom: 42px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #000000;
}
form input {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  height: 44px;
  padding: 10px 16px;
  margin-bottom: 26px;
  border: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  color: #a39797;
  background: #f7f7f7;
}
.menu-btn {
  width: 260px;
  height: 54px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;
  border: 0px;
  background: #f8fb57;
  cursor: pointer;
}
</style>
