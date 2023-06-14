<script lang="ts" setup>
import Body from '$components/atoms/Body.vue'
import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Heading from '$components/atoms/Heading.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'

import { PencilSquare } from '$assets/icons'
</script>

<template>
  <DashboardLayout title="Outlets">
    <div class="DetailsOutlet min-h-[480px] rounded-large bg-white p-6">
      <!-- Heading -->
      <div class="Heading mb-6 flex items-start justify-between 2xl:mb-8">
        <Title variant="default" size="big"> Outlet Detail </Title>

        <Button type="goto" link-href="/outlets/edit" variant="primary" modifier="outlinePrimary">
          <PencilSquare class="h-4 w-4 text-primary-main 2xl:h-5 2xl:w-5" />
          Edit
        </Button>
      </div>

      <!-- Banner -->
      <div class="Banner relative mb-8 h-80 w-full 2xl:h-96">
        <img
          class="h-full w-full rounded-large object-cover"
          src="/images/outlets/outlets-banner.png"
          alt="Outlets Banner"
        />
      </div>

      <!-- Information -->
      <div class="Information">
        <Heading size="sm" weight="semibold" class="mb-8"> Brand Here Delaware </Heading>

        <div class="Info space-y-9">
          <div class="Info-Address flex justify-between">
            <Body size="md" weight="semibold" class="w-1/2 uppercase text-netral-50">
              Complete Address
            </Body>

            <Body size="lg" weight="semibold" class="w-1/2">
              6391 Elgin St. Celina, Delaware 10299
            </Body>
          </div>

          <div class="Info-Address flex justify-between">
            <Body size="md" weight="semibold" class="w-1/2 uppercase text-netral-50">
              Phone Number
            </Body>

            <Body size="lg" weight="semibold" class="w-1/2"> (480) 555-0103 </Body>
          </div>

          <div class="Info-Address flex justify-between">
            <Body size="md" weight="semibold" class="w-1/2 uppercase text-netral-50">
              Manager Branch
            </Body>

            <Body size="lg" weight="semibold" class="w-1/2"> Arlene McCoy </Body>
          </div>

          <div class="Info-Address flex justify-between">
            <Body size="md" weight="semibold" class="w-1/2 uppercase text-netral-50">
              Total Transactions
            </Body>

            <Body size="lg" weight="semibold" class="w-1/2"> $5392 </Body>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
