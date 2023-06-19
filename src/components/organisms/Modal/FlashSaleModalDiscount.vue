<script lang="ts" setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

import Title from '$components/atoms/Title.vue'
import Body from '$components/atoms/Body.vue'
import Input from '$components/atoms/Input.vue'
import Button from '$components/atoms/Button.vue'
import Heading from '$components/atoms/Heading.vue'

import { XMark, CloudArrowUp, Check } from '$assets/icons'

interface UploadImageFilledProps {
  isOpenRef: any
  closeModal: any
  nextClick: any
}

const { isOpenRef, closeModal, nextClick } = defineProps<UploadImageFilledProps>()

const modalFlashSale = [
  { id: 1, name: 'Set Date & Time' },
  { id: 2, name: 'Select Merchant' },
  { id: 3, name: 'Confirmation' },
]

const date = ref(new Date())

const listProductsData = [
  {
    productName: "T-Men's UA Storm Armour Down 2.0 Jacket",
    productImage: '/images/list-products/ListProducts-1.png',
    category: 'outer',
    status: 'active',
    stock: 401,
    price: '$178',
  },
  {
    productName: 'Windproof Handbell Oversized Long Coat',
    productImage: '/images/list-products/ListProducts-2.png',
    category: 'outer',
    status: 'scheduled',
    stock: 738,
    price: '$178',
  },
  {
    productName: "Women's Stripe Sweater",
    productImage: '/images/list-products/ListProducts-3.png',
    category: 'sweater',
    status: 'active',
    stock: 432,
    price: '$178',
  },
  {
    productName: "Women's Turtleneck Sweater",
    productImage: '/images/list-products/ListProducts-4.png',
    category: 'sweater',
    status: 'draft',
    stock: 0,
    price: '$178',
  },
  {
    productName: 'One Set - Casual Hoodie with Buttons',
    productImage: '/images/list-products/ListProducts-5.png',
    category: 'kids',
    status: 'active',
    stock: 334,
    price: '$178',
  },
]
</script>

<template>
  <TransitionRoot appear :show="isOpenRef" as="div">
    <Dialog as="div" @close="closeModal" class="relative z-[60]">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="flex w-full max-w-6xl transform flex-col items-center overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all 2xl:max-w-7xl"
            >
              <DialogTitle as="div" class="mb-6 flex w-full items-start justify-between">
                <Title variant="default"> Add Flash Sale </Title>

                <button @click="closeModal">
                  <XMark class="h-5 w-5 stroke-[3px] text-netral-50 2xl:h-6 2xl:w-6" />
                </button>
              </DialogTitle>

              <div
                class="Stepper relative mb-10 flex w-[32rem] flex-row items-center justify-between"
              >
                <div
                  v-for="item in modalFlashSale"
                  class="Step relative z-10 flex items-center justify-between"
                >
                  <div class="flex flex-col items-center">
                    <button
                      class="Item mb-2 flex h-10 w-10 items-center justify-center rounded-full text-xl font-semibold text-white"
                      :class="
                        item.id === 1 || item.id === 2
                          ? 'bg-primary-main ring-2 ring-inset ring-primary-border'
                          : 'bg-netral-50'
                      "
                    >
                      <Check
                        v-if="item.id === 1"
                        class="h-5 w-5 stroke-[3px] text-white 2xl:h-6 2xl:w-6"
                      />
                      <span v-if="item.id !== 1">
                        {{ item.id }}
                      </span>
                    </button>

                    <Body
                      size="md"
                      weight="medium"
                      class="whitespace-nowrap bg-white px-2"
                      :class="item.id === 1 ? 'text-netral-100' : 'text-netral-60'"
                    >
                      {{ item.name }}
                    </Body>
                  </div>
                </div>
                <div
                  class="Line absolute top-1/3 -z-0 h-0.5 w-10/12 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-main"
                />
              </div>

              <div class="Heading mb-10 flex flex-col items-center gap-2">
                <Heading size="sm" weight="semibold"> Set Discount </Heading>
                <Body size="lg" weight="regular" class="text-netral-50">
                  Set a discount for each product in the flash sale
                </Body>
              </div>

              <section class="TableListProducts w-full">
                <!-- Table Users -->
                <div class="Wrap relative w-full overflow-x-auto">
                  <table class="Table w-full table-auto">
                    <!-- Table Users: Head -->
                    <thead class="TableHead w-full rounded-lg bg-[#FAFAFA] 2xl:rounded-large">
                      <tr>
                        <th
                          class="max-w-[200px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                        >
                          <Body size="lg" weight="medium"> Product </Body>
                        </th>

                        <th
                          class="max-w-[100px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                        >
                          <Body size="lg" weight="medium"> Category </Body>
                        </th>
                        <th
                          class="max-w-[100px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                        >
                          <Body size="lg" weight="medium"> Price</Body>
                        </th>
                        <th
                          class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                        >
                          <Body size="lg" weight="medium"> Quota </Body>
                        </th>
                        <th
                          class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                        >
                          <Body size="lg" weight="medium"> Discount Type </Body>
                        </th>
                        <th
                          class="max-w-[70px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                        >
                          <Body size="lg" weight="medium"> Action </Body>
                        </th>
                      </tr>
                    </thead>

                    <!-- Table Users: Body -->
                    <tbody class="TableBody relative w-full">
                      <tr
                        v-for="product in listProductsData"
                        class="border-b border-netral-20 last:border-netral-30"
                      >
                        <td
                          class="max-w-[200px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3"
                        >
                          <div class="flex w-full max-w-[270px] items-center gap-3 2xl:gap-4">
                            <Body size="lg" weight="medium">
                              {{ product.productName }}
                            </Body>
                          </div>
                        </td>

                        <td
                          class="max-w-[100px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3"
                        >
                          <Body size="lg" weight="medium"> {{ product.category }} </Body>
                        </td>

                        <td
                          class="max-w-[100px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3"
                        >
                          <Body size="lg" weight="medium"> {{ product.category }} </Body>
                        </td>

                        <td
                          class="max-w-[140px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3"
                        >
                          <Input
                            name="Quota"
                            variant="base"
                            input-type="text"
                            value="22"
                            placeholder="Oke"
                          />
                        </td>

                        <td
                          class="max-w-[140px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3"
                        >
                          <Input
                            name="Quota"
                            variant="price"
                            input-type="number"
                            value="32"
                            placeholder="Oke"
                          />
                        </td>

                        <td
                          class="max-w-[70px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3"
                        >
                          <button
                            class="text-primary-main"
                            @click="$router.push('/products/list-products/update')"
                          >
                            <Body size="lg" weight="semibold"> Detail </Body>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <div class="Cta mt-10 flex w-full justify-end gap-3">
                <Button
                  type="click"
                  :onClick="closeModal"
                  variant="primary"
                  modifier="nudePrimary"
                  size="big"
                >
                  Cancel
                </Button>

                <Button
                  type="click"
                  :on-click="nextClick"
                  variant="primary"
                  modifier="defaultPrimary"
                  size="big"
                >
                  Send
                </Button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
