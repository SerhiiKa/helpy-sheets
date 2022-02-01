<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'slideer'" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
</template>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.8s;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(30%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
