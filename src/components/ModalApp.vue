<template>
  <div class="modal">
    <div class="header">
      <slot name="header">
        <router-link :to="returnTo">
          <CloseIcon></CloseIcon>
        </router-link>
      </slot>
    </div>
    <div class="body">
      <slot name="body"> </slot>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
import CloseIcon from './icons/CloseIcon.vue'

export default {
  props: {
    returnTo: {
      type: String,
      required: true
    }
  },
  components: { CloseIcon }
}
</script>

<style scoped>
.modal {
  /* scroll-behavior: ; */
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 284px;
  max-height: 518px;
  overflow: auto;
  scroll-behavior: smooth;
  height: fit-content;
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
</style>
