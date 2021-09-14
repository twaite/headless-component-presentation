<template>
  <div class="layout">
    <div>
      <slide-subtitle>Tailwind Radio Group</slide-subtitle>
      <code-block>
        {{ twCode }}
      </code-block>
    </div>
    <div>
      <slide-subtitle>Material Radio Group</slide-subtitle>
      <code-block>
        {{ matCode }}
      </code-block>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const twCode = `<RadioGroup v-model="selected">
        <div class="space-y-2">
          // v-for removed for brevity
          <RadioGroupOption>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center">
                <div class="text-sm">
                  <RadioGroupLabel
                    :class="checked ? 'text-white' : 'text-gray-900'"
                    class="font-medium"
                  >
                    {{ plan.name }}
                  </RadioGroupLabel>
                  <RadioGroupDescription
                    :class="checked ? 'text-sky-100' : 'text-gray-500'"
                    class="inline"
                  >
                    // ...
                  </RadioGroupDescription>
                </div>
              </div>
              <div v-show="checked" class="flex-shrink-0 text-white">
                <CheckedIcon />
              </div>
          </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    `;

    const matCode = `<RadioGroup v-model="selected">
        // v-for removed for brevity
        <RadioGroupOption>
          <div
            class="relative flex px-5 py-4  cursor-pointer focus:outline-none items-center"
          >
            <span class="pr-3 h-full flex items-center">
              <CheckedIcon class="text-blue-600" />
              <UncheckedIcon class="text-gray-500" />
            </span>
            <div class="flex items-center">
              <div class="text-sm">
                <RadioGroupLabel as="p" class="font-medium text-gray-800">
                  {{ plan.name }}
                </RadioGroupLabel>
                <RadioGroupDescription as="span" class="inline text-gray-500">
                  // ...
                </RadioGroupDescription>
              </div>
            </div>
          </div>
        </RadioGroupOption>
      </RadioGroup>
    `;

    return {
      twCode,
      matCode,
    };
  },
};
</script>

<style lang="postcss" scoped>
.layout {
  @apply flex justify-around pt-10;
}
</style>
