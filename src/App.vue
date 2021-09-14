<template>
  <router-view />
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { routes } from "@/router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const slideNumber = computed(() => parseInt(route.path.replace("/", "")));

    const next = () => {
      if (slideNumber.value < routes.length - 2)
        router.push(`/${slideNumber.value + 1}`);
    };

    const previous = () => {
      if (slideNumber.value > 0) router.push(`/${slideNumber.value - 1}`);
    };

    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          return next();
        case "ArrowLeft":
          return previous();
      }
    });

    document.addEventListener("click", next);
  },
};
</script>
