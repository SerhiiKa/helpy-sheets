<script setup>
import MainCanvas from "@/components/MianCanvas.vue";
import { ClassName } from "@/utils/utils.js";
</script>

<template>
  <MainCanvas>
    <router-link :to="{ name: 'Make the Rainbow' }" :class="ClassName"
      >Make the rainbow</router-link
    >
    <router-link :to="{ name: 'Match the Colours' }" :class="ClassName"
      >Match the colours</router-link
    >
    <router-link :to="{ name: 'Colours Song' }" :class="ClassName"
      >Song</router-link
    >
  </MainCanvas>
</template>
