<script setup lang="ts">
import { CaretDown } from '$assets/icons'

interface SideMenuProps {
  variant: 'default' | 'expand' | 'sub'
}

const { variant } = defineProps<SideMenuProps>()
</script>

<template>
  <!-- Side Menu : Main (Expand) -->
  <button
    v-if="variant === 'expand'"
    class="SideMenu Expand flex w-full min-w-[192px] justify-between rounded-large bg-netral-20 p-3 text-netral-50"
  >
    <div class="Menu flex items-center gap-3">
      <slot />
    </div>

    <CaretDown class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
  </button>

  <!-- Side Menu : Main (Default) -->
  <button
    v-if="variant === 'default'"
    class="SideMenu Default flex min-w-[192px] items-center gap-3 rounded-large bg-netral-20 p-3 text-netral-50"
  >
    <slot />
  </button>

  <!-- Side Menu : Sub -->
  <button
    v-if="variant === 'sub'"
    class="SideMenu Default flex w-40 items-center gap-3 rounded-large bg-netral-20 p-3 text-netral-50"
  >
    <slot />
  </button>
</template>
