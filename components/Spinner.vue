<template>
  <div class="absolute inset-0 flex items-center justify-center gap-2 z-50">
    <div class="spinner" />
    <span>در حال دریافت اطلاعات...</span>
  </div>
</template>

<style scoped>
.spinner {
  width: 3rem;
  height: 3rem;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ec4899; /* Tailwind's primary-pink */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
