<template>
  <div class="slide">
    <slot />
  </div>
</template>

<style lang="postcss">
.slide {
  @apply bg-gray-800 text-white h-screen w-screen flex items-center justify-center flex-col border-b-8 border-green-500 p-10;
}

ul {
  @apply list-disc !important text-4xl max-w-3xl;
}

li {
  @apply pb-6;
}

iframe {
  @apply w-full h-full shadow-lg;
}
</style>
