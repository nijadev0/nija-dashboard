<script lang="ts" setup>
import { AuthLayout } from '$components/templates'
import { Body, Button, Heading } from '$components/atoms'

import { ArrowLeft, Check } from '$assets/icons'
</script>

<template>
  <AuthLayout
    image-banner="/images/accounts/account-baby-photo.png"
    alt-banner="Baby Account Photo"
  >
    <div class="container mx-auto max-w-screen-sm px-12 pt-16 2xl:max-w-screen-md 2xl:px-10">
      <!-- Logo -->
      <div class="mb-16 flex items-center gap-4">
        <button @click="$router.go(-1)">
          <ArrowLeft class="h-6 w-6 stroke-2" />
        </button>
        <button @click="$router.push('/')">
          <div class="Logo flex items-start justify-start gap-2 self-start">
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
          Congratulations! Your password has been successfully reset, ensuring the utmost security
          for your account.
        </Body>

        <div class="w-full">
          <Button
            type="goto"
            link-href="/auth/login"
            size="big"
            variant="primary"
            modifier="defaultPrimary"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>
