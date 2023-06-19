<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

import { Button, Input, Title } from '$components/atoms'

import { XMark } from '$assets/icons'
import { NoVariantsIll } from '$assets/illustrations'

interface UploadImageFilledProps {
  isOpenRef: any
  closeModal: any
  nextClick: any
}

const { isOpenRef, closeModal, nextClick } = defineProps<UploadImageFilledProps>()
</script>

<template>
  <TransitionRoot appear :show="isOpenRef" as="div">
    <Dialog as="div" @close="closeModal" class="relative z-[60]">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="-mt-16 w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all 2xl:-mt-24"
            >
              <DialogTitle as="div" class="mb-10 flex items-start justify-between">
                <Title variant="default"> Edit Password </Title>

                <button @click="closeModal">
                  <XMark class="h-5 w-5 stroke-[3px] text-netral-50 2xl:h-6 2xl:w-6" />
                </button>
              </DialogTitle>

              <section class="my-10 space-y-4">
                <Input
                  name="Password"
                  label="Current Password"
                  placeholder="Enter current password"
                  variant="password"
                  input-type="password"
                />
                
                <Input
                  name="New Password"
                  label="New Password"
                  placeholder="Enter new password"
                  variant="password"
                  input-type="password"
                />
                
                <Input
                  name="Confirm Password"
                  label="Confirm Password"
                  placeholder="Enter confirm password"
                  variant="password"
                  input-type="password"
                />
              </section>

              <div class="flex w-full justify-end gap-3">
                <Button
                  type="click"
                  :onClick="closeModal"
                  variant="plain"
                  modifier="nudePlain"
                  size="big"
                >
                  Discard
                </Button>

                <Button
                  type="click"
                  :on-click="nextClick"
                  variant="plain"
                  modifier="defaultPlain"
                  size="big"
                >
                  Save
                </Button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
