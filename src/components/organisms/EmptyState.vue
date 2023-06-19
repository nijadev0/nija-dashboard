<script setup lang="ts">
import { Body, Button } from '$components/atoms'
import { Plus } from '$assets/icons'

interface EmptyStateProps {
  toggleEmpty: any
  title: string
  desc: string
  btnLabel?: string
}

const { toggleEmpty, title, desc, btnLabel } = defineProps<EmptyStateProps>()
</script>

<template>
  <section
    @click="toggleEmpty"
    class="relative mb-12 flex cursor-pointer flex-col items-center justify-center gap-1"
  >
    <slot />

    <Body size="xxl" weight="semibold">
      {{ title ?? 'No flash sale list' }}
    </Body>

    <Body
      size="md"
      weight="regular"
      class="text-center text-netral-60"
      :class="{ 'mb-6': btnLabel }"
    >
      {{ desc ?? 'The flash sale you are looking for is not available.' }}
    </Body>

    <Button v-if="btnLabel" type="click" @click="toggleEmpty" variant="primary" size="medium">
      <Plus class="h-4 w-4 stroke-[4px] text-white" />
      {{ `${btnLabel}. (Click illustration to show data)` ?? 'Add Products' }}
    </Button>
  </section>
</template>
