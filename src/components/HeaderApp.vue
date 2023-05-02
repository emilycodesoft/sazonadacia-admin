<template>
  <header class="header">
    <router-link to="/">
      <back-icon></back-icon>
    </router-link>
    <h2>{{ name }}</h2>
  </header>
</template>

<script>
import BackIcon from './icons/BackIcon.vue'

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  components: { BackIcon }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  grid-column-gap: 14px;
  margin-bottom: 37px;
}
h2 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
}
.header a {
  display: flex;
  align-items: center;
}
</style>
