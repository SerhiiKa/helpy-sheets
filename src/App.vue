<script setup>
import { ref } from "vue";

let counter = ref(0);

setInterval(() => {
  counter.value++;
}, 1000);
</script>

<template>
  <div>
    <header v-if="$route.meta.title" class="bg-white shadow">
      <div
        class="mx-auto flex max-w-7xl flex-row content-center items-center justify-between overflow-hidden px-4 py-6 sm:px-6 lg:px-8"
      >
        <router-link v-slot="{ route }" to="/">
          <img
            class="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src="./assets/1741314_graduate_graduate_cap_student_icon.svg"
            :alt="route.meta.title"
            width="80"
            height="80"
          />
        </router-link>

        <h1
          class="text-3xl font-bold leading-tight text-gray-900"
          @click="counter = 0"
        >
          <div
            class="inline-flex min-w-16 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
          >
            {{ $route.meta.title }}
            / {{ counter }}
          </div>
        </h1>
      </div>
    </header>
    <main class="py-2 px-4 md:container md:mx-auto">
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
