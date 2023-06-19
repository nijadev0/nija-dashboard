<script lang="ts" setup>
import { ref } from 'vue'

import { Body, Button, Input, Title } from '$components/atoms'

import { DashboardLayout } from '$components/templates'
import { PageAction, Toast } from '$components/organisms'
import { UploadImageEmpty, UploadImageSingleFilled } from '$components/organisms/Modal'

import { UploadSimple, Pencil, Trash } from '$assets/icons'

/**
 * Empty -> Upload State
 */
const emptyToUploadRef = ref(false)

/**
 * Modal - Upload Empty
 */
const uploadEmptyRef = ref(false)

const openModalUploadEmpty = () => {
  uploadEmptyRef.value = true
}

const closeModalUploadEmpty = () => {
  uploadEmptyRef.value = false
}

/**
 * Modal - Filled Single
 */
const uploadFilledRef = ref(false)

const openModalUploadFilled = () => {
  uploadEmptyRef.value = false

  setTimeout(() => {
    uploadFilledRef.value = true
  }, 500)
}

const closeModalUploadFilled = () => {
  uploadFilledRef.value = false
}

/**
 * Toast Ref
 */

const toastRefSaved = ref(false)

function openToastSaved() {
  setTimeout(() => {
    uploadFilledRef.value = false
  }, 500)

  setTimeout(() => {
    toastRefSaved.value = true
  }, 750)

  setTimeout(() => {
    toastRefSaved.value = false
  }, 3000)
}

function closeToastSaved() {
  toastRefSaved.value = false

  emptyToUploadRef.value = true
}
</script>

<template>
  <DashboardLayout title="Outlet">
    <div class="EditOutlet min-h-[480px] rounded-large bg-white p-6">
      <!-- Title -->
      <Title variant="default" class="mb-6 2xl:mb-8"> Outlet Detail </Title>

      <!-- Form Outlet -->
      <form @submit.prevent class="Form grid grid-cols-2 gap-x-5 gap-y-6 2xl:gap-y-8">
        <!-- Name -->
        <Input
          variant="base"
          name="Name"
          input-type="text"
          label="Outlet Name"
          placeholder="Enter outlet name"
        />

        <!-- Address -->
        <Input
          variant="base"
          name="Name"
          input-type="text"
          label="Complete Address"
          placeholder="Enter address"
        />

        <!-- Phone Number -->
        <Input
          variant="phone"
          name="Phone"
          input-type="number"
          label="Phone Number"
          placeholder="8791238193"
        />

        <!-- Manager Branch -->
        <Input
          variant="base"
          name="ManagerBranch"
          input-type="text"
          label="Manager Branch"
          placeholder="Enter manager name"
        />

        <!-- Upload Image -->
        <div class="Image">
          <!-- Label -->
          <Body size="md" weight="semibold" class="mb-1.5"> Upload Image </Body>

          <!-- Input -->
          <div
            class="BannerUpload relative flex h-72 items-center justify-center overflow-hidden rounded-large border-2 border-netral-30 bg-netral-15"
            :class="emptyToUploadRef ? 'border-collapse' : 'border-dashed'"
          >
            <!-- Empty Image -->
            <div
              class="Wrapper-Empty flex flex-col items-center justify-center"
              :class="emptyToUploadRef === false ? 'block' : 'hidden'"
            >
              <UploadSimple class="mb-5 h-8 w-8 stroke-[2.5px] text-netral-50" />

              <div @click="openModalUploadEmpty">
                <Button type="click" variant="primary" modifier="defaultPrimary">
                  Add Image
                </Button>
              </div>

              <Body size="md" weight="regular" class="mt-2 text-netral-50">
                Or drop image to upload
              </Body>
            </div>

            <!-- Edit -->
            <div
              v-if="emptyToUploadRef"
              class="absolute top-4 right-4 z-10 flex items-center justify-center gap-3 rounded-large"
            >
              <Button type="click" variant="primary" modifier="defaultPrimary" size="small">
                <Pencil class="h-4 w-4 stroke-[2.5px] text-white" />
                Edit
              </Button>

              <Button type="click" variant="error" modifier="defaultError" size="small">
                <Trash class="h-4 w-4 stroke-[2.5px] text-white" />
                Delete
              </Button>
            </div>

            <!-- UploadedImage -->
            <div
              class="Uploaded-Image relative"
              :class="emptyToUploadRef === true ? 'block' : 'hidden'"
            >
              <div class="Wrapper-Uploaded flex items-center justify-center">
                <!-- Image -->
                <div class="relative h-72 w-[22rem] 2xl:w-[32rem]">
                  <img
                    class="h-full w-full object-cover"
                    src="/images/outlets/outlets-banner.png"
                    alt="Outlet Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <template #PageAction>
      <PageAction variant="saveDiscard" :isSelected="true" :openModal="openToastSaved" />
    </template>

    <template #Modal>
      <UploadImageEmpty
        :isOpenRef="uploadEmptyRef"
        :closeModal="closeModalUploadEmpty"
        :nextClick="openModalUploadFilled"
      />

      <UploadImageSingleFilled
        :isOpenRef="uploadFilledRef"
        :closeModal="closeModalUploadFilled"
        :nextClick="openToastSaved"
      />
    </template>

    <template #Toast>
      <Toast
        :toastRef="toastRefSaved"
        :closeToast="closeToastSaved"
        variant="saved"
        heading="Outlet Saved Sucessfuly"
        description="Data outlet has been saved successfuly, you can edit it later too"
      />
    </template>
  </DashboardLayout>
</template>
