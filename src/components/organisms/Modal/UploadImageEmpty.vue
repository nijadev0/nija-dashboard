<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

import Title from '$components/atoms/Title.vue'
import Body from '$components/atoms/Body.vue'
import Button from '$components/atoms/Button.vue'

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
              class="-mt-16 w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all 2xl:-mt-24 2xl:max-w-4xl"
            >
              <DialogTitle as="div" class="mb-10 flex items-start justify-between">
                <Title variant="default"> Add Banner </Title>

                <button @click="closeModal">
                  <XMark class="h-5 w-5 stroke-[3px] text-netral-50 2xl:h-6 2xl:w-6" />
                </button>
              </DialogTitle>

              <div
                class="mb-10 flex min-h-[240px] flex-col items-center justify-center gap-4 rounded-large border-2 border-dashed border-netral-40 bg-neutral-50 2xl:min-h-[320px]"
              >
                <NoVariantsIll class="h-32 w-32" />

                <div class="space-y-1.5 text-center">
                  <Body size="xl" weight="medium" class="text-netral-80">
                    Click to upload, or drag and drop
                  </Body>
                  <Body size="md" weight="regular" class="text-netral-50">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </Body>
                </div>
              </div>

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
