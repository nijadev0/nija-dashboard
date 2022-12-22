<script setup lang="ts">
import HeartIcon from '$assets/icons/HeartIcon.vue'
import Text from '$components/atoms/Text.vue'

interface TableAllVariantProps {
  tHead: String[]
  favorites: any
  favoriteVariant: any
}

const { tHead, favorites, favoriteVariant } = defineProps<TableAllVariantProps>()
</script>

<template>
  <div class="relative">
    <table class="w-full table-fixed">
      <thead class="bg-[#FAFAFA]">
        <tr>
          <th
            v-for="head in tHead"
            class="px-8 py-5 text-left uppercase text-netral-50 first:pl-10"
          >
            <Text variant="body" size="md" weight="medium"> {{ head }} </Text>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="variant in favorites">
          <td class="px-8 py-5 capitalize text-netral-80 first:pl-10">
            <div class="relative h-20 w-20">
              <img :src="variant.image" class="h-full w-full rounded-xl object-cover" />
            </div>
          </td>

          <td class="min-w-[140px] px-8 py-5 capitalize text-netral-80 first:pl-10">
            {{ variant.color }}
          </td>

          <td class="min-w-[140px] px-8 py-5 capitalize text-netral-80 first:pl-10">
            {{ variant.size }}
          </td>

          <td class="min-w-[140px] px-8 py-5 capitalize text-netral-80 first:pl-10">
            {{ variant.stock }}
          </td>

          <td class="min-w-[140px] px-8 py-5 capitalize text-netral-80 first:pl-10">
            <div class="w-full max-w-[285px]">
              {{ variant.sku }}
            </div>
          </td>

          <td class="min-w-[140px] px-8 py-5 capitalize text-netral-80 first:pl-10">
            <button @click="favoriteVariant(variant.id)" class="cursor-pointer">
              <HeartIcon :class="{ 'fill-primary-surface': variant.isFavorite }" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
