import { createRouter, createWebHistory } from "vue-router";
import VueScrollTo from "vue-scrollto";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import routes from "@/router/routes.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  if (to) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export { router };
