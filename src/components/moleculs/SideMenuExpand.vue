<script lang="ts" setup>
import { ref } from 'vue'

import { CaretDown } from '$assets/icons'
// ----------------------------------------------------------------------------------------
const { name } = defineProps(['name'])
// ----------------------------------------------------------------------------------------
const localStorageData = localStorage.getItem(name)
const previousMenu = JSON.parse(localStorageData || 'false')
const sideMenuRef = ref(previousMenu)

const toggleSideMenu = () => {
  sideMenuRef.value = !sideMenuRef.value

  localStorage.setItem(name, sideMenuRef.value)
}
// ----------------------------------------------------------------------------------------
</script>

<template>
  <div class="flex w-full flex-col items-start gap-3">
    <button
      type="button"
      @click="toggleSideMenu"
      class="SideMenu Expand flex w-full min-w-[180px] justify-between rounded-large p-3 hover:bg-netral-20 2xl:min-w-[192px]"
      :class="[sideMenuRef ? 'text-primary-main' : 'text-netral-50']"
    >
      <div class="Menu flex items-center gap-3 text-left">
        <slot name="expand" />
      </div>

      <CaretDown
        class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6"
        :class="[sideMenuRef ? 'rotate-180' : 'rotate-0']"
      />
    </button>

    <Transition>
      <section
        v-if="sideMenuRef"
        class="SidebarExpandPanel relative flex w-full flex-col items-start justify-start gap-3 text-left"
      >
        <div class="absolute left-5 top-0 h-full w-px bg-netral-30" />

        <slot name="sub" />
      </section>
    </Transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
