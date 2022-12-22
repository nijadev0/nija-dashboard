<script setup lang="ts">
import AvatarImage from '$assets/images/Avatar.png'

interface AvatarProps {
  size?: 'big' | 'medium' | 'small'
}

const { size } = defineProps<AvatarProps>()
</script>

<template>
  <figure
    class="Avatar relative"
    :class="{
      'h-12 w-12': size === 'big',
      'h-10 w-10': size === 'medium',
      'h-8 w-8': size === 'small',
    }"
  >
    <img class="h-full w-full rounded-full object-cover" :src="AvatarImage" alt="Avatar User" />
  </figure>
</template>
