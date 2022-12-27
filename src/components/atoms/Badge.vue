<script setup lang="ts">
import Body from '$components/atoms/Body.vue'

interface Status {
  variant?: 'success' | 'warning' | 'info' | 'critical' | 'neutral'
}

const { variant } = defineProps<Status>()
</script>

<template>
  <div
    class="Badge w-max rounded-full py-1 px-4 text-xs capitalize tracking-[0.01rem]"
    :class="{
      'bg-success-surface/50 text-success-main': variant === 'success',
      'bg-warning-surface/50 text-warning-main': variant === 'warning',
      'bg-info-surface/50 text-info-main': variant === 'info',
      'bg-error-surface/50 text-error-main': variant === 'critical',
      'bg-netral-30 text-netral-80': variant === 'neutral',
    }"
  >
    <Body size="md" weight="medium" class="text-inherit">
      <slot />
    </Body>
  </div>
</template>
