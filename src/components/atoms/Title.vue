<script setup lang="ts">
import Body from './Body.vue'

interface Title {
  variant?: 'default' | 'critical' | 'warning' | 'success' | 'info'
  size?: 'big' | 'small'
}

const { variant = 'base', size } = defineProps<Title>()
</script>

<template>
  <!-- Title -->
  <div class="Title flex flex-row items-start gap-3">
    <div
      class="h-5 w-1.5 rounded-full 2xl:h-6 2xl:w-2"
      :class="{
        'bg-netral-100': variant === 'default',
        'bg-error-main': variant === 'critical',
        'bg-warning-main': variant === 'warning',
        'bg-success-main': variant === 'success',
        'bg-primary-main': variant === 'info',
      }"
    />

    <Body :size="size === 'big' ? 'xxl' : 'xl'" weight="semibold">
      <slot />
    </Body>
  </div>
</template>
