<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { CaretDown } from '$assets/icons'
</script>

<template>
  <Disclosure>
    <DisclosureButton
      class="SideMenu Expand flex w-full min-w-[180px] justify-between rounded-large p-3 text-netral-50 hover:bg-netral-20 aria-expanded:text-primary-main 2xl:min-w-[192px]"
    >
      <div class="Menu flex items-center gap-3">
        <slot name="expand" />
      </div>

      <CaretDown class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
    </DisclosureButton>

    <DisclosurePanel
      class="SidebarExpandPanel relative flex w-full flex-col items-end justify-end gap-3"
    >
      <div class="absolute top-0 left-5 h-full w-px bg-netral-30" />

      <slot name="sub" />
    </DisclosurePanel>
  </Disclosure>
</template>
