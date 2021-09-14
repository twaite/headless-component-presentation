<template>
  <slide>
    <slide-title>Modal Example</slide-title>
    <button>Show Tailwind Modal</button>
    <button>Show Bootstrap Modal</button>
    <tailwind-modal :open="tailwindModalIsOpen" />
  </slide>
</template>

<script>
import { ref } from "@vue/reactivity";
import TailwindModal from "@/components/TailwindModal";

export default {
  components: { TailwindModal },
  setup() {
    const tailwindModalIsOpen = ref(true);
    const materialModalIsOpen = ref(true);

    const showTailwindModal = () => (tailwindModalIsOpen.value = true);
    const showMaterialModal = () => (materialModalIsOpen.value = true);

    return {
      tailwindModalIsOpen,
      materialModalIsOpen,
      showTailwindModal,
      showMaterialModal,
    };
  },
};
</script>
