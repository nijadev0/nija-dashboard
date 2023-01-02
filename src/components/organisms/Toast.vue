<script lang="ts" setup>
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

import { CheckCircle, Trash, XMark, WarningCircle } from '$assets/icons'

interface ToastProps {
  variant: 'saved' | 'delete' | 'draft'
  toastRef: boolean
  closeToast: any
  heading: string
  description: string
}

const { variant, toastRef, closeToast, heading, description } = defineProps<ToastProps>()
</script>

<template>
  <Dialog
    :open="toastRef"
    @close="closeToast"
    class="Dialog fixed top-20 right-8 z-[60] h-fit w-full 2xl:top-24"
  >
    <div class="Wrapper flex h-full w-full items-start justify-end">
      <DialogPanel
        class="Panel relative w-full max-w-sm rounded-large border-l-2 bg-white p-5 shadow-message 2xl:max-w-[400px] 2xl:p-7"
        :class="{
          'border-error-border': variant === 'delete',
          'border-success-border': variant === 'saved',
          'border-warning-border': variant === 'draft',
        }"
      >
        <DialogTitle class="Content flex items-start gap-3">
          <Trash
            v-if="variant === 'delete'"
            class="h-full max-h-4 w-full max-w-[16px] stroke-[2.5px] text-error-main 2xl:max-h-[20px] 2xl:max-w-[20px] 2xl:stroke-2"
          />

          <CheckCircle
            v-if="variant === 'saved'"
            class="h-full max-h-4 w-full max-w-[16px] stroke-[2.5px] text-success-main 2xl:max-h-[24px] 2xl:max-w-[24px] 2xl:stroke-2"
          />

          <WarningCircle
            v-if="variant === 'draft'"
            class="h-full max-h-4 w-full max-w-[16px] stroke-[2.5px] text-warning-main 2xl:max-h-[24px] 2xl:max-w-[24px] 2xl:stroke-2"
          />

          <div class="Info flex max-w-[240px] flex-col items-start gap-3">
            <h5 class="Heading text-sm font-medium leading-none 2xl:text-base">{{ heading }}</h5>
            <DialogDescription class="Description text-xs text-netral-80 2xl:text-sm">
              {{ description }}
            </DialogDescription>
          </div>

          <button @click="closeToast" class="Button absolute top-5 right-7">
            <XMark class="h-4 w-4 stroke-[2.5px] text-netral-50 2xl:h-6 2xl:w-6" />
          </button>
        </DialogTitle>
      </DialogPanel>
    </div>
  </Dialog>
</template>
