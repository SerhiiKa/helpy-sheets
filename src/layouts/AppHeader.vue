<template>
  <header class="bg-white shadow">
    <div
      class="mx-auto flex max-w-7xl flex-row content-center items-center justify-between overflow-hidden px-4 py-6 sm:px-6 lg:px-8"
    >
      <router-link v-slot="{ route }" to="/">
        <img
          class="inline-block h-20 w-20 rounded-full ring-2 ring-white"
          src="@/assets/1741314_graduate_graduate_cap_student_icon.svg"
          :alt="route.meta.title"
          width="80"
          height="80"
        />
      </router-link>
    </div>
  </header>
</template>
