<script lang="ts" setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

import Body from './Body.vue'

import { CaretDown } from '$assets/icons'

interface SelectProps {
  selectData: any
}

const { selectData } = defineProps<SelectProps>()

const selectRef = ref(selectData[0])
</script>

<template>
  <Listbox v-model="selectRef">
    <div class="ListBox relative">
      <ListboxButton
        class="relative flex w-full items-center justify-between rounded-large border border-netral-30 p-3 text-sm leading-[22px] text-netral-80 outline-none focus-within:ring-4 focus-within:ring-primary-surface focus-visible:ring-primary-surface 2xl:p-3.5 2xl:text-base"
      >
        <Body size="lg" weight="regular">
          {{ selectRef.name }}
        </Body>

        <CaretDown class="h-4 w-4 stroke-[2.5px] 2xl:h-5 2xl:w-5" />
      </ListboxButton>

      <ListboxOptions
        class="absolute top-14 left-0 z-20 w-full rounded-large border border-netral-30 bg-white shadow-md outline-none"
      >
        <ListboxOption
          v-for="data in selectData"
          class="cursor-pointer border-b border-netral-20 p-3 text-sm leading-[22px] hover:bg-primary-surface/20 2xl:p-3.5 2xl:text-base"
          :class="data.disable && 'cursor-default hover:bg-white'"
          :key="data.id"
          :value="data"
          :disabled="data.disable"
        >
          <Body size="lg" weight="regular" class="text-netral-80">
            {{ data.name }}
          </Body>
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>
