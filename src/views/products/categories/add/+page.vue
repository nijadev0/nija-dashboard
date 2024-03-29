<script lang="ts" setup>
import { ref } from 'vue'

import { DashboardLayout } from '$components/templates'
import { PageAction, Toast } from '$components/organisms'
import { Body, Button, Input, TextArea, Title, Toggle } from '$components/atoms'
import { UploadImageEmpty, UploadBannerImageFilled } from '$components/organisms/Modal'

import { Pencil, UploadSimple } from '$assets/icons'

/**
 * =================
 * Toast
 * =================
 */
// Saved Data
const toastSavedDataRef = ref(false)

function openToastSavedData() {
  toastSavedDataRef.value = true
}

function closeToastSavedData() {
  toastSavedDataRef.value = false
}

// Saved Image
const toastSavedImageRef = ref(false)

// Uploaded image
const uploadedImageRef = ref(false)

function openToastSavedImage() {
  isOpenModalFilledRef.value = false
  toastSavedImageRef.value = true

  uploadedImageRef.value = true
}

function closeToastSavedImage() {
  toastSavedImageRef.value = false
}

/**
 * ==========================
 * Modal Empty Upload Image
 * ==========================
 */
const isOpenModalEmptyRef = ref(false)

function openModalEmpty() {
  isOpenModalEmptyRef.value = true
}

function closeModalEmpty() {
  isOpenModalEmptyRef.value = false
}

/**
 * ==========================
 * Modal Filled Upload Image
 * ==========================
 */
const isOpenModalFilledRef = ref(false)

function openModalFilled() {
  isOpenModalEmptyRef.value = false
  isOpenModalFilledRef.value = true
}

function closeModalFilled() {
  isOpenModalFilledRef.value = false
}
</script>

<template>
  <DashboardLayout title="Categories">
    <section class="Products mb-6 rounded-large bg-white p-6">
      <div class="Wrap min-h-[480px] w-full">
        <!-- Heading -->
        <Title variant="default" class="mb-7"> Add Category </Title>

        <div class="flex items-start justify-between border-y border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Product Name </Body>
            <Body size="md" weight="regular" class="text-netral-50">
              Do not exceed 20 characters when entering the product name.
            </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <Input
              variant="base"
              input-type="text"
              name="ProductName"
              placeholder="Enter product name"
            />
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Description </Body>
            <Body size="md" weight="regular" class="text-netral-50">
              Set a description on product to detail your product and better visibility
            </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <TextArea type="default" name="ProductDescription" placeholder="Description" />
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Status </Body>
            <Body size="md" weight="regular" class="text-netral-50">
              Set a status for your product to determine whether your product is displayed or not
            </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <Toggle />
          </div>
        </div>

        <div class="flex items-start justify-between py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Photo Product </Body>
            <Body size="md" weight="regular" class="text-netral-50">
              Recommended minimum width 1080px X 1080px, with a max size of 5MB, only *.png, *.jpg
              and *.jpeg image files are accepted
            </Body>
          </div>

          <div class="flex w-full max-w-xl gap-4 2xl:max-w-4xl 2xl:gap-6">
            <div
              class="relative flex w-[480px] cursor-pointer items-center justify-center rounded-large border-2 border-dashed border-netral-30 bg-[#fafafa] py-14 hover:bg-netral-30/30"
            >
              <div v-if="!uploadedImageRef" class="flex flex-col items-center justify-center gap-2">
                <UploadSimple class="h-8 w-8 stroke-[2.5px] text-netral-40" />

                <Button
                  type="click"
                  :on-click="openModalEmpty"
                  variant="primary"
                  modifier="defaultPrimary"
                  size="small"
                >
                  Add Image
                </Button>

                <Body
                  size="sm"
                  weight="regular"
                  class="mt-2 max-w-[118px] text-center capitalize tracking-wide text-netral-60"
                >
                  or drop image to upload
                </Body>
              </div>

              <div v-if="uploadedImageRef" class="relative h-auto w-auto">
                <img
                  class="h-full w-full object-cover"
                  src="/images/categories/categories-1.png"
                  alt="Categories 1"
                />
              </div>

              <div class="absolute right-6 top-3 z-10">
                <Button v-if="uploadedImageRef" type="click" size="small" variant="primary">
                  <Pencil class="h-3.5 w-3.5 stroke-white stroke-[3px]" />
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Page Action : Home -->
    <template #PageAction>
      <PageAction
        v-if="true"
        variant="saveDiscard"
        :is-selected="true"
        :open-modal="openToastSavedData"
      />
    </template>

    <template #Modal>
      <UploadImageEmpty
        :isOpenRef="isOpenModalEmptyRef"
        :closeModal="closeModalEmpty"
        :next-click="openModalFilled"
      />

      <UploadBannerImageFilled
        :isOpenRef="isOpenModalFilledRef"
        :closeModal="closeModalFilled"
        :next-click="openToastSavedImage"
      />
    </template>

    <!-- Toast Delete : Home -->
    <template #Toast>
      <Toast
        variant="saved"
        :toast-ref="toastSavedDataRef"
        :close-toast="closeToastSavedData"
        heading="Data saved successfuly"
        description="You have successfully added an data for your category"
      />

      <Toast
        variant="saved"
        :toast-ref="toastSavedImageRef"
        :close-toast="closeToastSavedImage"
        heading="Data saved successfuly"
        description="You have successfully added an data for your category"
      />
    </template>
  </DashboardLayout>
</template>
