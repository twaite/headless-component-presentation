<template>
  <div class="slide">
    <slot />
  </div>
</template>

<style lang="postcss">
.slide {
  @apply bg-gray-800 text-white h-screen w-screen flex items-center justify-center flex-col border-b-8 border-green-500;
}

h1 {
  @apply text-6xl pb-3 !important;
}

h2 {
  @apply text-5xl pb-3 !important;
}

h3 {
  @apply text-4xl text-green-100 pb-3 !important;
}
</style>
