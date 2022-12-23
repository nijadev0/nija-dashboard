<script setup lang="ts">
import Navbar from '$components/organisms/Navbar.vue'
import SideBar from '$components/organisms/Sidebar.vue'
</script>

<template>
  <div class="Dashboard flex items-start bg-netral-20">
    <SideBar />
    <main class="Main w-full">
      <Navbar />

      <div class="Content w-full rounded-large px-8">
        <slot />
      </div>
    </main>
  </div>
</template>
