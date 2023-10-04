<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import { Button, Body, Title } from '$components/atoms'

import { Modal, Pagination, PageAction, Toast, EmptyState } from '$components/organisms'

import { DashboardLayout } from '$components/templates'

import { SortAscending, Funnel, Check, UserPlus, MagnifyingGlass, Storefront } from '$assets/icons'
import { NoUserRolesIll } from '$assets/illustrations'

/**
 * =======================
 * Dummy Data - Users
 * =======================
 */
const usersData = [
  {
    name: 'Samanta Legend',
    email: 'samanta@mail.com',
    role: 'Super Admin',
    phone: '(603) 555-0123',
    date: 'May 6, 2012',
  },
  {
    name: 'Annette Black',
    email: 'annette1@mail.com',
    role: 'Admin',
    phone: '(239) 555-0108',
    date: 'April 28, 2016',
  },
  {
    name: 'Dianne Russell',
    email: 'rdianne@mail.com',
    role: 'Cashier',
    phone: '(208) 555-0112',
    date: 'November 16, 2014',
  },
  {
    name: 'Devon Lane',
    email: 'delane@mail.com',
    role: 'Admin',
    phone: '(219) 555-0114',
    date: 'March 23, 2013',
  },
  {
    name: 'Marvin McKinney',
    email: 'marvin5@mail.com',
    role: 'Cashier',
    phone: '(208) 555-0112',
    date: 'November 16, 2014',
  },
  {
    name: 'Jerome Bell',
    email: 'belljer@mail.com',
    role: 'Cashier',
    phone: '(704) 555-0127',
    date: 'March 23, 2013',
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
 * Empty State
 */
const isEmptyState = ref(true)

const toggleEmpty = () => {
  isEmptyState.value = false
}
</script>

<template>
  <DashboardLayout title="User Role">
    <div class="Customers min-h-[480px] w-full rounded-large bg-white p-6">
      <div class="Heading mb-6 space-y-8 2xl:mb-8">
        <Title variant="default"> Outlet List </Title>

        <div class="Action flex items-end justify-between">
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

          <!-- Cta -->
          <Button
            type="goto"
            link-href="/outlets/add"
            variant="primary"
            modifier="defaultPrimary"
            href
          >
            <Storefront class="h-4 w-4 stroke-[2.5px] text-white 2xl:h-5 2xl:w-5" />
            Add Outlet
          </Button>
        </div>
      </div>
      <!-- Empty State -->
      <EmptyState
        v-if="isEmptyState"
        :toggle-empty="toggleEmpty"
        title="No user roles list"
        desc="The user roles you are looking for is not available."
      >
        <NoUserRolesIll class="h-60 w-60" />
      </EmptyState>

      <!-- Table Users -->
      <section v-if="!isEmptyState" class="TableUsers mb-6 w-full">
        <!-- Table Users -->
        <div class="Wrapper relative w-full overflow-x-auto">
          <table class="Table w-full table-auto">
            <!-- Table Users: Head -->
            <thead class="THead w-full rounded-lg bg-[#FAFAFA] 2xl:rounded-large">
              <tr>
                <th class="w-px px-6 py-3 text-left capitalize text-netral-80 first:pl-3 2xl:py-4">
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
                  class="max-w-[180px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> User Name </Body>
                </th>

                <th
                  class="max-w-[160px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Email Address </Body>
                </th>

                <th
                  class="max-w-[150px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> User Role </Body>
                </th>

                <th
                  class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Phone Number </Body>
                </th>

                <th
                  class="max-w-[120px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Date Add </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Users: Body -->
            <tbody class="TBody relative w-full">
              <tr v-for="user in usersData" class="border-b border-netral-20 last:border-netral-30">
                <td class="w-px px-6 py-4 text-left capitalize text-netral-80 first:pl-3">
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

                <td class="max-w-[180px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ user.name }} </Body>
                </td>

                <td class="max-w-[160px] px-6 py-6 text-left text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ user.email }} </Body>
                </td>

                <td class="max-w-[150px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ user.role }}
                  </Body>
                </td>

                <td class="max-w-[140px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ user.phone }} </Body>
                </td>

                <td class="max-w-[120px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ user.date }} </Body>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Pagination : Home -->
      <Pagination v-if="!isEmptyState" />
    </div>

    <!-- Page Action : Home -->
    <!-- v-if="checkboxRef" -->
    <template #PageAction>
      <PageAction :is-selected="checkboxRef" variant="deleteOnly" :open-modal="openModalDelete" />
    </template>

    <!-- Modal Delete : Home -->
    <template #Modal>
      <Modal
        :modal-ref="modalRef"
        :close-modal="closeModalDelete"
        :open-toast="openToastDelete"
        variant="delete"
        title="Delete User"
        description="Are you sure want to delete this user role? User which already deleted can not be recovered."
      />
    </template>

    <!-- Toast Delete : Home -->
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
