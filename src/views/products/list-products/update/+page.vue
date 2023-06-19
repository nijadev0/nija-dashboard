<script lang="ts" setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel, Switch } from '@headlessui/vue'

import { DashboardLayout } from '$components/templates'
import { PageAction, Toast } from '$components/organisms'
import { UploadImageEmpty, UploadImageFilled } from '$components/organisms/Modal'
import { Body, Button, Input, Select, TextArea, Title, Toggle } from '$components/atoms'

import { Check, MagnifyingGlass, Plus, UploadSimple } from '$assets/icons'


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
 * Dummy Data: Category
 * =================
 */
const categoriesData = [
  { id: 1, name: 'Select Category', disable: true },
  { id: 2, name: 'Outer' },
  { id: 3, name: 'Sweater' },
  { id: 4, name: 'Kids' },
]

/**
 * =================
 * Dummy Data: Gender
 * =================
 */
const genderData = [
  { id: 1, name: 'Select Gender', disable: true },
  { id: 2, name: 'Male' },
  { id: 3, name: 'Female' },
]

/**
 * =================
 * Dummy Data: Discount Type
 * =================
 */
const discountTypeData = [
  { id: 1, name: 'Select Type', disable: true },
  { id: 3, name: 'Discount' },
  { id: 4, name: 'Fixed Price' },
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
  <DashboardLayout title="Product">
    <div class="Buyers relative w-full rounded-t-large bg-white p-6 pb-8">
      <!-- Heading -->
      <Title variant="default"> Product Information </Title>
    </div>

    <TabGroup>
      <TabList class="bg-white px-6">
        <div class="space-x-5 border-b border-b-netral-30">
          <Tab
            class="border-b-2 border-transparent p-2.5 outline-none ui-selected:border-b-2 ui-selected:border-b-netral-100"
          >
            <Body size="lg" weight="medium"> Detail Information </Body>
          </Tab>

          <Tab
            class="border-b-2 border-transparent p-2.5 outline-none ui-selected:border-b-2 ui-selected:border-b-netral-100"
          >
            <Body size="lg" weight="medium"> Variants </Body>
          </Tab>
        </div>
      </TabList>

      <TabPanels>
        <TabPanel class="">
          <section class="rounded-b-large bg-white px-6">
            <div class="flex items-start justify-between border-y border-netral-20 pb-7 pt-8">
              <div class="flex w-64 flex-col items-start gap-2">
                <Body size="lg" weight="semibold"> Product Name </Body>
                <Body size="md" weight="regular" class="text-netral-50">
                  Do not exceed 20 characters when entering the product name.
                </Body>
              </div>

              <div class="w-full max-w-xl 2xl:max-w-4xl">
                <Input
                  variant="base"
                  input-type="text"
                  name="ProductName"
                  placeholder="Women's Clothing Azure"
                />
              </div>
            </div>

            <div class="flex items-start justify-between border-b border-netral-20 py-7">
              <div class="flex w-64 flex-col items-start gap-2">
                <Body size="lg" weight="semibold"> Description </Body>
                <Body size="md" weight="regular" class="text-netral-50">
                  Set a description on product to detail your product and better visibility
                </Body>
              </div>

              <div class="w-full max-w-xl 2xl:max-w-4xl">
                <TextArea name="ProductDescription" placeholder="Description" />
              </div>
            </div>

            <div class="flex items-start justify-between border-b border-netral-20 py-7">
              <div class="flex w-64 flex-col items-start gap-2">
                <Body size="lg" weight="semibold"> Category </Body>
                <Body size="md" weight="regular" class="text-netral-50">
                  Please select your product category from the list provided
                </Body>
              </div>

              <div class="w-full max-w-xl 2xl:max-w-4xl">
                <Select variant="relax" :select-data="categoriesData" />
              </div>
            </div>

            <div class="flex items-start justify-between border-b border-netral-20 py-7">
              <div class="flex w-64 flex-col items-start gap-2">
                <Body size="lg" weight="semibold"> Gender </Body>
                <Body size="md" weight="regular" class="text-netral-50">
                  Set the gender for this product
                </Body>
              </div>

              <div class="w-full max-w-xl 2xl:max-w-4xl">
                <Select variant="relax" :select-data="genderData" />
              </div>
            </div>

            <div class="flex items-start justify-between border-b border-netral-20 py-7">
              <div class="flex w-64 flex-col items-start gap-2">
                <Body size="lg" weight="semibold"> Weight </Body>
              </div>

              <div class="w-full max-w-xl 2xl:max-w-4xl">
                <Input variant="weight" input-type="text" name="ProductName" placeholder="000" />
              </div>
            </div>

            <div class="flex items-start justify-between border-b border-netral-20 py-7">
              <div class="flex w-64 flex-col items-start gap-2">
                <Body size="lg" weight="semibold"> Status </Body>
                <Body size="md" weight="regular" class="text-netral-50">
                  Set a status for your product to determine whether your product is displayed or
                  not
                </Body>
              </div>

              <div class="w-full max-w-xl 2xl:max-w-4xl">
                <Toggle />
              </div>
            </div>

            <div class="flex items-start justify-between py-7">
              <div class="flex w-64 flex-col items-start gap-2">
                <Body size="lg" weight="semibold"> Photo Product </Body>
                <Body size="md" weight="regular" class="text-netral-50">
                  Recommended minimum width 1080px X 1080px, with a max size of 5MB, only *.png,
                  *.jpg and *.jpeg image files are accepted
                </Body>
              </div>

              <div class="flex w-full max-w-xl gap-4 2xl:max-w-4xl 2xl:gap-6">
                <div
                  v-for="item in [1, 2, 3, 4]"
                  class="flex w-fit flex-col items-center justify-center gap-2 rounded-large border-2 border-dashed border-netral-30 bg-[#fafafa] px-3 py-4 2xl:px-7 2xl:py-8"
                >
                  <UploadSimple class="h-8 w-8 stroke-[2px] text-netral-40" />
                  <Button type="click" variant="primary" modifier="defaultPrimary" size="small">
                    Add Image
                  </Button>

                  <Body
                    size="sm"
                    weight="regular"
                    class="mt-2 max-w-[118px] text-center capitalize tracking-wide text-netral-60"
                  >
                    or drop image to upload
                  </Body>
                </div>
              </div>
            </div>
          </section>

          <section class="Products mt-6 rounded-large bg-white p-6">
            <div class="Wrap w-full">
              <!-- Heading -->
              <Title variant="default" class="mb-7"> Price </Title>

              <div class="flex items-start justify-between border-y border-netral-20 py-7">
                <div class="flex w-64 flex-col items-start gap-2">
                  <Body size="lg" weight="semibold"> Set Discount </Body>
                  <Body size="md" weight="regular" class="text-netral-50">
                    Please fill in how many discounts you will give for this products.
                  </Body>
                </div>

                <div class="w-full max-w-xl 2xl:max-w-4xl">
                  <Input
                    variant="price"
                    input-type="number"
                    name="ProductPrice"
                    placeholder="Rp. 0,-"
                  />
                </div>
              </div>

              <div class="flex items-start justify-between border-b border-netral-20 py-7">
                <div class="flex w-64 flex-col items-start gap-2">
                  <Body size="lg" weight="semibold"> Discount Type </Body>
                  <Body size="md" weight="regular" class="text-netral-50">
                    Set your discount type. You can choose the type of discount with a percent or
                    cash discount.
                  </Body>
                </div>

                <div class="w-full max-w-xl 2xl:max-w-4xl">
                  <Select variant="relax" :select-data="discountTypeData" />
                </div>
              </div>

              <div class="flex items-start justify-between py-7">
                <div class="flex w-64 flex-col items-start gap-2">
                  <Body size="lg" weight="semibold"> Set Discount </Body>
                  <Body size="md" weight="regular" class="text-netral-50">
                    Please fill in how many discounts you will give for this products.
                  </Body>
                </div>

                <div class="w-full max-w-xl 2xl:max-w-4xl">
                  <Input
                    variant="base"
                    input-type="number"
                    name="ProductDiscount"
                    placeholder="Enter nominal discount"
                  />
                </div>
              </div>
            </div>
          </section>
        </TabPanel>

        <TabPanel>
          <section class="rounded-b-large bg-white px-6 pb-6 pt-7">
            <div class="flex items-end justify-between pb-7">
              <nav class="Search relative">
                <input
                  type="text"
                  class="max-w-md rounded-large bg-netral-20 px-3.5 py-2 pl-10 text-xs outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main 2xl:py-3 2xl:pl-11 2xl:text-sm"
                  placeholder="Search"
                />

                <MagnifyingGlass
                  class="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 stroke-2 text-netral-80 2xl:h-5 2xl:w-5"
                />
              </nav>
              <Button type="click" variant="primary" modifier="defaultPrimary" size="medium">
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
                        class="w-px py-3 pr-3 text-left capitalize text-netral-80 first:pl-3 2xl:px-6 2xl:py-4"
                      >
                        <Switch
                          v-model="checkboxRef"
                          class="Checkbox flex items-center gap-2 outline-none"
                        >
                          <div
                            class="Wrapper relative flex h-4 w-4 items-center justify-between gap-2.5 rounded-md border outline-none 2xl:h-5 2xl:w-5"
                            :class="
                              checkboxRef
                                ? 'border-primary-border bg-primary-main'
                                : 'border-netral-60'
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
                    <tr
                      v-for="user in usersData"
                      class="border-b border-netral-20 last:border-netral-30"
                    >
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
                              checkboxRef
                                ? 'border-primary-border bg-primary-main'
                                : 'border-netral-60'
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
                        class="max-w-[72px] px-3 py-6 text-left capitalize text-netral-80 first:pl-3 2xl:max-w-[80px] 2xl:px-6"
                      >
                        <div
                          class="h-16 w-16 rounded-large bg-netral-30 2xl:h-20 2xl:w-20 2xl:max-w-[80px]"
                        ></div>
                      </td>

                      <td
                        class="max-w-[140px] px-3 py-6 text-left text-netral-80 first:pl-3 2xl:px-6"
                      >
                        <Select variant="relax" :select-data="colorsData" />
                      </td>

                      <td
                        class="max-w-[140px] px-3 py-6 text-left capitalize text-netral-80 first:pl-3 2xl:px-6"
                      >
                        <Body size="lg" weight="medium">
                          <Select variant="relax" :select-data="sizesData" />
                        </Body>
                      </td>

                      <td
                        class="max-w-[140px] px-3 py-6 text-left capitalize text-netral-80 first:pl-3 2xl:px-6"
                      >
                        <Input
                          variant="base"
                          input-type="number"
                          name="ProductDiscount"
                          placeholder="0"
                        />
                      </td>

                      <td
                        class="max-w-[140px] px-3 py-6 text-left capitalize text-netral-80 first:pl-3 2xl:px-6"
                      >
                        <Input
                          variant="base"
                          input-type="number"
                          name="ProductDiscount"
                          placeholder="0"
                        />
                      </td>

                      <td
                        class="max-w-[70px] px-3 py-6 text-left capitalize text-netral-80 first:pl-3 2xl:px-6"
                      >
                        <Toggle />
                      </td>

                      <td
                        class="w-px px-3 py-6 text-left capitalize text-netral-80 first:pl-3 2xl:px-6"
                      >
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
          </section>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <!-- Page Action : Home -->
    <template #PageAction>
      <PageAction
        v-if="true"
        variant="saveDiscard"
        :is-selected="true"
        go-to="/products/list-products/empty-variants"
      />
    </template>

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
