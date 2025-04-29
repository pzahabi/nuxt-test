<template>
  <footer
    class="w-full pt-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] rounded-t-lg relative z-10"
  >
    <div class="w-full bg-white">
      <div class="container mx-auto px-8 sm:px-0">
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-10 sm:text-right mb-10">
          <div class="hidden sm:flex items-end col-span-2">
            <div class="text-center text-[#555] mb-6">
              هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
            </div>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-[#2d2f33]">دسترسی سریع</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-900 hover:text-primary-pink"
                  >درباره ما</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-900 hover:text-primary-pink"
                  >بلاگ</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-900 hover:text-primary-pink"
                  >تماس با ما</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-900 hover:text-primary-pink"
                  >خدمات پس از فروش</a
                >
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-[#2d2f33]">راهنمای سایت</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-900 hover:text-primary-pink"
                  >قوانین و مقررات</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-900 hover:text-primary-pink"
                  >دریافت مشاوره</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-900 hover:text-primary-pink"
                  >انتقادات و پیشنهادات</a
                >
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-[#2d2f33]">شبکه‌های اجتماعی</h3>
            <ul class="space-y-2 text-[#2d2f33]">
              <li>
                <a
                  href="#"
                  class="flex justify-start items-center gap-2 text-gray-600 hover:text-primary-pink"
                >
                  <FontAwesomeIcon :icon="['fab', 'telegram']" />
                  تلگرام
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex justify-start items-center gap-2 text-gray-600 hover:text-primary-pink"
                >
                  <FontAwesomeIcon :icon="['fab', 'instagram']" />
                  اینستاگرام
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex justify-start items-center gap-2 text-gray-600 hover:text-primary-pink"
                >
                  <FontAwesomeIcon :icon="['fab', 'linkedin']" />
                  لینکدین
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gray-200">
        <div class="container mx-auto px-8 sm:px-0">
          <div
            class="py-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-center text-xs text-[#666]"
          >
            <div></div>
            <div class="flex flex-col items-center justify-center gap-3">
              <div>
                تمامی حقوق مادی و معنوی این وب‌سایت متعلق به می‌باشد و هر گونه
                کپی‌برداری پیگرد قانونی دارد.
              </div>
              <div class="flex justify-center gap-4 text-lg">
                <a href="#" class="text-[#f59ad1] hover:text-primary-pink"
                  ><FontAwesomeIcon :icon="['fab', 'telegram']"
                /></a>
                <a href="#" class="text-[#f59ad1] hover:text-primary-pink"
                  ><FontAwesomeIcon :icon="['fab', 'instagram']"
                /></a>
                <a href="#" class="text-[#f59ad1] hover:text-primary-pink"
                  ><FontAwesomeIcon :icon="['fab', 'twitter']"
                /></a>
                <a href="#" class="text-[#f59ad1] hover:text-primary-pink"
                  ><FontAwesomeIcon :icon="['fab', 'linkedin']"
                /></a>
              </div>
            </div>
            <div class="flex justify-center gap-4">
              <img :src="enamad" alt="enamad" class="h-20" />
              <img :src="samandehi" alt="samandehi" class="h-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import enamad from "@/assets/img/enamad.jfif";
import samandehi from "@/assets/img/samandehi.jpg";
</script>
