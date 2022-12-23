<script setup lang="ts">
import { CaretDown } from '$assets/icons'

interface SideMenuProps {
  variant: 'default' | 'expand' | 'sub'
  href?: string
}

const { variant, href } = defineProps<SideMenuProps>()
</script>

<template>
  <!-- Side Menu : Main (Expand) -->
  <button
    v-if="variant === 'expand'"
    class="SideMenu Expand flex w-full min-w-[192px] justify-between rounded-large p-3"
  >
    <div class="Menu flex items-center gap-3">
      <slot />
    </div>

    <CaretDown class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
  </button>

  <!-- Side Menu : Main (Default) -->
  <button
    v-if="variant === 'default'"
    @click="$router.push(`${href}`)"
    class="SideMenu Default flex min-w-[192px] items-center gap-3 rounded-large p-3 text-netral-50 hover:bg-netral-20 focus:text-primary-main"
  >
    <slot />
  </button>

  <!-- Side Menu : Sub -->
  <button
    v-if="variant === 'sub'"
    class="SideMenu Sub flex w-40 items-center gap-3 rounded-large p-3 text-netral-50 hover:bg-netral-20 focus:bg-netral-20 focus:text-primary-main"
  >
    <slot />
  </button>
</template>
