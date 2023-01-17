<script lang="ts" setup>
import { Bag, Package, TShirt } from '$assets/icons'
import Body from '$components/atoms/Body.vue'
import Button from '$components/atoms/Button.vue'
import Title from '$components/atoms/Title.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout title="Notifications">
    <div class="rounded-large bg-white p-6">
      <!-- Heading: Main -->
      <div class="Heading mb-4 flex justify-between">
        <Title variant="default"> Notification </Title>

        <button class="Button font-semibold text-primary-main">Read All</button>
      </div>

      <!-- New Order -->
      <div class="New-Order py-6">
        <!-- Heading: Card -->
        <div class="Heading mb-6 flex justify-between">
          <Body size="md" weight="semibold"> Desember 15, 2022 </Body>
          <Body size="md" weight="semibold" class="uppercase"> Unread</Body>
        </div>

        <!-- Text Content -->
        <section class="Wrap">
          <div class="relative flex justify-between">
            <div class="Detail flex w-full gap-5">
              <!-- Icon -->
              <div
                class="Icon flex h-10 w-10 items-center justify-center rounded-full bg-netral-20"
              >
                <Bag class="h-6 w-6 stroke-2 text-netral-80" />
              </div>

              <!-- Content -->
              <div class="Content relative w-full">
                <div class="Text max-w-4xl space-y-3">
                  <Body size="xxl" weight="medium"> New Order </Body>

                  <Body size="lg" weight="regular" class="text-netral-60">
                    There is a new order for Women's Clothing Azure products in the Outer category
                    with transaction number 20129380132. Please check the details in the column
                    below.
                  </Body>
                </div>

                <!-- Time -->
                <div class="Time absolute right-0 top-0 z-10 w-fit">
                  <Body size="md" weight="semibold">16.14</Body>
                </div>

                <!-- Table -->
                <div
                  class="Table mt-6 w-full overflow-hidden rounded-large border border-netral-30"
                >
                  <div
                    class="Heading flex w-full justify-between rounded-t-large bg-netral-20 px-6 py-4"
                  >
                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[180px] text-left uppercase text-netral-50"
                    >
                      Transaction Number
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[180px] text-left uppercase text-netral-50"
                    >
                      Name
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[200px] text-left uppercase text-netral-50"
                    >
                      Product
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[180px] text-left uppercase text-netral-50"
                    >
                      Amount
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[180px] text-left uppercase text-netral-50"
                    >
                      Price
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[64px] text-left uppercase text-netral-50"
                    >
                      Action
                    </Body>
                  </div>

                  <div class="Text-Body flex items-center justify-between px-6 py-6">
                    <Body size="lg" weight="semibold" class="w-[180px] text-left text-netral-80">
                      20129380132
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[180px] text-left text-netral-80">
                      Jane Cooper
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[200px] text-left text-netral-80">
                      Women's Clothing Azure
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[180px] text-left text-netral-80">
                      2
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[180px] text-left text-netral-80">
                      $300
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[64px] text-left text-primary-main">
                      View
                    </Body>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Order Refund -->
      <div class="Order-Refund py-6">
        <!-- Heading: Card -->
        <div class="Heading mb-6 flex justify-between">
          <Body size="md" weight="semibold"> Desember 2, 2022 </Body>
          <Body size="md" weight="semibold" class="uppercase text-netral-50"> Read</Body>
        </div>

        <!-- Text Content -->
        <section class="Wrap">
          <div class="relative flex justify-between">
            <div class="Detail flex w-full gap-5">
              <!-- Icon -->
              <div
                class="Icon flex h-10 w-10 items-center justify-center rounded-full bg-netral-20"
              >
                <Package class="h-6 w-6 stroke-2 text-netral-80" />
              </div>

              <!-- Content -->
              <div class="Content relative w-full">
                <div class="Text max-w-4xl space-y-3">
                  <Body size="xxl" weight="medium"> Order Refund </Body>

                  <Body size="lg" weight="regular" class="text-netral-60">
                    There is a product that you want to return with transaction number 2384792384.
                    The reason for the return is because there is a defect in the item sent.
                  </Body>
                </div>

                <!-- Time -->
                <div class="Time absolute right-0 top-0 z-10 w-fit">
                  <Body size="md" weight="semibold">16.14</Body>
                </div>

                <!-- Table -->
                <div
                  class="Table mt-6 w-full overflow-hidden rounded-large border border-netral-30"
                >
                  <div
                    class="Heading flex w-full justify-between rounded-t-large bg-netral-20 px-6 py-4"
                  >
                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[200px] text-left uppercase text-netral-50"
                    >
                      Transaction Number
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[150px] text-left uppercase text-netral-50"
                    >
                      Name
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[260px] text-left uppercase text-netral-50"
                    >
                      Product
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[180px] text-left uppercase text-netral-50"
                    >
                      Order Date
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[120px] text-left uppercase text-netral-50"
                    >
                      Price
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[64px] text-left uppercase text-netral-50"
                    >
                      Action
                    </Body>
                  </div>

                  <div class="Text-Body flex items-center justify-between px-6 py-6">
                    <Body size="lg" weight="semibold" class="w-[200px] text-left text-netral-80">
                      2384792384
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[150px] text-left text-netral-80">
                      Samantha W
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[260px] text-left text-netral-80">
                      Women's Turtleneck Sweater
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[180px] text-left text-netral-80">
                      October 12, 2022
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[120px] text-left text-netral-80">
                      $300
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[64px] text-left text-primary-main">
                      View
                    </Body>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Update-Stock -->
      <div class="Update-Stock py-6">
        <!-- Text Content -->
        <section class="Wrap">
          <div class="relative flex justify-between">
            <div class="Detail flex w-full gap-5">
              <!-- Icon -->
              <div
                class="Icon flex h-10 w-10 items-center justify-center rounded-full bg-netral-20"
              >
                <TShirt class="h-6 w-6 stroke-2 text-netral-80" />
              </div>

              <!-- Content -->
              <div class="Content relative w-full">
                <div class="Text max-w-4xl space-y-3">
                  <Body size="xxl" weight="medium"> Update Stock </Body>

                  <Body size="lg" weight="regular" class="text-netral-60">
                    Update the number of T-Men's UA Storm Armor Down 2.0 Jacket products in the
                    Outer category with an additional 44 products.
                  </Body>
                </div>

                <!-- Time -->
                <div class="Time absolute right-0 top-0 z-10 w-fit">
                  <Body size="md" weight="semibold">16.14</Body>
                </div>

                <!-- Table -->
                <div
                  class="Table mt-6 w-full overflow-hidden rounded-large border border-netral-30"
                >
                  <div
                    class="Heading flex w-full justify-between rounded-t-large bg-netral-20 px-6 py-4"
                  >
                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[320px] text-left uppercase text-netral-50"
                    >
                      Product
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[140px] text-left uppercase text-netral-50"
                    >
                      Category
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[140px] text-left uppercase text-netral-50"
                    >
                      Product Added
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[140px] text-left uppercase text-netral-50"
                    >
                      Total Product
                    </Body>

                    <Body
                      size="md"
                      weight="semibold"
                      class="w-[64px] text-left uppercase text-netral-50"
                    >
                      Action
                    </Body>
                  </div>

                  <div class="Text-Body flex items-center justify-between px-6 py-6">
                    <div class="Product flex w-80 items-center gap-3">
                      <div class="Photo relative h-full max-h-[80px] w-full max-w-[80px]">
                        <img
                          class="Image h-full w-full rounded-large object-cover"
                          src="/images/list-products/ListProducts-1.png"
                          alt="List Products Photo"
                        />
                      </div>
                      <Body
                        size="lg"
                        weight="semibold"
                        class="max-w-[240px] text-left text-netral-80"
                      >
                        T-Men's UA Storm Armour Down 2.0 Jacket
                      </Body>
                    </div>

                    <Body size="lg" weight="semibold" class="w-[140px] text-left text-netral-80">
                      Outer
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[140px] text-left text-netral-80">
                      44
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[140px] text-left text-netral-80">
                      120
                    </Body>

                    <Body size="lg" weight="semibold" class="w-[64px] text-left text-primary-main">
                      View
                    </Body>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </DashboardLayout>
</template>
