import { createRouter, createWebHistory } from "vue-router";
import Title from "@/slides/Title";
import Agenda from "@/slides/Agenda";
import Definition from "@/slides/Definition";
import ReactTable from "@/slides/ReactTable";
import HeadlessUI from "@/slides/HeadlessUI";
import Advantages from "@/slides/Advantages";
import Disadvantages from "@/slides/Disadvantages";
import UseCases from "@/slides/UseCases";
import BadCases from "@/slides/BadCases";
import Examples from "@/slides/Examples";
import Modals from "@/slides/Modals";
import ModalsCode from "@/slides/ModalsCode";
import Dropdowns from "@/slides/Dropdowns";
import DropdownsCode from "@/slides/DropdownsCode";
import RadioGroup from "@/slides/RadioGroup";
import RadioGroupCode from "@/slides/RadioGroupCode";
import Questions from "@/slides/Questions";

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
    name: "ReactTable",
    component: ReactTable,
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
  {
    name: "Dropdowns",
    component: Dropdowns,
  },
  {
    name: "DropdownsCode",
    component: DropdownsCode,
  },
  {
    name: "RadioGroup",
    component: RadioGroup,
  },
  {
    name: "RadioGroupCode",
    component: RadioGroupCode,
  },
  {
    name: "Questions",
    component: Questions,
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
