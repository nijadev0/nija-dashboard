<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

import { Body, Button, Title } from '$components/atoms'

import { XMark, Repeat, SelectionPlus } from '$assets/icons'

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
              class="-mt-16 w-full max-w-2xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all 2xl:-mt-24 2xl:max-w-4xl"
            >
              <DialogTitle as="div" class="mb-10 flex items-start justify-between">
                <Title variant="default"> Edit Avatar </Title>

                <button @click="closeModal">
                  <XMark class="h-5 w-5 stroke-[3px] text-netral-50 2xl:h-6 2xl:w-6" />
                </button>
              </DialogTitle>

              <div
                class="relative mb-10 flex justify-center gap-4 border-2 border-netral-20 bg-neutral-50"
              >
                <div class="relative h-full w-80 overflow-hidden rounded-none">
                  <img
                    class="h-full w-full flex-shrink-0 object-cover"
                    :src="`/images/settings/settings-1.png`"
                  />

                  <button
                    class="absolute right-4 top-4 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="x_icon h-4 w-4 stroke-error-main stroke-2"
                    >
                      <path d="M12.5 3.5L3.5 12.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.5 12.5L3.5 3.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>

                <div class="absolute bottom-4 right-4 flex items-center gap-2">
                  <Button type="click" variant="plain" modifier="defaultPlain" class="!shadow-2xl">
                    <Repeat class="h-5 w-5 stroke-[2.5px] text-netral-80" />
                    Replace
                  </Button>
                  <Button type="click" variant="plain" modifier="defaultPlain" class="!shadow-2xl">
                    <SelectionPlus class="h-5 w-5 stroke-[2.5px] text-netral-80" />
                    Crop
                  </Button>
                </div>
              </div>

              <div class="flex w-full justify-end gap-3">
                <Button
                  type="click"
                  @click="closeModal"
                  variant="primary"
                  modifier="nudePrimary"
                  size="big"
                >
                  Discard
                </Button>

                <Button
                  type="click"
                  @click="nextClick"
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
