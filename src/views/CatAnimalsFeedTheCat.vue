<script setup>
import { ref } from "vue";
import MainCanvas from "@/components/MianCanvas.vue";
import FeedTheCatItems from "@/assets/FeedTheCat/FeedTheCat-items.json";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import { speechText, ClassName, shuffleArray } from "@/utils/utils.js";
const ImgURIModules = import.meta.globEager(
  "/src/assets/FeedTheCat/*/*.{jpg,png}"
);

const url = ref(ImgURIModules);

let ImgUrl = function ImgUrl(id) {
  return url.value[id].default;
};

let mainGameLists = {};
let emptyFeedTheCatItems = ref(false);

mainGameLists.cat_area = ref([]);
mainGameLists.eatables = ref([]);
mainGameLists.noteatables = ref([]);
mainGameLists.feed_the_cat_items = ref(FeedTheCatItems);

function onEndCallback(evt) {
  let item = JSON.parse(JSON.stringify(evt.item._underlying_vm_));
  let to_list_name = evt.to.__draggable_component__._.attrs.group.name;
  let from_list_name = evt.from.__draggable_component__._.attrs.group.name;
  if (to_list_name === from_list_name) return;

  if (item.category === "eatable") {
    speechText("Yummi Yummi");
    mainGameLists.eatables.value.push(item);
  } else if (item.category === "noteatable") {
    speechText("Oh no");
    mainGameLists.noteatables.value.push(item);
  }

  if (mainGameLists.feed_the_cat_items.value.length === 0) {
    emptyFeedTheCatItems.value = true;
    speechText("Oh, I am so Happy. Try one more time");
  }
}

function onChooseCalback(evt) {
  evt.originalEvent.preventDefault;
  console.log(evt);
  speechText(evt.item.innerText);
}

function StartNewGame() {
  shuffleArray(FeedTheCatItems);
  mainGameLists.cat_area.value = [];
  mainGameLists.eatables.value = [];
  mainGameLists.noteatables.value = [];
  mainGameLists.feed_the_cat_items.value = FeedTheCatItems;
  emptyFeedTheCatItems.value = false;
}

speechText("Hello Kids! Let's play! Feed the cat");
</script>

<template>
  <MainCanvas>
    <div id="game-canvas" class="flex-grow">
      <div id="cat-area" class="flex flex-col">
        <draggable
          id="cat-area-draggable"
          v-model="mainGameLists.cat_area.value"
          class="dragArea flex min-h-[100px] flex-grow flex-wrap items-center justify-around border-2"
          :group="{
            name: 'cat_area',
            put: 'eat_area',
            revertClone: true,
          }"
          :animation="250"
          :sort="true"
          @end="onEndCallback"
          @choose="onChooseCalback"
        >
        </draggable>
      </div>
      <div
        id="eatables-area"
        class="flex flex-wrap items-center justify-around"
      >
        <div
          v-for="item in mainGameLists.eatables.value"
          :key="item.id"
          class="m-1 h-8 w-8 grow-0 border-2 border-cyan-600 bg-slate-400 bg-cover bg-center bg-no-repeat p-1 sm:h-9 sm:w-9 md:h-10 md:w-10"
          :style="{
            backgroundImage: `url(${ImgUrl(item.path)})`,
          }"
        ></div>
      </div>
      <div
        id="noteatables-area"
        class="flex flex-wrap items-center justify-around"
      >
        <div
          v-for="item in mainGameLists.noteatables.value"
          :key="item.id"
          class="m-[1px] h-4 w-4 grow-0 border-2 border-cyan-600 bg-slate-400 bg-cover bg-center bg-no-repeat p-1 sm:h-5 sm:w-5 md:h-9 md:w-9"
          :style="{
            backgroundImage: `url(${ImgUrl(item.path)})`,
          }"
        ></div>
      </div>
      <div id="eat-area" class="flex flex-grow flex-col">
        <div
          v-if="!emptyFeedTheCatItems"
          id="eat-area-game"
          class="flex flex-grow flex-col"
        >
          <draggable
            id="eat-area-draggable"
            v-model="mainGameLists.feed_the_cat_items.value"
            class="dragArea flex min-h-[150px] flex-wrap justify-around border-2"
            :group="{
              name: 'eat_area',
              put: 'cat_area',
              revertClone: true,
            }"
            :delay="75"
            :touch-start-threshold="10"
            :animation="250"
            :sort="false"
            @choose="onChooseCalback"
            @end="onEndCallback"
          >
            <div
              v-for="item in mainGameLists.feed_the_cat_items.value"
              :key="item.id"
              class="m-1 flex max-h-[100px] min-h-[80px] min-w-[80px] cursor-move select-none flex-col justify-end border-2 border-cyan-600 bg-sky-200 bg-cover bg-center bg-no-repeat p-1 text-center text-lg font-bold capitalize text-violet-900 underline decoration-orange-600 decoration-2 drop-shadow-md"
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
          v-else
          id="eat-area-score"
          class="flex grow items-center justify-center"
        >
          <button :class="ClassName + ` grow-0`" @click="StartNewGame">
            Let's Play
          </button>
        </div>
      </div>
    </div>
  </MainCanvas>
</template>

<style scoped>
#game-canvas {
  /* overflow: hidden; */
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
}
#cat-area {
  background-image: url(@/assets/FeedTheCat/cat.jpg);
  background-size: contain;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  background-color: antiquewhite;
  grid-area: 1 / 2 / 2 / 3;
}
#eatables-area {
  background-color: rgb(92, 38, 243);
  grid-area: 1 / 1 / 2 / 2;
}
#noteatables-area {
  background-color: rgb(245, 38, 141);
  grid-area: 1 / 3 / 2 / 4;
}
#eat-area {
  background-color: aquamarine;
  grid-area: 2 / 1 / 3 / 4;
}

.sortable-chosen.sortable-ghost {
  opacity: 0.5;
  transform: scale(1.2, 1.2) translate(0, 0) rotate(0deg);
  border: 5px rgb(80, 25, 230) solid;
}
.sortable-ghost {
  /* opacity: 0.5; */
  /* transform: scale(1.2, 1.2) translate(0, 0) rotate(0deg); */
  border: 5px rgb(80, 25, 230) solid;
}
.sortable-chosen {
  color: rgb(255, 251, 37);
  transform: translate(5px, 4px) rotate(4deg) scale(1.03, 1.03);
  /* border: 3px brown solid; */
}
.sortable-drag {
  opacity: 0.5;
  transform: translate(5px, 4px) rotate(4deg) scale(1.03, 1.03);
  border: 5px brown solid;
}
</style>
