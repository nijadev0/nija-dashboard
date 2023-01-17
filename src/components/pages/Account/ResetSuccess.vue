<script lang="ts" setup>
import { ref } from 'vue'
import Body from '$components/atoms/Body.vue'
import Input from '$components/atoms/Input.vue'
import Heading from '$components/atoms/Heading.vue'
import AuthLayout from '$components/templates/AuthLayout.vue'

import { ArrowLeft, Check } from '$assets/icons'
import Button from '$components/atoms/Button.vue'
</script>

<template>
  <AuthLayout
    image-banner="/images/accounts/account-baby-photo.png"
    alt-banner="Baby Account Photo"
  >
    <div class="container max-w-xl">
      <!-- Logo -->
      <div class="flex gap-4">
        <button @click="$router.go(-1)">
          <ArrowLeft class="h-6 w-6 stroke-2" />
        </button>
        <button @click="$router.push('/')">
          <div class="Logo flex items-start justify-start gap-2 self-start py-16 2xl:mb-10">
            <img src="/nija.svg" alt="Nija Logo" class="h-7 w-7 2xl:h-8 2xl:w-8" />
            <Body size="xxl" weight="semibold" class="uppercase tracking-wide"> Nija Kit </Body>
          </div>
        </button>
      </div>

      <!-- Heading -->
      <div class="Text flex w-full flex-col items-center">
        <div class="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#DFDEFF]/70">
          <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary-main/30">
            <Check class="h-10 w-10 stroke-[4px] text-primary-main" />
          </div>
        </div>
        <Heading size="md" weight="semibold" class="mb-4 w-full text-center">
          Password reset was successful
        </Heading>
        <Body size="xl" weight="medium" class="mb-10 w-full text-center text-netral-60">
          Your password has been successfully reset. Click bellow to log in magically.
        </Body>

        <div class="w-full">
          <Button type="goto" go-to="/login" size="big" variant="primary" modifier="defaultPrimary">
            Login
          </Button>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>
