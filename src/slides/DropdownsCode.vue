<template>
  <div class="layout">
    <div>
      <slide-subtitle>Tailwind Modal</slide-subtitle>
      <code-block>
        {{`<Menu as="div" class="relative inline-block text-left">
          <MenuButton
            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Options
            <ChevronDownIcon />
          </MenuButton>

          <MenuItems
            class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  <EditIcon />
                  Edit
                </button>
              </MenuItem>
            </div>
            // ...
          </MenuItems>
        </Menu>
        `}}
      </code-block>
    </div>
    <div>
      <slide-subtitle>Material Modal</slide-subtitle>
      <code-block>
        {{`<Menu as="div" class="relative inline-block text-left">
          <MenuButton
            class="px-4 py-2 bg-blue-500 hover:bg-blue-600 shadow-lg rounded-sm uppercase flex "
          >
            Options
            <ChevronDownIcon />
          </MenuButton>

          <MenuItems
            class="absolute left-0 top-8 w-56 mt-2 origin-top-left bg-white divide-y divide-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-2">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-gray-200' : '',
                    'group flex items-center w-full px-2 py-2 text-sm text-gray-900',
                  ]"
                >
                  <EditIcon />
                  Edit
                </button>
              </MenuItem>
            </div>
            // ...
          </MenuItems>
        </Menu>
        `}}
      </code-block>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.layout {
  @apply flex justify-around pt-10;
}
</style>
