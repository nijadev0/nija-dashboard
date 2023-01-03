<script lang="ts" setup>
interface TextAreaProps {
  type?: 'default' | 'disabled'
  variant?: 'default' | 'reason'
  name: string
  placeholder: string
  textValue?: string
}

const {
  type = 'default',
  variant = 'default',
  name,
  placeholder,
  textValue,
} = defineProps<TextAreaProps>()
</script>

<template>
  <!-- TextArea : Editable -->
  <div v-if="type === 'default'" class="TextArea relative w-full">
    <textarea
      :name="name"
      :placeholder="placeholder"
      class="TextArea Style relative mt-1.5 h-40 w-full rounded-large border border-netral-30 bg-netral-10 py-2.5 px-3 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
    />
  </div>

  <!-- TextArea : Editable -->
  <div v-if="variant === 'reason'" class="TextArea relative w-full">
    <textarea
      :name="name"
      :placeholder="placeholder"
      class="TextArea Style relative mt-1.5 h-60 w-full rounded-large border border-netral-30 bg-[#FAFAFA] py-2.5 px-3 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
    />
  </div>

  <!-- TextArea : Disabled -->
  <div v-if="type === 'disabled'" class="TextArea relative w-full">
    <textarea
      :name="name"
      :placeholder="placeholder"
      disabled
      class="TextArea Style relative mt-1.5 h-40 w-full rounded-large border border-netral-30 bg-netral-20 py-2.5 px-3 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
      >{{ textValue }}</textarea
    >
  </div>
</template>
