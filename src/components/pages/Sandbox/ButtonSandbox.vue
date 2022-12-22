<script setup lang="ts">
import Button from '$components/atoms/Button.vue'
import { Circle } from '$assets/icons'
import SandboxLayout from '$components/templates/SandboxLayout.vue'

function cobaClick() {
  console.log('ok')
  alert('Halo Button')
}
</script>
<template>
  <SandboxLayout>
    <div class="flex gap-8">
      <div class="space-y-8">
        <Button
          type="click"
          :on-click="cobaClick"
          variant="primary"
          modifier="defaultPrimary"
          size="big"
        >
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button go-to="/halo" type="goto" variant="primary" modifier="outlinePrimary" size="big">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button
          link-href="https://www.google.com"
          type="link"
          variant="primary"
          modifier="nudePrimary"
          size="big"
        >
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="primary" modifier="defaultPrimary" size="medium">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="primary" modifier="outlinePrimary" size="medium">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="primary" modifier="nudePrimary" size="medium">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="primary" modifier="defaultPrimary" size="small">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="primary" modifier="outlinePrimary" size="small">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="primary" modifier="nudePrimary" size="small">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>
      </div>

      <div class="space-y-8">
        <Button type="click" variant="error" modifier="defaultError" size="big">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="error" modifier="outlineError" size="big">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="error" modifier="nudeError" size="big">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="error" modifier="defaultError" size="medium">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="error" modifier="outlineError" size="medium">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="error" modifier="nudeError" size="medium">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="error" modifier="defaultError" size="small">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="error" modifier="outlineError" size="small">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>

        <Button type="click" variant="error" modifier="nudeError" size="small">
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
          Add Product
          <Circle class="h-5 w-5 stroke-inherit stroke-2" />
        </Button>
      </div>
    </div>
  </SandboxLayout>
</template>
