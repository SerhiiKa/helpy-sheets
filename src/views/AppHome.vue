<script setup></script>

<template>
  <div class="mb-5 flex flex-grow flex-col bg-white">
    <div class="flex flex-grow flex-col rounded-3xl bg-gray-400 py-8 px-5">
      <router-link
        :to="{ name: 'Home' }"
        class="mb-5 inline-flex items-center justify-center rounded-xl border border-gray-900 bg-red-600 px-5 py-3 text-3xl font-bold text-white shadow-md shadow-slate-600 transition duration-300 ease-in-out hover:bg-red-500 hover:shadow-lg hover:shadow-slate-700 focus:outline-none"
        >Animals</router-link
      >
      <router-link
        :to="{ name: 'Home' }"
        class="mb-5 inline-flex items-center justify-center rounded-xl border border-transparent bg-red-600 px-5 py-3 text-3xl font-bold text-white transition duration-150 ease-in-out hover:bg-red-900 focus:outline-none"
        >Colours</router-link
      >
      <router-link
        :to="{ name: 'Home' }"
        class="mb-5 inline-flex items-center justify-center rounded-xl border border-transparent bg-red-600 px-5 py-3 text-3xl font-bold text-white transition duration-150 ease-in-out hover:bg-red-900 focus:outline-none"
        >My Fmilia</router-link
      >
      <router-link
        :to="{ name: 'Home' }"
        class="mb-5 inline-flex items-center justify-center rounded-xl border border-transparent bg-red-600 px-5 py-3 text-3xl font-bold text-white transition duration-150 ease-in-out hover:bg-red-900 focus:outline-none"
        >Food</router-link
      >
      <router-link
        :to="{ name: 'Home' }"
        class="mb-5 inline-flex items-center justify-center rounded-xl border border-transparent bg-red-600 px-5 py-3 text-3xl font-bold text-white transition duration-150 ease-in-out hover:bg-red-900 focus:outline-none"
        >School</router-link
      >
    </div>
  </div>
</template>
