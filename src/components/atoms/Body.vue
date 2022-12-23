<script setup lang="ts">
import { cva } from 'cva'

interface TextProps {
  variant?: 'heading' | 'body'
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm'
  weight?: 'bold' | 'semibold' | 'medium' | 'regular'
  className?: string
}

const { weight, className } = defineProps<TextProps>()

// Body
const body = cva(`Body text-inherit ${className}`, {
  variants: {
    size: {
      xxl: 'text-xl leading-7',
      xl: 'text-lg leading-6',
      lg: 'text-base leading-[22px]',
      md: '2xl:text-sm 2xl:leading-5 text-[13px] leading-4',
      sm: 'text-xs leading-4',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      regular: 'font-regular',
    },
  },
})
</script>
<template>
  <p :class="`${body({ size, weight })}`">
    <slot />
  </p>
</template>
