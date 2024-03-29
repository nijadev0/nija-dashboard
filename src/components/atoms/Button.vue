<script setup lang="ts">
import { cva } from 'cva'
import { RouterLink } from 'vue-router'

interface ButtonProps {
  type?: 'click' | 'link' | 'goto' | 'submit'
  variant?: 'primary' | 'error' | 'plain' | 'warning'
  size?: 'big' | 'medium' | 'small'
  modifier?:
    | 'defaultPlain'
    | 'defaultPrimary'
    | 'defaultWarning'
    | 'defaultError'

    // Outline
    | 'outlinePlain'
    | 'outlinePrimary'
    | 'outlineWarning'
    | 'outlineError'

    // Nude
    | 'nudePlain'
    | 'nudePrimary'
    | 'nudeWarning'
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
        plain: 'bg-netral-20',
        primary: 'bg-primary-main',
        error: 'bg-error-main',
        warning: 'bg-warning-main',
      },
      size: {
        big: 'p-3 2xl:p-4 text-[15px] 2xl:text-base gap-3 rounded-large',
        medium: 'p-2.5 2xl:p-3 text-[13px] 2xl:text-base gap-2 rounded-md 2xl:rounded-large',
        small: 'p-2 text-[12px] 2xl:text-sm gap-1 rounded-md',
      },
      modifier: {
        // Variant: Plain
        defaultPlain:
          'text-netral-100 bg-netral-20 hover:bg-netral-30 active:ring-netral-80 active:bg-netral-30 stroke-netral-70',
        outlinePlain:
          'bg-transparent border border-current ring-1 ring-current hover:bg-netral-20 hover:ring-netral-60 active:ring-netral-80 active:ring-2 stroke-netral-80',
        nudePlain:
          'border-transparent bg-transparent hover:text-netral-80 active:ring-netral-80 stroke-netral-80',

        // Variant: Primary
        defaultPrimary:
          'text-white hover:bg-primary-hover active:ring-primary-border active:bg-primary-pressed stroke-white',
        outlinePrimary:
          'bg-transparent border border-current hover:bg-primary-surface hover:border-transparent active:border-primary-border active:border-2 stroke-primary-main',
        nudePrimary:
          'border-transparent bg-transparent hover:text-primary-hover active:ring-primary-surface stroke-primary-main',

        // Variant: Warning
        defaultWarning:
          'text-white hover:bg-warning-hover active:ring-warning-border active:bg-warning-pressed stroke-white',
        outlineWarning:
          'bg-transparent ring-1 ring-current hover:bg-warning-surface hover:ring-transparent active:ring-warning-border active:ring-2 stroke-warning-main',
        nudeWarning:
          'border-transparent bg-transparent hover:text-warning-hover active:ring-warning-surface stroke-warning-main',

        // Variant: Error
        defaultError:
          'text-white hover:bg-error-hover active:ring-error-border active:bg-error-pressed stroke-white',
        outlineError:
          'bg-transparent border border-error-main ring-1 ring-current hover:bg-error-surface hover:ring-transparent active:ring-error-border active:ring-2 stroke-error-main',
        nudeError:
          'border-transparent bg-transparent hover:text-error-hover active:ring-error-surface stroke-error-main',
      },
    },
    compoundVariants: [
      // Background: Plain
      {
        variant: 'plain',
        modifier: 'defaultPlain',
        size: 'big',
        class: 'text-netral-100',
      },
      {
        variant: 'plain',
        modifier: 'defaultPlain',
        size: 'medium',
        class: 'text-netral-100',
      },
      {
        variant: 'plain',
        modifier: 'defaultPlain',
        size: 'small',
        class: 'text-netral-100',
      },
      // Outline: Plain
      {
        variant: 'plain',
        modifier: 'outlinePlain',
        size: 'big',
        class: 'text-netral-100',
      },
      {
        variant: 'plain',
        modifier: 'outlinePlain',
        size: 'medium',
        class: 'text-netral-100',
      },
      {
        variant: 'plain',
        modifier: 'outlinePlain',
        size: 'small',
        class: 'text-netral-100',
      },
      // Nude: Plain
      {
        variant: 'plain',
        modifier: 'nudePlain',
        size: 'big',
        class: 'text-netral-50',
      },
      {
        variant: 'plain',
        modifier: 'nudePlain',
        size: 'medium',
        class: 'text-netral-50',
      },
      {
        variant: 'plain',
        modifier: 'nudePlain',
        size: 'small',
        class: 'text-netral-50',
      },
      // Background: Primary
      {
        variant: 'primary',
        modifier: 'defaultPrimary',
        size: 'big',
        class: 'text-white',
      },
      {
        variant: 'primary',
        modifier: 'defaultPrimary',
        size: 'medium',
        class: 'text-white',
      },
      {
        variant: 'primary',
        modifier: 'defaultPrimary',
        size: 'small',
        class: 'text-white',
      },
      // Outline: Primary
      {
        variant: 'primary',
        modifier: 'outlinePrimary',
        size: 'big',
        class: 'text-primary-main',
      },
      {
        variant: 'primary',
        modifier: 'outlinePrimary',
        size: 'medium',
        class: 'text-primary-main',
      },
      {
        variant: 'primary',
        modifier: 'outlinePrimary',
        size: 'small',
        class: 'text-primary-main',
      },
      // Nude: Primary
      {
        variant: 'primary',
        modifier: 'nudePrimary',
        size: 'big',
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
        modifier: 'nudePrimary',
        size: 'small',
        class: 'text-primary-main',
      },
      // Warning: Default
      {
        variant: 'warning',
        modifier: 'defaultWarning',
        size: 'big',
        class: 'text-white',
      },
      {
        variant: 'warning',
        modifier: 'defaultWarning',
        size: 'medium',
        class: 'text-white',
      },
      {
        variant: 'warning',
        modifier: 'defaultWarning',
        size: 'small',
        class: 'text-white',
      },
      // Outline: Warning
      {
        variant: 'warning',
        modifier: 'outlineWarning',
        size: 'big',
        class: 'text-warning-main',
      },
      {
        variant: 'warning',
        modifier: 'outlineWarning',
        size: 'medium',
        class: 'text-warning-main',
      },
      {
        variant: 'warning',
        modifier: 'outlineWarning',
        size: 'small',
        class: 'text-warning-main',
      },
      // Nude: Warning
      {
        variant: 'warning',
        modifier: 'nudeWarning',
        size: 'big',
        class: 'text-warning-main',
      },
      {
        variant: 'warning',
        modifier: 'nudeWarning',
        size: 'medium',
        class: 'text-warning-main',
      },
      {
        variant: 'warning',
        modifier: 'nudeWarning',
        size: 'small',
        class: 'text-warning-main',
      },
      // Background: Error
      {
        variant: 'error',
        modifier: 'defaultPrimary',
        size: 'big',
        class: 'text-white',
      },
      {
        variant: 'error',
        modifier: 'defaultError',
        size: 'medium',
        class: 'text-white',
      },
      {
        variant: 'error',
        modifier: 'defaultError',
        size: 'small',
        class: 'text-white',
      },
      // Outline: Error
      {
        variant: 'error',
        modifier: 'outlineError',
        size: 'big',
        class: 'text-error-main',
      },
      {
        variant: 'error',
        modifier: 'outlineError',
        size: 'medium',
        class: 'text-error-main',
      },
      {
        variant: 'error',
        modifier: 'outlineError',
        size: 'small',
        class: 'text-error-main',
      },
      // Nude: Error
      {
        variant: 'error',
        modifier: 'nudeError',
        size: 'big',
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
        modifier: 'nudeError',
        size: 'small',
        class: 'text-error-main',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      modifier: 'defaultPrimary',
      size: 'medium',
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
  <!-- @click="$router.push(`${goTo}`)" -->
  <RouterLink
    v-if="type === 'goto'"
    :to="`${linkHref}`"
    class="Button"
    :class="button({ variant, size, modifier })"
  >
    <slot />
  </RouterLink>

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
