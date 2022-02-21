const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "Home" },
    component: () => import("@/views/AppHome.vue"),
  },
  {
    path: "/animals",
    name: "Animals",
    meta: { title: "Animals" },
    component: () => import("@/views/CatAnimals.vue"),
  },
  {
    path: "/animals/machinggame",
    name: "Maching Game",
    meta: { title: "Maching Game" },
    component: () => import("@/views/CatAnimalsMachingGame.vue"),
  },
  {
    path: "/animals/game-two",
    name: "Game Two",
    meta: { title: "Game Two" },
    component: () => import("@/views/CatAnimalsGameTwo.vue"),
  },
  {
    path: "/animals/animals-song",
    name: "Animals Song",
    meta: { title: "Animals Song" },
    component: () => import("@/views/CatAnimalsSong.vue"),
  },
  {
    path: "/colours",
    name: "Colours",
    meta: { title: "Colours" },
    component: () => import("@/views/CatColours.vue"),
  },

  {
    path: "/my-family",
    name: "My Family",
    meta: { title: "MyFamily" },
    component: () => import("@/views/CatMyFamily.vue"),
  },

  {
    path: "/food",
    name: "Food",
    meta: { title: "Food" },
    component: () => import("@/views/CatFood.vue"),
  },

  {
    path: "/school",
    name: "School",
    meta: { title: "School" },
    component: () => import("@/views/CatSchool.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    meta: { title: "NotFound" },
    component: () => import("@/views/NotFound.vue"),
  },
];

export default routes;
