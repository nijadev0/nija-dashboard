<script lang="ts" setup>
import { ref } from 'vue'

import { DashboardLayout } from '$components/templates'
import { Body, Button, Input, Title } from '$components/atoms'

import { Pencil, UploadSimple } from '$assets/icons'
import {
  ChangePasswordModal,
  UploadAvatarEmpty,
  UploadAvatarFilled,
} from '$components/organisms/Modal'
import { Toast } from '$components/organisms'

//---------------------------------------------------------------------
const avatarRef = ref(false)
//---------------------------------------------------------------------
const isOpenModalEmptyRef = ref(false)

const openModalEmpty = () => {
  isOpenModalEmptyRef.value = true
}

const closeModalEmpty = () => {
  isOpenModalEmptyRef.value = false
}

//---------------------------------------------------------------------
const isOpenModalFilledRef = ref(false)

const openModalFilled = () => {
  closeModalEmpty()

  setTimeout(() => {
    isOpenModalFilledRef.value = true
  }, 500)
}

const closeModalFilled = () => {
  isOpenModalFilledRef.value = false
}
//---------------------------------------------------------------------
const toastSavedDataRef = ref(false)

function openToastSavedData() {
  isOpenModalFilledRef.value = false

  avatarRef.value = true
  toastSavedDataRef.value = true

  setTimeout(() => {
    closeToastSavedData()
  }, 3000)
}

function closeToastSavedData() {
  toastSavedDataRef.value = false
}
//---------------------------------------------------------------------
const isOpenModalChangeRef = ref(false)

const openModalChange = () => {
  isOpenModalChangeRef.value = true
}

const closeModalChange = () => {
  isOpenModalChangeRef.value = false
}
//---------------------------------------------------------------------
const toastChangeRef = ref(false)

function openToastChange() {
  closeModalChange()
  toastChangeRef.value = true

  setTimeout(() => {
    closeToastChange()
  }, 3000)
}

function closeToastChange() {
  toastChangeRef.value = false
}
//---------------------------------------------------------------------
</script>

<template>
  <DashboardLayout title="Settings">
    <main class="relative mb-6 rounded-large bg-white p-6">
      <Title variant="default" class="mb-8"> Manage Profile </Title>

      <section>
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
                <Button @click="openModalEmpty" type="click" size="small" variant="primary">
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
                  <Button
                    @click="openModalEmpty"
                    type="click"
                    variant="plain"
                    size="small"
                    modifier="defaultPlain"
                  >
                    <Pencil class="h-4 w-4 stroke-netral-80 stroke-[3px]" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Name </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <Input
              variant="base"
              input-type="text"
              name="Name"
              placeholder="Enter your role"
              value="Marvin McKinney"
            />
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
              variant="phone"
              input-type="text"
              name="Phone Number"
              placeholder="Enter your phone number"
              value="762394289312"
            />
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Address </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <Input
              variant="base"
              input-type="text"
              name="Adresss"
              placeholder="Enter your adress"
              value="8502 Preston Rd. Inglewood, Maine 98380"
            />
          </div>
        </div>
      </section>
    </main>
    <main class="relative rounded-large bg-white p-6">
      <Title variant="default" class="mb-8"> Manage Account </Title>

      <section>
        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Email </Body>
          </div>

          <div class="flex w-full max-w-xl items-center justify-between gap-4 2xl:max-w-4xl">
            <Input
              variant="base"
              input-type="email"
              name="Email"
              placeholder="Enter your email"
              value="samantalegend@mail.com"
              is-disabled
            />

            <Button type="click" variant="primary" size="medium" modifier="outlinePrimary">
              Change Email
            </Button>
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Password </Body>
          </div>

          <div class="flex w-full max-w-xl items-center justify-between gap-4 2xl:max-w-4xl">
            <Input
              variant="base"
              input-type="password"
              name="Password"
              placeholder="Enter password"
              value="halooooo"
              is-disabled
            />

            <Button
              @click="openModalChange"
              type="click"
              variant="primary"
              size="medium"
              modifier="outlinePrimary"
            >
              Change Password
            </Button>
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Logout </Body>
          </div>

          <div class="flex w-full max-w-xl items-center justify-end 2xl:max-w-4xl">
            <Button type="click" variant="error" size="medium" modifier="defaultError">
              Logout
            </Button>
          </div>
        </div>
      </section>
    </main>

    <template #Modal>
      <UploadAvatarEmpty
        :isOpenRef="isOpenModalEmptyRef"
        :close-modal="closeModalEmpty"
        :next-click="openModalFilled"
      />

      <UploadAvatarFilled
        :isOpenRef="isOpenModalFilledRef"
        :close-modal="closeModalFilled"
        :next-click="openToastSavedData"
      />

      <ChangePasswordModal
        :isOpenRef="isOpenModalChangeRef"
        :close-modal="closeModalChange"
        :next-click="openToastChange"
      />
    </template>

    <template #Toast>
      <Toast
        variant="saved"
        :toast-ref="toastSavedDataRef"
        :close-toast="closeToastSavedData"
        heading="Avatar Updated"
        description="Your avatar update was successful."
      />

      <Toast
        variant="saved"
        :toast-ref="toastChangeRef"
        :close-toast="closeToastChange"
        heading="Password Updated"
        description="Password update was successful. It is possible to update the password again after 30 days."
      />
    </template>
  </DashboardLayout>
</template>
