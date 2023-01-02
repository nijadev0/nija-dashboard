<script lang="ts" setup>
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

import Button from '$components/atoms/Button.vue'

import { Checks } from '$assets/icons'

interface PageActionProps {
  variant: 'deleteOnly' | 'deleteDraft' | 'saveDiscard' | 'nextCancel'
  isSelected: boolean
  openModal?: any
  openModalDraft?: any
  openToast?: any
  goTo?: string
}

const { variant, isSelected, openModal, goTo } = defineProps<PageActionProps>()
</script>

<template>
  <section
    v-if="isSelected"
    class="PageAction sticky bottom-8 z-30 my-6 flex h-fit w-full items-center justify-between rounded-large border border-neutral-100 bg-white py-3 px-6 shadow-pageAction"
  >
    <!-- Label -->
    <div class="Text flex items-end gap-1 text-netral-50 2xl:gap-2">
      <Checks class="h-4 w-4 stroke-[3px] text-netral-50 2xl:h-5 2xl:w-5" />
      <p v-if="variant === 'deleteOnly'" class="text-[13px] font-semibold 2xl:text-sm">
        {{ variant === 'deleteOnly' && '2 Selected' }}
      </p>
      <p
        v-if="variant === 'saveDiscard' || variant === 'nextCancel'"
        class="flex gap-2 text-[13px] font-semibold 2xl:text-sm"
      >
        <span>Last Saved</span> <span class="text-netral-80">Nov 9, 2022-17.09</span>
      </p>
    </div>

    <!-- Delete Only -->
    <div v-if="variant === 'deleteOnly'" class="Cta flex items-center gap-2 2xl:gap-3">
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

    <!-- Delete Draft -->
    <div v-if="variant === 'deleteDraft'" class="Cta flex items-center gap-2 2xl:gap-3">
      <Button
        type="click"
        size="medium"
        variant="warning"
        modifier="nudeWarning"
        :on-click="openModalDraft"
      >
        Draft
      </Button>

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

    <!-- Save & Discard -->
    <div v-if="variant === 'saveDiscard'" class="Cta flex items-center gap-2 2xl:gap-3">
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

    <!-- Next & Cancel -->
    <div v-if="variant === 'nextCancel'" class="Cta flex items-center gap-2 2xl:gap-3">
      <div class="Cancel" @click="$router.go(-1)">
        <Button type="click" size="medium" variant="primary" modifier="nudePrimary">
          Cancel
        </Button>
      </div>

      <Button type="goto" size="medium" variant="primary" modifier="defaultPrimary" :go-to="goTo">
        Next
      </Button>
    </div>
  </section>
</template>
