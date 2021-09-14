import { createRouter, createWebHistory } from "vue-router";
import Title from "@/slides/Title";
import Agenda from "@/slides/Agenda";

export const routes = [
  {
    path: "/",
    redirect: "/0",
  },
  {
    path: "/0",
    name: "Title",
    component: Title,
  },
  {
    path: "/1",
    name: "Agenda",
    component: Agenda,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
