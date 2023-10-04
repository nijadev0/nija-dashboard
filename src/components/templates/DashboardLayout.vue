<script setup lang="ts">
import Heading from '$components/atoms/Heading.vue'
import Navbar from '$components/organisms/Navbar.vue'
import SideBar from '$components/organisms/Sidebar.vue'

const { title = 'Test' } = defineProps<{ title?: string }>()
</script>

<template>
  <div class="Dashboard relative flex items-start bg-netral-20">
    <!-- Sidebar -->
    <div className="fixed left-0 top-0 z-10 w-64 2xl:w-72">
      <SideBar />
    </div>

    <div
      className="fixed inset-0 z-10 ml-64 h-20 w-[calc(100vw_-_256px)] 2xl:ml-72 2xl:w-[calc(100vw_-_288px)]"
    >
      <!-- Navbar -->
      <Navbar class="sticky left-0 top-0 z-50" />
    </div>

    <!-- Main Content -->
    <main
      className="relative z-0 w-full min-h-screen bg-netral-20/50 pl-64 pt-14 2xl:pt-20 2xl:pl-72"
    >
      <!-- Content -->
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
