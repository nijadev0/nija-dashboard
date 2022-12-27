<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import Button from '$components/atoms/Button.vue'
import Title from '$components/atoms/Title.vue'
import Body from '$components/atoms/Body.vue'
import Pagination from '$components/organisms/Pagination.vue'
import PageAction from '$components/organisms/PageAction.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'

import { SortAscending, Funnel, Check, XMark, Trash } from '$assets/icons'
import Modal from '$components/organisms/Modal.vue'
import Toast from '$components/organisms/Toast.vue'

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
</script>

<template>
  <DashboardLayout title="Customers">
    <div class="Customers min-h-[480px] w-full rounded-lg bg-white p-6 2xl:rounded-large">
      <!-- Heading -->
      <div class="Heading mb-6 flex w-full items-center justify-between 2xl:mb-8">
        <Title variant="default"> Users </Title>

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

      <!-- Table Users -->
      <section class="TableUsers mb-6 w-full">
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
                  <Body size="md" weight="medium"> Name </Body>
                </th>
                <th
                  class="min-w-[160px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Email Address </Body>
                </th>
                <th
                  class="max-w-[180px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Complete Address</Body>
                </th>
                <th
                  class="max-w-[130px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Created At </Body>
                </th>
                <th
                  class="max-w-[180px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Last Activity </Body>
                </th>
                <th
                  class="w-px whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Action </Body>
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

                <td class="min-w-[180px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ user.name }} </Body>
                </td>

                <td class="min-w-[160px] py-6 px-6 text-left text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ user.email }} </Body>
                </td>

                <td class="max-w-[180px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ user.address }}
                  </Body>
                </td>

                <td class="max-w-[130px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ user.createAt }} </Body>
                </td>

                <td class="max-w-[180px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ user.date }} </Body>
                </td>

                <td class="w-px py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <button
                    class="text-primary-main"
                    @click="$router.push('/customers/users/detail')"
                  >
                    <Body size="lg" weight="semibold"> Detail </Body>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Pagination : Home -->
      <Pagination />
    </div>

    <!-- Page Action : Home -->
    <template #PageAction>
      <PageAction
        v-if="checkboxRef"
        variant="deleteOnly"
        :is-selected="checkboxRef"
        :open-modal="openModalDelete"
      />
    </template>

    <!-- Modal Delete : Home -->
    <template #Modal>
      <Modal :modal-ref="modalRef" :close-modal="closeModalDelete" :open-toast="openToastDelete" />
    </template>

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
