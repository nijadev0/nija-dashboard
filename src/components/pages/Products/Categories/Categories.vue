<script lang="ts" setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import Body from '$components/atoms/Body.vue'
import Button from '$components/atoms/Button.vue'
import Title from '$components/atoms/Title.vue'
import Badge from '$components/atoms/Badge.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'

import { Funnel, Plus, SortAscending, SquaresFour, List, Check } from '$assets/icons'
import Pagination from '$components/organisms/Pagination.vue'
import PageAction from '$components/organisms/PageAction.vue'
import Modal from '$components/organisms/Modal.vue'
import Toast from '$components/organisms/Toast.vue'

/**
 * Dummy data - List Product
 */
const listProductsData = [
  {
    categoryName: 'T-Shirt',
    categoryPhoto: '/images/list-products/ListProducts-1.png',
    description:
      'Discover easy and casual t-shirt for women and men with variety of colors, pattern and comfy materials.',
    status: 'active',
    stock: 401,
    price: '$178',
  },
  {
    categoryName: 'Outer',
    categoryPhoto: '/images/list-products/ListProducts-2.png',
    description:
      'Discovery a variety of outers to keep yourself warm with stylish and comfortable ways.',
    status: 'scheduled',
    stock: 738,
    price: '$178',
  },
  {
    categoryName: 'Bag',
    categoryPhoto: '/images/list-products/ListProducts-3.png',
    description:
      'Discover a variety of bags that are suitable for men, women and children in all situations.',
    status: 'active',
    stock: 432,
    price: '$178',
  },
  {
    categoryName: 'Accessories',
    categoryPhoto: '/images/list-products/ListProducts-4.png',
    description:
      'Complete your outfit with accessories - whether jewelry, hat, sunglasses, belt or scarf. To do so, you can rely on the latest trends and the classics.',
    status: 'draft',
    stock: 0,
    price: '$178',
  },
  {
    categoryName: 'Shirt',
    categoryPhoto: '/images/list-products/ListProducts-5.png',
    description: 'Find most elegant and comfortable shirt from casual to formal wear.',
    status: 'active',
    stock: 334,
    price: '$178',
  },
]

/** ================
 *  Checkbox Ref
 *  ================
 */
const checkboxRef = ref(false)

/**
 * =================
 * Modal
 * =================
 */

// Modal Delete
const modalRef = ref(false)

function openModalDelete() {
  modalRef.value = true
}

function closeModalDelete() {
  modalRef.value = false
}

// Modal Draft
const modalDraftRef = ref(false)

function openModalDraft() {
  modalDraftRef.value = true
}

function closeModalDraft() {
  modalDraftRef.value = false
}

/**
 * =================
 * Toast
 * =================
 */

// Delete
const toastRef = ref(false)

function openToastDelete() {
  modalRef.value = false
  toastRef.value = true
}

function closeToastDelete() {
  toastRef.value = false
  checkboxRef.value = false
}

// Draft
const toastDraftRef = ref(false)

function openToastDraft() {
  modalDraftRef.value = false
  toastDraftRef.value = true
}

function closeToastDraft() {
  toastDraftRef.value = false
  checkboxRef.value = false
}
</script>

<template>
  <DashboardLayout title="Categories">
    <div class="Categories rounded-large bg-white p-6">
      <!-- Heading -->
      <div class="Heading mb-6 flex items-center justify-between 2xl:mb-8">
        <Title variant="default"> Categories List </Title>
        <div class="Cta flex gap-3">
          <Button type="click" variant="plain" modifier="defaultPlain" size="medium">
            Sort
            <SortAscending class="h-4 w-4 stroke-[4px] text-netral-80" />
          </Button>

          <Button type="click" variant="plain" modifier="defaultPlain" size="medium">
            Filters
            <Funnel class="h-4 w-4 stroke-[4px] text-netral-80" />
          </Button>

          <Button
            type="goto"
            go-to="/products/list-products/add"
            variant="primary"
            modifier="defaultPrimary"
            size="medium"
          >
            <Plus class="h-4 w-4 stroke-[4px] text-white" />
            Add Products
          </Button>

          <Button type="click" variant="plain" modifier="defaultPlain" size="medium">
            <SquaresFour class="h-5 w-5 stroke-[2.75px] text-netral-80" />
          </Button>

          <Button type="click" variant="plain" modifier="defaultPlain" size="medium">
            <List class="h-5 w-5 stroke-[2.75px] text-netral-80" />
          </Button>
        </div>
      </div>

      <!-- Table Categories -->
      <section class="TableListProducts mb-6 w-full">
        <!-- Table Categories -->
        <div class="Wrap relative w-full overflow-x-auto">
          <table class="Table w-full table-fixed">
            <!-- Table Categories: Head -->
            <thead class="TableHead w-full rounded-lg bg-[#FAFAFA] 2xl:rounded-large">
              <tr>
                <th class="w-px py-3 px-6 text-left capitalize text-netral-80 first:pl-3 2xl:py-4">
                  <Switch
                    v-model="checkboxRef"
                    class="Checkbox flex items-center gap-2 outline-none"
                  >
                    <div
                      class="Wrapper relative flex h-4 w-4 items-center justify-between gap-2.5 rounded-md border outline-none 2xl:h-5 2xl:w-5"
                      :class="
                        checkboxRef ? 'border-primary-border bg-primary-main' : 'border-netral-60'
                      "
                    >
                      <Check
                        class="Icon absolute z-10 h-full w-full stroke-[2.5px] text-white 2xl:stroke-2"
                        :class="checkboxRef ? 'block' : 'hidden'"
                      />
                    </div>
                  </Switch>
                </th>

                <th
                  class="max-w-[220px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Product </Body>
                </th>

                <th
                  class="max-w-[280px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Category </Body>
                </th>

                <th
                  class="max-w-[142px] whitespace-nowrap px-6 py-3 pl-40 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Status</Body>
                </th>

                <th
                  class="w-[160px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Action </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Categories: Body -->
            <tbody class="TableBody relative w-full">
              <tr
                v-for="product in listProductsData"
                class="border-b border-netral-20 last:border-netral-30"
              >
                <td class="w-px py-4 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Switch
                    v-model="checkboxRef"
                    class="Checkbox flex items-center gap-2 outline-none"
                  >
                    <div
                      class="Wrapper relative flex h-4 w-4 items-center justify-between gap-2.5 rounded-md border outline-none 2xl:h-5 2xl:w-5"
                      :class="
                        checkboxRef ? 'border-primary-border bg-primary-main' : 'border-netral-60'
                      "
                    >
                      <Check
                        class="Icon absolute z-10 h-full w-full stroke-[2.5px] text-white 2xl:stroke-2"
                        :class="checkboxRef ? 'block' : 'hidden'"
                      />
                    </div>
                  </Switch>
                </td>

                <td class="max-w-[220px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <div class="flex items-center gap-3 2xl:gap-4">
                    <img
                      class="h-16 w-16 2xl:h-20 2xl:w-20"
                      :src="product.categoryPhoto"
                      :alt="product.categoryName"
                    />
                    <Body size="lg" weight="medium">
                      {{ product.categoryName }}
                    </Body>
                  </div>
                </td>

                <td class="max-w-[280px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="regular">
                    {{ product.description }}
                  </Body>
                </td>

                <td
                  class="max-w-[142px] py-6 px-6 pl-40 text-left capitalize text-netral-80 first:pl-3"
                >
                  <Badge v-if="product.status === 'active'" variant="success">
                    {{ product.status }}
                  </Badge>
                  <Badge v-if="product.status === 'scheduled'" variant="info">
                    {{ product.status }}
                  </Badge>

                  <Badge v-if="product.status === 'draft'" variant="warning">
                    {{ product.status }}
                  </Badge>
                </td>

                <td class="w-[160px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <button
                    class="text-primary-main"
                    @click="$router.push('/products/list-products/update')"
                  >
                    <Body size="lg" weight="semibold"> Detail </Body>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Pagination -->
      <Pagination />
    </div>

    <!-- Page Action : Home -->
    <template #PageAction>
      <PageAction
        v-if="checkboxRef"
        variant="deleteDraft"
        :is-selected="checkboxRef"
        :open-modal="openModalDelete"
        :open-modal-draft="openModalDraft"
      />
    </template>

    <!-- Modal Delete : Home -->
    <template #Modal>
      <Modal
        :modal-ref="modalRef"
        :close-modal="closeModalDelete"
        :open-toast="openToastDelete"
        variant="delete"
        title="Delete Category"
        description="Are you sure want to delete this category? Category which already deleted can not be recovered."
      />
      <Modal
        :modal-ref="modalDraftRef"
        :close-modal="closeModalDraft"
        :open-toast="openToastDraft"
        variant="draft"
        title="Draft Category"
        description="Are you sure want to draft this category? "
      />
    </template>

    <template #Toast>
      <Toast
        variant="delete"
        :toast-ref="toastRef"
        :close-toast="closeToastDelete"
        heading="Users has been deleted"
        description="User which already deleted can not be recovered."
      />

      <Toast
        variant="draft"
        :toast-ref="toastDraftRef"
        :close-toast="closeToastDraft"
        heading="Category has been drafted"
        description="Don't worry, you can access drafted categories."
      />
    </template>
  </DashboardLayout>
</template>
