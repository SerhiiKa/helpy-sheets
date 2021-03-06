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
    path: "/animals/feed-the-cat",
    name: "Feed the cat",
    meta: { title: "Feed the cat" },
    component: () => import("@/views/CatAnimalsFeedTheCat.vue"),
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
    path: "/colours/make-the-rainbow",
    name: "Make the Rainbow",
    meta: { title: "Make the Rainbow" },
    component: () => import("@/views/CatColoursMakeTheRainbow.vue"),
  },
  {
    path: "/colours/match-the-colours",
    name: "Match the Colours",
    meta: { title: "Match the Colours" },
    component: () => import("@/views/CatColoursMatchTheColours.vue"),
  },

  {
    path: "/colours/colours-song",
    name: "Colours Song",
    meta: { title: "Colours Song" },
    component: () => import("@/views/CatColoursSong.vue"),
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
