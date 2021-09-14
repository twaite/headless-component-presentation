<template>
  <div class="app">
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
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
  },
};
</script>

<style lang="postcss">
.app {
  @apply bg-gray-800 border-b-8 border-green-400 h-screen w-screen;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>
