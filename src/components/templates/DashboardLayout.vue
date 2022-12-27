<script setup lang="ts">
import Heading from '$components/atoms/Heading.vue'
import Navbar from '$components/organisms/Navbar.vue'
import SideBar from '$components/organisms/Sidebar.vue'

const { title = 'Test' } = defineProps<{ title?: string }>()
</script>

<template>
  <div class="Dashboard relative flex items-start bg-netral-20">
    <SideBar class="sticky top-0 left-0 z-50" />
    <main class="Main relative w-full">
      <Navbar class="sticky top-0 left-0 z-50" />

      <div class="Content relative w-full rounded-large p-8">
        <div v-if="title" class="TitleLayout">
          <Heading size="sm" weight="semibold" class="mb-6">{{ title }}</Heading>
        </div>

        <!-- Default Slot -->
        <slot />

        <slot name="PageAction" />

        <slot name="Modal" />

        <slot name="Toast" />
      </div>
    </main>
  </div>
</template>
