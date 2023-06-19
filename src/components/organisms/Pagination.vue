<script lang="ts" setup>
import Body from '$components/atoms/Body.vue'

import { CaretLeft, CaretRight } from '$assets/icons'
</script>

<template>
  <!-- Pagination -->
  <section class="Pagination flex w-full items-center justify-between rounded-large bg-white">
    <!-- Current Page -->
    <Body size="md" weight="medium" class="text-netral-50">Page 1 of 2</Body>

    <!-- Cta Page -->
    <div class="CtaPage flex items-center gap-2">
      <button class="CtaButton transition-all duration-300 ease-out hover:bg-primary-surface rounded-large flex h-6 w-6 items-center justify-center 2xl:h-8 2xl:w-8">
        <CaretLeft class="h-4 w-4 stroke-[2.5px] text-netral-60 2xl:h-5 2xl:w-5" />
      </button>
      
      <button
        class="CtaButton transition-all duration-300 ease-out flex h-6 w-6 items-center justify-center rounded-lg bg-primary-main 2xl:h-8 2xl:w-8 2xl:rounded-large"
      >
        <span class="text-xs font-medium leading-none text-white 2xl:text-sm"> 1 </span>
      </button>

      <button
        class="CtaButton transition-all duration-300 ease-out hover:bg-primary-surface flex h-6 w-6 items-center justify-center rounded-lg bg-white 2xl:h-8 2xl:w-8 2xl:rounded-large"
      >
        <span class="text-xs font-medium leading-none text-netral-60 2xl:text-sm"> 2 </span>
      </button>

      <button
        class="CtaButton transition-all duration-300 ease-out hover:bg-primary-surface flex h-6 w-6 items-center justify-center rounded-lg bg-white 2xl:h-8 2xl:w-8 2xl:rounded-large"
      >
        <span class="text-xs font-medium leading-none text-netral-60 2xl:text-sm"> 3 </span>
      </button>
      <button
        class="CtaButton transition-all duration-300 ease-out hover:bg-primary-surface flex h-6 w-6 items-center justify-center rounded-lg bg-white 2xl:h-8 2xl:w-8 2xl:rounded-large"
      >
        <span class="text-xs font-medium leading-none text-netral-60 2xl:text-sm"> 4 </span>
      </button>
      <button
        class="CtaButton transition-all duration-300 ease-out hover:bg-primary-surface flex h-6 w-6 items-center justify-center rounded-lg bg-white 2xl:h-8 2xl:w-8 2xl:rounded-large"
      >
        <span class="text-xs font-medium leading-none text-netral-60 2xl:text-sm"> 5 </span>
      </button>

      <button
        class="CtaButton transition-all duration-300 ease-out hover:bg-primary-surface flex h-6 w-6 items-center justify-center rounded-lg bg-white 2xl:h-8 2xl:w-8 2xl:rounded-large"
      >
        <span class="text-xs font-medium leading-none text-netral-60 2xl:text-sm"> ... </span>
      </button>

      <button
        class="CtaButton transition-all duration-300 ease-out hover:bg-primary-surface flex h-6 w-6 items-center justify-center rounded-lg bg-white 2xl:h-8 2xl:w-8 2xl:rounded-large"
      >
        <span class="text-xs font-medium leading-none text-netral-60 2xl:text-sm"> 10 </span>
      </button>
      <button class="CtaButton transition-all duration-300 ease-out rounded-lg 2xl:rounded-large hover:bg-primary-surface flex h-6 w-6 items-center justify-center 2xl:h-8 2xl:w-8">
        <CaretRight class="h-4 w-4 stroke-[2.5px] text-netral-60 2xl:h-5 2xl:w-5" />
      </button>
    </div>
  </section>
</template>
