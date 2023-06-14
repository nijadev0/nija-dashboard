<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

import { Body, Button, Title } from '$components/atoms'

import { XMark, ArrowsClockwise, Trash, Plus } from '$assets/icons'

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
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
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
                class="mb-10 flex min-h-[240px] gap-4 rounded-large border-2 border-netral-20 bg-neutral-50 p-6 2xl:min-h-[320px]"
              >
                <div v-for="image in [1, 2, 3]" class="relative h-40 w-40">
                  <img
                    class="flex-shrink-0"
                    :src="`/images/upload-image-filled/illustration-${image}.png`"
                  />
                  <div class="absolute bottom-2.5 right-2.5 flex gap-1.5">
                    <div
                      class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-white/50 hover:bg-white/75"
                    >
                      <ArrowsClockwise
                        class="h-5 w-5 stroke-[2px] text-netral-80 2xl:h-6 2xl:w-6"
                      />
                    </div>
                    <div
                      class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-white/50 hover:bg-white/75"
                    >
                      <Trash class="h-5 w-5 stroke-[2px] text-error-main 2xl:h-6 2xl:w-6" />
                    </div>
                  </div>
                </div>
                <div
                  class="relative flex h-40 w-40 flex-col items-center justify-center gap-3 rounded-large border-2 border-dashed"
                >
                  <Plus class="h-6 w-6 stroke-[2px] text-netral-40 2xl:h-8 2xl:w-8" />

                  <Body size="md" weight="regular" class="w-24 text-center text-netral-50">
                    Add more images
                  </Body>
                </div>
              </div>

              <div class="flex w-full justify-end gap-3">
                <Button
                  type="click"
                  :onClick="closeModal"
                  variant="primary"
                  modifier="nudePrimary"
                  size="big"
                >
                  Discard
                </Button>

                <Button
                  type="click"
                  :on-click="nextClick"
                  variant="primary"
                  modifier="defaultPrimary"
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
