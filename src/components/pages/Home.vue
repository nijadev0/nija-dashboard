<script lang="ts" setup>
import Body from '$components/atoms/Body.vue'
import Heading from '$components/atoms/Heading.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'

import { ArrowUpRight, ArrowDownRight } from '$assets/icons'

import HomeYellowPattern from '../../assets/patterns/HomeYellowPattern.svg'
import HomePurplePattern from '../../assets/patterns/HomePurplePattern.svg'
import HomeGreenPattern from '../../assets/patterns/HomeGreenPattern.svg'
</script>

<template>
  <DashboardLayout>
    <section class="Summary flex w-full items-center gap-5">
      <div
        class="relative w-full overflow-hidden rounded-large bg-white py-5 px-6 2xl:py-6 2xl:px-8"
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
        class="relative w-full overflow-hidden rounded-large bg-white py-5 px-6 2xl:py-6 2xl:px-8"
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
        class="relative w-full overflow-hidden rounded-large bg-white py-5 px-6 2xl:py-6 2xl:px-8"
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
  </DashboardLayout>
</template>
