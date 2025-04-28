<template>
  <div class="flex flex-col gap-6">
    <div class="bg-white p-4 rounded-2xl shadow-md">
      <h3 class="text-sm font-semibold text-[#1B1D29] mb-4">فیلتر و جستجو</h3>
      <div
        class="flex items-center border border-primary-pink rounded-lg overflow-hidden"
      >
        <input
          v-model="searchTitle"
          type="text"
          placeholder="جستجو..."
          class="flex-1 px-3 py-2 text-sm focus:outline-none"
        />
        <button
          class="bg-primary-pink text-white px-4 flex items-center justify-center"
          @click="applySearch"
        >
          <FontAwesomeIcon icon="magnifying-glass" />
        </button>
      </div>
      <button
        class="bg-primary-pink text-white w-full py-2 rounded-xl mt-4 text-sm font-semibold"
        @click="applySearch"
      >
        جستجو
      </button>
    </div>

    <div class="bg-white p-4 rounded-2xl shadow-md">
      <h3 class="text-sm font-semibold text-[#1B1D29] mb-4">مرتب سازی</h3>
      <div class="flex flex-col gap-3">
        <label
          v-for="option in sortOptions"
          :key="option.title + option.order"
          class="flex items-center gap-2"
        >
          <input
            type="radio"
            :checked="isSelected(option)"
            @change="updateSort(option)"
            class="accent-primary-pink"
          />
          <span class="text-sm">{{ option.label }}</span>
        </label>
      </div>
    </div>

    <div class="bg-white p-4 rounded-2xl shadow-md">
      <h3 class="text-sm font-semibold text-[#1B1D29] mb-4">دسته بندی</h3>
      <div class="flex flex-col gap-3">
        <label
          v-for="category in categories"
          :key="category.id"
          class="w-full flex items-center gap-2"
        >
          <input
            type="checkbox"
            :value="category.id"
            v-model="localFilters.category_ids"
            class="accent-primary-pink"
          />
          <div class="w-full flex items-center justify-between">
            <span class="text-sm">{{ category.name }}</span>
            <span
              :class="[
                'text-xs text-white rounded-md w-6 h-6 flex items-center justify-center',
                localFilters.category_ids.includes(category.id)
                  ? 'bg-primary-pink'
                  : 'bg-gray-900',
              ]"
            >
              {{ category.count }}
            </span>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { type Category } from "~/constants/types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface FiltersState {
  title: string;
  sort_title: string;
  sort_order: string;
  category_ids: number[];
}

const props = defineProps<{
  categories: Category[];
  filters: FiltersState;
}>();

const emit = defineEmits<{
  (e: "update:filters", value: FiltersState): void;
}>();

const localFilters = ref<FiltersState>({ ...props.filters });
const searchTitle = ref(localFilters.value.title);

const sortOptions = [
  { label: "تعداد: کم به زیاد", title: "count", order: "asc" },
  { label: "تعداد: زیاد به کم", title: "count", order: "desc" },
  { label: "رتبه: زیاد به کم", title: "rating", order: "desc" },
  { label: "رتبه: کم به زیاد", title: "rating", order: "asc" },
];

function isSelected(option: { title: string; order: string }) {
  return (
    localFilters.value.sort_title === option.title &&
    localFilters.value.sort_order === option.order
  );
}

function updateSort(option: { title: string; order: string }) {
  localFilters.value.sort_title = option.title;
  localFilters.value.sort_order = option.order;
  emit("update:filters", { ...localFilters.value });
}

function applySearch() {
  localFilters.value.title = searchTitle.value;
  emit("update:filters", { ...localFilters.value });
}

watch(
  () => localFilters.value.category_ids,
  (newCategoryIds) => {
    emit("update:filters", {
      ...localFilters.value,
      category_ids: [...newCategoryIds],
    });
  },
  { deep: true }
);
</script>

<style scoped>
input[type="checkbox"],
input[type="radio"] {
  @apply w-4 h-4;
}
</style>
