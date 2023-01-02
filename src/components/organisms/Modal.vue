<script lang="ts" setup>
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

import Button from '$components/atoms/Button.vue'
import Title from '$components/atoms/Title.vue'

import { XMark } from '$assets/icons'

interface ModalProps {
  variant: 'delete' | 'draft'
  modalRef: boolean
  closeModal: any
  openToast: any
  title: string
  description: string
}

const { variant, modalRef, closeModal, openToast, title, description } = defineProps<ModalProps>()
</script>

<template>
  <Dialog
    :open="modalRef"
    @close="closeModal"
    class="Dialog fixed inset-0 z-[60] h-screen w-full bg-netral-100/50"
  >
    <div class="Wrapper -mt-12 flex h-full w-full items-center justify-center">
      <DialogPanel class="Panel w-full max-w-md rounded-large bg-white p-6 2xl:max-w-lg">
        <DialogTitle class="Title mb-4 flex items-center justify-between">
          <Title v-if="variant === 'delete'" variant="critical" size="small"> {{ title }} </Title>
          <Title v-if="variant === 'draft'" variant="warning" size="small"> {{ title }} </Title>

          <button @click="closeModal">
            <XMark class="h-5 w-5 stroke-[2.5px] text-netral-50 2xl:h-6 2xl:w-6" />
          </button>
        </DialogTitle>

        <DialogDescription class="Description mb-8 text-sm text-netral-80 2xl:mb-16 2xl:text-base">
          {{ description }}
        </DialogDescription>

        <!-- CTA: Delete -->
        <div v-if="variant === 'delete'" class="Cta flex w-full justify-end gap-3">
          <Button
            type="click"
            variant="plain"
            size="medium"
            modifier="nudePlain"
            :on-click="closeModal"
          >
            Cancel
          </Button>

          <Button
            type="click"
            variant="error"
            size="medium"
            modifier="defaultError"
            :on-click="openToast"
          >
            Delete
          </Button>
        </div>

        <!-- CTA: Draft -->
        <div v-if="variant === 'draft'" class="Cta flex w-full justify-end gap-3">
          <Button
            type="click"
            variant="plain"
            size="medium"
            modifier="nudePlain"
            :on-click="closeModal"
          >
            Cancel
          </Button>

          <Button
            type="click"
            variant="warning"
            size="medium"
            modifier="defaultWarning"
            :on-click="openToast"
          >
            Draft
          </Button>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>
