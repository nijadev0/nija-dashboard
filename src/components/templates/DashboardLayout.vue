<script setup lang="ts">
import Heading from '$components/atoms/Heading.vue'
import Navbar from '$components/organisms/Navbar.vue'
import SideBar from '$components/organisms/Sidebar.vue'

const { title } = defineProps<{ title: string }>()
</script>

<template>
  <div class="Dashboard relative flex items-start bg-netral-20">
    <SideBar class="sticky top-0 left-0" />
    <main class="Main relative w-full">
      <Navbar class="sticky top-0 left-0" />

      <div class="Content w-full rounded-large p-8">
        <Heading size="sm" weight="semibold" class="mb-6">{{ title }}</Heading>
        <slot />
      </div>
    </main>
  </div>
</template>
