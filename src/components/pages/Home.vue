<script lang="ts" setup>
import Body from '$components/atoms/Body.vue'
import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Select from '$components/atoms/Select.vue'
import Heading from '$components/atoms/Heading.vue'

import DashboardLayout from '$components/templates/DashboardLayout.vue'

import HomeYellowPattern from '$assets/patterns/HomeYellowPattern.svg'
import HomePurplePattern from '$assets/patterns/HomePurplePattern.svg'
import HomeGreenPattern from '$assets/patterns/HomeGreenPattern.svg'

import { ArrowUpRight, ArrowDownRight, DownloadSimple } from '$assets/icons'

const categoriesData = [
  { id: 1, name: 'Filter', disable: true },
  { id: 2, name: 'This Year' },
  { id: 3, name: 'This Month' },
  { id: 4, name: 'This Week' },
]

const topProductsData = [
  {
    image: '/images/list-products/ListProducts-1.png',
    name: "T-Men's UA Storm Armour Down 2.0 Jacket",
    sold: 213,
  },
  {
    image: '/images/list-products/ListProducts-2.png',
    name: 'Windproof Handbell Oversized Long Coat',
    sold: 143,
  },
  {
    image: '/images/list-products/ListProducts-3.png',
    name: "Women's Stripe Sweater",
    sold: 137,
  },
]
</script>

<template>
  <DashboardLayout>
    <section class="Summary flex w-full items-center gap-5">
      <div
        class="Card relative w-full overflow-hidden rounded-large bg-white py-5 px-6 2xl:py-6 2xl:px-8"
      >
        <img
          class="absolute inset-0 -z-0 h-full w-full scale-110 object-cover"
          :src="HomeYellowPattern"
        />
        <div class="relative z-10">
          <Body size="lg" weight="medium" class="mb-3.5 uppercase text-netral-60">
            Total Sales
          </Body>

          <Heading size="md" weight="bold" class="mb-2"> 643,823 </Heading>

          <div class="flex">
            <ArrowUpRight class="h-4 w-4 stroke-[2.5px] text-success-main" />
            <Body size="md" weight="regular" class="pr-1 text-success-main"> 0.4% </Body>
            <Body size="md" weight="regular" class="text-netral-60"> vs last month </Body>
          </div>
        </div>
      </div>

      <div
        class="Card relative w-full overflow-hidden rounded-large bg-white py-5 px-6 2xl:py-6 2xl:px-8"
      >
        <img
          class="absolute inset-0 -z-0 h-full w-full scale-110 object-cover"
          :src="HomePurplePattern"
        />
        <div class="relative z-10">
          <Body size="lg" weight="medium" class="mb-3.5 uppercase text-netral-60">
            Total Users
          </Body>

          <Heading size="md" weight="bold" class="mb-2"> 142,937 </Heading>

          <div class="flex">
            <ArrowDownRight class="h-4 w-4 stroke-[2.5px] text-error-main" />
            <Body size="md" weight="regular" class="pr-1 text-error-main"> 12% </Body>
            <Body size="md" weight="regular" class="text-netral-60"> vs last month </Body>
          </div>
        </div>
      </div>

      <div
        class="Card relative w-full overflow-hidden rounded-large bg-white py-5 px-6 2xl:py-6 2xl:px-8"
      >
        <img
          class="absolute inset-0 -z-0 h-full w-full scale-110 object-cover"
          :src="HomeGreenPattern"
        />
        <div class="relative z-10">
          <Body size="lg" weight="medium" class="mb-3.5 uppercase text-netral-60">
            Total Buyers
          </Body>

          <Heading size="md" weight="bold" class="mb-2"> 120,981 </Heading>

          <div class="flex">
            <ArrowUpRight class="h-4 w-4 stroke-[2.5px] text-success-main" />
            <Body size="md" weight="regular" class="pr-1 text-success-main"> 0.4% </Body>
            <Body size="md" weight="regular" class="text-netral-60"> vs last month </Body>
          </div>
        </div>
      </div>
    </section>

    <section class="Content mt-8 grid grid-cols-12 gap-6">
      <div class="Content-Left col-span-7">
        <!-- BEGIN: Sales -->
        <div class="Sales mb-6 min-h-[492px] w-full rounded-large bg-white p-6">
          <!-- Heading -->
          <div class="Heading flex w-full items-center justify-between">
            <Title variant="default"> Sales </Title>

            <Button type="click" variant="primary" modifier="outlinePrimary" size="medium">
              <DownloadSimple class="h-4 w-4 stroke-[2.5px] text-primary-main 2xl:h-5 2xl:w-5" />
              Download
            </Button>
          </div>
        </div>
        <!-- END: Sales -->

        <!-- BEGIN: Outlet -->
        <div class="Outlet min-h-[380px] w-full rounded-large bg-white p-6">
          <!-- Heading -->
          <div class="Heading flex w-full items-center justify-between">
            <Title variant="default"> Outlet </Title>

            <div class="flex gap-2">
              <div class="Filter w-32">
                <Select variant="tight" :select-data="categoriesData" />
              </div>
              <Button type="click" variant="primary" modifier="outlinePrimary" size="medium">
                <DownloadSimple class="h-4 w-4 stroke-[2.5px] text-primary-main 2xl:h-5 2xl:w-5" />
                Download
              </Button>
            </div>
          </div>
        </div>
        <!-- END: Outlet -->
      </div>
      <div class="Content-Right col-span-5">
        <div class="Top-Products min-h-[350px] w-full rounded-large bg-white p-6">
          <!-- Heading -->
          <div class="Heading mb-6 flex items-center justify-between">
            <Title variant="default"> Product </Title>
            <div class="Filter w-32">
              <Select variant="tight" :select-data="categoriesData" />
            </div>
          </div>
        </div>

        <div class="Top-Products mt-6 min-h-[532px] w-full rounded-large bg-white p-6">
          <!-- Heading -->
          <div class="Heading mb-6 flex items-center justify-between">
            <Title variant="default"> Top Product </Title>
            <div class="Filter w-32">
              <Select variant="tight" :select-data="categoriesData" />
            </div>
          </div>

          <!-- Table -->
          <section class="Table">
            <!-- Heading -->
            <div class="grid w-full grid-cols-12 rounded-large bg-netral-20 py-4 px-3">
              <div class="col-span-9">
                <Body size="md" weight="semibold" class="uppercase text-netral-50"> Product </Body>
              </div>
              <div class="col-span-3">
                <Body size="md" weight="semibold" class="uppercase text-netral-50"> Sold </Body>
              </div>
            </div>

            <div
              v-for="product in topProductsData"
              class="Card-Top-Product grid w-full grid-cols-12 items-center border-b border-netral-30 py-6 px-3"
            >
              <div class="Col-Product col-span-9">
                <div class="Product flex items-center gap-3">
                  <div class="Photo h-16 w-16 rounded-large">
                    <img
                      class="Image h-full w-full object-cover"
                      :src="product.image ?? '/images/list-products/ListProducts-1.png'"
                      :alt="product.name ?? 'List Product'"
                    />
                  </div>
                  <Body size="lg" weight="semibold" class="w-32">
                    {{ product.name ?? "T-Men's UA Storm Armour Down 2.0 Jacket" }}
                  </Body>
                </div>
              </div>
              <div class="Col-Sold col-span-3">
                <Body size="lg" weight="semibold"> {{ product.sold ?? '123' }} </Body>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </DashboardLayout>
</template>
