<template>
  <pre v-highlightjs>
    <code class="html">
      <slot />
    </code>
  </pre>
</template>

<style lang="postcss" scoped>
code {
  @apply p-4 max-w-3xl rounded-lg shadow-lg;
}
</style>
