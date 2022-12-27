<script lang="ts" setup>
import Body from '$components/atoms/Body.vue'
import SideMenu from '$components/moleculs/SideMenu.vue'

import {
  HouseSimple,
  Users,
  Package,
  Receipt,
  Tag,
  AppWindow,
  Storefront,
  UserCircle,
} from '$assets/icons'
import SideMenuExpand from '$components/moleculs/SideMenuExpand.vue'
</script>

<template>
  <aside
    class="Sidebar flex min-h-screen w-[220px] flex-col items-center border-r border-netral-20 bg-white px-5 py-8 shadow-sm 2xl:w-72"
  >
    <div class="Logo mb-8 ml-4 flex items-start justify-start gap-2 self-start 2xl:mb-10">
      <img src="/nija.svg" alt="Nija Logo" class="h-7 w-7 2xl:h-8 2xl:w-8" />
      <Body size="xxl" weight="semibold" class="uppercase tracking-wide"> Nija Kit </Body>
    </div>

    <div class="Menu flex flex-col gap-2.5 2xl:gap-3">
      <!-- Dashboard -->
      <SideMenu variant="default" href="/">
        <HouseSimple class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> Dashboard </Body>
      </SideMenu>

      <!-- Customers -->
      <SideMenuExpand>
        <template #expand>
          <Users class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
          <Body size="md" weight="medium"> Customers </Body>
        </template>

        <template #sub>
          <SideMenu variant="sub" href="/customers/users">
            <Body size="md" weight="medium"> Users </Body>
          </SideMenu>

          <SideMenu variant="sub" href="/customers/buyers">
            <Body size="md" weight="medium"> Buyers </Body>
          </SideMenu>
        </template>
      </SideMenuExpand>

      <!-- Customers -->
      <SideMenuExpand>
        <template #expand>
          <Package class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
          <Body size="md" weight="medium"> Products </Body>
        </template>

        <template #sub>
          <SideMenu variant="sub">
            <Body size="md" weight="medium"> List Products </Body>
          </SideMenu>

          <SideMenu variant="sub">
            <Body size="md" weight="medium"> Categories </Body>
          </SideMenu>
        </template>
      </SideMenuExpand>

      <!-- Transacations -->
      <SideMenuExpand>
        <template #expand>
          <Receipt class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
          <Body size="md" weight="medium"> Transactions </Body>
        </template>

        <template #sub>
          <SideMenu variant="sub">
            <Body size="md" weight="medium"> Transactions </Body>
          </SideMenu>

          <SideMenu variant="sub">
            <Body size="md" weight="medium"> Returns </Body>
          </SideMenu>
        </template>
      </SideMenuExpand>

      <!-- Flash Sale -->
      <SideMenu variant="default">
        <Tag class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> Flash Sale </Body>
      </SideMenu>

      <!-- Banner -->
      <SideMenu variant="default">
        <AppWindow class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> Banner </Body>
      </SideMenu>

      <!-- Outlet -->
      <SideMenu variant="default">
        <Storefront class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> Outlet </Body>
      </SideMenu>

      <!-- User Role -->
      <SideMenu variant="default">
        <UserCircle class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> User Role </Body>
      </SideMenu>
    </div>
  </aside>
</template>
