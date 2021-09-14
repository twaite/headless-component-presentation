import { createApp } from "vue";
import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/nord.css";

import App from "./App.vue";
import CodeBlock from "@/components/CodeBlock";
import router from "./router";
import SlideTitle from "@/components/SlideTitle";
import SlideSubtitle from "@/components/SlideSubtitle";
import Slide from "@/components/Slide";
import Quote from "@/components/Quote";
import "./assets/tailwind.css";

createApp(App)
  .use(router)
  .use(VueHighlightJS)
  .component("code-block", CodeBlock)
  .component("slide", Slide)
  .component("slide-title", SlideTitle)
  .component("slide-subtitle", SlideSubtitle)
  .component("quote", Quote)
  .mount("#app");
