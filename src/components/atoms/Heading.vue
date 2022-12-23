<script setup lang="ts">
import { cva } from 'cva'

interface TextProps {
  variant?: 'heading' | 'body'
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm'
  weight?: 'bold' | 'semibold' | 'medium' | 'regular'
  className?: string
}

const { variant, weight, className } = defineProps<TextProps>()

// Heading
const heading = cva(`Heading text-inherit ${className}`, {
  variants: {
    size: {
      xxl: 'text-7xl leading-[80px]',
      xl: 'text-[64px] leading-[76px]',
      lg: 'text-[46px] leading-[54px]',
      md: 'text-[36px] leading-[44px]',
      sm: 'text-2xl leading-[30px]',
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
  <h3 :class="`${heading({ size, weight })}`">
    <slot />
  </h3>
</template>
