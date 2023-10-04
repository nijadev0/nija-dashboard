<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

import { Button, Title, Select } from '$components/atoms'

import { XMark, Repeat, SelectionPlus } from '$assets/icons'

interface UploadImageFilledProps {
  isOpenRef: any
  closeModal: any
  nextClick: any
}

const { isOpenRef, closeModal, nextClick } = defineProps<UploadImageFilledProps>()

const typesData = [
  { id: 1, name: 'Select Type', disable: true },
  { id: 2, name: 'Banner Hero Section' },
  { id: 3, name: 'Banner Best Seller Collection' },
  { id: 4, name: 'Banner Popular Collection' },
]
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
                <Title variant="default"> Add Banner </Title>

                <button @click="closeModal">
                  <XMark class="h-5 w-5 stroke-[3px] text-netral-50 2xl:h-6 2xl:w-6" />
                </button>
              </DialogTitle>

              <div
                class="relative mb-10 flex min-h-[240px] items-center justify-center gap-4 rounded-large border-2 border-netral-20 bg-neutral-50 p-6 2xl:min-h-[320px]"
              >
                <img
                  class="h-80 w-96 object-contain"
                  src="/images/categories/categories-upload-image.png"
                />

                <div class="ButtonReplace absolute">
                  <Button type="click" variant="plain" modifier="defaultPlain">
                    <Repeat class="h-5 w-5 stroke-[2.5px] text-netral-80" />
                    Replace
                  </Button>
                </div>

                <div class="ButtonCrop absolute bottom-4 right-4 rounded-large shadow-md">
                  <Button type="click" variant="plain" modifier="defaultPlain">
                    <SelectionPlus class="h-5 w-5 stroke-[2.5px] text-netral-80" />
                    Crop
                  </Button>
                </div>
              </div>

              <div class="SelectType relative z-[99999999] mb-10">
                <Select variant="relax" :selectData="typesData" />
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
