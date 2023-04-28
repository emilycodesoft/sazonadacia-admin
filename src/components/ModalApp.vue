<template>
  <div class="modal">
    <div class="header">
      <slot name="header">
        <router-link to="/clientes">
          <CloseIcon></CloseIcon>
        </router-link>
      </slot>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
import CloseIcon from './icons/CloseIcon.vue'

export default {
  components: { CloseIcon }
}
</script>

<style scoped>
.modal {
  /* scroll-behavior: ; */
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 284px;
  height: 425px;
  margin: auto;
  padding: 13px 19px;
  padding-bottom: 31px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: #ffffff;
}
.header,
.actions {
  display: flex;
  justify-content: end;
}
.actions {
  align-items: end;
  flex-grow: 1;
}
.body-title {
  margin-bottom: 41px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #000000;
}
input {
  width: 100%;
  height: 44px;
  margin-bottom: 20px;
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
