<script lang="ts" setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import { DashboardLayout } from '$components/templates'
import { Badge, Body, Button, Title } from '$components/atoms'
import { Modal, PageAction, Pagination, Toast } from '$components/organisms'

import { Funnel, SortAscending, Plus, Check } from '$assets/icons'

/**
 * ============================
 * Dummy Data - List Products
 * ============================
 */
const listProductsData = [
  {
    productName: "T-Men's UA Storm Armour Down 2.0 Jacket",
    productImage: '/images/list-products/ListProducts-1.png',
    category: 'outer',
    status: 'active',
    stock: 401,
    price: '$178',
  },
  {
    productName: 'Windproof Handbell Oversized Long Coat',
    productImage: '/images/list-products/ListProducts-2.png',
    category: 'outer',
    status: 'scheduled',
    stock: 738,
    price: '$178',
  },
  {
    productName: "Women's Stripe Sweater",
    productImage: '/images/list-products/ListProducts-3.png',
    category: 'sweater',
    status: 'active',
    stock: 432,
    price: '$178',
  },
  {
    productName: "Women's Turtleneck Sweater",
    productImage: '/images/list-products/ListProducts-4.png',
    category: 'sweater',
    status: 'draft',
    stock: 0,
    price: '$178',
  },
  {
    productName: 'One Set - Casual Hoodie with Buttons',
    productImage: '/images/list-products/ListProducts-5.png',
    category: 'kids',
    status: 'active',
    stock: 334,
    price: '$178',
  },
]

/**
 * =======================
 * Checkbox Ref
 * =======================
 */
const checkboxRef = ref(false)

/**
 * =================
 * Modal
 * =================
 */
const modalRef = ref(false)

function openModalDelete() {
  modalRef.value = true
}

function closeModalDelete() {
  modalRef.value = false
}

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
const toastDeleteRef = ref(false)

function openToastDelete() {
  modalRef.value = false
  toastDeleteRef.value = true
}

function closeToastDelete() {
  toastDeleteRef.value = false
  checkboxRef.value = false
}

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
  <DashboardLayout title="Products">
    <div class="Products min-h-[480px] w-full rounded-large bg-white p-6">
      <!-- Heading -->
      <div class="Heading mb-6 flex w-full items-center justify-between 2xl:mb-8">
        <Title variant="default"> List Products </Title>

        <div class="Cta flex gap-2">
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
            link-href="/products/list-products/add"
            variant="primary"
            modifier="defaultPrimary"
            size="medium"
          >
            <Plus class="h-4 w-4 stroke-[4px] text-white" />
            Add Products
          </Button>
        </div>
      </div>

      <!-- Table Users -->
      <section  class="TableListProducts mb-6 w-full">
        <!-- Table Users -->
        <div class="Wrap relative w-full overflow-x-auto">
          <table class="Table w-full table-auto">
            <!-- Table Users: Head -->
            <thead class="TableHead w-full rounded-lg bg-[#FAFAFA] 2xl:rounded-large">
              <tr>
                <th
                  class="w-px py-3 text-left capitalize text-netral-80 first:pl-3 2xl:px-6 2xl:py-4"
                >
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
                  class="max-w-[270px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Product </Body>
                </th>

                <th
                  class="min-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Category </Body>
                </th>
                <th
                  class="max-w-[120px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Status</Body>
                </th>
                <th
                  class="max-w-[64px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Stock </Body>
                </th>
                <th
                  class="max-w-[120px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Price </Body>
                </th>
                <th
                  class="max-w-[100px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Action </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Users: Body -->
            <tbody class="TableBody relative w-full">
              <tr
                v-for="product in listProductsData"
                class="border-b border-netral-20 last:border-netral-30"
              >
                <td class="w-px py-4 text-left capitalize text-netral-80 first:pl-3 2xl:px-6">
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

                <td class="max-w-[270px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <div class="flex w-full max-w-[270px] items-center gap-3 2xl:gap-4">
                    <img
                      class="h-16 w-16 2xl:h-20 2xl:w-20"
                      :src="product.productImage"
                      :alt="product.productName"
                    />
                    <Body size="lg" weight="medium">
                      {{ product.productName }}
                    </Body>
                  </div>
                </td>

                <td class="max-w-[140px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ product.category }} </Body>
                </td>

                <td class="max-w-[120px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
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

                <td class="max-w-[64px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ product.stock }} </Body>
                </td>

                <td class="max-w-[120px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ product.price }} </Body>
                </td>

                <td class="max-w-[100px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
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

      <!-- Pagination : Home -->
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
        variant="draft"
        :modal-ref="modalDraftRef"
        :close-modal="closeModalDraft"
        :open-toast="openToastDraft"
        title="Draft Category"
        description="Are you sure want to Draft this category? Category which already Draftd can not be recovered."
      />

      <Modal
        variant="delete"
        :modal-ref="modalRef"
        :close-modal="closeModalDelete"
        :open-toast="openToastDelete"
        title="Delete Category"
        description="Are you sure want to delete this category? Category which already deleted can not be recovered."
      />
    </template>

    <template #Toast>
      <Toast
        variant="delete"
        :toast-ref="toastDeleteRef"
        :close-toast="closeToastDelete"
        heading="Users has been deleted"
        description="User which already deleted can not be recovered."
      />

      <Toast
        variant="draft"
        :toast-ref="toastDraftRef"
        :close-toast="closeToastDraft"
        heading="Users has been drafted"
        description="User which already draft can not be recovered."
      />
    </template>
  </DashboardLayout>
</template>
