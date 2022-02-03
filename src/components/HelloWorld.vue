<script setup lang="ts">
import { defineProps, toRefs } from "vue";

const props = defineProps<{ msg: string }>();

const { msg } = toRefs(props);
</script>

<template>
  <h1
    class="my-7 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
  >{{ msg }}</h1>
  <div class="mt-2 flex flex-row">
    <a
      class="text-indigo-600"
      href="https://v3.vuejs.org/guide/introduction.html"
      target="_blank"
    >Vue 3</a>
    <div class="mx-2">|</div>
    <a
      class="text-indigo-600"
      href="https://tailwindcss.com/docs/installation"
      target="_blank"
    >Tailwind</a>
  </div>
</template>
