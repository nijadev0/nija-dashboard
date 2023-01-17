<script setup lang="ts">
interface AuthLayoutProps {
  imageBanner?: string
  altBanner?: string
}

const { imageBanner, altBanner } = defineProps<AuthLayoutProps>()
</script>

<template>
  <!-- Layout: Auth Layout -->
  <div class="AuthLayout grid grid-cols-12 gap-5">
    <!-- Photo -->
    <div class="Banner relative col-span-7">
      <div class="Wrap sticky inset-0 z-10 h-screen">
        <img
          class="Image h-full w-full object-cover object-center"
          :src="imageBanner"
          :alt="altBanner + ' Banner'"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="Content relative col-span-5">
      <slot />
    </div>
  </div>
</template>
