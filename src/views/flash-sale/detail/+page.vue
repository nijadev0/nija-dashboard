<script lang="ts" setup>
import { ref } from 'vue'

import { Body, Input, Select, Title } from '$components/atoms'

import { DashboardLayout } from '$components/templates'
import { RejectReasonModal } from '$components/organisms/Modal'
import { Modal, PageAction, Toast } from '$components/organisms'

import BankLogo from '$assets/images/Bank.png'
import ShipLogo from '$assets/images/Ship.png'

const data = ref({
  startDate: '20-11-2022',
  startTime: '16.30',
  endDate: '21-11-2022',
  endTime: '12.00',
  products: [
    {
      productName: "T-Men's UA Storm Armour Down 2.0 Jacket",
      category: 'outer',
      quota: 22,
      price: '$178',
      discount: '$30',
      discountPrice: '$148',
    },
    {
      productName: 'Windproof Handbell Oversized Long Coat',
      category: 'outer',
      quota: 44,
      price: '$178',
      discount: '$30',
      discountPrice: '$148',
    },
    {
      productName: "Women's Stripe Sweater",
      category: 'sweater',
      quota: 65,
      price: '$178',
      discount: '$30',
      discountPrice: '$148',
    },
    {
      productName: "Women's Turtleneck Sweater",
      category: 'sweater',
      quota: 15,
      price: '$178',
      discount: '$30',
      discountPrice: '$148',
    },
    {
      productName: 'One Set - Casual Hoodie with Buttons',
      category: 'kids',
      quota: 15,
      price: '$178',
      discount: '$30',
      discountPrice: '$148',
    },
  ],
})

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
</script>

<template>
  <DashboardLayout title="Flash Sale Detail">
    <section class="rounded-large bg-white p-6">
      <!-- Heading -->
      <Title variant="default" class="mb-7"> Date & Time </Title>

      <div class="grid grid-flow-col grid-rows-2 gap-5">
        <div>
          <Body size="lg" weight="semibold" class="mb-1.5"> Start Date </Body>
          <Input
            variant="base"
            input-type="text"
            name="StartDate"
            placeholder="Enter start date"
            :value="data.startDate"
          />
        </div>
        <div>
          <Body size="lg" weight="semibold" class="mb-1.5"> Start Time </Body>
          <Input
            variant="base"
            input-type="text"
            name="StartTime"
            placeholder="Enter start time"
            :value="data.startTime"
          />
        </div>
        <div>
          <Body size="lg" weight="semibold" class="mb-1.5"> End Date </Body>
          <Input
            variant="base"
            input-type="text"
            name="EndDate"
            placeholder="Enter end date"
            :value="data.endDate"
          />
        </div>
        <div>
          <Body size="lg" weight="semibold" class="mb-1.5"> End Time </Body>
          <Input
            variant="base"
            input-type="text"
            name="EndTime"
            placeholder="Enter end time"
            :value="data.endTime"
          />
        </div>
      </div>
    </section>

    <section class="mt-6 rounded-large bg-white p-6">
      <!-- Heading -->
      <Title variant="default" class="mb-7"> Product </Title>

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
                  <Body size="md" weight="medium"> No </Body>
                </th>
                <th
                  class="max-w-[270px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Product </Body>
                </th>

                <th
                  class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Category </Body>
                </th>

                <th
                  class="max-w-[64px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Quota </Body>
                </th>

                <th
                  class="max-w-[100px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Price </Body>
                </th>

                <th
                  class="max-w-[64px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Discount </Body>
                </th>

                <th
                  class="max-w-[80px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Discount Price </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Users: Body -->
            <tbody class="TableBody relative w-full">
              <tr
                v-for="(item, index) in data.products"
                class="border-b border-netral-20 last:border-netral-30"
              >
                <td class="max-w-[140px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ index + 1 }} </Body>
                </td>

                <td class="max-w-[140px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ item.productName }} </Body>
                </td>

                <td class="max-w-[64px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ item.category }} </Body>
                </td>

                <td class="max-w-[64px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ item.quota }} </Body>
                </td>

                <td class="max-w-[80px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ item.price }} </Body>
                </td>

                <td class="max-w-[80px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ item.discount }} </Body>
                </td>

                <td class="max-w-[80px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ item.discountPrice }} </Body>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>

    <template #PageAction>
      <PageAction variant="saveDiscard" :open-modal="openModalApprove" :is-selected="true" />
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
    </template>

    <template #Toast>
      <Toast
        :toast-ref="toastApproveRef"
        :close-toast="closeToastApprove"
        variant="saved"
        heading="Update success"
        description="You have successfully updated this data."
      />
    </template>
  </DashboardLayout>
</template>
