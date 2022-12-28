<script lang="ts" setup>
import { CaretDown } from '$assets/icons'

interface InputProps {
  variant: 'base' | 'phone'
  name: string
  label: string
  inputType: 'text' | 'number' | 'email'
  placeholder: string
}

const { name, label, inputType, placeholder } = defineProps<InputProps>()
</script>

<template>
  <!-- Input: Base -->
  <div v-if="variant === 'base'" class="FormInput w-full">
    <label class="Label text-xs font-semibold 2xl:text-sm" :for="name"> {{ label }} </label>
    <input
      :name="name"
      :type="inputType"
      :placeholder="placeholder"
      class="Input mt-1.5 w-full rounded-large border border-netral-30 bg-netral-10 py-2.5 px-3 text-sm leading-[22px] shadow-input outline-none focus-within:shadow-formInput focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
    />
  </div>

  <!-- Input: Phone Number -->
  <div v-if="variant === 'phone'" class="FormInput Phone w-full">
    <label class="Label text-xs font-semibold 2xl:text-sm" :for="name"> {{ label }} </label>

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
        class="Input relative mt-1.5 w-full rounded-large border border-netral-30 bg-netral-10 py-2.5 px-3 pl-24 text-sm leading-[22px] shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:pl-24 2xl:text-base"
      />
    </div>
  </div>
</template>
