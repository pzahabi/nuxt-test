<template>
  <div class="bg-[#EFF3FA] min-h-screen py-8 px-4 sm:px-10">
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="bg-white rounded-2xl shadow-md overflow-hidden">
        <div class="p-4 text-right">
          <h1 class="text-md sm:text-lg font-semibold text-[#1B1D29]">
            {{ product?.title }}
          </h1>
        </div>
        <div class="relative">
          <img
            :src="product?.image"
            :alt="product?.title"
            class="w-full h-72 object-cover p-4 pt-0"
          />
          <div
            class="absolute bottom-2 left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow"
          >
            <FontAwesomeIcon icon="search" class="text-gray-700 text-sm" />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-md p-4">
        <h2 class="text-sm font-semibold text-[#1B1D29] mb-4">مشخصات فنی</h2>
        <div class="grid grid-cols-1 text-sm gap-3">
          <div
            v-for="(value, key) in formattedDetails"
            :key="key"
            class="flex flex-col sm:flex-row sm:items-stretch gap-3"
          >
            <div
              class="bg-gray-200 text-gray-500 font-semibold px-2 py-4 rounded-lg sm:rounded-s-lg sm:rounded-e-none sm:w-1/3 flex items-center justify-start"
            >
              <span>{{ key }}</span>
            </div>
            <div
              class="bg-gray-200 text-gray-800 px-2 py-4 rounded-lg sm:rounded-e-lg sm:rounded-s-none sm:w-2/3"
            >
              {{ value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { type Product } from "~/constants/types";

const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl!;

const route = useRoute();

const {
  data: product,
  error,
  status,
} = await useFetch<Product>(`${apiUrl}/products/${route.params.id}`);

const formattedDetails = computed(() => {
  if (!product.value) return {};

  return {
    قیمت: product.value.price.toLocaleString() + " تومان",
    توضیحات: product.value.description,
    "دسته بندی": product.value.category,
    ردیف: String(product.value.id),
    "تعداد موجودی": "۵",
  };
});
</script>
