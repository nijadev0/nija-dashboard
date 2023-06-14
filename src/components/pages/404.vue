<script lang="ts" setup>
import Button from '$components/atoms/Button.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout class="404 - Not Found">
    <div
      class="NotFound flex h-full min-h-[640px] w-full items-center justify-center rounded-large bg-white p-6"
    >
      <div class="Content flex flex-col items-center gap-4">
        <h3 class="Heading -mt-12 text-3xl">404 - Not Found</h3>

        <p class="Desc text-netral-60">Seems like the page that you searched is not found</p>

        <Button type="goto" link-href="/" variant="primary" modifier="defaultPrimary" size="medium">
          Back To Previous
        </Button>
      </div>
    </div>
  </DashboardLayout>
</template>
