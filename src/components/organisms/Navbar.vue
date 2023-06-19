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
            class="absolute right-0 top-16 flex w-64 flex-col items-start rounded-large bg-white px-3 py-2 shadow-message"
          >
            <MenuItem as="div" class="w-full border-b border-netral-30 py-1 last:border-b-0">
              <a href="/" class="flex items-center gap-4 rounded-lg px-3 py-2 hover:bg-netral-20">
                <svg
                  class="gear_six-icon h-6 w-6 stroke-netral-60 stroke-[1.5px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0001 16.5C14.4854 16.5 16.5001 14.4853 16.5001 12C16.5001 9.51472 14.4854 7.5 12.0001 7.5C9.51481 7.5 7.50009 9.51472 7.50009 12C7.50009 14.4853 9.51481 16.5 12.0001 16.5Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5068 7.561C18.7287 7.8867 18.9257 8.2286 19.0963 8.58381L21.5288 9.93414C21.825 11.2949 21.826 12.7034 21.5317 14.0645L19.0979 15.4156C18.9268 15.7706 18.7292 16.1121 18.5069 16.4375L18.5537 19.2192C17.5234 20.1562 16.3041 20.8613 14.9781 21.287L12.5912 19.8548C12.1982 19.8841 11.8036 19.8837 11.4107 19.8539L9.02502 21.2853C7.69844 20.8615 6.47816 20.1581 5.44649 19.2227L5.49334 16.4394C5.27152 16.1137 5.07448 15.7718 4.9039 15.4166L2.47144 14.0663C2.17516 12.7055 2.17414 11.297 2.46846 9.93585L4.90227 8.58478C5.07342 8.22983 5.27099 7.88824 5.49333 7.5629L5.44651 4.78117C6.47682 3.8442 7.69608 3.13909 9.02205 2.71338L11.409 4.14559C11.802 4.11633 12.1966 4.11665 12.5895 4.14652L14.9752 2.7151C16.3018 3.1389 17.522 3.84225 18.5537 4.77772L18.5068 7.561Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Body size="md" weight="medium"> Settings </Body>
              </a>
            </MenuItem>
            <MenuItem as="div" class="w-full border-b border-netral-30 py-1 last:border-b-0">
              <a href="/" class="flex items-center gap-4 rounded-lg px-3 py-2 hover:bg-netral-20">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3135 8.0625L20.25 12L16.3135 15.9375"
                    stroke="#707784"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 12H20.2472"
                    stroke="#707784"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9.75"
                    stroke="#707784"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <Body size="md" weight="medium"> Logout </Body>
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </nav>
    </div>
  </header>
</template>

<script></script>
