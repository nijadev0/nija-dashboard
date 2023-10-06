<script lang="ts" setup>
import { ref } from 'vue'

import { Pagination } from '$components/organisms'
import { DashboardLayout } from '$components/templates'
import { Badge, Body, Button, Input, Title } from '$components/atoms'

import { Funnel, MagnifyingGlass, SortAscending, UploadSimple } from '$assets/icons'

/**
 * Dummy data - Manage Returns
 */
const manageReturnsData = [
  {
    transactionNumber: '430906237494',
    customerName: 'Jane Cooper',
    purchasedProduct: "Women's Clothing Azure",
    date: '20 Oct 2022',
    phoneNumber: '+62878981239',
    paymentAmount: '$123',
    status: 'warning',
  },
  {
    transactionNumber: '387492287349',
    customerName: 'Wade Warren',
    purchasedProduct: "Women's Clothing Azure",
    date: '20 Oct 2022',
    phoneNumber: '+62878981239',
    paymentAmount: '$236',
    status: 'success',
  },
  {
    transactionNumber: '093420239402',
    customerName: 'Williamson',
    purchasedProduct: "Women's Clothing Azure",
    date: '20 Oct 2022',
    phoneNumber: '+62878981239',
    paymentAmount: '$726',
    status: 'success',
  },
  {
    transactionNumber: '934850829349',
    customerName: 'Jenny Wilson',
    purchasedProduct: "Women's Clothing Azure",
    date: '20 Oct 2022',
    phoneNumber: '+62878981239',
    paymentAmount: '$124',
    status: 'reject',
  },
  {
    transactionNumber: '293840029340',
    customerName: 'Williamson',
    purchasedProduct: "Women's Clothing Azure",
    date: '20 Oct 2022',
    phoneNumber: '+62878981239',
    paymentAmount: '$149',
    status: 'success',
  },
  {
    transactionNumber: '394024029340',
    customerName: 'Robert Fox',
    purchasedProduct: "Women's Clothing Azure",
    date: '20 Oct 2022',
    phoneNumber: '+62878981239',
    paymentAmount: '$152',
    status: 'success',
  },
  {
    transactionNumber: '340394023940',
    customerName: 'Robert Fox',
    purchasedProduct: "Women's Clothing Azure",
    date: '20 Oct 2022',
    phoneNumber: '+62878981239',
    paymentAmount: '$214',
    status: 'reject',
  },
]
</script>

<template>
  <DashboardLayout title="Manage Returns">
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
          <Button type="click" variant="primary" modifier="outlinePrimary">
            <UploadSimple class="h-4 w-4 stroke-[4px] text-primary-main" />
            Export
          </Button>

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


      <!-- Table Categories -->
      <section class="TableListProducts mb-6 w-full">
        <!-- Table Categories -->
        <div class="Wrap relative w-full overflow-x-auto">
          <table class="Table w-full table-fixed">
            <!-- Table Categories: Head -->
            <thead class="TableHead w-full rounded-lg bg-[#FAFAFA] 2xl:rounded-large">
              <tr>
                <th
                  class="w-[180px] whitespace-nowrap px-2 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Transaction Number </Body>
                </th>

                <th
                  class="w-[140px] whitespace-nowrap px-2 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Customer Name </Body>
                </th>

                <th
                  class="w-[170px] whitespace-nowrap px-2 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Purchased Product </Body>
                </th>

                <th
                  class="w-[120px] whitespace-nowrap px-2 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Date </Body>
                </th>

                <th
                  class="w-[120px] whitespace-nowrap px-2 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Phone Number </Body>
                </th>

                <th
                  class="w-[80px] whitespace-nowrap px-2 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Amount </Body>
                </th>

                <th
                  class="w-[80px] whitespace-nowrap px-2 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Status</Body>
                </th>

                <th
                  class="w-[60px] whitespace-nowrap px-2 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
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
                <td class="w-[180px] px-2 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.transactionNumber }}
                  </Body>
                </td>

                <td class="w-[140px] px-2 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.customerName }}
                  </Body>
                </td>

                <td class="w-[170px] px-2 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.purchasedProduct }}
                  </Body>
                </td>

                <td class="w-[120px] px-2 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.date }}
                  </Body>
                </td>

                <td class="w-[120px] px-2 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.phoneNumber }}
                  </Body>
                </td>

                <td class="w-[80px] px-2 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ product.paymentAmount }}
                  </Body>
                </td>

                <td class="w-[80px] px-2 py-6 text-left capitalize text-netral-80 first:pl-3">
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

                <td class="w-[60px] px-2 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <button
                    class="text-primary-main"
                    @click="$router.push('/transactions/returns/approve')"
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
    </section>
  </DashboardLayout>
</template>
