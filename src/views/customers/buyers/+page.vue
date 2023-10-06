<script lang="ts" setup>
import { ref } from 'vue'

import { DashboardLayout } from '$components/templates'
import { Body, Button, Title } from '$components/atoms'
import { Pagination } from '$components/organisms'

import { Funnel, SortAscending } from '$assets/icons'
/**
 * =======================
 * Dummy Data - Users
 * =======================
 */
const buyersData = [
  {
    name: 'Samanta Legend',
    email: 'samanta@mail.com',
    phoneNumber: '(307) 555-0133',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    lastTransaction: 'May 31, 2015',
  },
  {
    name: 'Jenny Wilson',
    email: 'jenny@mail.com',
    phoneNumber: '(205) 555-0100',
    address: '2715 Ash Dr. San Jose, South Dakota 83475',
    lastTransaction: 'October 25, 2019',
  },
  {
    name: 'Ronald Richards',
    email: 'rrichards@mail.com',
    phoneNumber: '(207) 555-0119',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    lastTransaction: 'May 20, 2015',
  },
  {
    name: 'Annette Black',
    email: 'blackann@mail.com',
    phoneNumber: '(252) 555-0126',
    address: '6391 Elgin St. Celina, Delaware 10299',
    lastTransaction: 'August 24, 2013',
  },
  {
    name: 'Kristin Watson',
    email: 'kristinw@mail.com',
    phoneNumber: '(217) 555-0113',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    lastTransaction: 'September 9, 2013',
  },
  {
    name: 'Jacob Jones',
    email: 'jjones2@mail.com',
    phoneNumber: '(702) 555-0122',
    address: '3891 Ranchview Dr. Richardson, California 62639',
    lastTransaction: 'August 2, 2013',
  },
]
</script>

<template>
  <DashboardLayout title="Buyers">
    <!-- Buyers -->
    <div class="Buyers min-h-[480px] w-full rounded-large bg-white p-6">
      <!-- Heading -->
      <div class="Heading mb-6 flex w-full items-center justify-between 2xl:mb-8">
        <Title variant="default"> Buyers </Title>

        <div class="Cta flex gap-2">
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
      <section  class="TableUsers mb-6 w-full">
        <!-- Table Buyers -->
        <div class="Wrap relative w-full overflow-x-auto">
          <table class="Table w-full table-auto">
            <!-- Table Buyers: Head -->
            <thead class="TableHead w-full rounded-large bg-[#FAFAFA]">
              <tr>
                <th
                  class="max-w-[130px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Name </Body>
                </th>
                <th
                  class="max-w-[160px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Email Address </Body>
                </th>
                <th
                  class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Phone Number </Body>
                </th>
                <th
                  class="max-w-[160px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Complete Address </Body>
                </th>
                <th
                  class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Last Transaction </Body>
                </th>
                <th
                  class="w-px whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Action </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Buyers: Body -->
            <tbody class="TableBody relative w-full">
              <tr
                v-for="buyer in buyersData"
                class="border-b border-netral-20 last:border-netral-30"
              >
                <td class="max-w-[130px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ buyer.name }} </Body>
                </td>

                <td class="max-w-[160px] py-6 px-6 text-left text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ buyer.email }} </Body>
                </td>

                <td class="max-w-[140px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ buyer.phoneNumber }}
                  </Body>
                </td>

                <td class="max-w-[160px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ buyer.address }} </Body>
                </td>

                <td class="max-w-[140px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ buyer.lastTransaction }} </Body>
                </td>

                <td class="w-px py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <button
                    class="text-primary-main"
                    @click="$router.push('/customers/buyers/detail')"
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
  </DashboardLayout>
</template>
