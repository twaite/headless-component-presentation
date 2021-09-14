<template>
  <slide>
    <slide-title>Dropdowns</slide-title>
    <div class="button-group">
      <tailwind-dropdown />
      <material-dropdown />
    </div>
  </slide>
</template>

<script>
import TailwindDropdown from "@/components/TailwindDropdown";
import MaterialDropdown from "@/components/MaterialDropdown";
export default {
  components: { TailwindDropdown, MaterialDropdown },
};
</script>

<style lang="postcss" scoped>
.button-group {
  @apply max-w-xs items-center;
}
</style>
