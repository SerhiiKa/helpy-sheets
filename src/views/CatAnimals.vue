<script setup>
import MainCanvas from "@/components/MianCanvas.vue";

const ClassName =
  "mb-5 inline-flex items-center justify-center rounded-xl border border-gray-900 bg-red-600 px-5 py-3 text-3xl font-bold text-white shadow-md shadow-slate-600 transition duration-300 ease-in-out hover:bg-red-500 hover:shadow-lg hover:shadow-slate-700 focus:outline-none capitalize";
</script>

<template>
  <MainCanvas>
    <router-link :to="{ name: 'Maching Game' }" :class="ClassName"
      >Maching Game</router-link
    >
    <router-link :to="{ name: 'Game Two' }" :class="ClassName"
      >Game Two</router-link
    >
  </MainCanvas>
</template>
