<script lang="ts" setup>
import { ref } from 'vue'
import Body from './Body.vue'

import { CalendarPlus, CaretDown, Clock, CurrencyDollar, Eye, EyeSlash } from '$assets/icons'

interface InputProps {
  variant: 'base' | 'phone' | 'weight' | 'price' | 'status' | 'logo' | 'date' | 'time' | 'password'
  name: string
  label?: string
  inputType: 'text' | 'number' | 'email' | 'password'
  placeholder: string
  value?: string
  status?: string
  logoSrc?: string
  isDisabled?: boolean
}

const {
  name,
  label,
  inputType,
  placeholder,
  value,
  status,
  logoSrc,
  isDisabled = false,
} = defineProps<InputProps>()

const isShowPassword = ref(inputType)
const passwordValue = ref('')

const togglePassword = () => {
  console.log({ isShowPassword, passwordValue })
  if (isShowPassword.value === 'password') {
    isShowPassword.value = 'text'
    passwordValue.value = value!
  } else {
    isShowPassword.value = 'password'
    passwordValue.value = value!
  }
}
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
      class="Input w-full rounded-large border border-netral-30 bg-netral-10 px-3 py-2.5 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:shadow-formInput focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
      :class="label && 'mt-1.5'"
      :value="value"
      :disabled="isDisabled"
    />
  </div>

  <!-- Input: Phone Number -->
  <div v-if="variant === 'phone'" class="FormInput Phone w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>

    <div class="Wrap relative">
      <div
        class="Number absolute left-3 top-1/2 z-10 flex w-fit -translate-y-1/2 items-center gap-3"
      >
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
        class="Input relative w-full rounded-large border border-netral-30 bg-netral-10 px-3 py-2.5 pl-24 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:pl-24 2xl:text-base"
        :class="label && 'mt-1.5'"
        :value="value"
      />
    </div>
  </div>

  <!-- Input: Weight -->
  <div v-if="variant === 'weight'" class="FormInput Phone w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>

    <div class="Wrap relative">
      <input
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        class="Input relative w-full rounded-large border border-netral-30 bg-netral-10 px-3 py-2.5 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
        :class="label && 'mt-1.5'"
        :value="value"
      />

      <div
        class="Number absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center gap-3 rounded-md bg-netral-20"
      >
        <span class="-mt-1 text-sm font-medium leading-none text-netral-80">g</span>
      </div>
    </div>
  </div>

  <!-- Input: Status -->
  <div v-if="variant === 'status'" class="FormInput Phone w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>

    <div class="Wrap relative">
      <input
        :name="name"
        :type="inputType"
        class="Input relative w-full rounded-large border border-netral-30 bg-netral-10 px-3 py-2.5 pl-[6.75rem] text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
        :class="label && 'mt-1.5'"
        disabled
      />

      <div
        class="Number absolute left-3 top-1/2 z-10 flex h-8 w-fit -translate-y-1/2 items-center justify-center gap-2 rounded-md bg-netral-20 px-2"
      >
        <div
          class="h-4 w-4 rounded-full 2xl:h-5 2xl:w-5"
          :class="{
            'bg-warning-main': status === 'Waiting',
            'bg-netral-80': status === 'Processed',
          }"
        />
        <Body size="md" weight="regular">{{ status }}</Body>
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
        class="Input relative w-full rounded-large border border-netral-30 bg-netral-10 px-3 py-2.5 pl-12 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:pl-12 2xl:text-base"
        :class="label && 'mt-1.5'"
        :value="value"
      />

      <div
        class="Number absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center gap-3 rounded-md bg-netral-20"
      >
        <span class="-mt-0 text-sm font-medium leading-none text-netral-80">
          <CurrencyDollar class="h-4 w-4 stroke-[2.5px] 2xl:h-5 2xl:w-5" />
        </span>
      </div>
    </div>
  </div>

  <!-- Input: Logo -->
  <div v-if="variant === 'logo'" class="FormInput Phone w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>

    <div class="Wrap relative">
      <input
        :name="name"
        :type="inputType"
        class="Input relative w-full rounded-large border border-netral-30 bg-netral-10 px-3 py-2.5 pl-[6.25rem] text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:text-base"
        :class="label && 'mt-1.5'"
        :value="value"
      />

      <div class="Number absolute left-3 top-1/2 z-10 h-7 w-20 -translate-y-1/2 rounded-lg">
        <img
          class="h-full w-full rounded-lg object-contain object-left"
          :src="logoSrc"
          alt="Bank Logo"
        />
      </div>
    </div>
  </div>

  <!-- Input: Date -->
  <div v-if="variant === 'date'" class="FormInput Phone w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>

    <div class="Wrap relative">
      <input
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        class="Input relative w-full rounded-large border border-netral-30 bg-netral-10 px-3 py-2.5 pl-12 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:pl-12 2xl:text-base"
        :class="label && 'mt-1.5'"
        :value="value"
      />

      <div
        class="Number absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center gap-3 rounded-md pt-2"
      >
        <CalendarPlus class="h-5 w-5 stroke-[2.5px] text-netral-60 2xl:h-6 2xl:w-6" />
      </div>
    </div>
  </div>

  <!-- Input: Time -->
  <div v-if="variant === 'time'" class="FormInput Phone w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>

    <div class="Wrap relative">
      <input
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        class="Input relative w-full rounded-large border border-netral-30 bg-netral-10 px-3 py-2.5 pl-12 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:pl-12 2xl:text-base"
        :class="label && 'mt-1.5'"
        :value="value"
      />

      <div
        class="Number absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center gap-3 rounded-md pt-2"
      >
        <Clock class="h-5 w-5 stroke-[2.5px] text-netral-60 2xl:h-6 2xl:w-6" />
      </div>
    </div>
  </div>

  <!-- Input: Base -->
  <div v-if="variant === 'password'" class="FormInput w-full">
    <label v-if="label" class="Label text-xs font-semibold 2xl:text-sm" :for="name">
      {{ label }}
    </label>

    <div class="Wrap relative">
      <input
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        class="Input w-full rounded-large border border-netral-30 bg-netral-10 px-3 py-2.5 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:shadow-formInput focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
        :class="label && 'mt-1.5'"
        :value="passwordValue"
        :disabled="isDisabled"
        v-model="passwordValue"
      />

      <div class="absolute right-3.5 top-1/2 z-10 -translate-y-1/3">
        <button type="button" v-if="isShowPassword === 'password'" @click="togglePassword">
          <Eye class="h-4 w-4 stroke-netral-50 stroke-[3px]" />
        </button>

        <button type="button" v-if="isShowPassword === 'text'" @click="togglePassword">
          <EyeSlash class="h-4 w-4 stroke-netral-50 stroke-[3px]" />
        </button>
      </div>
    </div>
  </div>
</template>
