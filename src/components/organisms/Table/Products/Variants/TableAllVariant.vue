<script lang="ts" setup>
import Button from '$components/atoms/Button.vue'
import Text from '$components/atoms/Text.vue'

import { Heart, Trash, ArrowPath, PencilSquare } from '$assets/icons'

interface TableAllVariantProps {
  tHead: String[]
  addVariantRef: any
  hideAddVariant: any
  variants: any
  variantStore: any
  handleSubmit: any
  refVariant: any
}

const { tHead, addVariantRef, hideAddVariant, variants, handleSubmit, variantStore, refVariant } =
  defineProps<TableAllVariantProps>()
</script>

<template>
  <!-- Table All Variant -->
  <div class="relative">
    <form @submit.prevent="handleSubmit">
      <table class="w-full table-fixed">
        <!-- Table All Variant: Head -->
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

        <!-- Table All Variant: Body -->

        <tbody class="relative">
          <tr v-if="variantStore.loading" class="absolute top-1/2 left-1/2">
            <td class="h-full w-full items-center justify-center py-16">
              <Button type="click" variant="primary" modifier="defaultPrimary" size="medium">
                <ArrowPath class="animate-spin text-white" />
              </Button>
            </td>
          </tr>
          <tr v-for="variant in variants">
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
              <div class="flex gap-4">
                <button @click="variantStore.favoriteVariant(variant.id)" class="cursor-pointer">
                  <Heart :class="{ 'fill-primary-surface': variant.isFavorite }" />
                </button>
                <button class="cursor-pointer">
                  <PencilSquare class="text-primary-main" />
                </button>
                <button @click="variantStore.deleteVariant(variant.id)" class="cursor-pointer">
                  <Trash />
                </button>
              </div>
            </td>
          </tr>

          <!-- Add Variant -->
          <tr v-if="addVariantRef">
            <td class="px-8 py-5 capitalize text-netral-80 first:pl-10">
              <input
                class="min-w-[140px] rounded-large border border-netral-30 bg-white p-3.5 text-sm shadow-input outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main"
                type="text"
                placeholder="Add Image URL"
                v-model="refVariant.image"
              />
            </td>

            <td class="min-w-[140px] px-8 py-5 capitalize text-netral-80 first:pl-10">
              <input
                class="min-w-[140px] rounded-large border border-netral-30 bg-white p-3.5 text-sm shadow-input outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main"
                type="text"
                placeholder="Add Color"
                v-model="refVariant.color"
              />
            </td>

            <td class="min-w-[140px] px-8 py-5 capitalize text-netral-80 first:pl-10">
              <input
                class="min-w-[140px] rounded-large border border-netral-30 bg-white p-3.5 text-sm shadow-input outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main"
                type="text"
                placeholder="Add Size"
                v-model="refVariant.size"
              />
            </td>

            <td class="min-w-[140px] px-8 py-5 capitalize text-netral-80 first:pl-10">
              <input
                class="min-w-[140px] rounded-large border border-netral-30 bg-white p-3.5 text-sm shadow-input outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main"
                type="text"
                placeholder="Add Stock"
                v-model="refVariant.stock"
              />
            </td>

            <td class="min-w-[140px] px-8 py-5 capitalize text-netral-80 first:pl-10">
              <input
                class="min-w-[140px] rounded-large border border-netral-30 bg-white p-3.5 text-sm shadow-input outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main"
                type="text"
                placeholder="Add SKU"
                v-model="refVariant.sku"
              />
            </td>

            <td class="min-w-[140px] px-8 py-5 capitalize text-netral-80 first:pl-10">
              <div class="flex gap-3">
                <Button type="submit" size="big" variant="primary" modifier="defaultPrimary">
                  Save
                </Button>

                <Button
                  type="click"
                  :on-click="hideAddVariant"
                  size="big"
                  variant="error"
                  modifier="outlineError"
                >
                  Cancel
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>
