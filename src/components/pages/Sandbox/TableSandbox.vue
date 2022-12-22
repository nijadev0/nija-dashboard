<script setup lang="ts">
import { ref, reactive } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useVariantStore } from '$stores/VariantStore'

import SandboxLayout from '$components/templates/SandboxLayout.vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import TableAllVariant from '$components/organisms/Table/Products/Variants/TableAllVariant.vue'
import TableFavoritesVariant from '$components/organisms/Table/Products/Variants/TableFavoritesVariant.vue'

const variantsStore = useVariantStore()

setTimeout(() => {
  variantsStore.getVariants()
}, 1000)

const tHead = ['Image', 'Color', 'Size', 'Stock', 'Sku', 'Actions']

const addVariantRef = ref(false)

function showAddVariant() {
  addVariantRef.value = true
}

function hideAddVariant() {
  addVariantRef.value = false
}

/**
 * ===== Components Props =====
 * Form Add Variant
 */

/**
 * ===== Handle Submit =====
 * Form Add Variant
 */

const refVariant = reactive({
  image: '',
  color: '',
  size: '',
  stock: 0,
  sku: '',
  isFavorite: false,
})

const handleSubmit = () => {
  if (
    refVariant.image.length > 0 &&
    refVariant.color.length > 0 &&
    refVariant.size.length > 0 &&
    refVariant.stock > 0 &&
    refVariant.sku.length > 0
  ) {
    variantsStore.addVariant({
      id: Math.random() * 1000,
      image: refVariant.image,
      color: refVariant.color,
      size: refVariant.size,
      stock: refVariant.stock,
      sku: refVariant.sku,
      isFavorite: refVariant.isFavorite,
    })

    refVariant.image = ''
    refVariant.color = ''
    refVariant.size = ''
    refVariant.stock = 0
    refVariant.sku = ''
    refVariant.isFavorite = false
  }
}
</script>

<template>
  <!-- Table Sandbox -->
  <SandboxLayout>
    <!-- Heading Variant -->
    <section class="mb-12 flex items-start justify-between">
      <Title variant="default" size="big"> Variants </Title>

      <Button type="click" :on-click="showAddVariant" variant="primary" size="medium">
        Add Variant
      </Button>
    </section>

    <!-- Table Variant -->
    <TabGroup>
      <TabList class="TabListVariant relative mb-8 w-full space-x-5 border-b border-netral-30">
        <Tab
          class="TabVariant border-b-2 p-2.5 text-sm font-medium leading-6 ui-selected:border-b-netral-100"
        >
          All ({{ variantsStore.totalCount }})
        </Tab>
        <Tab
          class="TabVariant border-b-2 p-2.5 text-sm font-medium leading-6 ui-selected:border-b-netral-100"
        >
          Favorites ({{ variantsStore.favoritesCount }})
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel class="TabPanelVariant">
          <TableAllVariant
            :t-head="tHead"
            :add-variant-ref="addVariantRef"
            :hide-add-variant="hideAddVariant"
            :variants="variantsStore.variants"
            :handle-submit="handleSubmit"
            :variant-store="variantsStore"
            :ref-variant="refVariant"
          />
        </TabPanel>

        <TabPanel class="TabPanelVariant">
          <TableFavoritesVariant
            :t-head="tHead"
            :favorites="variantsStore.favorites"
            :favorite-variant="variantsStore.favoriteVariant"
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </SandboxLayout>
</template>
