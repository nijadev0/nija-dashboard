<script lang="ts" setup>
interface TextAreaProps {
  name: string
  placeholder: string
}

const { name, placeholder } = defineProps<TextAreaProps>()
</script>

<template>
  <!-- TextArea -->
  <div class="TextArea relative w-full">
    <textarea
      :name="name"
      :placeholder="placeholder"
      class="TextArea Style relative mt-1.5 h-40 w-full rounded-large border border-netral-30 bg-netral-10 py-2.5 px-3 text-sm leading-[22px] text-netral-80 shadow-input outline-none focus-within:ring-4 focus-within:ring-primary-surface 2xl:p-3.5 2xl:text-base"
    />
  </div>
</template>
