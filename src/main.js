import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import SlideTitle from "@/components/SlideTitle";
import SlideSubtitle from "@/components/SlideSubtitle";
import Slide from "@/components/Slide";
import Quote from "@/components/Quote";
import "./assets/tailwind.css";

createApp(App)
  .use(router)
  .component("slide", Slide)
  .component("slide-title", SlideTitle)
  .component("slide-subtitle", SlideSubtitle)
  .component("quote", Quote)
  .mount("#app");
