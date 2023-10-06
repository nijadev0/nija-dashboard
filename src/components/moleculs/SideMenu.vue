<script setup lang="ts">
import { ref } from 'vue'

import { CaretDown } from '$assets/icons'

interface SideMenuProps {
  variant: 'default' | 'expand' | 'sub'
  href?: string
  exact?: boolean
}

const { variant, href, exact = false } = defineProps<SideMenuProps>()

const sideMenu = ref(null)

const getActiveSidebar = () => {
  console.log('ok')
}

import { useRoute } from 'vue-router'
const currentActive = useRoute().fullPath

</script>

<template>
  <!-- Side Menu : Main (Expand) -->
  <button
    v-if="variant === 'expand'"
    @click="getActiveSidebar"
    class="SideMenu Expand flex w-full min-w-[180px] justify-between rounded-large p-3 text-left"
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
    class="SideMenu Default flex w-full min-w-[180px] items-center gap-3 rounded-large p-3 text-left text-netral-50 hover:bg-netral-20 focus:text-primary-main"
    :class="[exact ? `${href === currentActive ? 'bg-netral-20 text-primary-main' : 'bg-white text-netral-50'}` : `${currentActive?.includes(`${href}`) ? 'bg-netral-20 text-primary-main' : 'bg-white text-netral-50'}`]"
    >
    <!-- :class="[exact ? `${(href === currentActive ? "" : "")}` : `${(currentActive?.includes(`${href}`) ? "" : "")}`]" -->
    <slot />
  </router-link>

  <!-- Side Menu : Sub -->
  <router-link
    v-if="variant === 'sub'"
    :to="`${href}`"
    class="SideMenu Sub flex w-full items-center gap-3 rounded-large p-3 text-left text-netral-50 hover:bg-netral-20 focus:bg-netral-20 focus:text-primary-main"
    :class="[currentActive.includes(`${href}`) ? 'bg-netral-20 text-primary-main' : 'bg-white text-netral-50']"
  >
    <slot />
  </router-link>
</template>

