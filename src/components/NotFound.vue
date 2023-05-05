<template>
  <section class="not-found">
    <h3>No se encontraron {{ name }}.</h3>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
}
.not-found h3 {
  font-family: 'Poppins';
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  /* identical to box height */
  color: #000000;
}
</style>
