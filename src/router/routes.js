const routes = [
  {
    path: "/",
    meta: { title: "Home", description: "aaaa" },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    meta: { title: "About" },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/headless",
    meta: { title: "HeadLess" },
    // example of route level code-splitting
    // this generates a separate chunk (HeadLess.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/HeadLess.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    meta: { title: "NotFound" },
    component: () => import("@/views/NotFound.vue"),
  },
];

export default routes;
