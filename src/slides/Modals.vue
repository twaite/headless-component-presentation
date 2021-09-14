<template>
  <slide>
    <slide-title>Modal Example</slide-title>
    <div class="button-group">
      <button class="tw-btn" @click.stop="toggleTailwindModal">
        Show Tailwind Modal
      </button>
      <button class="mat-btn" @click.stop="toggleMaterialModal">
        Show Material Modal
      </button>
    </div>
    <tailwind-modal :open="tailwindModalIsOpen" @close="toggleTailwindModal" />
    <material-modal :open="materialModalIsOpen" @close="toggleMaterialModal" />
  </slide>
</template>

<script>
import { ref } from "@vue/reactivity";
import TailwindModal from "@/components/TailwindModal";
import MaterialModal from "@/components/MaterialModal";

export default {
  components: { MaterialModal, TailwindModal },
  setup() {
    const tailwindModalIsOpen = ref(false);
    const materialModalIsOpen = ref(false);

    const toggleTailwindModal = () => {
      tailwindModalIsOpen.value = !tailwindModalIsOpen.value;
    };

    const toggleMaterialModal = () =>
      (materialModalIsOpen.value = !materialModalIsOpen.value);

    return {
      tailwindModalIsOpen,
      materialModalIsOpen,
      toggleTailwindModal,
      toggleMaterialModal,
    };
  },
};
</script>

<style lang="postcss">
.tw-btn {
  @apply bg-indigo-400 px-4 py-2 rounded-md;
}

.mat-btn {
  font-family: "Roboto";
  @apply bg-blue-500 rounded-sm px-4 shadow-md uppercase;
}

.button-group {
  @apply flex w-full max-w-md justify-around pb-5;
}
</style>
