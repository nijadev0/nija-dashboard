<script setup lang="ts">
function handleSubmit() {}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <tr>
      <td>
        <input class="h-20 w-40 bg-red-500" type="text" placeholder="Add Image URL" />
      </td>

      <td>
        <input class="h-20 w-40 bg-red-500" type="text" placeholder="Add Color" />
      </td>

      <td>
        <input class="h-20 w-40 bg-red-500" type="text" placeholder="Add Size" />
      </td>

      <td>
        <input class="h-20 w-40 bg-red-500" type="text" placeholder="Add Stock" />
      </td>

      <td>
        <input class="h-20 w-40 bg-red-500" type="text" placeholder="Add SKU" />
      </td>

      <td>
        <input type="submit" placeholder="Save Variant" />
      </td>
    </tr>
  </form>
</template>
