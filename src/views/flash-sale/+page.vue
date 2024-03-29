<script lang="ts" setup>
import { computed, ref, watch } from 'vue'

import { DashboardLayout } from '$components/templates'
import { Badge, Body, Button, Title } from '$components/atoms'
import { Modal, PageAction, Pagination, Toast } from '$components/organisms'

import {
  FlashSaleModal,
  FlashSaleModalDiscount,
  FlashSaleModalConfirmation,
} from '$components/organisms/Modal'

import { Funnel, SortAscending, Lightning, MagnifyingGlass, Pencil, Trash } from '$assets/icons'

/**
 * ============================
 * Dummy Data - List Products
 * ============================
 */
const listData = ref([
  {
    startDate: '20-11-2022, 16.30',
    endDate: '21-11-2022, 16.30',
    totalProducts: 65,
    status: 'upcoming',
  },
  {
    startDate: '12-12-2022, 00.00',
    endDate: '12-12-2022, 12.00',
    totalProducts: 44,
    status: 'ongoing',
  },
  {
    startDate: '11-11-2022, 00.00',
    endDate: '11-11-2022, 12.00',
    totalProducts: 32,
    status: 'expired',
  },
  {
    startDate: '11-11-2022, 00.00',
    endDate: '11-11-2022, 12.00',
    totalProducts: 54,
    status: 'expired',
  },
  {
    startDate: '11-11-2022, 00.00',
    endDate: '11-11-2022, 12.00',
    totalProducts: 76,
    status: 'expired',
  },
])

/**
 * =================
 * Modal - Delete
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
 * Modal - Draft
 * =================
 */
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
const toastRef = ref(false)

function openToastDelete() {
  modalRef.value = false
  toastRef.value = true
}

function closeToastDelete() {
  toastRef.value = false
}

/**
 * Flash Sale Modal
 */
const flashSaleModalRef = ref(false)

function openModalFlashSale() {
  flashSaleModalRef.value = true
}

function closeModalFlashSale() {
  flashSaleModalRef.value = false
}

/**
 * Flash Sale Discount Modal
 */
const flashSaleModalDiscountRef = ref(false)

function openModalFlashSaleDiscount() {
  setTimeout(() => {
    closeModalFlashSale()
  }, 500)

  setTimeout(() => {
    flashSaleModalDiscountRef.value = true
  }, 500)
}

function closeModalFlashSaleDiscount() {
  setTimeout(() => {
    flashSaleModalDiscountRef.value = false
  }, 500)
}

/**
 * Flash Sale Discount Modal
 */
const flashSaleModalConfirmationRef = ref(false)

function openModalFlashSaleConfirmation() {
  setTimeout(() => {
    closeModalFlashSaleDiscount()
  }, 500)

  setTimeout(() => {
    flashSaleModalConfirmationRef.value = true
  }, 1000)
}

function closeModalFlashSaleConfirmation() {
  flashSaleModalConfirmationRef.value = false
}

/**
 * =================
 * Toast
 * =================
 */
const toastSavedtRef = ref(false)

function openToastSaved() {
  setTimeout(() => {
    closeModalFlashSaleConfirmation()
  }, 500)

  setTimeout(() => {
    toastSavedtRef.value = true
  }, 1000)
}

function closeToastSaved() {
  setTimeout(() => {
    toastSavedtRef.value = false
  }, 2000)
}
</script>

<template>
  <DashboardLayout title="Flash Sale">
    <div class="Products min-h-[480px] w-full rounded-large bg-white p-6">
      <!-- Heading -->
      <div class="Heading mb-6 flex w-full flex-col items-start justify-between gap-8 2xl:mb-8">
        <Title variant="default"> Flash Sale </Title>

        <div class="Action flex w-full justify-between">
          <!-- Search -->
          <nav class="Search relative w-72 2xl:w-96">
            <input
              type="text"
              class="w-full rounded-large bg-netral-20 px-3.5 py-2.5 pl-11 text-base outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main"
              placeholder="Search"
            />

            <MagnifyingGlass
              class="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 stroke-2 text-netral-60 2xl:h-5 2xl:w-5"
            />
          </nav>
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
              type="click"
              :on-click="openModalFlashSale"
              variant="primary"
              modifier="defaultPrimary"
              size="medium"
            >
              <Lightning class="h-4 w-4 stroke-[4px] text-white" />
              Add Flash Sale
            </Button>
          </div>
        </div>
      </div>

      <!-- Table Users -->
      <section class="TableListProducts mb-6 w-full">
        <!-- Table Users -->
        <div class="Wrap relative w-full overflow-x-auto">
          <table class="Table w-full table-auto">
            <!-- Table Users: Head -->
            <thead class="TableHead w-full rounded-lg bg-[#FAFAFA] 2xl:rounded-large">
              <tr>
                <th
                  class="max-w-[270px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Start Date </Body>
                </th>

                <th
                  class="min-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> End Date </Body>
                </th>
                <th
                  class="max-w-[120px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Total Products</Body>
                </th>
                <th
                  class="max-w-[64px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Status </Body>
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
              <tr v-for="item in listData" class="border-b border-netral-20 last:border-netral-30">
                <td class="max-w-[140px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ item.startDate }} </Body>
                </td>

                <td class="max-w-[140px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ item.endDate }} </Body>
                </td>

                <td class="max-w-[140px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ item.totalProducts }} </Body>
                </td>

                <td class="max-w-[120px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Badge v-if="item.status === 'ongoing'" variant="success">
                    {{ item.status }}
                  </Badge>
                  <Badge v-if="item.status === 'upcoming'" variant="neutral">
                    {{ item.status }}
                  </Badge>

                  <Badge v-if="item.status === 'expired'" variant="warning">
                    {{ item.status }}
                  </Badge>
                </td>

                <td class="max-w-[100px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <div class="Action flex gap-3 2xl:gap-4">
                    <Button
                      type="click"
                      :on-click="() => $router.push('/flash-sale/detail')"
                      variant="plain"
                      size="medium"
                      modifier="defaultPlain"
                    >
                      <Pencil class="h-5 w-5 stroke-[2.5px] text-netral-80" />
                    </Button>

                    <Button
                      type="click"
                      :on-click="openModalDelete"
                      variant="plain"
                      size="medium"
                      modifier="defaultPlain"
                    >
                      <Trash class="h-5 w-5 stroke-[2.5px] text-error-main" />
                    </Button>
                  </div>
                  <!-- <button class="text-primary-main" @click="$router.push('/flash-sale/detail')">
                    <Body size="lg" weight="semibold"> Detail </Body>
                  </button> -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Pagination : Home -->
      <Pagination />
    </div>

    <!-- Modal Delete : Home -->
    <template #Modal>
      <Modal
        variant="delete"
        :modal-ref="modalRef"
        :close-modal="closeModalDelete"
        :open-toast="openToastDelete"
        title="Delete Flash Sale"
        description="Are you sure want to delete this flash sale? Flash sale which already deleted can not be recovered."
      />

      <FlashSaleModal
        :close-modal="closeModalFlashSale"
        :is-open-ref="flashSaleModalRef"
        :next-click="openModalFlashSaleDiscount"
      />

      <FlashSaleModalDiscount
        :is-open-ref="flashSaleModalDiscountRef"
        :close-modal="closeModalFlashSaleDiscount"
        :next-click="openModalFlashSaleConfirmation"
      />

      <FlashSaleModalConfirmation
        :is-open-ref="flashSaleModalConfirmationRef"
        :close-modal="closeModalFlashSaleConfirmation"
        :next-click="openToastSaved"
      />
    </template>

    <template #Toast>
      <Toast
        variant="delete"
        :toast-ref="toastRef"
        :close-toast="closeToastDelete"
        heading="Flash sale has been deleted"
        description="Flash sale which already deleted can not be recovered."
      />

      <Toast
        variant="saved"
        :toast-ref="toastSavedtRef"
        :close-toast="closeToastSaved"
        heading="Flash sale has been added"
        description="Flash sale has been added, you can check the status of the flash sale to make sure."
      />
    </template>
  </DashboardLayout>
</template>
