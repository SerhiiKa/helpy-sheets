<script setup>
defineProps({
  customizeStyle: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
});
</script>

<template>
  <div id="main-canvas" class="mb-5 flex flex-grow flex-col">
    <div
      id="main-canvas-wrapper"
      :style="customizeStyle"
      class="mx-2 flex flex-grow flex-col rounded-3xl bg-gray-400 py-8 px-5"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style>
@keyframes rainbow {
  0% {
    background-position-x: 8%;
    background-position-y: 10%;
  }
  25% {
    background-position-x: 89%;
    background-position-y: 55%;
  }
  50% {
    background-position-x: 97%;
    background-position-y: 98%;
  }
  75% {
    background-position-x: 30%;
    background-position-y: 39%;
  }
  100% {
    background-position-x: 8%;
    background-position-y: 10%;
  }
}
</style>
