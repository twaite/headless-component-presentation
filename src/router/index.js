import { createRouter, createWebHistory } from "vue-router";
import Title from "@/slides/Title";
import Agenda from "@/slides/Agenda";
import Definition from "@/slides/Definition";

export const routes = [
  {
    path: "/",
    redirect: "/0",
  },
  {
    name: "Title",
    component: Title,
  },
  {
    name: "Agenda",
    component: Agenda,
  },
  {
    name: "Definition",
    component: Definition,
  },
].map((route, i) => ({
  path: `/${i - 1}`,
  ...route,
}));

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
