<script setup lang="ts">
import Avatar from '$components/atoms/Avatar.vue'
import Badge from '$components/atoms/Badge.vue'
import Title from '$components/atoms/Title.vue'
import SandboxLayout from '$components/templates/SandboxLayout.vue'
</script>

<template>
  <SandboxLayout class="flex items-start gap-24">
    <!-- Avatar -->
    <section class="space-y-8 rounded-large border-2 border-dashed border-primary-main/25 p-8">
      <h3 class="text-3xl font-medium">Avatar</h3>

      <div class="flex items-start gap-8">
        <Avatar size="big" />
        <Avatar size="medium" />
        <Avatar size="small" />
      </div>
    </section>

    <!-- Badge -->
    <section class="space-y-8 rounded-large border-2 border-dashed border-primary-main/25 p-8">
      <h3 class="text-3xl font-medium">Avatar</h3>

      <Badge variant="success"> Product Sent </Badge>
      <Badge variant="warning"> Product On Hold </Badge>
      <Badge variant="info"> Product On Proccess </Badge>
      <Badge variant="critical"> Product Out Stock </Badge>
      <Badge variant="neutral"> Product On Demand </Badge>
    </section>

    <!-- Title -->
    <section class="space-y-8 rounded-large border-2 border-dashed border-primary-main/25 p-8">
      <h3 class="text-3xl font-medium">Title</h3>
      <div class="flex items-start gap-16">
        <section class="space-y-8">
          <Title size="big" variant="default"> List Products </Title>
          <Title size="big" variant="critical"> List Products </Title>
          <Title size="big" variant="warning"> List Products </Title>
          <Title size="big" variant="success"> List Products </Title>
          <Title size="big" variant="info"> List Products </Title>
        </section>

        <section class="space-y-8">
          <Title size="small" variant="default"> List Products </Title>
          <Title size="small" variant="critical"> List Products </Title>
          <Title size="small" variant="warning"> List Products </Title>
          <Title size="small" variant="success"> List Products </Title>
          <Title size="small" variant="info"> List Products </Title>
        </section>
      </div>
    </section>
  </SandboxLayout>
</template>
