<script lang="ts" setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import { Check, XMark } from '$assets/icons'

const enabled = ref(false)
</script>

<template>
  <Switch
    v-model="enabled"
    :class="enabled ? 'bg-primary-main' : 'bg-netral-50'"
    class="relative flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent px-0.5 transition-colors duration-200 ease-in-out focus-within:ring-4 focus-within:ring-primary-surface focus:outline-none 2xl:h-8 2xl:w-16"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      :class="enabled ? 'translate-x-7 2xl:translate-x-8' : 'translate-x-0'"
      class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out 2xl:h-6 2xl:w-6"
    />

    <span v-if="enabled" class="absolute top-1/2 -translate-y-1/2 translate-x-1">
      <Check class="h-3 w-3 stroke-white stroke-[4px] 2xl:h-4 2xl:w-4" />
    </span>

    <span v-else class="absolute top-1/2 -translate-y-1/2 translate-x-8 2xl:translate-x-9">
      <XMark class="h-3 w-3 stroke-white stroke-[4px] 2xl:h-4 2xl:w-4" />
    </span>
  </Switch>
</template>
