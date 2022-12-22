<script lang="ts" setup>
import Heading from '$components/atoms/Text.vue'
import SandboxLayout from '$components/templates/SandboxLayout.vue'
</script>

<template>
  <SandboxLayout class="space-y-16">
    <div class="space-y-8">
      <Heading variant="heading" size="xxl" weight="bold">Body XXL</Heading>
      <Heading variant="heading" size="xl" weight="semibold">Body XL</Heading>
      <Heading variant="heading" size="lg" weight="medium">Body XL</Heading>
      <Heading variant="heading" size="md" weight="regular">Body XL</Heading>
      <Heading variant="heading" size="sm" weight="regular">Body XL</Heading>
    </div>

    <div class="space-y-8">
      <Heading variant="body" size="xxl" weight="bold">Body XXL</Heading>
      <Heading variant="body" size="xl" weight="semibold">Body XL</Heading>
      <Heading variant="body" size="lg" weight="medium">Body XL</Heading>
      <Heading variant="body" size="md" weight="regular">Body XL</Heading>
      <Heading variant="body" size="sm" weight="regular">Body XL</Heading>
    </div>
  </SandboxLayout>
</template>
