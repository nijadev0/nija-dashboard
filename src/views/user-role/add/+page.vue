<script lang="ts" setup>
import { ref } from 'vue'

import { DashboardLayout } from '$components/templates'
import { PageAction, Toast } from '$components/organisms'
import { Body, Input, Select, Title } from '$components/atoms'

/**
 * =================
 * Dummy Data: User Role
 * =================
 */
const userRoleData = [
  { id: 1, name: 'Select Role', disable: true },
  { id: 2, name: 'Super Admin' },
  { id: 3, name: 'Admin' },
  { id: 4, name: 'Cashier' },
]

/**
 * =================
 * Toast
 * =================
 */
const toastRef = ref(false)

function openToastSaved() {
  toastRef.value = true
}

function closeToastSaved() {
  toastRef.value = false
}
</script>

<template>
  <DashboardLayout title="Detail User">
    <!-- User Detail -->
    <div class="UserDetail min-h-[640px]">
      <div class="Wrap rounded-large bg-white p-6">
        <Title variant="default" class="mb-6 2xl:mb-8"> User </Title>

        <form class="Form grid grid-cols-2 gap-x-5 gap-y-6 2xl:gap-y-8">
          <Input variant="base" name="Name" input-type="text" label="Name" placeholder="John Doe" />

          <Input
            variant="base"
            name="Name"
            input-type="email"
            label="Email Address"
            placeholder="johndoe@gmail.com"
          />

          <Input
            variant="phone"
            name="Phone"
            input-type="number"
            label="Phone Number"
            placeholder="8791238193"
          />

          <Input
            variant="base"
            name="Address"
            input-type="text"
            label="Complete Address"
            placeholder="2972 Westheimer Rd. Santa Ana, Illinois 85486"
          />

          <div class="UserRole space-y-1.5">
            <Body size="md" weight="semibold"> User Role </Body>
            <Select variant="relax" :select-data="userRoleData" />
          </div>
        </form>
      </div>
    </div>

    <template #PageAction>
      <PageAction
        v-if="true"
        variant="saveDiscard"
        :is-selected="true"
        :open-modal="openToastSaved"
      />
    </template>

    <template #Toast>
      <Toast
        variant="saved"
        :toast-ref="toastRef"
        :close-toast="closeToastSaved"
        heading="Users data has been saved"
        description="You have successfully added new data for user."
      />
    </template>
  </DashboardLayout>
</template>
