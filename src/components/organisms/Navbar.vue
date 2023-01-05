<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

import Avatar from '$components/atoms/Avatar.vue'
import Body from '$components/atoms/Body.vue'

import { Bag, BellSimple, CaretDown, MagnifyingGlass, XMark, Package, TShirt } from '$assets/icons'
</script>

<template>
  <!-- Navbar -->
  <header class="Navbar w-full border-b border-netral-20 bg-white px-8 py-3 shadow-sm">
    <div class="Wrapper mx-auto flex w-full items-center justify-between">
      <!-- Search -->
      <nav class="Search relative">
        <input
          type="text"
          class="w-[18rem] rounded-large bg-netral-20 py-2 px-3.5 pl-10 text-xs outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main 2xl:w-[21.25rem] 2xl:py-3 2xl:pl-11 2xl:text-sm"
          placeholder="What are you looking for"
        />

        <MagnifyingGlass
          class="absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 stroke-2 text-netral-80 2xl:h-5 2xl:w-5"
        />
      </nav>

      <!-- Profile -->

      <nav class="Profile flex items-center gap-5">
        <!-- Notification -->

        <Popover>
          <PopoverButton class="Notification relative">
            <div
              class="absolute -top-1 right-0 flex h-3 w-3 items-center justify-center rounded-full bg-error-main"
            >
              <span
                class="whitespace-nowrap text-center text-[8px] font-medium leading-none text-white"
              >
                9
              </span>
            </div>

            <BellSimple class="h-5 w-5 stroke-2 text-netral-60 2xl:h-6 2xl:w-6" />
          </PopoverButton>

          <PopoverPanel>
            <div
              class="absolute top-16 right-56 flex h-fit w-[335px] flex-col rounded-large bg-white shadow-message"
            >
              <div class="flex justify-between border-b border-netral-30 px-4 py-5">
                <Body size="xl" weight="medium"> Notifications </Body>
                <XMark class="h-4 w-4 stroke-[3px] text-netral-40" />
              </div>

              <div class="relative flex items-start gap-4 border-b border-netral-30 p-4">
                <a class="flex items-start gap-4" href="/account-settings">
                  <div class="flex h-10 w-10 items-center justify-center rounded-full bg-netral-20">
                    <Bag class="h-5 w-5 stroke-2 text-netral-80 2xl:h-6 2xl:w-6" />
                  </div>

                  <div class="max-w-[240px]">
                    <Body size="lg" weight="semibold" class="mb-0.5"> New Order </Body>
                    <Body size="md" weight="regular" class="mb-1 truncate text-netral-50"
                      >There is a new order, check the order details now</Body
                    >
                    <Body size="sm" weight="medium" class="text-netral-60"> 1h ago </Body>
                  </div>
                </a>
                <div class="TickNotif absolute right-5 z-20 h-2 w-2 rounded-full bg-error-main" />
              </div>

              <div class="relative flex items-start gap-4 border-b border-netral-30 p-4">
                <a class="flex items-start gap-4" href="/account-settings">
                  <div class="flex h-10 w-10 items-center justify-center rounded-full bg-netral-20">
                    <Package class="h-5 w-5 stroke-2 text-netral-80 2xl:h-6 2xl:w-6" />
                  </div>

                  <div class="max-w-[240px]">
                    <Body size="lg" weight="semibold" class="mb-0.5"> Order Refund </Body>
                    <Body size="md" weight="regular" class="mb-1 truncate text-netral-50"
                      >There is a returned order, check refund status</Body
                    >
                    <Body size="sm" weight="medium" class="text-netral-60"> 1h ago </Body>
                  </div>
                </a>
                <div class="TickNotif absolute right-5 z-20 h-2 w-2 rounded-full bg-error-main" />
              </div>

              <div class="relative flex items-start gap-4 border-b border-netral-30 p-4">
                <a class="flex items-start gap-4" href="/account-settings">
                  <div class="flex h-10 w-10 items-center justify-center rounded-full bg-netral-20">
                    <TShirt class="h-5 w-5 stroke-2 text-netral-80 2xl:h-6 2xl:w-6" />
                  </div>

                  <div class="max-w-[240px]">
                    <Body size="lg" weight="semibold" class="mb-0.5"> Order Refund </Body>
                    <Body size="md" weight="regular" class="mb-1 truncate text-netral-50"
                      >There is a returned order, check refund status</Body
                    >
                    <Body size="sm" weight="medium" class="text-netral-60"> 1h ago </Body>
                  </div>
                </a>
                <div class="TickNotif absolute right-5 z-20 h-2 w-2 rounded-full bg-error-main" />
              </div>

              <div class="flex justify-end p-4">
                <a href="/account-settings">
                  <Body size="md" weight="medium"> View all notifications </Body>
                </a>
              </div>
            </div>
          </PopoverPanel>
        </Popover>

        <!-- Divider -->
        <div class="Divider min-h-[2rem] w-px bg-netral-30" />

        <!-- Profile User -->
        <div class="User flex items-center">
          <Avatar size="small" />

          <div class="ml-2 mr-7 space-y-0.5 2xl:space-y-1">
            <Body size="md" weight="medium" class="text-netral-80"> Marvin McKinney </Body>
            <Body size="sm" weight="regular" class="text-netral-50"> Super Admin </Body>
          </div>

          <CaretDown class="h-5 w-5 stroke-2 text-netral-50 2xl:h-6 2xl:w-6" />
        </div>
      </nav>
    </div>
  </header>
</template>
