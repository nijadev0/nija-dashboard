<script setup lang="ts">
import Avatar from '$components/atoms/Avatar.vue'
import Text from '$components/atoms/Text.vue'

import { BellSimple, CaretDown, MagnifyingGlass } from '$assets/icons'
import Body from '$components/atoms/Body.vue'
</script>

<template>
  <!-- Navbar -->
  <header class="Navbar w-full border-b border-netral-20 bg-white px-8 py-3 shadow-sm">
    <div class="Wrapper mx-auto flex w-full items-center justify-between">
      <!-- Search -->
      <nav class="Search relative">
        <input
          type="text"
          class="min-w-[346px] rounded-large bg-netral-20 py-2 px-3.5 pl-10 text-xs outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main 2xl:py-3 2xl:pl-11 2xl:text-sm"
          placeholder="What are you looking for"
        />

        <MagnifyingGlass
          class="absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 stroke-2 text-netral-80 2xl:h-5 2xl:w-5"
        />
      </nav>

      <!-- Profile -->
      <nav class="Profile flex items-center gap-5">
        <div class="Notification relative">
          <!-- Notification -->
          <div
            class="absolute -top-1 right-0 flex h-3 w-3 items-center justify-center rounded-full bg-primary-main"
          >
            <span
              class="whitespace-nowrap text-center text-[8px] font-medium leading-none text-white"
            >
              9
            </span>
          </div>
          <BellSimple class="h-5 w-5 stroke-2 text-netral-60 2xl:h-6 2xl:w-6" />
        </div>

        <!-- Divider -->
        <div class="Divider min-h-[2rem] w-px bg-netral-30" />

        <!-- Profile User -->
        <div class="User flex items-center">
          <Avatar size="small" />

          <div class="ml-2 mr-7 space-y-1">
            <Body size="md" weight="medium" class="text-netral-80"> Marvin McKinney </Body>
            <Body size="sm" weight="regular" class="text-netral-50"> Super Admin </Body>
          </div>

          <CaretDown class="h-5 w-5 stroke-2 text-netral-50 2xl:h-6 2xl:w-6" />
        </div>
      </nav>
    </div>
  </header>
</template>
