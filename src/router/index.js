import { createRouter, createWebHistory } from "vue-router";
import Title from "@/slides/Title";
import Agenda from "@/slides/Agenda";
import Definition from "@/slides/Definition";
import ReactQuery from "@/slides/ReactQuery";
import HeadlessUI from "@/slides/HeadlessUI";
import Advantages from "@/slides/Advantages";
import Disadvantages from "@/slides/Disadvantages";
import UseCases from "@/slides/UseCases";
import BadCases from "@/slides/BadCases";
import Examples from "@/slides/Examples";
import Modals from "@/slides/Modals";
import ModalsCode from "@/slides/ModalsCode";

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
  {
    name: "ReactQuery",
    component: ReactQuery,
  },
  {
    name: "HeadlessUI",
    component: HeadlessUI,
  },
  {
    name: "Advantages",
    component: Advantages,
  },
  {
    name: "Disadvantages",
    component: Disadvantages,
  },
  {
    name: "UseCases",
    component: UseCases,
  },
  {
    name: "BadCases",
    component: BadCases,
  },
  {
    name: "Examples",
    component: Examples,
  },
  {
    name: "Modals",
    component: Modals,
  },
  {
    name: "ModalsCode",
    component: ModalsCode,
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
