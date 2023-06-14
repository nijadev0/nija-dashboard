<script lang="ts" setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import Body from '$components/atoms/Body.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'

import { Funnel, SortAscending, Plus, Check } from '$assets/icons'
import { NoProductsIll } from '$assets/illustrations'

import Badge from '$components/atoms/Badge.vue'
import Pagination from '$components/organisms/Pagination.vue'
import PageAction from '$components/organisms/PageAction.vue'
import Modal from '$components/organisms/Modal.vue'
import Toast from '$components/organisms/Toast.vue'

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

/**
 * =================
 * Toast
 * =================
 */
const toastRef = ref(false)

function openToastDelete() {
  modalRef.value = false
  toastRef.value = true
}

function closeToastDelete() {
  toastRef.value = false
  checkboxRef.value = false
}

/**
 * =================
 * Empty state
 * =================
 */
const emptyState = ref(true)
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

      <section class="flex w-full flex-col items-center justify-center pb-24" v-if="emptyState">
        <NoProductsIll class="h-60 w-60" />

        <Body size="xxl" weight="semibold" class="mb-2"> No Variant Available </Body>

        <Body size="lg" weight="regular" class="mb-6 max-w-xl text-center text-netral-60">
          Product variety refers to the number and range of products (differentiated by
          specifications) offered by sellers. And also product variety is beneficial for consumers
          because they can choose from a variety of alternatives.
        </Body>

        <Button size="big" variant="primary" type="goto" @click="emptyState = false">
          <Plus class="h-4 w-4 stroke-white stroke-[4px]" />
          Add Variant
        </Button>
      </section>

      <!-- Table Users -->
      <section v-if="!emptyState" class="TableListProducts mb-6 w-full">
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
      <Pagination v-if="!emptyState" />
    </div>

    <!-- Page Action : Home -->
    <template #PageAction>
      <PageAction
        v-if="checkboxRef"
        variant="deleteOnly"
        :is-selected="checkboxRef"
        :open-modal="openModalDelete"
      />
    </template>

    <!-- Modal Delete : Home -->
    <template #Modal>
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
        :toast-ref="toastRef"
        :close-toast="closeToastDelete"
        heading="Users has been deleted"
        description="User which already deleted can not be recovered."
      />
    </template>
  </DashboardLayout>
</template>
