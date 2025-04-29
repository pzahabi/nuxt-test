<template>
  <div
    class="bg-white rounded-2xl shadow-md border p-4 flex flex-col items-center w-full h-full"
  >
    <img
      :src="product.image"
      :alt="product.title"
      loading="lazy"
      class="w-full h-40 object-cover rounded-lg mb-4"
    />
    <h2
      class="w-full text-center text-sm font-semibold text-[#1B1D29] mb-6 truncate px-2"
    >
      {{ product.title }}
    </h2>

    <NuxtLink
      :to="`/products/${product.id}`"
      class="flex items-center gap-1 text-primary-pink text-sm font-semibold border-t pt-2 mt-auto w-full justify-center"
    >
      <span>مشاهده جزئیات</span>
      <FontAwesomeIcon icon="chevron-left" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { type Product } from "~/constants/types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps<{
  product: Product;
}>();
</script>
