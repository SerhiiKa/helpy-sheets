<script setup>
import { ref, reactive } from "vue";
import MainCanvas from "@/components/MianCanvas.vue";
import animalsItem from "@/assets/animals/animals-items.json";
</script>

<template>
  <MainCanvas>
    <div class="parent">
      <div class="div1 flex flex-wrap justify-around p-3"></div>
      <div class="div2 flex flex-wrap justify-around p-3"></div>
      <div class="div3 flex flex-wrap justify-around p-3">
        <div
          v-for="(item, index) in animalsItem"
          :key="index"
          class="m-1 h-28 w-28 border-2 border-cyan-600 bg-slate-400 bg-cover bg-center bg-no-repeat p-1"
          :style="{
            'background-image': `url(${item.path})`,
          }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </MainCanvas>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
}

.div1 {
  background: antiquewhite;
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  background: bisque;
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  background: yellow;
  grid-area: 2 / 1 / 3 / 3;
}
</style>
