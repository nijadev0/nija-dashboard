<script lang="ts" setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import { Body, Button, Heading, Input } from '$components/atoms'
import { AuthLayout } from '$components/templates'

import { Eye, EyeSlash, Check, ArrowLeft } from '$assets/icons'
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
        <Heading size="md" weight="semibold" class="mb-4"> Hello Buds! </Heading>

        <Body size="xl" weight="medium" class="mb-8 text-netral-60">
          Want to see some georgous dashboard? register now!
        </Body>

        <div class="Form mb-8 space-y-6">
          <Input
            input-type="text"
            variant="base"
            label="Full Name"
            placeholder="Enter your full name"
            name="full name"
          />

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
                placeholder="Enter your password"
              />
              <!-- <EyeSlash
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
              /> -->
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
                I Accept Terms & Aggrement
              </Body>
            </Switch>

            <router-link to="/auth" class="text-base font-semibold underline">
              Login Now
            </router-link>
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
            <Body size="sm" weight="regular" class="px-2 text-netral-50">Or continue with</Body>
          </div>
        </div>

        <button
          class="Button flex w-full items-center justify-center gap-2 rounded-large border border-netral-90 py-3 transition-all duration-300 ease-out hover:border-netral-40 hover:bg-netral-30"
        >
          <svg class="google_logo h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          <Body size="lg" weight="semibold" class="text-left text-netral-80"> Google </Body>
        </button>
      </div>
    </div>
  </AuthLayout>
</template>
