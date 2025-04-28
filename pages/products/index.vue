<template>
  <div class="w-full">
    <div class="container m-auto py-8 px-8 sm:px-0">
      <div class="flex flex-col-reverse md:flex-row gap-3">
        <div class="w-full sm:w-4/12">
          <div class="bg-white p-4 rounded-2xl shadow-md">فیلترها</div>
        </div>
        <div class="w-full lg:w-9/12">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from "~/components/ProductCard.vue";
import { type Product } from "~/constants/types";

const {
  data: products,
  error,
  status,
} = await useFetch<Product[]>("https://fakestoreapi.com/products");
</script>
