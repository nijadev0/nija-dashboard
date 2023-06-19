<script lang="ts" setup>
import { ref } from 'vue'

import { DashboardLayout } from '$components/templates'
import { Body, Button, Input, Title } from '$components/atoms'

import { Pencil, UploadSimple } from '$assets/icons'

//---------------------------------------------------------------------
const avatarRef = ref(false)

const toggleAvatar = () => {
  avatarRef.value = true
}
//---------------------------------------------------------------------
</script>

<template>
  <DashboardLayout title="Settings">
    <main class="relative mb-6 rounded-large bg-white p-6">
      <Title variant="default" class="mb-8"> Manage Profile </Title>

      <form>
        <div class="flex items-start justify-between border-y border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Avatar </Body>
            <Body size="md" weight="regular" class="text-netral-50">
              Only *.png, *.jpg and *.jpeg image files are accepted
            </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <div
              class="group relative flex aspect-square h-36 w-36 items-center justify-center overflow-hidden rounded-large bg-netral-20"
            >
              <div v-if="!avatarRef" class="flex flex-col items-center gap-3">
                <UploadSimple class="h-8 w-8 stroke-netral-50 stroke-[2.5px]" />
                <Button @click="toggleAvatar" type="click" size="small" variant="primary">
                  Add Image
                </Button>
              </div>

              <div v-if="avatarRef" class="relative h-full w-full">
                <img
                  class="h-full w-full object-cover"
                  src="/images/settings/settings-1.png"
                  alt="Settings Avatar"
                />

                <div
                  class="absolute right-1 top-1 z-10 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
                >
                  <Button type="click" variant="plain" size="small" modifier="defaultPlain">
                    <Pencil class="h-4 w-4 stroke-netral-80 stroke-[3px]" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Role </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <Input
              variant="base"
              input-type="text"
              name="Role"
              placeholder="Enter your role"
              value="Super Admin"
            />
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Invoice </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <Input
              variant="base"
              input-type="text"
              name="ProductName"
              placeholder="Enter product name"
              value="INV/20221114/MPL/28203158839"
            />
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Customer Name </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <Input
              variant="base"
              input-type="text"
              name="ProductName"
              placeholder="Enter product name"
              value="Samanta Legend"
            />
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Phone Number </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <Input
              variant="phone"
              input-type="number"
              name="ProductName"
              placeholder="Enter product name"
              value="8723781236"
            />
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Status </Body>
            <Body size="md" weight="regular" class="text-netral-50">
              This is the customer's order status. You can arrange your customer's order status
              according to the order process.
            </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <Input
              variant="status"
              input-type="text"
              name="ProductName"
              placeholder="Enter product name"
              value="8723781236"
              status="Waiting"
            />
          </div>
        </div>
      </form>
    </main>
    <main class="relative rounded-large bg-white p-6">
      <Title variant="default" class="mb-8"> Manage Account </Title>
    </main>
  </DashboardLayout>
</template>
