<script lang="ts" setup>
import { DashboardLayout } from '$components/templates'
import { Button, Body, Title } from '$components/atoms'
import {
  NoUsersIll,
  NoBuyersIll,
  NoBannersIll,
  NoOutletsIll,
  NoReturnsIll,
  NoCategoriesIll,
  NoProductsIll,
  NoUserRolesIll,
  NoFlashSaleIll,
  NoTransactionsIll,
} from '$assets/illustrations'

const listIllustration = [
  {
    id: 1,
    name: 'NoUsersIll',
    location: '@/assets/illustration',
    component: NoUsersIll,
  },
  {
    id: 2,
    name: 'NoBuyersIll',
    location: '@/assets/illustration',
    component: NoBuyersIll,
  },
  {
    id: 3,
    name: 'NoBannersIll',
    location: '@/assets/illustration',
    component: NoBannersIll,
  },
  {
    id: 4,
    name: 'NoOutletsIll',
    location: '@/assets/illustration',
    component: NoOutletsIll,
  },
  {
    id: 5,
    name: 'NoReturnsIll',
    location: '@/assets/illustration',
    component: NoReturnsIll,
  },
  {
    id: 6,
    name: 'NoCategoriesIll',
    location: '@/assets/illustration',
    component: NoCategoriesIll,
  },
  {
    id: 7,
    name: 'NoProductsIll',
    location: '@/assets/illustration',
    component: NoProductsIll,
  },
  {
    id: 8,
    name: 'NoUserRolesIll',
    location: '@/assets/illustration',
    component: NoUserRolesIll,
  },
  {
    id: 9,
    name: 'NoFlashSaleIll',
    location: '@/assets/illustration',
    component: NoFlashSaleIll,
  },
  {
    id: 9,
    name: 'NoTransactionsIll',
    location: '@/assets/illustration',
    component: NoTransactionsIll,
  },
]
</script>

<template>
  <DashboardLayout title="Illustrations">
    <div class="Illustrations min-h-[480px] rounded-large bg-white p-6">
      <Title variant="default"> Illustration List </Title>

      <div className="grid grid-cols-4 gap-8">
        <section
          v-for="ill in listIllustration"
          :key="ill.id"
          className="group relative flex items-end justify-center overflow-hidden rounded-xl"
        >
          <figure
            className="absolute z-10 flex h-full w-full items-end justify-between bg-black/10 p-4 opacity-0 transition-all duration-300 ease-in group-hover:opacity-100"
          >
            <span
              className="h-fit w-full space-y-3 rounded-xl border border-primary-surface/25 bg-white/90 px-6 py-3 backdrop-blur-sm"
            >
              <div>
                <p className="font-medium text-netral-80">Name:</p>
                <p className="font-medium text-primary-main">{{ ill.name }}</p>
              </div>

              <div>
                <p className="font-medium text-netral-80">Location:</p>
                <p className="font-medium text-primary-main">
                  {{ ill.location }}
                </p>
              </div>
            </span>
          </figure>

          <div className="[&>svg]:h-56 [&>svg]:w-56">
            <component :is="ill.component" />
            <!-- {{ ill.component }} -->
          </div>
        </section>
      </div>
    </div>
  </DashboardLayout>
</template>
