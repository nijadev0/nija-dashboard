<script setup lang="ts">
import { cva } from 'cva'

interface TextProps {
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm'
  weight?: 'bold' | 'semibold' | 'medium' | 'regular'
}

const { weight } = defineProps<TextProps>()

const body = cva(`Body`, {
  variants: {
    size: {
      xxl: 'text-xl leading-7',
      xl: '2xl:text-lg 2xl:leading-6 leading-5 text-base',
      lg: 'text-[13px] leading-5 2xl:text-base 2xl:leading-[22px]',
      md: 'text-xs leading-4 2xl:text-sm 2xl:leading-5',
      sm: 'text-[10px] leading-3 2xl:text-xs 2xl:leading-4',
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
