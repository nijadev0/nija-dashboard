<script lang="ts" setup>
import { ref } from 'vue'

import { Body, Input, Select, Title } from '$components/atoms'

import { DashboardLayout } from '$components/templates'
import { RejectReasonModal } from '$components/organisms/Modal'
import { Modal, PageAction, Toast } from '$components/organisms'

import BankLogo from '$assets/images/Bank.png'
import ShipLogo from '$assets/images/Ship.png'

/**
 * ============================
 * Dummy Data - List Products
 * ============================
 */
const listProductsData = [
  {
    product: {
      name: "T-Men's UA Storm Armour Down 2.0 Jacket",
      image: '/images/list-products/ListProducts-1.png',
    },
    sku: '123980123490',
    size: 'M',
    color: {
      name: 'cream',
      hex: '#DCD5C3',
    },
    qty: 2,
    price: '$140',
    total: '$280',
  },
  {
    product: {
      name: 'Windproof Handbell Oversized Long Coat',
      image: '/images/list-products/ListProducts-2.png',
    },
    sku: '310498149123',
    size: 'L',
    color: {
      name: 'pink',
      hex: '#EBC0BA',
    },
    qty: 1,
    price: '$129',
    total: '$129',
  },
]

/**
 * Modal & Toast Approve
 */
// Modal
const approveRef = ref(false)

function openModalApprove() {
  approveRef.value = true
}

function closeModalApprove() {
  approveRef.value = false
}

// Toast
const toastApproveRef = ref(false)

function openToastApprove() {
  approveRef.value = false
  toastApproveRef.value = true

  setTimeout(() => {
    toastApproveRef.value = false
  }, 2500)
}

function closeToastApprove() {
  toastApproveRef.value = false
}

/**
 * Modal Reject
 */
// Modal
const isOpenModalRejectRef = ref(false)

function openModalReject() {
  isOpenModalRejectRef.value = true
}

function closeModalReject() {
  isOpenModalRejectRef.value = false
}

// Modal - Reason
const isOpenModalReasonRef = ref(false)

function openModalReason() {
  // Close Previous Modal

  closeModalReject()

  setTimeout(() => {
    isOpenModalReasonRef.value = true
  }, 500)
}

function closeModalReason() {
  isOpenModalReasonRef.value = false
}

// Toast
const toastRejectRef = ref(false)

function openToastReject() {
  closeModalReason()

  setTimeout(() => {
    toastRejectRef.value = true
  }, 500)

  setTimeout(() => {
    toastRejectRef.value = false
  }, 2500)
}

function closeToastReject() {
  toastRejectRef.value = false
}

const status = [
  { name: 'Process', color: 'bg-netral-80' },
  { name: 'Waiting', color: 'bg-warning-main' },
  { name: 'Success', color: 'bg-success-main' },
]
</script>

<template>
  <DashboardLayout title="Returns">
    <section class="ApproveManageReturns min-h-[480px] rounded-large bg-white p-6">
      <!-- Heading -->
      <Title variant="default" class="mb-7"> Add Category </Title>

      <div class="flex items-start justify-between border-y border-netral-20 py-7">
        <div class="flex w-64 flex-col items-start gap-2">
          <Body size="lg" weight="semibold"> Transaction Number </Body>
        </div>

        <div class="w-full max-w-xl 2xl:max-w-4xl">
          <Input
            variant="base"
            input-type="text"
            name="ProductName"
            placeholder="Enter product name"
            value="20129380132"
          />
        </div>
      </div>

      <div class="flex items-start justify-between border-b border-netral-20 py-7">
        <div class="flex w-64 flex-col items-start gap-2">
          <Body size="lg" weight="semibold"> Date </Body>
        </div>

        <div class="w-full max-w-xl 2xl:max-w-4xl">
          <Input
            variant="base"
            input-type="text"
            name="ProductName"
            placeholder="Enter product name"
            value="21/08/2022"
          />
        </div>
      </div>

      <div class="flex items-start justify-between border-b border-netral-20 py-7">
        <div class="flex w-64 flex-col items-start gap-2">
          <Body size="lg" weight="semibold"> Invoice </Body>
        </div>

        <div class="w-full max-w-xl 2xl:max-w-4xl">
          <Input
            variant="base"
            input-type="text"
            name="ProductName"
            placeholder="Enter product name"
            value="INV/20221114/MPL/28203158839"
          />
        </div>
      </div>

      <div class="flex items-start justify-between border-b border-netral-20 py-7">
        <div class="flex w-64 flex-col items-start gap-2">
          <Body size="lg" weight="semibold"> Customer Name </Body>
        </div>

        <div class="w-full max-w-xl 2xl:max-w-4xl">
          <Input
            variant="base"
            input-type="text"
            name="ProductName"
            placeholder="Enter product name"
            value="Samanta Legend"
          />
        </div>
      </div>

      <div class="flex items-start justify-between border-b border-netral-20 py-7">
        <div class="flex w-64 flex-col items-start gap-2">
          <Body size="lg" weight="semibold"> Phone Number </Body>
        </div>

        <div class="w-full max-w-xl 2xl:max-w-4xl">
          <Input
            variant="phone"
            input-type="number"
            name="ProductName"
            placeholder="Enter product name"
            value="8723781236"
          />
        </div>
      </div>

      <div class="flex items-start justify-between border-b border-netral-20 py-7">
        <div class="flex w-64 flex-col items-start gap-2">
          <Body size="lg" weight="semibold"> Status </Body>
          <Body size="md" weight="regular" class="text-netral-50">
            This is the customer's order status. You can arrange your customer's order status
            according to the order process.
          </Body>
        </div>

        <div class="w-full max-w-xl 2xl:max-w-4xl">
          <!-- <Input
            variant="status"
            input-type="text"
            name="ProductName"
            placeholder="Enter product name"
            value="8723781236"
            status="Processed"
          /> -->

          <Select variant="relax" type="status" :select-data="status" />
        </div>
      </div>
    </section>

    <section class="ApproveManageReturns mt-6 min-h-[480px] rounded-large bg-white p-6">
      <!-- Heading -->
      <Title variant="default" class="mb-7"> Shipping Detail </Title>

      <div class="flex items-start justify-between border-y border-netral-20 py-7">
        <div class="flex w-64 flex-col items-start gap-2">
          <Body size="lg" weight="semibold"> Receipt number </Body>
        </div>

        <div class="w-full max-w-xl 2xl:max-w-4xl">
          <Input
            variant="base"
            input-type="text"
            name="ProductName"
            placeholder="Enter product name"
            value="BSDJA2130923UK"
          />
        </div>
      </div>

      <div class="flex items-start justify-between border-b border-netral-20 py-7">
        <div class="flex w-64 flex-col items-start gap-2">
          <Body size="lg" weight="semibold"> Payment </Body>
        </div>

        <div class="w-full max-w-xl 2xl:max-w-4xl">
          <Input
            variant="logo"
            input-type="text"
            name="ProductName"
            placeholder="Enter product name"
            value="FedEx (2-3 Days)"
            :logo-src="ShipLogo"
          />
        </div>
      </div>

      <div class="flex items-start justify-between border-b border-netral-20 py-7">
        <div class="flex w-64 flex-col items-start gap-2">
          <Body size="lg" weight="semibold"> Address </Body>
        </div>

        <div class="w-full max-w-xl 2xl:max-w-4xl">
          <Input
            variant="base"
            input-type="text"
            name="ProductName"
            placeholder="Enter product name"
            value="2972 Westheimer Rd. Santa Ana, Illinois 85486 "
          />
        </div>
      </div>

      <div class="flex items-start justify-between border-b border-netral-20 py-7">
        <div class="flex w-64 flex-col items-start gap-2">
          <Body size="lg" weight="semibold"> Payment </Body>
        </div>

        <div class="w-full max-w-xl 2xl:max-w-4xl">
          <Input
            variant="logo"
            input-type="text"
            name="ProductName"
            placeholder="Enter product name"
            value="Maybank Virtual Account"
            :logo-src="BankLogo"
          />
        </div>
      </div>
    </section>

    <section class="ApproveManageReturns mt-6 rounded-large bg-white p-6">
      <!-- Heading -->
      <Title variant="default" class="mb-7"> Return Detail </Title>

      <!-- Table Users -->
      <section class="TableListProducts w-full">
        <!-- Table Users -->
        <div class="Wrap relative w-full overflow-x-auto">
          <table class="Table w-full table-auto">
            <!-- Table Users: Head -->
            <thead class="TableHead w-full rounded-lg bg-[#FAFAFA] 2xl:rounded-large">
              <tr>
                <th
                  class="max-w-[270px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Product </Body>
                </th>

                <th
                  class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> SKU </Body>
                </th>

                <th
                  class="max-w-[64px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Size </Body>
                </th>

                <th
                  class="max-w-[100px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Color </Body>
                </th>

                <th
                  class="max-w-[64px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Qty </Body>
                </th>

                <th
                  class="max-w-[80px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Price </Body>
                </th>

                <th
                  class="max-w-[80px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Total </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Users: Body -->
            <tbody class="TableBody relative w-full">
              <tr
                v-for="product in listProductsData"
                class="border-b border-netral-20 last:border-netral-30"
              >
                <td class="max-w-[270px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <div class="flex w-full max-w-[270px] items-center gap-3 2xl:gap-4">
                    <img
                      class="h-16 w-16 2xl:h-20 2xl:w-20"
                      :src="product.product.image"
                      :alt="product.product.name"
                    />
                    <Body size="lg" weight="medium">
                      {{ product.product.name }}
                    </Body>
                  </div>
                </td>

                <td class="max-w-[140px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ product.sku }} </Body>
                </td>

                <td class="max-w-[64px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ product.size }} </Body>
                </td>

                <td class="max-w-[100px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <div
                    class="Color flex w-fit items-center gap-2 rounded-md bg-netral-20 px-2 py-1.5"
                  >
                    <div
                      class="Background h-5 w-5 rounded"
                      :style="`background: ${product.color.hex}`"
                    />
                    <Body size="md" weight="regular">{{ product.color.name }}</Body>
                  </div>
                </td>

                <td class="max-w-[64px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ product.qty }} </Body>
                </td>

                <td class="max-w-[80px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ product.price }} </Body>
                </td>

                <td class="max-w-[80px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ product.total }} </Body>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="Detail space-y-4 pt-6">
            <div class="flex justify-end gap-6">
              <Body size="lg" weight="semibold" class="w-24">Discount</Body>

              <Body size="lg" weight="semibold" class="w-24">20%</Body>
            </div>

            <div class="flex justify-end gap-6">
              <Body size="lg" weight="semibold" class="w-24">Shipping</Body>

              <Body size="lg" weight="semibold" class="w-24">10%</Body>
            </div>

            <div class="flex justify-end gap-6">
              <Body size="lg" weight="semibold" class="w-24">Tax</Body>

              <Body size="lg" weight="semibold" class="w-24">10$</Body>
            </div>

            <div class="flex justify-end gap-6">
              <Body size="lg" weight="semibold" class="w-24">Sub total</Body>

              <Body size="lg" weight="semibold" class="w-24">$389</Body>
            </div>
          </div>
        </div>
      </section>
    </section>

    <template #PageAction>
      <PageAction
        variant="saveDiscard"
        :open-modal="openModalApprove"
        :open-modal-secondary="openModalReject"
        :is-selected="true"
      />
    </template>

    <template #Modal>
      <Modal
        variant="approve"
        :modal-ref="approveRef"
        :close-modal="closeModalApprove"
        :open-toast="openToastApprove"
        title="Save updates?"
        description="Are you sure to save this update?"
      />

      <Modal
        variant="reject"
        :modal-ref="isOpenModalRejectRef"
        :close-modal="closeModalReject"
        :open-toast="openModalReason"
        title="Reject return"
        description="Are you sure you want to reject this product return?"
      />

      <RejectReasonModal
        :is-open-ref="isOpenModalReasonRef"
        :close-modal="closeModalReason"
        :next-click="openToastReject"
      />
    </template>

    <template #Toast>
      <Toast
        :toast-ref="toastApproveRef"
        :close-toast="closeToastApprove"
        variant="saved"
        heading="Update success"
        description="You have successfully updated the transaction data."
      />

      <Toast
        :toast-ref="toastRejectRef"
        :close-toast="closeToastReject"
        variant="delete"
        heading="Return has been rejected"
        description="Product returns have been rejected, a message will be sent to the customer."
      />
    </template>
  </DashboardLayout>
</template>
