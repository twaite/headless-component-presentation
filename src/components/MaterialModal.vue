<template>
  <TransitionRoot appear :show="open" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" @click="closeModal" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-sm"
            >
              <DialogTitle
                as="h4"
                class="text-xl font-medium leading-6 text-gray-900 border-b-2 border-gray-200 px-6 py-4"
              >
                Payment successful
              </DialogTitle>
              <div class="mt-2 px-6 py-4 border-b-2 border-gray-200">
                <p class="text-sm text-gray-500 bg-none">
                  Your payment has been successfully submitted. We’ve sent your
                  an email with all of the details of your order.
                </p>
              </div>

              <div class="flex justify-end px-6 py-4">
                <button
                  type="button"
                  class="text-blue-500 uppercase text-sm"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  props: {
    open: Boolean,
  },
  setup(props, ctx) {
    const closeModal = () => ctx.emit("close");

    return {
      closeModal,
      ...props,
    };
  },
};
</script>

<style lang="postcss" scoped>
:root {
  font-family: "Roboto", sans-serif;
}
</style>
