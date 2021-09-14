<template>
  <slide>
    <slide-title>Dropdowns</slide-title>
    <div class="layout">
      <tailwind-radio-group />
      <material-radio-group />
    </div>
  </slide>
</template>

<script>
import TailwindRadioGroup from "@/components/TailwindRadioGroup";
import MaterialRadioGroup from "@/components/MaterialRadioGroup";
export default {
  components: { TailwindRadioGroup, MaterialRadioGroup },
};
</script>

<style lang="postcss" scoped>
.layout {
  @apply justify-evenly flex w-full;
}
</style>
