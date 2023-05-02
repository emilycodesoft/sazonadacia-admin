<template>
  <div class="product-order-card">
    <div class="product-info">
      <p>{{ producto.nombre }}</p>
      <p>${{ producto.precio }}</p>
    </div>
    <div class="product-quantity">
      <button class="btn-quantity" @click="$emit('disminuirCantidad')">-</button>
      <input
        type="number"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        min="0"
      />
      <button class="btn-quantity" @click="$emit('aumentarCantidad')">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true
    },
    modelValue: {
      type: Number
    }
  },
  emits: ['update:modelValue', 'disminuirCantidad', 'aumentarCantidad'],
  data() {
    return {
      cantidad: 0
    }
  }
}
</script>

<style scoped>
.product-order-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 9px 9px;
  min-height: 73px;
  background: #f9f9f9;
  align-items: center;
  margin-bottom: 18px;
}
.product-order-card .product-info {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  color: #000000;
}
.product-info p:nth-child(1) {
  margin-bottom: 6px;
}
.product-order-card .product-quantity {
  display: flex;
  grid-column-gap: 9px;
}
.product-quantity input {
  padding: 0 10px;
  text-align: center;
  font-weight: 600;
  width: 50px;
  height: 29px;
  border: 0;
  background-color: #d9d9d9;
}
.product-quantity .btn-quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29px;
  height: 29px;
  border: 0;
  font-weight: 600;
  border-radius: 50%;
  background: #5480f0;
}
</style>
