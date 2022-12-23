<script setup lang="ts">
import Button from '$components/atoms/Button.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>
    <div class="container mx-auto my-16 max-w-screen-xl">
      <h1 class="mb-4 text-4xl">Haloooooo2</h1>
      <p class="mb-8">Pingin lihat dokumentasi?</p>
      <div class="max-w-fit">
        <Button type="goto" go-to="/sandbox/button"> Klik disini </Button>
      </div>
    </div>
  </DashboardLayout>
</template>
