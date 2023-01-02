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
    <div class="Buyers w-full rounded-large bg-white p-6">
      <!-- Heading -->
      <div class="Heading mb-6 flex w-full items-center justify-between 2xl:mb-8">
        <Title variant="default"> Variants </Title>

        <Button type="click" variant="primary" modifier="defaultPrimary" size="medium">
          <Plus class="h-4 w-4 stroke-[4px] text-white" />
          Add Variant
        </Button>
      </div>

      <div class="flex min-h-[480px] w-full items-center justify-center 2xl:min-h-[560px]">
        <div class="flex max-w-xl flex-col items-center gap-6 2xl:max-w-2xl">
          <div class="h-48 w-48 rounded-large bg-netral-30 2xl:h-64 2xl:w-64" />
          <Body size="lg" weight="regular" class="text-center">
            Product variety refers to the number and range of products (differentiated by
            specifications) offered by sellers. And also product variety is beneficial for consumers
            because they can choose from a variety of alternatives.
          </Body>

          <div class="w-full max-w-[160px] 2xl:max-w-[240px]">
            <Button type="goto" go-to="/products/list-products/variants"> Add Variant </Button>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
