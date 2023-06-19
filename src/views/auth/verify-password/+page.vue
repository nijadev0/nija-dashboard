<script lang="ts" setup>
import { ref } from 'vue'
import { Body, Button, Heading } from '$components/atoms'
import { AuthLayout } from '$components/templates'

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
    <div class="container max-w-screen-sm">
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
      <div class="Text">
        <Heading size="md" weight="semibold" class="mb-4"> Verify your email </Heading>
        <Body size="xl" weight="medium" class="mb-32 text-netral-60">
          Hi Samanta! Use the link below to verify your email.
        </Body>

        <Button
          type="goto"
          go-to="/new-password"
          size="big"
          variant="primary"
          modifier="defaultPrimary"
        >
          Verify Email
        </Button>

        <div class="mt-8 flex justify-center gap-2">
          <Body size="lg" weight="medium" class="text-netral-60"> Didn't receive the email? </Body>
          
          <button>
            <Body size="lg" weight="semibold" class="text-netral-80 underline underline-offset-4">
              Click to resend
            </Body>
          </button>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>
