<template>
  <header class="w-full py-8 bg-white shadow-lg rounded-b-lg relative z-10">
    <div class="container mx-auto px-8 sm:px-0">
      <div class="flex items-center justify-between">
        <div></div>
        <nav
          class="hidden sm:flex items-center gap-6 text-sm font-medium text-[#1B1D29]"
        >
          <ul class="flex items-center gap-6">
            <li>
              <NuxtLink
                to="/products"
                class="flex items-center gap-1 cursor-pointer transition-colors hover:text-primary-pink"
                active-class="text-primary-pink"
                exact-active-class="text-primary-pink"
              >
                <FontAwesomeIcon icon="boxes-stacked" />
                <span>لیست محصولات</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/consultation"
                class="flex items-center gap-1 cursor-pointer transition-colors hover:text-primary-pink"
                active-class="text-primary-pink"
                exact-active-class="text-primary-pink"
              >
                <FontAwesomeIcon icon="handshake" />
                <span>دریافت مشاوره</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/faq"
                class="flex items-center gap-1 cursor-pointer transition-colors hover:text-primary-pink"
                active-class="text-primary-pink"
                exact-active-class="text-primary-pink"
              >
                <FontAwesomeIcon icon="comments" />
                <span>سوالات متداول</span>
              </NuxtLink>
            </li>
            <li class="relative">
              <NuxtLink
                to="/contact"
                class="flex items-center gap-1 cursor-pointer transition-colors hover:text-primary-pink"
                active-class="text-primary-pink"
                exact-active-class="text-primary-pink"
              >
                <FontAwesomeIcon icon="phone" />
                <span>تماس با ما</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <!-- Call Button -->
        <div class="hidden sm:flex">
          <button
            class="bg-primary-pink text-white px-5 py-2 rounded-2xl flex items-center gap-2 text-sm font-semibold shadow"
          >
            <FontAwesomeIcon icon="phone" />
            تماس
          </button>
        </div>
        <!-- Mobile Icons -->
        <div class="sm:hidden flex justify-between items-center w-full">
          <button
            class="w-10 h-10 border border-primary-pink rounded-md flex items-center justify-center text-primary-pink"
          >
            <FontAwesomeIcon icon="phone" />
          </button>
          <button
            class="w-10 h-10 border border-primary-pink rounded-md flex items-center justify-center text-primary-pink"
          >
            <FontAwesomeIcon icon="bars" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
