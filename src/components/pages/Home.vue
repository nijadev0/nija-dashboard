<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import Button from '$components/atoms/Button.vue'
import Title from '$components/atoms/Title.vue'
import DashboardLayout from '$components/templates/DashboardLayout.vue'

import { SortAscending, Funnel, Check, Trash, Heart, PencilSquare } from '$assets/icons'
import Body from '$components/atoms/Body.vue'

const enabledCheckbox = ref(false)

const tHead = [
  '1',
  'Name',
  'Email Address',
  'Complete Address',
  'Created At',
  'Last Activity',
  'Actions',
]

const enabled = ref(false)
</script>

<template>
  <DashboardLayout title="Customers">
    <div class="Customers min-h-[480px] w-full rounded-large bg-white p-6">
      <!-- Heading -->
      <div class="Heading mb-8 flex w-full items-center justify-between">
        <Title variant="default"> Users </Title>

        <div class="flex gap-2">
          <Button variant="plain" modifier="defaultPlain" size="medium" type="click">
            Sort
            <SortAscending class="h-4 w-4 stroke-[4px] text-netral-80" />
          </Button>

          <Button variant="plain" modifier="defaultPlain" size="medium" type="click">
            Filters
            <Funnel class="h-4 w-4 stroke-[4px] text-netral-80" />
          </Button>
        </div>
      </div>

      <!-- Table Users -->
      <section class="TableUsers mb-6 w-full">
        <!-- Table Users -->
        <div class="relative w-full overflow-x-auto">
          <table class="w-full table-auto">
            <!-- Table Users: Head -->
            <thead class="w-full rounded-large bg-[#FAFAFA]">
              <tr>
                <th class="w-px px-6 py-4 text-left capitalize text-netral-80 first:pl-3">
                  <Switch v-model="enabled" class="Checkbox flex items-center gap-2 outline-none">
                    <div
                      class="Wrapper relative flex h-5 w-5 items-center justify-between gap-2.5 rounded-md border outline-none"
                      :class="
                        enabled ? 'border-primary-border bg-primary-main' : 'border-netral-60'
                      "
                    >
                      <Check
                        class="Icon absolute z-10 h-full w-full stroke-2 text-white"
                        :class="enabled ? 'block' : 'hidden'"
                      />
                    </div>
                  </Switch>
                </th>
                <th
                  class="max-w-[180px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                >
                  <Body size="md" weight="medium"> Name </Body>
                </th>
                <th
                  class="min-w-[160px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                >
                  <Body size="md" weight="medium"> Email Address </Body>
                </th>
                <th
                  class="max-w-[180px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                >
                  <Body size="md" weight="medium"> Complete Address</Body>
                </th>
                <th
                  class="max-w-[130px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                >
                  <Body size="md" weight="medium"> Created At </Body>
                </th>
                <th
                  class="max-w-[180px] whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                >
                  <Body size="md" weight="medium"> Last Activity </Body>
                </th>
                <th
                  class="w-px whitespace-nowrap px-6 py-4 text-left uppercase text-netral-50 first:pl-3"
                >
                  <Body size="md" weight="medium"> Action </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Users: Body -->

            <tbody class="relative w-full">
              <tr>
                <td class="w-px px-6 py-4 text-left capitalize text-netral-80 first:pl-3">
                  <Switch v-model="enabled" class="Checkbox flex items-center gap-2 outline-none">
                    <div
                      class="Wrapper relative flex h-5 w-5 items-center justify-between gap-2.5 rounded-md border outline-none"
                      :class="
                        enabled ? 'border-primary-border bg-primary-main' : 'border-netral-60'
                      "
                    >
                      <Check
                        class="Icon absolute z-10 h-full w-full stroke-2 text-white"
                        :class="enabled ? 'block' : 'hidden'"
                      />
                    </div>
                  </Switch>
                </td>

                <td class="min-w-[180px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> Samanta Legend </Body>
                </td>

                <td class="min-w-[160px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> Annette Black </Body>
                </td>

                <td class="max-w-[180px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </Body>
                </td>

                <td class="max-w-[130px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> Sep 19, 2010 </Body>
                </td>

                <td class="max-w-[180px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> May 6, 2012 </Body>
                </td>

                <td class="w-px py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> Detail </Body>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Pagination -->
    </div>
  </DashboardLayout>
</template>
