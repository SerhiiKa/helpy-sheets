<script setup>
import { ref } from "vue";
import MainCanvas from "@/components/MianCanvas.vue";
import MakeTheRainbowItems from "@/assets/MakeTheRainbow/MakeTheRainbow-items.json";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import {
  speechText,
  ClassName,
  shuffleArray,
  getRandomIntInclusive,
} from "@/utils/utils.js";
const ImgURIModules = import.meta.globEager(
  "/src/assets/MakeTheRainbow/*/*.{jpg,png}"
);

shuffleArray(MakeTheRainbowItems);

const url = ref(ImgURIModules);

let ImgUrl = function ImgUrl(id) {
  return url.value[id].default;
};

let allRight = ref(false);

let mainGameLists = {};

mainGameLists.MakeTheRainbowItems = ref(MakeTheRainbowItems);

let dragOptions = ref({
  group: "description",
  disabled: false,
  delay: 5,
  "touch-start-threshold": 5,
  animation: 200,
  sort: true,
});
function onEndCallback(evt) {}

function onChooseCalback(evt) {
  speechText(evt.item.innerText);
}

function CheckGame() {
  dragOptions.value.disabled = true;
  if (
    mainGameLists.MakeTheRainbowItems.value[0].name == "red" &&
    mainGameLists.MakeTheRainbowItems.value[1].name == "orange" &&
    mainGameLists.MakeTheRainbowItems.value[2].name == "yellow" &&
    mainGameLists.MakeTheRainbowItems.value[3].name == "green" &&
    mainGameLists.MakeTheRainbowItems.value[4].name == "blue" &&
    mainGameLists.MakeTheRainbowItems.value[5].name == "indigo" &&
    mainGameLists.MakeTheRainbowItems.value[6].name == "purple"
  ) {
    allRight.value = true;
    speechText("Great job!");
    return;
  } else {
    speechText("Try again");
  }
  shuffleArray(bgColor.value);
  randomDeg.value = getRandomIntInclusive(1, 360);
  dragOptions.value.disabled = false;
}

speechText("Let's make the rainbow");

let bgColor = ref([
  "#ff2400",
  "#e81d1d",
  "#e8b71d",
  "#e3e81d",
  "#1de840",
  "#1ddde8",
  "#2b1de8",
  "#dd00f3",
  "#dd00f3",
]);
shuffleArray(bgColor);
let randomDeg = ref(getRandomIntInclusive(1, 360));
let customStyle = function () {
  return `background: linear-gradient(${
    randomDeg.value
  }deg,${bgColor.value.join()});
  background-size: 1800% 1800%;
  animation: rainbow 80s cubic-bezier(0.38, 0.74, 0.67, 0.26) infinite;
`;
};
</script>

<template>
  <MainCanvas :customize-style="customStyle()">
    <div id="game-canvas" class="flex-grow">
      <div id="rainbow-canvas" class="relative p-1">
        <svg
          class="mx-auto max-h-[300px]"
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="red"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M600 300C600 134.315 465.685 0 300 0C134.4 0 0.138216 134.176 0 299.744V300H24.9999C24.9999 148.122 148.122 25 300 25C451.878 25 575 148.122 575 300H600Z"
            :fill="mainGameLists.MakeTheRainbowItems.value[0].name"
          />
          <path
            id="orange"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M575 300C575 148.122 451.878 25 300 25C148.122 25 25 148.122 25 300H50C50 161.929 161.929 50 300 50C438.071 50 550 161.929 550 300H575Z"
            :fill="mainGameLists.MakeTheRainbowItems.value[1].name"
          />
          <path
            id="yellow"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M550 300C550 161.929 438.071 50 300 50C161.929 50 50 161.929 50 300H75C75 175.736 175.736 75 300 75C424.264 75 525 175.736 525 300H550Z"
            :fill="mainGameLists.MakeTheRainbowItems.value[2].name"
          />
          <path
            id="green"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M525 300C525 175.736 424.264 75 300 75C175.736 75 75 175.736 75 300H100C100 189.543 189.543 100 300 100C410.457 100 500 189.543 500 300H525Z"
            :fill="mainGameLists.MakeTheRainbowItems.value[3].name"
          />
          <path
            id="blue"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M500 300C500 189.543 410.457 100 300 100C189.543 100 100 189.543 100 300H125C125 203.35 203.35 125 300 125C396.65 125 475 203.35 475 300H500Z"
            :fill="mainGameLists.MakeTheRainbowItems.value[4].name"
          />
          <path
            id="indigo"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M475 300C475 203.35 396.65 125 300 125C203.35 125 125 203.35 125 300H150C150 217.157 217.157 150 300 150C382.843 150 450 217.157 450 300H475Z"
            :fill="mainGameLists.MakeTheRainbowItems.value[5].name"
          />
          <path
            id="purple"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M450 300C450 217.157 382.843 150 300 150C217.157 150 150 217.157 150 300H175C175 229.86 230.964 173 300 173C369.036 173 425 229.86 425 300H450Z"
            :fill="mainGameLists.MakeTheRainbowItems.value[6].name"
          />
        </svg>

        <img
          v-show="allRight"
          src="@/assets/MakeTheRainbow/smiling_drop.png"
          alt="Smiling Drop"
          class="absolute right-4 -bottom-10 max-w-[250px] animate-bounce sm:right-8 md:right-6 lg:right-32 xl:right-60 2xl:right-80"
        />
      </div>
      <div id="colour-sort-canvas" class="relative p-1">
        <draggable
          v-model="mainGameLists.MakeTheRainbowItems.value"
          class="list-group mx-auto max-w-[700px] bg-slate-100/50 p-2"
          v-bind="dragOptions"
          @choose="onChooseCalback"
          @end="onEndCallback"
        >
          <div
            v-for="item in mainGameLists.MakeTheRainbowItems.value"
            :key="item.id"
            class="m-1 flex max-h-[50px] min-h-[50px] min-w-[80px] cursor-move select-none flex-col justify-end border-2 border-cyan-600 bg-slate-50/[.1] bg-contain bg-left bg-no-repeat p-1 text-center text-lg font-bold capitalize text-violet-900 underline decoration-orange-600 decoration-2 drop-shadow-md"
            :style="{
              backgroundImage: `url(${ImgUrl(item.path)})`,
              textShadow: `rgb(255, 251, 37) 1px 0 10px`,
            }"
          >
            <span>{{ item.name }} </span>
          </div>
        </draggable>
      </div>
      <div
        id="check-button-canvas"
        class="flex grow items-center justify-center p-1"
      >
        <button :class="ClassName + ` grow-0`" @click="CheckGame">Check</button>
      </div>
    </div>
  </MainCanvas>
</template>
<style scoped>
#game-canvas {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(min-content, max-content);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
}
#rainbow-canvas {
  background-size: contain;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  background-color: transparent;
  grid-area: 1 / 1 / 2 / 2;
}
#colour-sort-canvas {
  background-size: contain;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  grid-area: 2 / 1 / 3 / 2;
}
#check-button-canvas {
  background-size: contain;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  background-color: transparent;
  grid-area: 3 / 1 / 4 / 2;
}
</style>
