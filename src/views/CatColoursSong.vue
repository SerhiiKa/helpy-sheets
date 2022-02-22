<script setup>
import MainCanvas from "@/components/MianCanvas.vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/dist/style.css";
import { speechText } from "@/utils/utils.js";

let customStyle = function () {
  return `background: linear-gradient(124deg,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840,#1ddde8,#2b1de8,#dd00f3,#dd00f3);
  background-size: 1800% 1800%;
  animation: rainbow 80s cubic-bezier(0.38, 0.74, 0.67, 0.26) infinite;
`;
};

speechText("Let's sing a song");
</script>

<template>
  <MainCanvas :customize-style="customStyle()">
    <div>
      <div class="relative mx-auto min-w-min max-w-3xl">
        <LiteYouTubeEmbed
          id="4YGjBHL-DZg"
          title="Colours Song (British English)"
        />
      </div>
    </div>
  </MainCanvas>
</template>

<style></style>
