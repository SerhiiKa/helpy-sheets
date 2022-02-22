<script setup>
import { ref, unref } from "vue";
import MainCanvas from "@/components/MianCanvas.vue";
import animalsItem from "@/assets/MachingAnimals/MachingAnimals-items.json";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import { speechText } from "@/utils/utils.js";
const ImgURIModules = import.meta.globEager(
  "/src/assets/MachingAnimals/*/*.{jpg,png}"
);

const url = ref(ImgURIModules);

let ImgUrl = function ImgUrl(id) {
  return url.value[id].default;
};

let mainGameLists = {};

mainGameLists.home_animals = ref([]);
mainGameLists.wild_animals = ref([]);
mainGameLists.animals = ref(animalsItem);

function onEndCallback(evt) {
  let item = JSON.parse(JSON.stringify(evt.item._underlying_vm_));

  let to_list_name = evt.to.__draggable_component__._.attrs.group.name;
  let from_list_name = evt.from.__draggable_component__._.attrs.group.name;

  if (to_list_name === from_list_name || to_list_name === "animals") return;

  if (item.category !== to_list_name) {
    mainGameLists[from_list_name].value.push(item);

    const tmp_list = unref(mainGameLists[to_list_name]).filter((element) => {
      return element.category !== item.category;
    });

    mainGameLists[to_list_name].value = tmp_list;
    speechText("Ups!");
  } else if (item.category === to_list_name) {
    speechText("Great!");
  }
}

function onChooseCalback(evt) {
  speechText(evt.item.innerText);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(mainGameLists.animals.value);

speechText("Hello Kids! Let's play! Match the animals");
</script>

<template>
  <MainCanvas>
    <div id="game-canvas" class="parent">
      <div id="home_animals_area" class="div1 flex min-h-[150px] items-stretch">
        <draggable
          id="home_animals"
          v-model="mainGameLists.home_animals.value"
          class="dragArea flex min-h-[30px] shrink-0 grow-0 basis-full flex-wrap justify-around border-2"
          :group="{
            name: 'home_animals',
            pull: ['animals', 'wild_animals'],
            put: ['animals', 'wild_animals'],
            revertClone: true,
          }"
          :delay="75"
          :touch-start-threshold="10"
          :animation="250"
          :sort="false"
          @end="onEndCallback"
        >
          <div
            v-for="item in mainGameLists.home_animals.value"
            :key="item.id"
            class="m-1 h-14 w-14 cursor-move select-none border-2 border-cyan-600 bg-slate-400 bg-cover bg-center bg-no-repeat p-1"
            :style="{ backgroundImage: `url(${ImgUrl(item.path)})` }"
          ></div>
        </draggable>
      </div>
      <div id="wild_animals_area" class="div2 flex min-h-[150px] items-stretch">
        <draggable
          id="wild_animals"
          v-model="mainGameLists.wild_animals.value"
          class="dragArea flex min-h-[30px] shrink-0 grow-0 basis-full flex-wrap justify-around border-2"
          :group="{
            name: 'wild_animals',
            pull: ['animals', 'home_animals'],
            put: ['animals', 'home_animals'],
            revertClone: true,
          }"
          :delay="75"
          :touch-start-threshold="10"
          :animation="250"
          :sort="false"
          @end="onEndCallback"
        >
          <div
            v-for="item in mainGameLists.wild_animals.value"
            :key="item.id"
            class="m-1 h-14 w-14 cursor-move select-none border-2 border-cyan-600 bg-slate-400 bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${ImgUrl(item.path)})` }"
          ></div>
        </draggable>
      </div>
      <div id="animals_area" class="div3 flex min-h-[150px] items-stretch">
        <draggable
          id="animals"
          v-model="mainGameLists.animals.value"
          class="dragArea flex min-h-[30px] shrink-0 grow-0 basis-full flex-wrap justify-around border-2 p-1"
          :group="{
            name: 'animals',
            pull: ['home_animals', 'wild_animals'],
            put: ['home_animals', 'wild_animals'],
            revertClone: true,
          }"
          :delay="75"
          :touch-start-threshold="10"
          :animation="250"
          :sort="false"
          @end="onEndCallback"
          @choose="onChooseCalback"
        >
          <div
            v-for="item in mainGameLists.animals.value"
            :key="item.id"
            class="min-w-14 m-1 flex min-h-[80px] cursor-move select-none flex-col justify-end border-2 border-cyan-600 bg-sky-200 bg-cover bg-center bg-no-repeat p-1 text-center text-lg font-bold capitalize text-violet-900 underline decoration-orange-600 decoration-2 drop-shadow-md"
            :style="{
              backgroundImage: `url(${ImgUrl(item.path)})`,
              textShadow: `rgb(255, 251, 37) 1px 0 10px`,
            }"
          >
            <span>{{ item.name }}</span>
          </div>
        </draggable>
      </div>
    </div>
  </MainCanvas>
</template>

<style scoped>
#game-canvas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
}

#home_animals_area {
  background-image: url(@/assets/MachingAnimals/home_animals/home.jpg);
  background-size: contain;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-color: antiquewhite;
  background-position: center;
  grid-area: 1 / 1 / 2 / 2;
}
#wild_animals_area {
  background-image: url(@/assets/MachingAnimals/wild_animals/forest.jpg);
  background-size: contain;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-color: bisque;
  background-position: center;
  grid-area: 1 / 2 / 2 / 3;
}
#animals_area {
  background: yellow;
  grid-area: 2 / 1 / 3 / 3;
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
