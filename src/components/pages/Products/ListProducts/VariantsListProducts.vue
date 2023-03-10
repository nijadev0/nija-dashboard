<script lang="ts" setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import Body from '$components/atoms/Body.vue'
import Button from '$components/atoms/Button.vue'
import Input from '$components/atoms/Input.vue'
import Select from '$components/atoms/Select.vue'
import Title from '$components/atoms/Title.vue'
import Toggle from '$components/atoms/Toggle.vue'

import Pagination from '$components/organisms/Pagination.vue'
import UploadImageEmpty from '$components/organisms/Modal/UploadImageEmpty.vue'

import DashboardLayout from '$components/templates/DashboardLayout.vue'

import { Check, Plus, Trash } from '$assets/icons'
import UploadImageFilled from '$components/organisms/Modal/UploadImageFilled.vue'
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

/**
 * ==========================
 * Modal Empty Upload Image
 * ==========================
 */
const isOpenModalEmptyRef = ref(false)

function openModalEmpty() {
  isOpenModalEmptyRef.value = true
}

function closeModalEmpty() {
  isOpenModalEmptyRef.value = false
}

/**
 * ==========================
 * Modal Filled Upload Image
 * ==========================
 */
const isOpenModalFilledRef = ref(false)

function openModalFilled() {
  isOpenModalEmptyRef.value = false
  isOpenModalFilledRef.value = true
}

function closeModalFilled() {
  isOpenModalFilledRef.value = false
}

/**
 * =======================
 * Checkbox Ref
 * =======================
 */
const toastSavedRef = ref(false)

function closeToastSaved() {
  toastSavedRef.value = false
}

function openToastSaved() {
  isOpenModalFilledRef.value = false
  toastSavedRef.value = true
}
</script>

<template>
  <DashboardLayout title="Products">
    <div class="Buyers relative min-h-[480px] w-full rounded-large bg-white p-6">
      <!-- Heading -->
      <div class="Heading mb-6 flex w-full items-center justify-between 2xl:mb-8">
        <Title variant="default"> Buyers </Title>

        <div class="Cta flex gap-3">
          <!-- <Button
            v-if="checkboxRef"
            type="click"
            variant="error"
            modifier="outlineError"
            size="medium"
          >
            Delete Variant
          </Button> -->

          <Button type="click" variant="primary" modifier="defaultPrimary" size="medium">
            <Plus class="h-4 w-4 stroke-[4px] text-white" />
            Add Variant
          </Button>
        </div>
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
                  class="w-px py-3 pr-3 text-left capitalize text-netral-80 first:pl-3 2xl:px-6 2xl:py-4"
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
                  class="max-w-[72px] whitespace-nowrap px-3 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:max-w-[80px] 2xl:px-6 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Image </Body>
                </th>

                <th
                  class="max-w-[140px] whitespace-nowrap px-3 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:px-6 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Color </Body>
                </th>

                <th
                  class="max-w-[140px] whitespace-nowrap px-3 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:px-6 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Size </Body>
                </th>
                <th
                  class="max-w-[140px] whitespace-nowrap px-3 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:px-6 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Stock </Body>
                </th>

                <th
                  class="max-w-[140px] whitespace-nowrap px-3 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:px-6 2xl:py-4"
                >
                  <Body size="md" weight="medium"> SKU </Body>
                </th>

                <th
                  class="max-w-[70px] whitespace-nowrap px-3 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:px-6 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Status </Body>
                </th>

                <th
                  class="w-px whitespace-nowrap px-3 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:px-6 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Action </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Users: Body -->
            <tbody class="TableBody relative w-full">
              <tr v-for="user in usersData" class="border-b border-netral-20 last:border-netral-30">
                <td
                  class="w-px py-3 pr-3 text-left capitalize text-netral-80 first:pl-3 2xl:px-6 2xl:py-4"
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

                <td
                  class="max-w-[72px] py-6 px-3 text-left capitalize text-netral-80 first:pl-3 2xl:max-w-[80px] 2xl:px-6"
                >
                  <div
                    class="h-16 w-16 rounded-large bg-netral-30 2xl:h-20 2xl:w-20 2xl:max-w-[80px]"
                  ></div>
                </td>

                <td class="max-w-[140px] py-6 px-3 text-left text-netral-80 first:pl-3 2xl:px-6">
                  <Select :select-data="colorsData" />
                </td>

                <td
                  class="max-w-[140px] py-6 px-3 text-left capitalize text-netral-80 first:pl-3 2xl:px-6"
                >
                  <Body size="lg" weight="medium">
                    <Select variant="relax" :select-data="sizesData" />
                  </Body>
                </td>

                <td
                  class="max-w-[140px] py-6 px-3 text-left capitalize text-netral-80 first:pl-3 2xl:px-6"
                >
                  <Input
                    variant="base"
                    input-type="number"
                    name="ProductDiscount"
                    placeholder="0"
                  />
                </td>

                <td
                  class="max-w-[140px] py-6 px-3 text-left capitalize text-netral-80 first:pl-3 2xl:px-6"
                >
                  <Input
                    variant="base"
                    input-type="number"
                    name="ProductDiscount"
                    placeholder="0"
                  />
                </td>

                <td
                  class="max-w-[70px] py-6 px-3 text-left capitalize text-netral-80 first:pl-3 2xl:px-6"
                >
                  <Toggle />
                </td>

                <td class="w-px py-6 px-3 text-left capitalize text-netral-80 first:pl-3 2xl:px-6">
                  <Button
                    type="click"
                    :on-click="openModalEmpty"
                    variant="primary"
                    modifier="outlinePrimary"
                    size="medium"
                  >
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

    <template #Modal>
      <UploadImageEmpty
        :isOpenRef="isOpenModalEmptyRef"
        :closeModal="closeModalEmpty"
        :next-click="openModalFilled"
      />

      <UploadImageFilled
        :isOpenRef="isOpenModalFilledRef"
        :closeModal="closeModalFilled"
        :next-click="openToastSaved"
      />
    </template>

    <template #Toast>
      <Toast
        :toast-ref="toastSavedRef"
        :close-toast="closeToastSaved"
        variant="saved"
        heading="Image has been uploaded"
        description="You have successfully added an image for your product variant."
      />
    </template>
  </DashboardLayout>
</template>
