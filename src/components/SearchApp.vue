<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Buscar'
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
input {
  width: 263px;
  height: 44px;
  margin-bottom: 47px;
  padding: 10px 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border: 0px;
  color: #a39797;
  background-color: #f7f7f7;
}
</style>
