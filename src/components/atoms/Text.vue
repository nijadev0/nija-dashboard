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
  <h3 v-if="variant === 'heading'" :class="heading({ size, weight })">
    <slot />
  </h3>

  <p v-if="variant === 'body'" :class="body({ size, weight })">
    <slot />
  </p>
</template>
