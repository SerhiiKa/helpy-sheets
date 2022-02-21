<script setup>
import MainCanvas from "@/components/MianCanvas.vue";
import { ClassName } from "@/utils/utils.js";
</script>

<template>
  <MainCanvas>
    <router-link :to="{ name: 'Maching Game' }" :class="ClassName"
      >Maching Game</router-link
    >
    <router-link :to="{ name: 'Feed the cat' }" :class="ClassName"
      >Feed the cat</router-link
    >
    <router-link :to="{ name: 'Animals Song' }" :class="ClassName"
      >Song</router-link
    >
  </MainCanvas>
</template>
