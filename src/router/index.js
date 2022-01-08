import { createRouter, createWebHistory } from "vue-router";
import Beranda from "../views/Beranda.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Beranda,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("../views/PrivacyPolicy.vue"),
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("../views/Terms.vue"),
  },
  {
    path: "/berita",
    name: "Berita",
    component: () => import("../views/Berita.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
