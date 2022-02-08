const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "Home", description: "some text" },
    component: () => import("@/views/AppHome.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: { title: "About" },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/headless",
    name: "Headless",
    meta: { title: "HeadLess" },
    // example of route level code-splitting
    // this generates a separate chunk (HeadLess.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/HeadLess.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    meta: { title: "NotFound" },
    component: () => import("@/views/NotFound.vue"),
  },
];

export default routes;
