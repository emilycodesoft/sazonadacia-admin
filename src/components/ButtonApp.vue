<template>
  <button class="btn" :class="`btn--${color}`">{{ text }}</button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue'
    }
  }
}
</script>
<style scoped>
.btn {
  width: 160px;
  height: 49px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  border: 0px;
}
.btn--blue {
  background: #5480f0;
}
.btn--red {
  background: #f05454;
}
</style>
