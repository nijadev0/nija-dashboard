<script lang="ts" setup>
import { ref } from 'vue'

import { AuthLayout } from '$components/templates'
import { Body, Button, Heading, Input } from '$components/atoms'

import { Eye, EyeSlash, ArrowLeft } from '$assets/icons'

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
    image-banner="/images/accounts/account-baby-photo.png"
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
        <Heading size="md" weight="semibold" class="mb-4"> Hi There! </Heading>
        <Body size="xl" weight="medium" class="mb-8 text-netral-60">
          Welcome back to e-commerce dashboard
        </Body>

        <div class="Form mb-8 space-y-6">
          <div class="flex w-full flex-col gap-1.5">
            <label class="text-sm font-semibold" for="password">Password</label>
            <div class="relative">
              <input
                class="w-full rounded-md border border-netral-30 bg-white p-3.5 text-base shadow-input"
                :type="inputType"
                name="password"
                placeholder="•••••••••"
              />
              <EyeSlash
                @click="showPassword"
                class="absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer stroke-[2.5px]"
                :class="{
                  hidden: passwordRef === false,
                  block: passwordRef === true,
                }"
              />
              <Eye
                @click="hidePassword"
                class="absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer stroke-[2.5px]"
                :class="{
                  hidden: passwordRef === true,
                  block: passwordRef === false,
                }"
              />
            </div>
          </div>

          <div class="flex w-full flex-col gap-1.5">
            <label class="text-sm font-semibold" for="password">Confirm Password</label>
            <div class="relative">
              <input
                class="w-full rounded-md border border-netral-30 bg-white p-3.5 text-base shadow-input"
                :type="inputType"
                name="password"
                placeholder="•••••••••"
              />
              <EyeSlash
                @click="showPassword"
                class="absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer stroke-[2.5px]"
                :class="{
                  hidden: passwordRef === false,
                  block: passwordRef === true,
                }"
              />
              <Eye
                @click="hidePassword"
                class="absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer stroke-[2.5px]"
                :class="{
                  hidden: passwordRef === true,
                  block: passwordRef === false,
                }"
              />
            </div>
          </div>
        </div>

        <Button
          type="goto"
          go-to="/reset-success"
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
