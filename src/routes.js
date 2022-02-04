// import Home from "./views/Home.vue";
// import About from "./views/About.vue";
// import NotFound from "./views/NotFound.vue";

import { createRouter, createWebHistory } from "vue-router";
import VueScrollTo from "vue-scrollto";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

const routes = [
  {
    path: "/",
    meta: { title: "Home" },
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/about",
    meta: { title: "About" },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/About.vue"),
  },
  {
    path: "/headless",
    meta: { title: "HeadLess" },
    // example of route level code-splitting
    // this generates a separate chunk (HeadLess.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/HeadLess.vue"),
  },
  {
    path: "/:path(.*)",
    meta: { title: "NotFound" },
    component: () => import("./views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      VueScrollTo.scrollTo("#app", 500, { offset: savedPosition.y });
      return savedPosition;
    } else {
      VueScrollTo.scrollTo("#app");
    }
  },
});

router.beforeEach(async (to, from, next) => {
  const { title } = to.meta;
  const brand = "HelpySheets";
  document.title = `${title ? title + " | " : ""}${brand}`;
  next();
});

router.beforeResolve((to, from, next) => {
  console.log('start', {to})
  if (to) {
    console.log('start1')
      // Запустить отображение загрузки
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Завершить отображение загрузки
  console.log('finish')
  NProgress.done()
})

export { router };
