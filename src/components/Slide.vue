<template>
  <div class="slide">
    <slot />
  </div>
</template>

<style lang="postcss">
.slide {
  @apply bg-gray-800 text-white h-screen w-screen flex items-center justify-center flex-col border-b-8 border-green-500 p-10;
}

h1 {
  @apply text-6xl pb-8 !important;
}

h2 {
  @apply text-5xl pb-3 !important;
}

h3 {
  @apply text-4xl text-green-100 pb-3 !important;
}

ul {
  @apply list-disc !important text-4xl;
}

li {
  @apply pb-4;
}

p {
  @apply bg-gray-700 rounded-lg py-6 px-8 text-3xl text-center max-w-xl;
}
</style>
