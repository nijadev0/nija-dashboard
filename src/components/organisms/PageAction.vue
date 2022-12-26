<script lang="ts" setup>
import Button from '$components/atoms/Button.vue'

import { Checks } from '$assets/icons'

interface PageActionProps {
  variant: 'DeleteOnly'
  isSelected: boolean
  closeModal: any
}

const { variant, isSelected, closeModal } = defineProps<PageActionProps>()
</script>

<template>
  <section
    class="PageAction sticky bottom-8 my-6 flex h-fit w-full items-center justify-between rounded-large bg-white py-3 px-6"
    :class="isSelected ? 'border border-netral-20 shadow-sm' : 'shadow-none'"
  >
    <div class="Text flex items-end gap-1 text-netral-50 2xl:gap-2">
      <Checks class="h-4 w-4 stroke-[3px] text-netral-50 2xl:h-5 2xl:w-5" />
      <span class="text-[13px] font-semibold 2xl:text-sm">2 Selected</span>
    </div>

    <div class="Cta flex items-center gap-2 2xl:gap-3" v-if="variant === 'DeleteOnly'">
      <!-- Delete Only -->
      <Button
        type="click"
        size="medium"
        variant="error"
        modifier="defaultError"
        :on-click="closeModal"
      >
        Delete
      </Button>
    </div>
  </section>
</template>
