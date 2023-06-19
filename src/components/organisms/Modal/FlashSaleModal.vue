<script lang="ts" setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

import Title from '$components/atoms/Title.vue'
import Body from '$components/atoms/Body.vue'
import Input from '$components/atoms/Input.vue'
import Button from '$components/atoms/Button.vue'
import Heading from '$components/atoms/Heading.vue'

import { XMark, CloudArrowUp } from '$assets/icons'

interface UploadImageFilledProps {
  isOpenRef: any
  closeModal: any
  nextClick: any
}

const { isOpenRef, closeModal, nextClick } = defineProps<UploadImageFilledProps>()

const modalFlashSale = [
  { id: 1, name: 'Set Date & Time' },
  { id: 2, name: 'Select Merchant' },
  { id: 3, name: 'Confirmation' },
]

const date = ref(new Date())
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
              class="-mt-16 flex w-full max-w-2xl transform flex-col items-center overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all 2xl:-mt-24 2xl:max-w-4xl"
            >
              <DialogTitle as="div" class="mb-6 flex w-full items-start justify-between">
                <Title variant="default"> Add Flash Sale </Title>

                <button @click="closeModal">
                  <XMark class="h-5 w-5 stroke-[3px] text-netral-50 2xl:h-6 2xl:w-6" />
                </button>
              </DialogTitle>

              <div
                class="Stepper relative mb-10 flex w-[32rem] flex-row items-center justify-between"
              >
                <div
                  v-for="item in modalFlashSale"
                  class="Step relative z-10 flex items-center justify-between"
                >
                  <div class="flex flex-col items-center">
                    <button
                      class="Item mb-2 h-10 w-10 rounded-full text-xl font-semibold text-white"
                      :class="
                        item.id === 1
                          ? 'bg-primary-main ring-2 ring-inset ring-primary-border'
                          : 'bg-netral-50'
                      "
                    >
                      {{ item.id }}
                    </button>

                    <Body
                      size="md"
                      weight="medium"
                      class="whitespace-nowrap bg-white px-2"
                      :class="item.id === 1 ? 'text-netral-100' : 'text-netral-60'"
                    >
                      {{ item.name }}
                    </Body>
                  </div>
                </div>

                <div
                  class="Line absolute top-1/3 -z-0 h-0.5 w-10/12 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-main"
                />
              </div>

              <div class="Heading mb-16 flex flex-col items-center gap-2">
                <Heading size="sm" weight="semibold"> Set Date & Time </Heading>
                <Body size="lg" weight="regular" class="text-netral-50">
                  Set the date and time for the upcoming flash sale
                </Body>
              </div>

              <div class="Form grid w-full grid-cols-2 gap-6">
                <Input
                  name="StartDate"
                  inputType="text"
                  variant="date"
                  label="Start Date"
                  placeholder="Choose Date"
                />

                <Input
                  name="EndDate"
                  inputType="text"
                  variant="date"
                  label="End Date"
                  placeholder="Choose Date"
                />

                <Input
                  name="StartDate"
                  inputType="text"
                  variant="time"
                  label="Start Time"
                  placeholder="Choose Time"
                />

                <Input
                  name="StartDate"
                  inputType="text"
                  variant="time"
                  label="End Time"
                  placeholder="Choose Time"
                />
              </div>

              <div class="Cta mt-10 flex w-full justify-end gap-3">
                <Button
                  type="click"
                  :onClick="closeModal"
                  variant="primary"
                  modifier="nudePrimary"
                  size="big"
                >
                  Cancel
                </Button>

                <Button
                  type="click"
                  :on-click="nextClick"
                  variant="primary"
                  modifier="defaultPrimary"
                  size="big"
                >
                  Send
                </Button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
