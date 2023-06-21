<script setup lang="ts">
import { ref } from 'vue'

import { CaretDown } from '$assets/icons'

interface SideMenuProps {
  variant: 'default' | 'expand' | 'sub'
  href?: string
}

const { variant, href } = defineProps<SideMenuProps>()

const sideMenu = ref(null)
// const activeSidebar = sideMenu?.getAttribute('data-headlessui-state')

const getActiveSidebar = () => {
  console.log('ok')
}
</script>

<template>
  <!-- Side Menu : Main (Expand) -->
  <button
    v-if="variant === 'expand'"
    @click="getActiveSidebar"
    class="SideMenu Expand flex w-full min-w-[180px] justify-between rounded-large p-3 2xl:min-w-[192px]"
  >
    <div class="Menu flex items-center gap-3">
      <slot />
    </div>

    <CaretDown class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
  </button>

  <!-- Side Menu : Main (Default) -->
  <router-link
    v-if="variant === 'default'"
    :to="`${href}`"
    class="SideMenu Default flex min-w-[180px] items-center gap-3 rounded-large p-3 text-netral-50 hover:bg-netral-20 focus:text-primary-main 2xl:min-w-[192px]"
    active-class="Active"
  >
    <slot />
  </router-link>

  <!-- Side Menu : Sub -->
  <router-link
    v-if="variant === 'sub'"
    :to="`${href}`"
    class="SideMenu Sub flex w-36 items-center gap-3 rounded-large p-3 text-netral-50 hover:bg-netral-20 focus:bg-netral-20 focus:text-primary-main 2xl:w-40"
    active-class="Active"
  >
    <slot />
  </router-link>
</template>

<style scoped lang="postcss">
.Active {
  @apply bg-netral-20 text-primary-main;
}
</style>
