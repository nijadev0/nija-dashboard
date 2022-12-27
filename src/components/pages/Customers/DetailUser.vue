<script lang="ts" setup>
import { ref } from 'vue'

import Title from '$components/atoms/Title.vue'
import PageAction from '$components/organisms/PageAction.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'

import { CaretDown } from '$assets/icons'
import Toast from '$components/organisms/Toast.vue'

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
    <div class="min-h-[640px]">
      <div class="rounded-large bg-white p-6">
        <Title variant="default" class="mb-8"> User </Title>

        <form class="grid grid-cols-2 gap-x-5 gap-y-8">
          <div class="w-full">
            <label class="text-xs font-semibold 2xl:text-sm" for="name"> Name </label>
            <input
              name="name"
              class="mt-1.5 w-full rounded-large border border-netral-30 bg-netral-10 p-3 text-sm leading-[22px] shadow-input outline-none focus-within:ring-2 focus-within:ring-primary-main 2xl:p-3.5 2xl:text-base"
              type="text"
              placeholder="John Doe"
            />
          </div>

          <div class="w-full">
            <label class="text-xs font-semibold 2xl:text-sm" for="name"> Email address </label>
            <input
              name="name"
              class="mt-1.5 w-full rounded-large border border-netral-30 bg-netral-10 p-3 text-sm leading-[22px] shadow-input outline-none focus-within:ring-2 focus-within:ring-primary-main 2xl:p-3.5 2xl:text-base"
              type="text"
              placeholder="johndoe@gmail.com"
            />
          </div>

          <div class="w-full">
            <label class="text-xs font-semibold 2xl:text-sm" for="name"> Phone number </label>
            <div class="relative">
              <div class="absolute top-3.5 left-2 z-10 flex w-fit items-center gap-2">
                <div
                  class="flex w-fit items-center gap-1 rounded-md bg-netral-20 px-1.5 py-1 2xl:py-2"
                >
                  <span class="text-sm font-bold text-netral-80">+62</span>
                  <CaretDown class="h-5 w-5 stroke-netral-80 stroke-2" />
                </div>
                <div class="h-6 w-0.5 bg-netral-20" />
              </div>

              <input
                name="name"
                class="relative mt-1.5 w-full rounded-large border border-netral-30 bg-netral-10 p-3 pl-24 text-sm leading-[22px] shadow-input outline-none focus-within:ring-2 focus-within:ring-primary-main 2xl:p-3.5 2xl:pl-24 2xl:text-base"
                type="text"
                placeholder="8791238193"
              />
            </div>
          </div>

          <div class="relative w-full">
            <label class="text-xs font-semibold 2xl:text-sm" for="name"> Complete Address </label>
            <input
              name="name"
              class="mt-1.5 w-full rounded-large border border-netral-30 bg-netral-10 p-3 text-sm leading-[22px] shadow-input outline-none focus-within:ring-2 focus-within:ring-primary-main 2xl:p-3.5 2xl:text-base"
              type="text"
              placeholder="2972 Westheimer Rd. Santa Ana, Illinois 85486"
            />
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
