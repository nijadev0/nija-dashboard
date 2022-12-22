<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import Text from '$components/atoms/Text.vue'
import SideMenu from '$components/moleculs/SideMenu.vue'
import { HouseSimple, Users } from '$assets/icons'
</script>

<template>
  <aside class="Sidebar min-h-screen w-full max-w-[240px] px-[18px] py-6">
    <div class="Logo mb-10 flex gap-3">
      <img src="/nija.svg" alt="Nija Logo" class="h-8 w-8" />
      <Text variant="body" size="xxl" weight="medium"> Nija Kit </Text>
    </div>

    <div class="Menu flex flex-col gap-3">
      <SideMenu variant="default">
        <HouseSimple class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Text variant="body" size="md" weight="medium"> Dashboard </Text>
      </SideMenu>

      <Disclosure>
        <DisclosureButton class="SidebarExpandButton">
          <SideMenu variant="expand">
            <Users class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
            <Text variant="body" size="md" weight="medium"> Customers</Text>
          </SideMenu>
        </DisclosureButton>

        <DisclosurePanel
          class="SidebarExpandPanel relative flex w-full flex-col items-end justify-end gap-3"
        >
          <div class="absolute top-0 left-5 h-full w-px bg-netral-30" />
          <SideMenu variant="sub">
            <Text variant="body" size="md" weight="medium"> Label </Text>
          </SideMenu>
          <SideMenu variant="sub">
            <Text variant="body" size="md" weight="medium"> Label </Text>
          </SideMenu>
        </DisclosurePanel>
      </Disclosure>

      <SideMenu variant="default">
        <Text variant="body" size="md" weight="medium"> Label </Text>
      </SideMenu>
    </div>
  </aside>
</template>
