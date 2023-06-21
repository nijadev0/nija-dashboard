<script lang="ts" setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import { Body, Button, Heading, Input } from '$components/atoms'
import { AuthLayout } from '$components/templates'

import { Eye, EyeSlash, Check } from '$assets/icons'
import { RouterLink } from 'vue-router'

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
    <div class="container max-w-screen-sm pt-16">
      <!-- Logo -->
      <RouterLink to="/">
        <div class="Logo mb-16 flex items-start justify-start gap-2 self-start">
          <img src="/nija.svg" alt="Nija Logo" class="h-7 w-7 2xl:h-8 2xl:w-8" />
          <Body size="xxl" weight="semibold" class="uppercase tracking-wide"> Nija Kit </Body>
        </div>
      </RouterLink>

      <!-- Heading -->
      <div class="Text">
        <Heading size="md" weight="semibold" class="mb-4"> Hello Buds! </Heading>

        <Body size="xl" weight="medium" class="mb-8 text-netral-60">
          Want to see some georgous dashboard? register now!
        </Body>

        <div class="Form mb-8 space-y-6">
          <Input
            input-type="email"
            variant="base"
            label="Email"
            placeholder="Enter your email"
            name="Email"
          />

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

          <div class="flex w-full items-center justify-between">
            <Switch v-model="checkboxRef" class="Checkbox flex items-center gap-2 outline-none">
              <div
                class="Wrapper relative flex h-4 w-4 items-center justify-between gap-2.5 rounded-md border outline-none 2xl:h-5 2xl:w-5"
                :class="checkboxRef ? 'border-primary-border bg-primary-main' : 'border-netral-60'"
              >
                <Check
                  class="Icon absolute z-10 h-full w-full stroke-[2.5px] text-white 2xl:stroke-2"
                  :class="checkboxRef ? 'block' : 'hidden'"
                />
              </div>

              <Body size="md" weight="regular" class="text-left text-netral-80">
                By clicking continue, you agree to our Terms of Service and Privacy Policy.
              </Body>
            </Switch>
          </div>
        </div>

        <div class="relative h-fit w-full">
          <div
            class="absolute z-10 h-full w-full cursor-auto"
            :class="[checkboxRef ? 'hidden' : 'block']"
          />
          <Button type="goto" link-href="/" size="big"> Login </Button>
        </div>

        <div class="relative my-6 flex justify-center">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>

          <div class="relative flex w-fit justify-center bg-netral-20 px-2 text-xs uppercase">
            <Body size="xs" weight="regular" class="px-2 text-netral-50">Or continue with</Body>
          </div>
        </div>

        <button
          class="Button flex w-full items-center justify-center gap-2 rounded-large border border-netral-30 py-3 transition-all duration-300 ease-out hover:border-netral-40 hover:bg-netral-30"
        >
          <Body size="lg" weight="semibold" class="text-left text-netral-80"> Google </Body>
        </button>
      </div>
    </div>
  </AuthLayout>
</template>
