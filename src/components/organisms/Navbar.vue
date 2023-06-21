<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/vue'

import { Avatar, Body } from '$components/atoms'

import {
  Bag,
  BellSimple,
  CaretDown,
  MagnifyingGlass,
  GearSix,
  Package,
  SignOut,
  TShirt,
} from '$assets/icons'
</script>

<template>
  <!-- Navbar -->
  <header class="Navbar w-full border-b border-netral-20 bg-white px-8 py-3 shadow-sm">
    <div class="Wrapper mx-auto flex w-full items-center justify-between">
      <!-- Search -->
      <nav class="Search relative">
        <input
          type="text"
          class="w-[18rem] rounded-large bg-netral-20 px-3.5 py-2 pl-10 text-xs outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main 2xl:w-[21.25rem] 2xl:py-3 2xl:pl-11 2xl:text-sm"
          placeholder="What are you looking for"
        />

        <MagnifyingGlass
          class="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 stroke-2 text-netral-80 2xl:h-5 2xl:w-5"
        />
      </nav>

      <!-- Profile -->

      <nav class="Profile relative flex items-center gap-5">
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
              class="absolute right-56 top-16 flex h-fit w-[335px] flex-col rounded-large bg-white shadow-message"
            >
              <div class="flex justify-between border-b border-netral-30 px-4 py-5">
                <Body size="xl" weight="medium"> Notifications </Body>
              </div>

              <div
                @click="$router.push('/notifications')"
                class="relative flex cursor-pointer items-start gap-4 border-b border-netral-30 p-4 hover:bg-primary-surface/25"
              >
                <a class="flex items-start gap-4">
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

              <div
                @click="$router.push('/notifications')"
                class="relative flex cursor-pointer items-start gap-4 border-b border-netral-30 p-4 hover:bg-primary-surface/25"
              >
                <a class="flex items-start gap-4">
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

              <div
                @click="$router.push('/notifications')"
                class="relative flex cursor-pointer items-start gap-4 border-b border-netral-30 p-4 hover:bg-primary-surface/25"
              >
                <a class="flex items-start gap-4">
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
                <button @click="$router.push('/notifications')">
                  <Body size="md" weight="medium"> View all notifications </Body>
                </button>
              </div>
            </div>
          </PopoverPanel>
        </Popover>

        <!-- Divider -->
        <div class="Divider min-h-[2rem] w-px bg-netral-30" />

        <!-- Profile User -->

        <Menu>
          <MenuButton class="User flex items-center">
            <Avatar size="small" />

            <div class="ml-2 mr-7 space-y-0.5 text-left 2xl:space-y-1">
              <Body size="md" weight="medium" class="text-netral-80"> Marvin McKinney </Body>
              <Body size="sm" weight="regular" class="text-netral-50"> Super Admin </Body>
            </div>

            <CaretDown class="h-5 w-5 stroke-2 text-netral-50 2xl:h-6 2xl:w-6" />
          </MenuButton>

          <MenuItems
            as="div"
            class="absolute right-0 top-16 flex w-56 flex-col items-start gap-1 rounded-large bg-white px-3 py-2 shadow-message 2xl:w-64"
          >
            <MenuItem as="div" class="w-full py-1">
              <RouterLink
                to="/settings"
                class="flex items-center gap-2.5 rounded-lg px-3 py-1.5 hover:bg-netral-20 2xl:gap-4 2xl:py-2"
              >
                <GearSix class="h-5 w-5 stroke-netral-60 stroke-[1.5px] 2xl:h-6 2xl:w-6" />
                <Body size="md" weight="medium"> Settings </Body>
              </RouterLink>
            </MenuItem>

            <MenuItem as="div" class="h-px w-full bg-netral-30"></MenuItem>

            <MenuItem as="div" class="w-full py-1">
              <RouterLink
                to="/auth/login"
                class="flex items-center gap-2.5 rounded-lg px-3 py-1.5 hover:bg-netral-20 2xl:gap-4 2xl:py-2"
              >
                <SignOut class="h-5 w-5 stroke-netral-60 stroke-[1.5px] 2xl:h-6 2xl:w-6" />
                <Body size="md" weight="medium"> Logout </Body>
              </RouterLink>
            </MenuItem>
          </MenuItems>
        </Menu>
      </nav>
    </div>
  </header>
</template>

<script></script>
