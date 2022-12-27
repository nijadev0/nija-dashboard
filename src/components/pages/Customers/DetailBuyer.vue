<script lang="ts" setup>
import { ref } from 'vue'

import Heading from '$components/atoms/Heading.vue'
import Body from '$components/atoms/Body.vue'
import Title from '$components/atoms/Title.vue'
import Button from '$components/atoms/Button.vue'
import PageAction from '$components/organisms/PageAction.vue'
import Toast from '$components/organisms/Toast.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'

import AvatarDefault from '$assets/images/AvatarDefault.svg'
import { Funnel, SortAscending } from '$assets/icons'
import Badge from '$components/atoms/Badge.vue'
import Pagination from '$components/organisms/Pagination.vue'

/**
 * =======================
 * Dummy Data - Transaction History
 * =======================
 */
const transactionHistoryData = [
  {
    transactionID: '653518',
    purchasedItem: "Lego Star'War edition",
    amount: 2,
    status: 'successful',
    totalPrice: '$782.01',
    transactionDate: '02 jan 2022. 16.00',
  },
  {
    transactionID: '267400',
    purchasedItem: 'Heimer Miller Sofa (Mint Condition)',
    amount: 4,
    status: 'successful',
    totalPrice: '$169.43',
    transactionDate: '02 jan 2022. 16.00',
  },
  {
    transactionID: '653518',
    purchasedItem: 'Coach Tabby 26 for sale',
    amount: 3,
    status: 'refund',
    totalPrice: '$782.01',
    transactionDate: '02 jan 2022. 16.00',
  },
  {
    transactionID: '558612',
    purchasedItem: 'Coach Tabby 26 for sale',
    amount: 1,
    status: 'successful',
    totalPrice: '$328.85',
    transactionDate: '02 jan 2022. 16.00',
  },
  {
    transactionID: '267400',
    purchasedItem: 'Heimer Miller Sofa (Mint Condition)',
    amount: 3,
    status: 'successful',
    totalPrice: '$105.55',
    transactionDate: '02 jan 2022. 16.00',
  },
  {
    transactionID: '653518',
    purchasedItem: 'Heimer Miller Sofa (Mint Condition)',
    amount: 2,
    status: 'refund',
    totalPrice: '$782.01',
    transactionDate: '02 jan 2022. 16.00',
  },
]

/**
 * =================
 * Toast
 * =================
 */
const toastRef = ref(false)

function openToastSaved() {
  toastRef.value = true
}

function closeToastSaved() {
  toastRef.value = false
}
</script>

<template>
  <DashboardLayout title="Buyers">
    <div class="DetailBuyers flex min-h-[640px] flex-col items-start gap-6">
      <section class="Profile w-full rounded-large bg-white p-6">
        <Title variant="default" class="mb-7"> Detail Buyers </Title>

        <div class="Identity flex items-center gap-5">
          <!-- Image -->
          <div
            class="Image relative max-h-[96px] max-w-[96px] rounded-full bg-netral-30 2xl:max-h-[132px] 2xl:max-w-[132px]"
          >
            <img class="h-full w-full object-cover" :src="AvatarDefault" alt="Avatar Default" />
          </div>

          <div class="Detail w-full">
            <Heading size="sm" weight="semibold" class="mb-7"> Samanta Legend </Heading>

            <div class="Info flex w-9/12 items-start justify-between">
              <div class="Info Email">
                <Body size="sm" weight="semibold" class="mb-1.5 uppercase text-netral-60">
                  Email Address
                </Body>
                <Body size="md" weight="medium">samanta@mail.com</Body>
              </div>

              <div class="Info Phone">
                <Body size="sm" weight="semibold" class="mb-1.5 uppercase text-netral-60">
                  Phone Number
                </Body>
                <Body size="md" weight="medium">(307) 555-0133</Body>
              </div>

              <div class="Info Address">
                <Body size="sm" weight="semibold" class="mb-1.5 uppercase text-netral-60">
                  Complete Address
                </Body>
                <Body size="md" weight="medium">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </Body>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full rounded-large bg-white p-6">
        <div class="Heading mb-8 flex w-full items-center justify-between">
          <Title variant="default"> Transaction History </Title>

          <div class="flex gap-2">
            <Button type="click" variant="plain" modifier="defaultPlain" size="medium">
              Sort
              <SortAscending class="h-4 w-4 stroke-[4px] text-netral-80" />
            </Button>

            <Button type="click" variant="plain" modifier="defaultPlain" size="medium">
              Filters
              <Funnel class="h-4 w-4 stroke-[4px] text-netral-80" />
            </Button>
          </div>
        </div>

        <!-- Table : Buyers -->
        <section class="TableUsers mb-6 w-full">
          <!-- Table Buyers -->
          <div class="relative w-full overflow-x-auto">
            <table class="w-full table-auto">
              <!-- Table Buyers: Head -->
              <thead class="w-full rounded-lg bg-[#FAFAFA] 2xl:rounded-large">
                <tr>
                  <th
                    class="max-w-[140px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                  >
                    <Body size="md" weight="medium"> Transaction ID </Body>
                  </th>

                  <th
                    class="max-w-[200px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                  >
                    <Body size="md" weight="medium"> Purchased Item </Body>
                  </th>

                  <th
                    class="max-w-[80px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                  >
                    <Body size="md" weight="medium"> Amount </Body>
                  </th>

                  <th
                    class="max-w-[120px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                  >
                    <Body size="md" weight="medium"> Status </Body>
                  </th>

                  <th
                    class="max-w-[100px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                  >
                    <Body size="md" weight="medium"> Total Price </Body>
                  </th>

                  <th
                    class="max-w-[140px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                  >
                    <Body size="md" weight="medium"> Transaction Date </Body>
                  </th>
                </tr>
              </thead>

              <!-- Table Buyers: Body -->
              <tbody class="relative w-full">
                <tr
                  v-for="transaction in transactionHistoryData"
                  class="border-b border-netral-20 last:border-netral-30"
                >
                  <td
                    class="max-w-[140px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3"
                  >
                    <Body size="lg" weight="medium"> {{ transaction.transactionID }} </Body>
                  </td>

                  <td class="max-w-[200px] py-6 px-6 text-left text-netral-80 first:pl-3">
                    <Body size="lg" weight="medium"> {{ transaction.purchasedItem }} </Body>
                  </td>

                  <td class="max-w-[80px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                    <Body size="lg" weight="medium">
                      {{ transaction.amount }}
                    </Body>
                  </td>

                  <td class="max-w-[120px] py-6 px-6 text-left capitalize first:pl-3">
                    <Badge v-if="transaction.status === 'successful'" variant="success">
                      {{ transaction.status }}
                    </Badge>

                    <Badge v-if="transaction.status === 'refund'" variant="critical">
                      {{ transaction.status }}
                    </Badge>
                  </td>

                  <td
                    class="max-w-[100px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3"
                  >
                    <Body size="lg" weight="medium"> {{ transaction.totalPrice }} </Body>
                  </td>

                  <td
                    class="max-w-[140px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3"
                  >
                    <Body size="lg" weight="medium"> {{ transaction.transactionDate }} </Body>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Pagination -->
        <Pagination />
      </section>
    </div>
  </DashboardLayout>
</template>
