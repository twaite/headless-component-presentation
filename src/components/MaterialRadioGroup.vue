<template>
  <div class="root">
    <div class="w-full max-w-xs mx-auto">
      <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
        <RadioGroupOption
          as="template"
          v-for="plan in plans"
          :key="plan.name"
          :value="plan"
          v-slot="{ checked }"
        >
          <div
            class="relative flex px-5 py-4  cursor-pointer focus:outline-none items-center"
          >
            <span class="pr-3 h-full flex items-center">
              <svg
                class="text-blue-600"
                style="width:24px;height:24px"
                viewBox="0 0 24 24"
                v-if="checked"
              >
                <path
                  fill="currentColor"
                  d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"
                />
              </svg>
              <svg
                class="text-gray-500"
                style="width:24px;height:24px"
                viewBox="0 0 24 24"
                v-else
              >
                <path
                  fill="currentColor"
                  d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </span>
            <div class="flex items-center">
              <div class="text-sm">
                <RadioGroupLabel as="p" class="font-medium text-gray-800">
                  {{ plan.name }}
                </RadioGroupLabel>
                <RadioGroupDescription as="span" class="inline text-gray-500">
                  <span> {{ plan.ram }}/{{ plan.cpus }}</span>
                  <span aria-hidden="true"> &middot; </span>
                  <span>{{ plan.disk }}</span>
                </RadioGroupDescription>
              </div>
            </div>
          </div>
        </RadioGroupOption>
      </RadioGroup>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
  },

  setup() {
    const selected = ref(plans[0]);

    return { selected, plans };
  },
};
</script>

<style lang="postcss" scoped>
* {
  font-family: "Roboto";
}

.root {
  @apply bg-white w-full px-4 py-16 m-4 rounded-xl flex justify-center;
}
</style>
