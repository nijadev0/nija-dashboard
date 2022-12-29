<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import { Check } from '$assets/icons'

interface Checkbox {
  label?: string
  enabled: any
}

// const enabled = ref(false)
const { label, enabled } = defineProps<Checkbox>()
</script>

<template>
  <Switch
    v-bind:on-update:model-value="enabled"
    class="Checkbox flex items-center gap-2 outline-none"
  >
    <div
      class="Wrapper relative flex h-5 w-5 items-center justify-between gap-2.5 rounded-md border outline-none"
      :class="enabled ? 'Active border-primary-border bg-primary-main' : 'Default border-netral-60'"
    >
      <Check
        class="Icon absolute z-10 h-full w-full stroke-white stroke-2"
        :class="enabled ? 'block' : 'hidden'"
      />
    </div>
    <span v-if="label" class="Text text-netral-100"> {{ label }} </span>
  </Switch>
</template>
