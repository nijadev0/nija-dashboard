<script lang="ts" setup>
import { ref } from 'vue'

import { DashboardLayout } from '$components/templates'
import { Pagination, Toast } from '$components/organisms'
import { Body, Button, Title, Toggle } from '$components/atoms'
import { UploadBannerImageEmpty, UploadBannerImageFilled } from '$components/organisms/Modal'

import { MagnifyingGlass, FolderSimplePlus, Trash, Pencil } from '$assets/icons'
import Modal from '$components/organisms/Modal.vue'

/**
 * =======================
 * Dummy Data - Outlets
 * =======================
 */
const bannersData = [
  {
    image: '/images/banners/banner-photo-1.png',
    type: 'Banner Best Seller Collection',
    createdAt: '05-12-2022',
  },
  {
    image: '/images/banners/banner-photo-1.png',
    type: 'Banner Hero Section',
    createdAt: '24-11-2022',
  },
  {
    image: '/images/banners/banner-photo-2.png',
    type: 'Banner Popular Collection',
    createdAt: '29-11-2022',
  },
]

/**
 * =======================
 * Modal - Upload Empty
 * =======================
 */

const modalUploadEmptyRef = ref(false)

function openModalEmpty() {
  modalUploadEmptyRef.value = true
}

function closeModalEmpty() {
  modalUploadEmptyRef.value = false
}

/**
 * =======================
 * Modal - Upload Filled
 * =======================
 */

const modalUploadFilledRef = ref(false)

function openModalFilled() {
  setTimeout(() => {
    closeModalEmpty()
  }, 500)

  setTimeout(() => {
    modalUploadFilledRef.value = true
  }, 750)
}

function closeModalFilled() {
  modalUploadFilledRef.value = false
}

/**
 * =======================
 * Modal - Edit
 * =======================
 */

const modalEditRef = ref(false)

function openModalEdit() {
  modalEditRef.value = true
}

function closeModalEdit() {
  modalEditRef.value = false
}

/**
 * =======================
 * Toast Saved
 * =======================
 */

const savedToastRef = ref(false)

function openSavedToast() {
  setTimeout(() => {
    closeModalFilled()
  }, 500)

  setTimeout(() => {
    savedToastRef.value = true
  }, 750)

  setTimeout(() => {
    closeSavedToast()
  }, 2500)
}

function closeSavedToast() {
  savedToastRef.value = false
}

/**
 * =======================
 * Toast Saved
 * =======================
 */

const editSavedToastRef = ref(false)

function openEditSavedToast() {
  setTimeout(() => {
    closeModalEdit()
  }, 500)

  setTimeout(() => {
    editSavedToastRef.value = true
  }, 750)

  setTimeout(() => {
    closeEditSavedToast()
  }, 2500)
}

function closeEditSavedToast() {
  editSavedToastRef.value = false
}

/**
 * =================
 * Modal - Delete
 * =================
 */
const modalRef = ref(false)

function openModalDelete() {
  modalRef.value = true
}

function closeModalDelete() {
  modalRef.value = false
}

/**
 * =================
 * Toast Delete
 * =================
 */
const toastRef = ref(false)

function openToastDelete() {
  modalRef.value = false
  toastRef.value = true
}

function closeToastDelete() {
  toastRef.value = false
}
</script>

<template>
  <DashboardLayout title="Banner">
    <div class="Outlets min-h-[480px] rounded-large bg-white p-6">
      <div class="Heading mb-6 space-y-8 2xl:mb-8">
        <Title variant="default"> Banner </Title>

        <div class="Action flex items-end justify-between">
          <!-- Search -->
          <nav class="Search relative">
            <input
              type="text"
              class="w-[16rem] rounded-large bg-netral-20 px-3.5 py-2 pl-10 text-xs outline-none placeholder:text-netral-50 focus-visible:ring-2 focus-visible:ring-primary-main 2xl:w-[21.25rem] 2xl:py-3 2xl:pl-11 2xl:text-sm"
              placeholder="Search"
            />

            <MagnifyingGlass
              class="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 stroke-2 text-netral-60 2xl:h-5 2xl:w-5"
            />
          </nav>

          <!-- Cta -->
          <Button
            type="click"
            :onClick="openModalEmpty"
            variant="primary"
            modifier="defaultPrimary"
          >
            <FolderSimplePlus class="h-4 w-4 stroke-[2.5px] text-white 2xl:h-5 2xl:w-5" />
            Add Banner
          </Button>
        </div>
      </div>

      <section class="TableUsers mb-6 w-full">
        <!-- Table Users -->
        <div class="Wrapper relative w-full overflow-x-auto">
          <table class="Table w-full table-auto">
            <!-- Table Users: Head -->
            <thead class="THead w-full rounded-lg bg-[#FAFAFA] 2xl:rounded-large">
              <tr>
                <th
                  class="w-px whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> No </Body>
                </th>

                <th
                  class="max-w-[120px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Image </Body>
                </th>

                <th
                  class="max-w-[120px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Type </Body>
                </th>

                <th
                  class="max-w-[180px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Created At </Body>
                </th>

                <th
                  class="max-w-[100px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Show </Body>
                </th>

                <th
                  class="max-w-[80px] whitespace-nowrap px-6 py-3 text-left uppercase text-netral-50 first:pl-3 2xl:py-4"
                >
                  <Body size="md" weight="medium"> Action </Body>
                </th>
              </tr>
            </thead>

            <!-- Table Users: Body -->
            <tbody class="TBody relative w-full">
              <tr
                v-for="(banner, index) in bannersData"
                class="border-b border-netral-20 last:border-netral-30"
              >
                <td class="w-px px-6 py-4 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ index + 1 }} </Body>
                </td>

                <td class="max-w-[120px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <div class="Image relative h-24 w-40">
                    <img
                      class="h-full w-full rounded-large object-cover object-left"
                      :src="banner.image"
                      alt="Banner Photo"
                    />
                  </div>
                </td>

                <td class="max-w-[120px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium">
                    {{ banner.type }}
                  </Body>
                </td>

                <td class="max-w-[180px] px-6 py-6 text-left text-netral-80 first:pl-3">
                  <Body size="lg" weight="medium"> {{ banner.createdAt }} </Body>
                </td>

                <td class="max-w-[100px] px-6 py-6 text-left text-netral-80 first:pl-3">
                  <Toggle />
                </td>

                <td class="max-w-[80px] px-6 py-6 text-left capitalize text-netral-80 first:pl-3">
                  <div class="Action flex gap-3 2xl:gap-4">
                    <Button
                      type="click"
                      :on-click="openModalEdit"
                      variant="plain"
                      size="medium"
                      modifier="defaultPlain"
                    >
                      <Pencil class="h-5 w-5 stroke-[2.5px] text-netral-80" />
                    </Button>

                    <Button
                      type="click"
                      :on-click="openModalDelete"
                      variant="plain"
                      size="medium"
                      modifier="defaultPlain"
                    >
                      <Trash class="h-5 w-5 stroke-[2.5px] text-error-main" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Pagination -->
      <Pagination />
    </div>

    <!-- Modal -->
    <template #Modal>
      <UploadBannerImageEmpty
        :isOpenRef="modalUploadEmptyRef"
        :closeModal="closeModalEmpty"
        :nextClick="openModalFilled"
      />

      <UploadBannerImageFilled
        :isOpenRef="modalUploadFilledRef"
        :closeModal="closeModalEmpty"
        :nextClick="openSavedToast"
      />

      <UploadBannerImageFilled
        :isOpenRef="modalEditRef"
        :closeModal="closeModalEdit"
        :nextClick="openEditSavedToast"
      />

      <Modal
        variant="delete"
        :modal-ref="modalRef"
        :close-modal="closeModalDelete"
        :open-toast="openToastDelete"
        title="Delete Banner"
        description="Are you sure want to delete this banner? Banner which already deleted can not be recovered."
      />
    </template>

    <!-- Toast -->
    <template #Toast>
      <Toast
        :toastRef="savedToastRef"
        :closeToast="closeSavedToast"
        variant="saved"
        heading="Banner added successfully"
        description="Banner successfully added, you can edit or replace the banner in the action column."
      />
      <Toast
        :toastRef="editSavedToastRef"
        :closeToast="closeEditSavedToast"
        variant="saved"
        heading="Banner updated successfully"
        description="Banner successfully updated."
      />
      <Toast
        variant="delete"
        :toast-ref="toastRef"
        :close-toast="closeToastDelete"
        heading="Banner has been deleted"
        description="Banner which already deleted can not be recovered."
      />
    </template>
  </DashboardLayout>
</template>
