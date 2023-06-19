<script lang="ts" setup>
import { ref } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

import { EmptyState, Pagination } from '$components/organisms'
import { DashboardLayout } from '$components/templates'
import { Badge, Button, Input, Title, Body, Select } from '$components/atoms'

import {
  FilePDF,
  FileX,
  FileText,
  Funnel,
  MagnifyingGlass,
  SortAscending,
  UploadSimple,
} from '$assets/icons'

import { NoProductsIll } from '$assets/illustrations'

/**
 * Dummy data - Manage Returns
 */
const manageReturnsData = [
  {
    transactionNumber: '430906237494',
    customerName: 'Jane Cooper',
    purchasedProduct: "Women's Clothing Azure",
    date: '20 Oct 2022',
    phoneNumber: 2,
    paymentAmount: '$123',
    status: 'warning',
  },
  {
    transactionNumber: '387492287349',
    customerName: 'Wade Warren',
    purchasedProduct: "Women's Clothing Azure",
    date: '20 Oct 2022',
    phoneNumber: 3,
    paymentAmount: '$236',
    status: 'success',
  },
  {
    transactionNumber: '093420239402',
    customerName: 'Williamson',
    purchasedProduct: 'Windproof Handbell Oversized Long Coat',
    date: '20 Oct 2022',
    phoneNumber: 1,
    paymentAmount: '$726',
    status: 'success',
  },
  {
    transactionNumber: '934850829349',
    customerName: 'Jenny Wilson',
    purchasedProduct: "Women's Turtleneck Sweater",
    date: '20 Oct 2022',
    phoneNumber: 5,
    paymentAmount: '$124',
    status: 'reject',
  },
  {
    transactionNumber: '293840029340',
    customerName: 'Williamson',
    purchasedProduct: "T-Men's UA Storm Armour Down Jacket",
    date: '20 Oct 2022',
    phoneNumber: 2,
    paymentAmount: '$149',
    status: 'success',
  },
  {
    transactionNumber: '394024029340',
    customerName: 'Robert Fox',
    purchasedProduct: "Women's Clothing Azure",
    date: '20 Oct 2022',
    phoneNumber: 4,
    paymentAmount: '$152',
    status: 'success',
  },
  {
    transactionNumber: '340394023940',
    customerName: 'Robert Fox',
    purchasedProduct: 'One Set - Casual Hoodie with Buttons for Tooddler',
    date: '20 Oct 2022',
    phoneNumber: 1,
    paymentAmount: '$214',
    status: 'reject',
  },
]

/** ================
 *  Checkbox Ref
 *  ================
 */
const checkboxRef = ref(false)

/** ================
 *  Modal - Filter
 *  ================
 */
const isOpenFilter = ref(false)

function openModalFilter() {
  isOpenFilter.value = true
}

function closeModalFilter() {
  isOpenFilter.value = false
}

/** ================
 *  Empty Ref
 *  ================
 */
const isEmptyRef = ref(true)

const toggleEmpty = () => {
  isEmptyRef.value = false
}
</script>

<template>
  <DashboardLayout title="Transaction">
    <section class="ManageReturns rounded-large bg-white p-6">
      <Title variant="default" class="mb-6"> Transaction List </Title>

      <div class="Heading mb-6 flex items-center justify-between 2xl:mb-8">
        <!-- Search -->
        <nav class="Search relative">
          <input
            type="text"
            class="w-[16rem] rounded-large bg-netral-20 px-3.5 py-2 pl-10 text-xs outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main 2xl:w-[21.25rem] 2xl:py-3 2xl:pl-11 2xl:text-sm"
            placeholder="Search"
          />

          <MagnifyingGlass
            class="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 stroke-2 text-netral-60 2xl:h-5 2xl:w-5"
          />
        </nav>

        <!-- Button -->
        <div class="Cta flex gap-2">
          <Popover class="relative">
            <PopoverButton class="outline-none">
              <Button type="click" variant="primary" modifier="outlinePrimary">
                <UploadSimple class="h-4 w-4 stroke-[4px] text-primary-main" />
                Export
              </Button>
            </PopoverButton>

            <PopoverPanel
              class="absolute right-0 top-16 z-30 flex w-64 flex-col rounded-large border border-netral-20 bg-white p-3 shadow-elevation-03 2xl:w-72"
            >
              <a
                class="flex items-center gap-3 rounded-large p-4 text-netral-90 hover:bg-netral-20 2xl:gap-4"
                href="/insights"
              >
                <FilePDF class="h-6 w-6 stroke-2 text-netral-90" />

                <Body size="lg" weight="medium"> Export as PDF </Body>
              </a>
              <a
                class="flex items-center gap-3 rounded-large p-4 text-netral-90 hover:bg-netral-20 2xl:gap-4"
                href="/insights"
              >
                <FileX class="h-6 w-6 stroke-2 text-netral-90" />

                <Body size="lg" weight="medium"> Export as Excel </Body>
              </a>

              <a
                class="flex items-center gap-3 rounded-large p-4 text-netral-90 hover:bg-netral-20 2xl:gap-4"
                href="/insights"
              >
                <FileText class="h-6 w-6 stroke-2 text-netral-90" />

                <Body size="lg" weight="medium"> Export as CSV </Body>
              </a>
            </PopoverPanel>
          </Popover>

          <Popover class="relative">
            <PopoverButton class="outline-none">
              <Button type="click" variant="plain" modifier="defaultPlain" size="medium">
                Sort
                <SortAscending class="h-4 w-4 stroke-[4px] text-netral-80" />
              </Button>
            </PopoverButton>

            <PopoverPanel
              class="absolute right-0 top-16 z-30 flex w-64 flex-col rounded-large border border-netral-20 bg-white p-3 shadow-elevation-03 2xl:w-72"
            >
              <a
                class="flex items-center gap-3 rounded-large p-4 text-netral-90 hover:bg-netral-20 2xl:gap-4"
                href="/insights"
              >
                <Body size="lg" weight="medium"> Most Recent </Body>
              </a>
              <a
                class="flex items-center gap-3 rounded-large p-4 text-netral-90 hover:bg-netral-20 2xl:gap-4"
                href="/insights"
              >
                <Body size="lg" weight="medium"> Status </Body>
              </a>

              <a
                class="flex items-center gap-3 rounded-large p-4 text-netral-90 hover:bg-netral-20 2xl:gap-4"
                href="/insights"
              >
                <Body size="lg" weight="medium"> Customer name A to Z </Body>
              </a>

              <a
                class="flex items-center gap-3 rounded-large p-4 text-netral-90 hover:bg-netral-20 2xl:gap-4"
                href="/insights"
              >
                <Body size="lg" weight="medium"> Customer name Z to A </Body>
              </a>

              <a
                class="flex items-center gap-3 rounded-large p-4 text-netral-90 hover:bg-netral-20 2xl:gap-4"
                href="/insights"
              >
                <Body size="lg" weight="medium"> Highest Payment </Body>
              </a>

              <a
                class="flex items-center gap-3 rounded-large p-4 text-netral-90 hover:bg-netral-20 2xl:gap-4"
                href="/insights"
              >
                <Body size="lg" weight="medium"> Lowest Payment </Body>
              </a>
            </PopoverPanel>
          </Popover>

          <Dialog :open="isOpenFilter" @close="closeModalFilter">
            <DialogPanel>
              <div class="Overlay fixed inset-0 z-[99] h-full w-full bg-black/50"></div>
              <div
                class="Modal fixed inset-0 left-1/2 top-1/3 z-[100] h-fit w-[480px] -translate-x-1/2 -translate-y-1/3 rounded-large bg-white p-6"
              >
                <DialogTitle class="pb-4">
                  <Title variant="default"> Filter </Title>
                </DialogTitle>

                <div class="Content space-y-6 py-6">
                  <div class="Status">
                    <Body size="md" weight="semibold" class="mb-1.5"> Status </Body>
                    <Select
                      variant="relax"
                      :select-data="[
                        { id: 1, name: 'Select Category', disable: true },
                        { id: 2, name: 'Outer' },
                        { id: 3, name: 'Sweater' },
                        { id: 4, name: 'Kids' },
                      ]"
                    />
                  </div>

                  <div class="TotalProduct">
                    <Body size="md" weight="semibold" class="mb-1.5"> Total Product </Body>

                    <div class="Cta flex gap-3">
                      <button class="rounded-large bg-netral-20 px-6 py-3">
                        <Body size="xl" weight="bold">
                          {{ '< 10' }}
                        </Body>
                      </button>

                      <button class="rounded-large bg-netral-20 px-6 py-3">
                        <Body size="xl" weight="bold">
                          {{ '11 - 20' }}
                        </Body>
                      </button>

                      <button class="rounded-large bg-netral-20 px-6 py-3">
                        <Body size="xl" weight="bold">
                          {{ '> 21' }}
                        </Body>
                      </button>
                    </div>
                  </div>

                  <div class="TransactionAmount">
                    <Body size="md" weight="semibold" class="mb-1.5"> Transaction Amount </Body>

                    <div class="Cta flex gap-3">
                      <button class="rounded-large bg-netral-20 px-6 py-3">
                        <Body size="xl" weight="bold">
                          {{ '≤ $500' }}
                        </Body>
                      </button>

                      <button class="rounded-large bg-netral-20 px-6 py-3">
                        <Body size="xl" weight="bold">
                          {{ '$501 - $999' }}
                        </Body>
                      </button>

                      <button class="rounded-large bg-netral-20 px-6 py-3">
                        <Body size="xl" weight="bold">
                          {{ '≥ $1,000' }}
                        </Body>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="Cta flex items-center justify-end gap-4 border-t border-netral-30 pt-4">
                  <Button
                    type="click"
                    :on-click="closeModalFilter"
                    variant="primary"
                    modifier="nudePrimary"
                    >Cancel</Button
                  >

                  <Button
                    type="click"
                    :on-click="closeModalFilter"
                    variant="primary"
                    modifier="defaultPrimary"
                  >
                    Add Outlet
                  </Button>
                </div>
              </div>
            </DialogPanel>
          </Dialog>

          <Button
            type="click"
            :on-click="openModalFilter"
            variant="plain"
            modifier="defaultPlain"
            size="medium"
          >
            Filters
            <Funnel class="h-4 w-4 stroke-[4px] text-netral-80" />
          </Button>
        </div>
      </div>

      <EmptyState
        v-if="isEmptyRef"
        :toggle-empty="toggleEmpty"
        title="No transaction list"
        desc="The transaction you are looking for is not available"
      >
        <NoProductsIll class="h-60 w-60" />
      </EmptyState>

      <!-- Table Categories -->
      <section v-else class="TableListProducts mb-6 w-full">
        <!-- Table Categories -->
        <div class="Wrap relative w-full overflow-x-auto">
          <table class="Table w-full table-fixed">
            <!-- Table Categories: Head -->
            <thead class="TableHead w-full rounded-lg bg-[#FAFAFA] 2xl:rounded-large">
              <tr>
                <th
                  class="max-w-[180px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Transaction Number </Body>
                </th>

                <th
                  class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Customer Name </Body>
                </th>

                <th
                  class="max-w-[170px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Purchased Product </Body>
                </th>

                <th
                  class="max-w-[80px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Total Product</Body>
                </th>

                <th
                  class="max-w-[80px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Payment Amount </Body>
                </th>

                <th
                  class="max-w-[80px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Status</Body>
                </th>

                <th
                  class="max-w-[20px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Action </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Categories: Body -->
            <tbody class="TableBody relative w-full">
              <tr
                v-for="product in manageReturnsData"
                class="border-b border-netral-20 last:border-netral-30"
              >
                <td class="max-w-[180px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.transactionNumber }}
                  </Body>
                </td>

                <td class="max-w-[140px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.customerName }}
                  </Body>
                </td>

                <td class="max-w-[170px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.purchasedProduct }}
                  </Body>
                </td>

                <td class="max-w-[80px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.phoneNumber }}
                  </Body>
                </td>

                <td class="max-w-[80px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.paymentAmount }}
                  </Body>
                </td>

                <td class="max-w-[80px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Badge v-if="product.status === 'success'" variant="success">
                    {{ product.status }}
                  </Badge>
                  <Badge v-if="product.status === 'reject'" variant="critical">
                    {{ product.status }}
                  </Badge>

                  <Badge v-if="product.status === 'warning'" variant="warning">
                    {{ product.status }}
                  </Badge>
                </td>

                <td class="max-w-[20px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <button
                    class="text-primary-main"
                    @click="$router.push('/transactions/manage-transactions/detail')"
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
      <Pagination v-if="!isEmptyRef" />
    </section>
  </DashboardLayout>
</template>
