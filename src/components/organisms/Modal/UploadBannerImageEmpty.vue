<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'

import { XMark, Repeat, SelectionPlus, UploadSimple } from '$assets/icons'
import Body from '$components/atoms/Body.vue'
import Select from '$components/atoms/Select.vue'

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
  { id: 4, name: 'Banner Best Seller Collection' },
]
</script>

<template>
  <TransitionRoot appear :show="isOpenRef" as="div">
    <Dialog as="div" @close="closeModal" class="relative z-[99999998]">
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

      <div class="z-[9999999999999]s fixed inset-0">
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
              class="-mt-16 w-full max-w-2xl transform overflow-hidden overflow-y-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all 2xl:-mt-24 2xl:max-w-4xl"
            >
              <DialogTitle as="div" class="Title mb-10 flex items-start justify-between">
                <Title variant="default"> Add Banner </Title>

                <button @click="closeModal">
                  <XMark class="h-5 w-5 stroke-[3px] text-netral-50 2xl:h-6 2xl:w-6" />
                </button>
              </DialogTitle>

              <div
                class="Empty-State relative mb-10 flex min-h-[240px] items-center justify-center gap-4 rounded-large border-2 border-dashed border-netral-40 bg-neutral-50 p-6 2xl:min-h-[320px]"
              >
                <div class="Text flex flex-col items-center text-netral-50">
                  <UploadSimple class="mb-6 h-10 w-10 stroke-[3px] text-netral-40" />
                  <Body size="lg" weight="semibold" class="mb-1">
                    Click to upload, or drag and drop
                  </Body>
                  <Body size="md" weight="regular"> SVG, PNG, JPEG (MAX 800X400px) </Body>
                </div>
              </div>

              <div class="SelectType mb-10">
                <Select :selectData="typesData" />
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
