<template>
  <div class="w-full">
    <div class="container mx-auto py-8 px-8 sm:px-0">
      <div class="flex flex-col-reverse md:flex-row gap-6">
        <div class="w-full md:w-4/12 lg:w-3/12">
          <Filters
            :categories="categories"
            :filters="filters"
            @update:filters="updateFilters"
          />
        </div>

        <div class="w-full md:w-8/12 lg:w-9/12">
          <div v-if="loading"><Spinner/></div>
          <div v-else-if="error" class="text-gray-900">{{ error }}</div>
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
import { ref, watch } from "vue";
import ProductCard from "~/components/ProductCard.vue";
import Filters from "~/components/Filters.vue";
import { type Category, type Product } from "~/constants/types";

const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl!;

interface FiltersState {
  title: string;
  sort_title: string;
  sort_order: string;
  category_ids: number[];
}

//فرض می کنیم دسته بندی ها را هم از سرور دریافت کرده ایم.
const categories: Category[] = [
  { id: 1, name: "مسکن و ساختمان", count: 12 },
  { id: 2, name: "بهداشت و درمان", count: 23 },
  { id: 3, name: "صنعتی و کارخانه", count: 4 },
];

const filters = ref<FiltersState>({
  title: "",
  sort_title: "count",
  sort_order: "asc",
  category_ids: [],
});

const products = ref<Product[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

async function fetchProducts() {
  loading.value = true;
  error.value = null;

  try {
    const query = new URLSearchParams();

    if (filters.value.title) query.append("title", filters.value.title);
    if (filters.value.sort_title)
      query.append("sort_title", filters.value.sort_title);
    if (filters.value.sort_order)
      query.append("sort_order", filters.value.sort_order);
    if (filters.value.category_ids.length > 0) {
      query.append("category_ids", filters.value.category_ids.join(","));
    }

    const { data } = await useFetch<Product[]>(
      `${apiUrl}/products?${query.toString()}`
    );

    products.value = data.value || [];
  } catch (err) {
    error.value = "خطا در دریافت محصولات";
  } finally {
    loading.value = false;
  }
}

function updateFilters(newFilters: FiltersState) {
  filters.value = newFilters;
}

watch(
  filters,
  () => {
    fetchProducts();
  },
  { deep: true }
);

fetchProducts();
</script>
