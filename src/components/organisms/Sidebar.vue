<script lang="ts" setup>
import { Body } from '$components/atoms'
import { SideMenu, SideMenuExpand } from '$components/moleculs'

import {
  HouseSimple,
  Images,
  Users,
  Package,
  Receipt,
  Tag,
  AppWindow,
  Storefront,
  UserCircle,
  LockKey,
} from '$assets/icons'
// ------------------------------------------------------------------------------
const toggle = {
  customers: {
    id: 1,
    name: 'customers_sidemenu',
  },
  products: {
    id: 2,
    name: 'products_sidemenu',
  },
  transactions: {
    id: 3,
    name: 'transactions_sidemenu',
  },
  authentications: {
    id: 4,
    name: 'authentications_sidemenu',
  },
}
// ------------------------------------------------------------------------------
</script>

<template>
  <aside
    id="sidebar"
    class="Sidebar h-screen w-64 overflow-y-auto overflow-x-hidden border border-netral-20 bg-white px-6 py-4 pt-8 shadow-sm 2xl:w-72 2xl:pt-10"
  >
    <div class="Logo mb-8 flex items-center gap-3 2xl:mb-10">
      <img src="/nija.svg" alt="Nija Logo" class="h-7 w-7 2xl:h-8 2xl:w-8" />
      <Body size="xxl" weight="semibold" class="uppercase tracking-wide"> Nija Kit </Body>
    </div>

    <div class="Menu mt-10 flex w-full flex-col items-start gap-3">
      <!-- Dashboard -->
      <SideMenu variant="default" href="/" exact>
        <HouseSimple class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> Dashboard </Body>
      </SideMenu>

      <!-- Customers -->
      <SideMenuExpand :name="toggle.customers.name">
        <template #expand>
          <Users class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
          <Body size="md" weight="medium"> Customers </Body>
        </template>

        <template #sub>
          <div class="flex w-full flex-col items-start justify-end gap-2 pl-9">
            <SideMenu variant="sub" href="/customers/users">
              <Body size="md" weight="medium"> Users </Body>
            </SideMenu>

            <SideMenu variant="sub" href="/customers/buyers">
              <Body size="md" weight="medium"> Buyers </Body>
            </SideMenu>
          </div>
        </template>
      </SideMenuExpand>

      <!-- Customers -->
      <SideMenuExpand :name="toggle.products.name">
        <template #expand>
          <Package class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
          <Body size="md" weight="medium"> Products </Body>
        </template>

        <template #sub>
          <div class="flex w-full flex-col items-start justify-end gap-2 pl-9">
            <SideMenu variant="sub" href="/products/list-products">
              <Body size="md" weight="medium"> Products List </Body>
            </SideMenu>

            <SideMenu variant="sub" href="/products/categories">
              <Body size="md" weight="medium"> Categories </Body>
            </SideMenu>
          </div>
        </template>
      </SideMenuExpand>

      <!-- Transacations -->
      <SideMenuExpand :name="toggle.transactions.name">
        <template #expand>
          <Receipt class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
          <Body size="md" weight="medium"> Transactions </Body>
        </template>

        <template #sub>
          <div class="flex w-full flex-col items-start justify-end gap-2 pl-9">
            <SideMenu variant="sub" href="/transactions/manage-transactions">
              <Body size="md" weight="medium"> Manage Transactions </Body>
            </SideMenu>

            <SideMenu variant="sub" href="/transactions/returns">
              <Body size="md" weight="medium"> Manage Returns </Body>
            </SideMenu>
          </div>
        </template>
      </SideMenuExpand>

      <!-- Flash Sale -->
      <SideMenu variant="default" href="/flash-sale">
        <Tag class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> Flash Sales </Body>
      </SideMenu>

      <!-- Banner -->
      <SideMenu variant="default" href="/banners">
        <AppWindow class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> Banners </Body>
      </SideMenu>

      <!-- Outlet -->
      <SideMenu variant="default" href="/outlets">
        <Storefront class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> Outlets </Body>
      </SideMenu>

      <!-- User Role -->
      <SideMenu variant="default" href="/user-role">
        <UserCircle class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> Users Role </Body>
      </SideMenu>

      <!-- Illustrations -->
      <SideMenu variant="default" href="/illustrations">
        <Images class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
        <Body size="md" weight="medium"> Illustrations </Body>
      </SideMenu>

      <!-- Authentication -->
      <SideMenuExpand :name="toggle.authentications.name">
        <template #expand>
          <LockKey class="h-5 w-5 stroke-2 2xl:h-6 2xl:w-6" />
          <Body size="md" weight="medium"> Authentications </Body>
        </template>

        <template #sub>
          <div class="flex w-full flex-col items-start justify-end gap-2 pl-9">
            <SideMenu variant="sub" href="/auth/login">
              <Body size="md" weight="medium"> Login </Body>
            </SideMenu>

            <SideMenu variant="sub" href="/auth/register">
              <Body size="md" weight="medium"> Register </Body>
            </SideMenu>

            <SideMenu variant="sub" href="/auth/forgot-password">
              <Body size="md" weight="medium"> Forgot </Body>
            </SideMenu>

            <SideMenu variant="sub" href="/auth/verify-password">
              <Body size="md" weight="medium"> Verify </Body>
            </SideMenu>

            <SideMenu variant="sub" href="/auth/new-password">
              <Body size="md" weight="medium"> New Password </Body>
            </SideMenu>

            <SideMenu variant="sub" href="/auth/reset-success">
              <Body size="md" weight="medium"> Reset Success </Body>
            </SideMenu>
          </div>
        </template>
      </SideMenuExpand>
    </div>
  </aside>
</template>
