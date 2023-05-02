<template>
  <div class="card">
    <div class="card-info">
      <slot name="info"> </slot>
    </div>
    <div class="card-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
/* import EditIcon from './icons/EditIcon.vue'
import DeleteIcon from './icons/DeleteIcon.vue' */
export default {
  // components: { EditIcon, DeleteIcon }
}
</script>
<style scoped>
.card {
  width: 263px;
  min-height: 194px;
  margin-bottom: 28px;
  padding: 19px 16px;
  background: #f9f9f9;
}
.card-info > * {
  margin-bottom: 11px;
}
.card-info .info--id {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  color: #000000;
}
.card-info .info--bold {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  color: #000000;
}
.card-actions {
  justify-content: end;
  display: flex;
  grid-column-gap: 17px;
}
</style>
