<script setup>
import MainCanvas from "@/components/MianCanvas.vue";

const ClassName =
  "mb-5 inline-flex items-center justify-center rounded-xl border border-gray-900 bg-red-600 px-5 py-3 text-3xl font-bold text-white shadow-md shadow-slate-600 transition duration-300 ease-in-out hover:bg-red-500 hover:shadow-lg hover:shadow-slate-700 focus:outline-none capitalize";
</script>

<template>
  <MainCanvas>
    <router-link :to="{ name: 'Animals' }" :class="ClassName"
      >Animals</router-link
    >
    <router-link :to="{ name: 'Colours' }" :class="ClassName"
      >Colours</router-link
    >
    <router-link :to="{ name: 'My Family' }" :class="ClassName"
      >my family</router-link
    >
    <router-link :to="{ name: 'Food' }" :class="ClassName">Food</router-link>
    <router-link :to="{ name: 'School' }" :class="ClassName"
      >School</router-link
    >
  </MainCanvas>
</template>
