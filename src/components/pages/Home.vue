<script setup lang="ts">
import Body from '$components/atoms/Body.vue'
import Button from '$components/atoms/Button.vue'
import Heading from '$components/atoms/Heading.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>
    <div class="my-16 rounded-large bg-white px-8 py-16">
      <Heading size="sm" weight="medium" class="mb-2"> Nija Kit Dashboard </Heading>

      <Body size="lg" weight="regular" class="mb-6 text-netral-60">
        Pingin lihat dokumentasi?
      </Body>

      <div class="max-w-fit">
        <Button type="goto" size="medium" go-to="/sandbox/button"> Klik disini </Button>
      </div>
    </div>
  </DashboardLayout>
</template>
