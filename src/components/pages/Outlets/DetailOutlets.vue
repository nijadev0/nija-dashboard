<script lang="ts" setup>
import Button from '$components/atoms/Button.vue';
import Title from '$components/atoms/Title.vue';
import DashboardLayout from '$components/templates/DashboardLayout.vue';

import { PencilSquare } from '$assets/icons';  
import Heading from '$components/atoms/Heading.vue';
import Body from '$components/atoms/Body.vue';

</script>

<template>
    <DashboardLayout title="Outlets">
        <div class="DetailsOutlet bg-white p-6 rounded-large min-h-[480px]">
            <!-- Heading -->
            <div class="Heading flex justify-between items-start mb-6 2xl:mb-8">
                <Title variant="default" size="big">
                    Outlet Detail
                </Title>

                <Button type="click" variant="primary" modifier="outlinePrimary">
                    <PencilSquare class="w-4 h-4 2xl:w-5 2xl:h-5 text-primary-main"/>
                    Edit
                </Button>
            </div>

            <!-- Banner -->
            <div class="Banner mb-8 relative h-80 2xl:h-96 w-full">
                <img class="w-full h-full object-cover rounded-large" src="/images/outlets/outlets-banner.png" alt="Outlets Banner">
            </div>

            <!-- Information -->
            <div class="Information">
                <Heading size="sm" weight="semibold" class="mb-8">
                    Brand Here Delaware
                </Heading>

                <div class="Info space-y-9">
                    <div class="Info-Address flex justify-between">
                        <Body size="md" weight="semibold" class="w-1/2 text-netral-50 uppercase">
                            Complete Address
                        </Body>
    
                        <Body size="lg" weight="semibold" class="w-1/2">
                            6391 Elgin St. Celina, Delaware 10299
                        </Body>
                    </div>

                    <div class="Info-Address flex justify-between">
                        <Body size="md" weight="semibold" class="w-1/2 text-netral-50 uppercase">
                            Phone Number
                        </Body>
    
                        <Body size="lg" weight="semibold" class="w-1/2">
                            (480) 555-0103
                        </Body>
                    </div>

                    <div class="Info-Address flex justify-between">
                        <Body size="md" weight="semibold" class="w-1/2 text-netral-50 uppercase">
                            Manager Branch
                        </Body>
    
                        <Body size="lg" weight="semibold" class="w-1/2">
                            Arlene McCoy
                        </Body>
                    </div>

                    <div class="Info-Address flex justify-between">
                        <Body size="md" weight="semibold" class="w-1/2 text-netral-50 uppercase">
                            Total Transactions
                        </Body>
    
                        <Body size="lg" weight="semibold" class="w-1/2">
                            $5392
                        </Body>
                    </div>
                </div>
            </div>

        </div>
    </DashboardLayout>
</template>