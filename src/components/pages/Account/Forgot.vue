<script lang="ts" setup>
import { ref } from 'vue'
import Body from '$components/atoms/Body.vue'
import Input from '$components/atoms/Input.vue'
import Heading from '$components/atoms/Heading.vue'
import AuthLayout from '$components/templates/AuthLayout.vue'

import { Eye, EyeSlash, Check, ArrowLeft } from '$assets/icons'
import Button from '$components/atoms/Button.vue'
import { Switch } from '@headlessui/vue'

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

        <Button type="goto" go-to="/verify" size="big" variant="primary" modifier="defaultPrimary">
          Reset Password
        </Button>
      </div>
    </div>
  </AuthLayout>
</template>
