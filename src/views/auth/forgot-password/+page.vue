<script lang="ts" setup>
import { ref } from 'vue'

import { AuthLayout } from '$components/templates'
import { Body, Button, Heading, Input } from '$components/atoms'

import { ArrowLeft } from '$assets/icons'

let passwordRef = ref(false)
let inputType = ref('password')

function showPassword() {
  passwordRef.value = false
  inputType.value = 'password'
}

function hidePassword() {
  passwordRef.value = true
  inputType.value = 'text'
}

const checkboxRef = ref(false)
</script>

<template>
  <AuthLayout
    image-banner="/images/accounts/account-woman-photo.png"
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
      <div class="Text">
        <Heading size="md" weight="semibold" class="mb-4"> Forgot password? </Heading>
        <Body size="xl" weight="medium" class="mb-8 text-netral-60">
          No worries, we’ll send you reset instruction.
        </Body>

        <div class="Form mb-8 space-y-6">
          <Input
            input-type="email"
            variant="base"
            label="Email"
            placeholder="Enter your email"
            name="Email"
          />
        </div>

        <Button
          type="goto"
          link-href="/auth/verify-password"
          size="big"
          variant="primary"
          modifier="defaultPrimary"
        >
          Reset Password
        </Button>
      </div>
    </div>
  </AuthLayout>
</template>
