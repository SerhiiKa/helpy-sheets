<script setup>
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/vue/solid";
</script>
<template>
  <header id="main-header" class="mb-5 bg-green-700">
    <div
      class="container mx-auto flex flex-row flex-wrap items-center justify-start p-1"
    >
      <router-link v-slot="{ route }" :to="{ name: 'Home' }">
        <img
          class="inline-block h-[40px] w-[40px]"
          src="@/assets/alphabet_education_learn_school_student_icon.svg"
          :alt="route.meta.title"
          width="40"
          height="40"
        />
      </router-link>
      <ArrowNarrowLeftIcon
        class="ml-auto h-5 w-5 text-blue-500"
        @click.prevent="$router.go(-1)"
      />
      <h1 class="mx-auto text-2xl uppercase text-white md:text-3xl">
        Helpy Sheets
      </h1>
      <ArrowNarrowRightIcon
        class="mr-auto h-5 w-5 text-blue-500"
        @click.prevent="$router.go(1)"
      />
    </div>
  </header>
</template>
