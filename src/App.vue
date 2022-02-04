<script setup>
import { ref } from "vue";

let counter = ref(0);

setInterval(() => {
  counter.value++;
}, 1000);
</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div
        class="
          flex flex-row
          justify-between
          overflow-hidden
          content-center
          items-center
          mx-auto
          max-w-7xl
          px-4
          py-6
          sm:px-6
          lg:px-8
        "
      >
        <router-link to="/"
         v-slot="{ route }"
         >
          <img
            class="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src="./assets/1741314_graduate_graduate_cap_student_icon.svg"
            :alt=" route.meta.title "
            width="80"
            height="80"
          />
        </router-link>
          <img
            class="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src="./assets/2064501_alphabet_education_learn_school_student_icon.svg"
            alt=""
            width="80"
            height="80"
          />
          <img
            class="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src="./assets/4212895_arrow_education_hardware_laptop_icon.svg"
            alt=""
            width="80"
            height="80"
          />
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          <div
            class="
              inline-flex
              items-center
              justify-center
              rounded-md
              border border-transparent
              bg-indigo-600
              px-5
              py-3
              text-base
              font-medium
              leading-6
              text-white
              transition
              duration-150
              ease-in-out
              hover:bg-indigo-500
              focus:outline-none
              min-w-16
            "
          >
            {{ $route.meta.title }}
            / {{ counter }}
          </div>
        </h1>
      </div>
    </header>
    <main class="md:container md:mx-auto py-2 px-4">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
