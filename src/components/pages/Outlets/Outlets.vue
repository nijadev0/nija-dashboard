<script lang="ts" setup>
import Button from '$components/atoms/Button.vue';
import Title from '$components/atoms/Title.vue';
import DashboardLayout from '$components/templates/DashboardLayout.vue';

import { MagnifyingGlass, Storefront } from '$assets/icons';
import { Switch } from '@headlessui/vue';
import Body from '$components/atoms/Body.vue';
import { ref } from 'vue';

/**
 * =======================
 * Dummy Data - Outlets
 * =======================
 */
 const outletsData = [
  {
    name: 'Brand Here Delaware',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    phone: '(603) 555-0123',
    managerBranch: 'Arlene McCoy',
    totalTransaction: '$5392',
  },
  {
    name: 'Brand Here Kentucky',
    address: '3517 W. Gray St. Utica, Pennsylvania 57867',
    phone: '(684) 555-0102',
    managerBranch: 'Courtney Henry',
    totalTransaction: '$7890',
  },
  {
    name: 'Brand Here Maine',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    phone: '(480) 555-0103',
    managerBranch: 'Jerome Bell',
    totalTransaction: '$6499',
  },
  {
    name: 'Brand Here Pennsylvania',
    address: '2464 Royal Ln. Mesa, New Jersey 45463',
    phone: '(704) 555-0127',
    managerBranch: 'Kathryn Murphy',
    totalTransaction: '$7239',
  },
  {
    name: 'Brand Here Hawaii',
    address: '3891 Ranchview Dr. Richardson, California 62639',
    phone: '(316) 555-0116',
    managerBranch: 'Theresa Webb',
    totalTransaction: '$3473',
  },
  {
    name: 'Brand Here Connecticut',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    phone: '(808) 555-0111',
    managerBranch: 'Floyd Miles',
    totalTransaction: '$7438',
  },
]

/**
 * =======================
 * Checkbox Ref
 * =======================
 */
const checkboxRef = ref(false)

</script>

<template>
    <DashboardLayout title="Outlets">
        <div class="bg-white p-6 rounded-large min-h-[480px] Outlets">
            <div class="Heading mb-6 2xl:mb-8 space-y-8">
                <Title variant="default">
                    Outlet List
                </Title>

                <div class="Action flex justify-between items-end">
                    <!-- Search -->
                    <nav class="Search relative">
                        <input
                            type="text"
                            class="w-[16rem] rounded-large bg-netral-20 py-2 px-3.5 pl-10 text-xs outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main 2xl:w-[21.25rem] 2xl:py-3 2xl:pl-11 2xl:text-sm"
                            placeholder="Search"
                        />

                        <MagnifyingGlass
                            class="absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 stroke-2 text-netral-60 2xl:h-5 2xl:w-5"
                        />
                    </nav>

                    <!-- Cta -->
                    <Button
                        type="click"
                        variant="primary"
                        modifier="defaultPrimary"
                    >
                        <Storefront class="w-4 h-4 2xl:h-5 2xl:w-5 stroke-[2.5px] text-white"/>
                        Add Outlet
                    </Button>
                </div>
            </div>

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
                            class="max-w-[190px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                            >
                                <Body size="md" weight="medium"> Outlet Name </Body>
                            </th>
            
                            <th
                            class="min-w-[200px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                            >
                                <Body size="md" weight="medium"> Outlet Address </Body>
                            </th>


                            <th
                            class="max-w-[180px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                            >
                            <Body size="md" weight="medium"> Phone Number</Body>
                            </th>
            
                            <th
                            class="max-w-[140px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                            >
                            <Body size="md" weight="medium"> Manager Branch </Body>
                            </th>
                            <th
                            class="max-w-[150px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                            >
                            <Body size="md" weight="medium"> Total Transaction </Body>
                            </th>
                            <th
                            class="max-w-[80px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                            >
                            <Body size="md" weight="medium"> Action </Body>
                            </th>
                        </tr>
                        </thead>

                        <!-- Table Users: Body -->
                        <tbody class="TBody relative w-full">
                        <tr v-for="outlet in outletsData" class="border-b border-netral-20 last:border-netral-30">
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

                            <td class="min-w-[190px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                                <Body size="lg" weight="medium"> {{ outlet.name }} </Body>
                            </td>

                            <td class="max-w-[200px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                                <Body size="lg" weight="medium">
                                    {{ outlet.address }}
                                </Body>
                            </td>


                            <td class="max-w-[180px] py-6 px-6 text-left text-netral-80 first:pl-3">
                                <Body size="lg" weight="medium"> {{ outlet.phone }} </Body>
                            </td>

                            <td class="max-w-[140px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                                <Body size="lg" weight="medium"> {{ outlet.managerBranch }} </Body>
                            </td>

                            <td class="max-w-[150px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                            <Body size="lg" weight="medium"> {{ outlet.totalTransaction }} </Body>
                            </td>

                            <td class="max-w-[80px] py-6 px-6 text-left capitalize text-netral-80 first:pl-3">
                            <button
                                class="text-primary-main"
                                @click="$router.push('/outlets/detail')"
                            >
                                <Body size="lg" weight="semibold"> Detail </Body>
                            </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </DashboardLayout>
</template>