<template>
  <div class="wrapper">
    <h1>Headless Components</h1>
    <h3>Tim Waite</h3>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply bg-gray-800 text-white h-screen w-screen flex items-center justify-center flex-col border-b-8 border-green-500;
}

h1 {
  @apply text-6xl pb-3;
}

h3 {
  @apply text-4xl text-green-100;
}
</style>
