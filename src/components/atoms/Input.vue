<script lang="ts" setup>
import { CaretDown, CurrencyDollar } from '$assets/icons'

interface InputProps {
  variant: 'base' | 'phone' | 'weight' | 'price'
  name: string
  label?: string
  inputType: 'text' | 'number' | 'email'
  placeholder: string
}

const { name, label, inputType, placeholder } = defineProps<InputProps>()
</script>

<template>
  <!-- Input: Base -->
  <div v-if="variant === 'base'" class="FormInput w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>
    <input
      :name="name"
      :type="inputType"
      :placeholder="placeholder"
      class="Input mt-1.5 w-full rounded-large border border-netral-30 bg-netral-10 py-2.5 px-3 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:shadow-formInput focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
    />
  </div>

  <!-- Input: Phone Number -->
  <div v-if="variant === 'phone'" class="FormInput Phone w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>

    <div class="Wrap relative">
      <div class="Number absolute top-3.5 left-2 z-10 flex w-fit items-center gap-3">
        <div class="flex w-fit items-center gap-1 rounded-md bg-netral-20 px-1.5 py-1 2xl:py-2">
          <span class="text-sm font-bold text-netral-80">+62</span>
          <CaretDown class="h-5 w-5 stroke-netral-80 stroke-2" />
        </div>
        <div class="Divider h-6 w-px bg-netral-30" />
      </div>

      <input
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        class="Input relative mt-1.5 w-full rounded-large border border-netral-30 bg-netral-10 py-2.5 px-3 pl-24 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:pl-24 2xl:text-base"
      />
    </div>
  </div>

  <!-- Input: Phone Number -->
  <div v-if="variant === 'weight'" class="FormInput Phone w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>

    <div class="Wrap relative">
      <input
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        class="Input relative mt-1.5 w-full rounded-large border border-netral-30 bg-netral-10 py-2.5 px-3 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
      />

      <div
        class="Number absolute top-3 right-2 z-10 flex h-8 w-8 items-center justify-center gap-3 rounded-md bg-netral-20 2xl:top-4"
      >
        <span class="-mt-1 text-sm font-medium leading-none text-netral-80">g</span>
      </div>
    </div>
  </div>

  <!-- Input: Price -->
  <div v-if="variant === 'price'" class="FormInput Phone w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>

    <div class="Wrap relative">
      <input
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        class="Input relative mt-1.5 w-full rounded-large border border-netral-30 bg-netral-10 py-2.5 px-3 pl-12 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:pl-12 2xl:text-base"
      />

      <div
        class="Number absolute top-3 left-2 z-10 flex h-8 w-8 items-center justify-center gap-3 rounded-md bg-netral-20 2xl:top-4"
      >
        <span class="-mt-0 text-sm font-medium leading-none text-netral-80">
          <CurrencyDollar class="h-4 w-4 stroke-[2.5px] 2xl:h-5 2xl:w-5" />
        </span>
      </div>
    </div>
  </div>
</template>
