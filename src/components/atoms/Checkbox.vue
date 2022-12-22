<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import { Check } from '$assets/icons'

interface Checkbox {
  label?: string
}

const enabled = ref(false)
const { label } = defineProps<Checkbox>()
</script>

<template>
  <Switch v-model="enabled" class="Checkbox flex items-center gap-2 outline-none">
    <div
      class="Wrapper relative flex h-5 w-5 items-center justify-between gap-2.5 rounded-md border outline-none"
      :class="enabled ? 'Active border-primary-border bg-primary-main' : 'Default border-netral-60'"
    >
      <Check class="Icon absolute z-10 h-full w-full" :class="enabled ? 'block' : 'hidden'" />
    </div>
    <span class="Text text-netral-100"> {{ label }} </span>
  </Switch>
</template>
