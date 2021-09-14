import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Slide from "@/components/Slide";
import "./assets/tailwind.css";

createApp(App)
  .use(router)
  .component("slide", Slide)
  .mount("#app");
