<script lang="ts" setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

interface ModalProps {
  isOpenModal: boolean
  setIsOpenModal: any
  setIsCloseModal: any
}

const { isOpenModal, setIsOpenModal, setIsCloseModal } = defineProps<ModalProps>()
</script>

<template>
  <!--
    Pass the `isOpen` ref to the `open` prop, and use the `close` event
    to set the ref back to `false` when the user clicks outside of
    the dialog or presses the escape key.
  -->
  <Dialog :open="isOpenModal" @close="setIsOpenModal">
    <DialogPanel>
      <DialogTitle>Deactivate account</DialogTitle>
      <DialogDescription> This will permanently deactivate your account </DialogDescription>

      <p>
        Are you sure you want to deactivate your account? All of your data will be permanently
        removed. This action cannot be undone.
      </p>

      <!--
        You can render additional buttons to dismiss your dialog by setting your
        `isOpen` state to `false`.
      -->
      <button @click="setIsCloseModal">Cancel</button>
      <button @click="setIsCloseModal">Deactivate</button>
    </DialogPanel>
  </Dialog>
</template>
