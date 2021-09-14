<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="px-4 py-2 bg-blue-500 hover:bg-blue-600 shadow-lg rounded-sm uppercase flex "
      >
        Options
        <ChevronDownIcon
          class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
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
              <span class="text-gray-500 pr-3">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                  />
                </svg>
              </span>
              Edit
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-gray-200' : '',
                'group flex items-center w-full px-2 py-2 text-sm text-gray-900',
              ]"
            >
              <span class="text-gray-500 pr-3">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                  />
                </svg>
              </span>
              Duplicate
            </button>
          </MenuItem>
        </div>

        <div class="py-2">
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-gray-200' : '',
                'group flex items-center w-full px-2 py-2 text-sm text-gray-900',
              ]"
            >
              <span class="text-gray-500 pr-3">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z"
                  />
                </svg>
              </span>
              Archive
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-gray-200' : '',
                'group flex items-center w-full px-2 py-2 text-sm text-gray-900',
              ]"
            >
              <span class="text-gray-500 pr-3">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z"
                  />
                </svg>
              </span>
              Move
            </button>
          </MenuItem>
        </div>

        <div class="py-2">
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-gray-200' : '',
                'group flex items-center w-full px-2 py-2 text-sm text-gray-900',
              ]"
            >
              <span class="text-gray-500 pr-3">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                  />
                </svg>
              </span>
              Delete
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import ChevronDownIcon from "@/icons/ChevronDown";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
  },
};
</script>

<style lang="postcss" scoped>
:root {
  font-family: "Roboto";
}
</style>
