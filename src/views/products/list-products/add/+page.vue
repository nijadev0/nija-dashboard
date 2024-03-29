<script lang="ts" setup>
import { ref } from 'vue'

import { DashboardLayout } from '$components/templates'
import { PageAction, Toast } from '$components/organisms'
import { Body, Button, Input, Select, TextArea, Title, Toggle } from '$components/atoms'

import { UploadSimple, Trash } from '$assets/icons'

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
 * Toast
 * =================
 */
const toastRef = ref(false)

function openToastDelete() {
  toastRef.value = true
}

function closeToastDelete() {
  toastRef.value = false
}

/**
 * =================
 * Upload Image filled
 * =================
 */
const isShowUploader = ref(false)

const toggleUploader = () => {
  isShowUploader.value = true
}
</script>

<template>
  <DashboardLayout title="Add Product">
    <section class="Products mb-6 rounded-large bg-white p-6">
      <div class="Wrap min-h-[480px] w-full">
        <!-- Heading -->
        <Title variant="default" class="mb-7"> Product Information </Title>

        <div class="flex items-start justify-between border-y border-netral-20 py-7">
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
            <TextArea
              type="default"
              variant="default"
              name="ProductDescription"
              placeholder="Description"
            />
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
              Set a status for your product to determine whether your product is displayed or not
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
              Recommended minimum width 1080px X 1080px, with a max size of 5MB, only *.png, *.jpg
              and *.jpeg image files are accepted
            </Body>
          </div>

          <div class="flex w-full max-w-xl gap-4 2xl:max-w-4xl 2xl:gap-6">
            <div
              v-for="item in [1, 2, 3, 4]"
              v-if="!isShowUploader"
              class="flex w-fit flex-col items-center justify-center gap-2 rounded-large border-2 border-dashed border-netral-30 bg-[#fafafa] px-3 py-4 2xl:px-7 2xl:py-8"
            >
              <UploadSimple class="h-8 w-8 stroke-[2px] text-netral-40" />

              <Button
                type="click"
                variant="primary"
                modifier="defaultPrimary"
                size="small"
                @click="toggleUploader"
              >
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

            <div
              v-for="item in [1, 2, 3, 4]"
              v-if="isShowUploader"
              class="group relative flex w-fit flex-col items-center justify-center overflow-hidden rounded-large"
            >
              <img
                class="relative z-0 h-full w-full object-cover"
                src="/images/list-products/ListProducts-1.png"
              />

              <div
                class="absolute z-10 flex h-full w-full items-center justify-center gap-2 rounded-large bg-black/0 opacity-0 group-hover:bg-black/25 group-hover:opacity-100"
              >
                <Button type="click" size="small" variant="primary"> Edit </Button>

                <Button type="click" size="small" variant="error" modifier="defaultError">
                  <Trash class="h-3.5 w-3.5 stroke-white stroke-[3px]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="Products rounded-large bg-white p-6">
      <div class="Wrap w-full">
        <!-- Heading -->
        <Title variant="default" class="mb-7"> Price </Title>

        <div class="flex items-start justify-between border-y border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Price </Body>
          </div>

          <div class="w-full max-w-xl 2xl:max-w-4xl">
            <Input variant="price" input-type="number" name="ProductPrice" placeholder="Rp. 0,-" />
          </div>
        </div>

        <div class="flex items-start justify-between border-b border-netral-20 py-7">
          <div class="flex w-64 flex-col items-start gap-2">
            <Body size="lg" weight="semibold"> Discount Type </Body>
            <Body size="md" weight="regular" class="text-netral-50">
              Set your discount type. You can choose the type of discount with a percent or cash
              discount.
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

    <!-- Page Action : Home -->
    <template #PageAction>
      <PageAction
        v-if="true"
        variant="nextCancel"
        :is-selected="true"
        go-to="/products/list-products/variants"
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
