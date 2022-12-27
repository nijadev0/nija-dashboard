<script lang="ts" setup>
import Button from '$components/atoms/Button.vue'

import { Checks } from '$assets/icons'

interface PageActionProps {
  variant: 'deleteOnly' | 'saveDiscard'
  isSelected: any
  openModal?: any
  openToast?: any
}

const { variant, isSelected, openModal } = defineProps<PageActionProps>()
</script>

<template>
  <section
    class="PageAction sticky bottom-8 my-6 flex h-fit w-full items-center justify-between rounded-large bg-white py-3 px-6"
    :class="isSelected ? 'border border-netral-20 shadow-sm' : 'shadow-none'"
  >
    <div class="Text flex items-end gap-1 text-netral-50 2xl:gap-2">
      <Checks class="h-4 w-4 stroke-[3px] text-netral-50 2xl:h-5 2xl:w-5" />
      <p v-if="variant === 'deleteOnly'" class="text-[13px] font-semibold 2xl:text-sm">
        {{ variant === 'deleteOnly' && '2 Selected' }}
      </p>
      <p v-if="variant === 'saveDiscard'" class="flex gap-2 text-[13px] font-semibold 2xl:text-sm">
        <span>Last Saved</span> <span class="text-netral-80">Nov 9, 2022-17.09</span>
      </p>
    </div>

    <div class="Cta flex items-center gap-2 2xl:gap-3" v-if="variant === 'deleteOnly'">
      <!-- Delete Only -->
      <Button
        type="click"
        size="medium"
        variant="error"
        modifier="defaultError"
        :on-click="openModal"
      >
        Delete
      </Button>
    </div>

    <div class="Cta flex items-center gap-2 2xl:gap-3" v-if="variant === 'saveDiscard'">
      <!-- Save & Discard -->
      <div class="Discard" @click="$router.go(-1)">
        <Button type="click" size="medium" variant="primary" modifier="nudePrimary">
          Discard
        </Button>
      </div>

      <Button
        type="click"
        size="medium"
        variant="primary"
        modifier="defaultPrimary"
        :on-click="openModal"
      >
        Save
      </Button>
    </div>
  </section>
</template>
