<script setup lang="ts">
import { cva } from 'cva'

interface TextProps {
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm'
  weight?: 'bold' | 'semibold' | 'medium' | 'regular'
}

// Heading
const heading = cva('Heading text-inherit', {
  variants: {
    size: {
      xxl: 'text-7xl leading-[80px]',
      xl: 'text-[64px] leading-[76px]',
      lg: 'text-[46px] leading-[54px]',
      md: 'text-3xl leading-10 2xl:text-4xl 2xl:leading-[44px]',
      sm: 'leading-[28px] text-xl 2xl:text-2xl 2xl:leading-[30px]',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      regular: 'font-regular',
    },
  },
})

const { size, weight } = defineProps<TextProps>()
</script>

<template>
  <h3 :class="heading({ size, weight })">
    <slot />
  </h3>
</template>
