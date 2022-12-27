<script lang="ts" setup>
import { XMark } from '$assets/icons'
import Button from '$components/atoms/Button.vue'
import Title from '$components/atoms/Title.vue'
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

interface ModalProps {
  modalRef: boolean
  closeModal: any
  openToast: any
}

const { modalRef, closeModal, openToast } = defineProps<ModalProps>()
</script>

<template>
  <Dialog
    :open="modalRef"
    @close="closeModal"
    class="Dialog fixed inset-0 z-[60] h-screen w-full bg-netral-100/50"
  >
    <div class="Wrapper -mt-12 flex h-full w-full items-center justify-center">
      <DialogPanel class="Panel max-w-md rounded-large bg-white p-6 2xl:max-w-lg">
        <DialogTitle class="Title mb-4 flex items-center justify-between">
          <Title variant="critical" size="small"> Delete User </Title>

          <button @click="closeModal">
            <XMark class="h-5 w-5 stroke-[2.5px] text-netral-50 2xl:h-6 2xl:w-6" />
          </button>
        </DialogTitle>

        <DialogDescription class="Description mb-8 text-sm text-netral-80 2xl:mb-16 2xl:text-base">
          Are you sure want to delete this user? user which already deleted can not be recovered.
        </DialogDescription>

        <div class="Cta flex w-full justify-end gap-3">
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
      </DialogPanel>
    </div>
  </Dialog>
</template>
