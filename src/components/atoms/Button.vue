<script setup lang="ts">
import { cva } from 'cva'

interface ButtonProps {
  type?: 'click' | 'link' | 'goto' | 'submit'
  variant?: 'primary' | 'error'
  size?: 'big' | 'medium' | 'small'
  modifier?:
    | 'defaultPrimary'
    | 'outlinePrimary'
    | 'nudePrimary'
    | 'defaultError'
    | 'outlineError'
    | 'nudeError'
  onClick?: any
  goTo?: any
  linkHref?: any
  submit?: boolean
}

const button = cva(
  'leading-none cursor-pointer relative outline-none font-semibold ring-2 ring-inset ring-transparent whitespace-nowrap flex justify-center items-center transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        primary: 'bg-primary-main',
        error: 'bg-error-main',
      },
      size: {
        big: 'p-4 text-base gap-3 rounded-large',
        medium: 'p-3 text-base gap-2 rounded-large',
        small: 'p-2 text-sm gap-1 rounded-md',
      },
      modifier: {
        defaultPrimary:
          'text-white hover:bg-primary-hover active:ring-primary-border active:bg-primary-pressed stroke-white',
        outlinePrimary:
          'bg-transparent ring-1 ring-current hover:bg-primary-surface hover:ring-transparent active:ring-primary-border active:ring-2 stroke-primary-main',
        nudePrimary:
          'border-transparent bg-transparent hover:text-primary-hover active:ring-primary-surface stroke-primary-main',
        defaultError:
          'text-white hover:bg-error-hover active:ring-error-border active:bg-error-pressed stroke-white',
        outlineError:
          'bg-transparent ring-1 ring-current hover:bg-error-surface hover:ring-transparent active:ring-error-border active:ring-2 stroke-error-main',
        nudeError:
          'border-transparent bg-transparent hover:text-error-hover active:ring-error-surface stroke-error-main',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        modifier: 'defaultPrimary',
        size: 'big',
        class: 'text-white',
      },
      {
        variant: 'primary',
        modifier: 'outlinePrimary',
        size: 'big',
        class: 'text-primary-main',
      },
      {
        variant: 'primary',
        modifier: 'nudePrimary',
        size: 'big',
        class: 'text-primary-main',
      },
      {
        variant: 'primary',
        modifier: 'defaultPrimary',
        size: 'medium',
        class: 'text-white',
      },
      {
        variant: 'primary',
        modifier: 'outlinePrimary',
        size: 'medium',
        class: 'text-primary-main',
      },
      {
        variant: 'primary',
        modifier: 'nudePrimary',
        size: 'medium',
        class: 'text-primary-main',
      },
      {
        variant: 'primary',
        modifier: 'defaultPrimary',
        size: 'small',
        class: 'text-white',
      },
      {
        variant: 'primary',
        modifier: 'outlinePrimary',
        size: 'small',
        class: 'text-primary-main',
      },
      {
        variant: 'primary',
        modifier: 'nudePrimary',
        size: 'small',
        class: 'text-primary-main',
      },
      {
        variant: 'error',
        modifier: 'defaultPrimary',
        size: 'big',
        class: 'text-white',
      },
      {
        variant: 'error',
        modifier: 'outlineError',
        size: 'big',
        class: 'text-error-main',
      },
      {
        variant: 'error',
        modifier: 'nudeError',
        size: 'big',
        class: 'text-error-main',
      },
      {
        variant: 'error',
        modifier: 'defaultError',
        size: 'medium',
        class: 'text-white',
      },
      {
        variant: 'error',
        modifier: 'outlineError',
        size: 'medium',
        class: 'text-error-main',
      },
      {
        variant: 'error',
        modifier: 'nudeError',
        size: 'medium',
        class: 'text-error-main',
      },
      {
        variant: 'error',
        modifier: 'defaultError',
        size: 'small',
        class: 'text-white',
      },
      {
        variant: 'error',
        modifier: 'outlineError',
        size: 'small',
        class: 'text-error-main',
      },
      {
        variant: 'error',
        modifier: 'nudeError',
        size: 'small',
        class: 'text-error-main',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      modifier: 'defaultPrimary',
      size: 'big',
    },
  }
)

const {
  type = 'click',
  variant = 'primary',
  modifier = 'defaultPrimary',
  size = 'big',
  onClick,
  submit = false,
} = defineProps<ButtonProps>()
</script>

<template>
  <!-- Button: clickable -->
  <button
    v-if="type === 'click'"
    @click="onClick"
    class="Button"
    :class="button({ variant, size, modifier })"
  >
    <slot />
  </button>

  <!-- Button: submit -->
  <button
    v-if="type === 'submit'"
    @click="onClick"
    type="submit"
    class="Button"
    :class="button({ variant, size, modifier })"
  >
    <slot />
  </button>

  <!-- Link: internal -->
  <a
    v-if="type === 'goto'"
    @click="$router.push(`${goTo}`)"
    class="Button"
    :class="button({ variant, size, modifier })"
  >
    <slot />
  </a>

  <!-- Link: external -->
  <a
    v-if="type === 'link'"
    class="Button"
    :class="button({ variant, size, modifier })"
    :href="`${linkHref}`"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>
