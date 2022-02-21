<script setup>
import MainCanvas from "@/components/MianCanvas.vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/dist/style.css";
import { speechText } from "@/utils/utils.js";

speechText("Let's sing a song");
</script>

<template>
  <MainCanvas>
    <div>
      <div class="relative mx-auto min-w-min max-w-3xl">
        <LiteYouTubeEmbed id="wCfWmlnJl-A" title="The Animal Songs" />
      </div>
    </div>
  </MainCanvas>
</template>
