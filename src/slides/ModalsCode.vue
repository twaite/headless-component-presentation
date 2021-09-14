<template>
  <div class="layout">
    <div>
      <slide-subtitle>Tailwind Modal</slide-subtitle>
      <code-block>
        {{`<Dialog as="div" @close="closeModal">
          <DialogOverlay class="fixed inset-0" @click="closeModal" />

          <DialogTitle
            as="h4"
            class="text-xl font-medium leading-6 text-gray-900"
          >
            Payment successful
          </DialogTitle>

          <div class="mt-2">
            <p class="text-sm text-gray-500 bg-none">
              ...
            </p>
          </div>

          <div class="mt-4">
            <button
              type="button"
              class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              @click="closeModal"
            >
              Got it, thanks!
            </button>
          </div>
        </Dialog>
        `}}
      </code-block>
    </div>
    <div>
      <slide-subtitle>Material Modal</slide-subtitle>
      <code-block>
        {{`<Dialog as="div" @close="closeModal">
          <DialogOverlay class="fixed inset-0" @click="closeModal" />

          <DialogTitle
            as="h4"
            class="text-xl font-medium leading-6 text-gray-900 border-b-2 border-gray-200 px-6 py-4"
          >
            Payment successful
          </DialogTitle>

          <div class="mt-2 px-6 py-4 border-b-2 border-gray-200">
            <p class="text-sm text-gray-500 bg-none">
              ...
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
        </Dialog>
        `}}
      </code-block>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.layout {
  @apply flex justify-around pt-4;
}
</style>
