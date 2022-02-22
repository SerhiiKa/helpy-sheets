<script setup>
import MainCanvas from "@/components/MianCanvas.vue";
import { ClassName, speechText } from "@/utils/utils.js";

speechText("");
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
