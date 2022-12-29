<script lang="ts" setup>
import { Check, Plus } from '$assets/icons'
import Body from '$components/atoms/Body.vue'
import Button from '$components/atoms/Button.vue'
import Checkbox from '$components/atoms/Checkbox.vue'
import Input from '$components/atoms/Input.vue'
import Select from '$components/atoms/Select.vue'
import Title from '$components/atoms/Title.vue'
import Toggle from '$components/atoms/Toggle.vue'
import Pagination from '$components/organisms/Pagination.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'
import { Switch } from '@headlessui/vue'
import { ref } from 'vue'

/**
 * =======================
 * Dummy Data - Users
 * =======================
 */
const usersData = [
  {
    name: 'Samanta Legend',
    email: 'samanta@mail.com',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    createAt: 'Orange',
    date: 'May 6, 2012',
  },
  {
    name: 'Annette Black',
    email: 'annette1@mail.com',
    address: '3517 W. Gray St. Utica, Pennsylvania 57867',
    createAt: 'Toledo',
    date: 'April 28, 2016',
  },
  {
    name: 'Dianne Russell',
    email: 'rdianne@mail.com',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    createAt: 'Naperville',
    date: 'November 16, 2014',
  },
  {
    name: 'Devon Lane',
    email: 'delane@mail.com',
    address: '2464 Royal Ln. Mesa, New Jersey 45463',
    createAt: 'Fairfield',
    date: 'March 23, 2013',
  },
  {
    name: 'Marvin McKinney',
    email: 'marvin5@mail.com',
    address: '3891 Ranchview Dr. Richardson, California 62639',
    createAt: 'Austin',
    date: 'November 16, 2014',
  },
  {
    name: 'Jerome Bell',
    email: 'belljer@mail.com',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    createAt: 'Orange',
    date: 'March 23, 2013',
  },
]

/**
 * =================
 * Dummy Data: Color
 * =================
 */
const colorsData = [
  { id: 1, name: 'Select', disable: true },
  { id: 2, name: 'Red' },
  { id: 3, name: 'Green' },
  { id: 4, name: 'Blue' },
]

/**
 * =================
 * Dummy Data: Size
 * =================
 */
const sizesData = [
  { id: 1, name: 'Select', disable: true },
  { id: 2, name: 'S' },
  { id: 3, name: 'M' },
  { id: 4, name: 'L' },
  { id: 5, name: 'XL' },
]

/**
 * =======================
 * Checkbox Ref
 * =======================
 */
const checkboxRef = ref(false)
</script>

<template>
  <DashboardLayout title="Products">
    <div class="Buyers min-h-[480px] w-full rounded-large bg-white p-6">
      <!-- Heading -->
      <div class="Heading mb-6 flex w-full items-center justify-between 2xl:mb-8">
        <Title variant="default"> Buyers </Title>

        <Button
          type="click"
          variant="primary"
          modifier="defaultPrimary"
          size="medium"
          class="text-white"
        >
          <Plus class="h-4 w-4 stroke-[4px] text-white" />
          Add Variant
        </Button>
      </div>

      <!-- Table Users -->
      <section class="TableUsers mb-6 w-full">
        <!-- Table Users -->
        <div class="Wrapper relative w-full">
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
                  class="max-w-[90px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Image </Body>
                </th>
                <th
                  class="min-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Color </Body>
                </th>
                <th
                  class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Size </Body>
                </th>
                <th
                  class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Stock </Body>
                </th>
                <th
                  class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> SKU </Body>
                </th>

                <th
                  class="max-w-[70px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Status </Body>
                </th>

                <th
                  class="w-px whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Action </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Users: Body -->
            <tbody class="TableBody relative w-full">
              <tr v-for="user in usersData" class="border-b border-netral-20 last:border-netral-30">
                <td
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
                </td>

                <td class="max-w-[90px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <div class="h-20 w-20 rounded-large bg-netral-30"></div>
                </td>

                <td class="max-w-[140px] py-6 px-6 text-left text-netral-80 first:pl-3">
                  <Select :select-data="colorsData" />
                </td>

                <td class="max-w-[140px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    <Select :select-data="sizesData" />
                  </Body>
                </td>

                <td class="max-w-[140px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Input
                    variant="base"
                    input-type="number"
                    name="ProductDiscount"
                    placeholder="0"
                  />
                </td>

                <td class="max-w-[140px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Input
                    variant="base"
                    input-type="number"
                    name="ProductDiscount"
                    placeholder="0"
                  />
                </td>

                <td class="max-w-[70px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Toggle />
                </td>

                <td class="w-px py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Button type="click" variant="primary" modifier="outlinePrimary" size="medium">
                    Add Image
                  </Button>
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
