<template >
     <div class="md:max-w-72 cursor-pointer mb-8 md:mb-2">
        <div
          class="w-full aspect-square rounded-xl transition-opacity bg-white overflow-hidden"
        >
          <img :src="`${mediaServer}/${shop?.photos[0]}`" alt="" srcset="" />
        </div>
        
        <div class=" mt-2">
          <p class="capitalize font-semibold">{{ shop?.name }}, {{ shop?.district }}</p>
          <p class="capitalize">{{ shop?.subDistrict }} {{ shop?.city }}</p>
          <p class=" font-semibold"> IDR{{ shop?.minPrice }}-{{ shop?.maxPrice }}</p>
        </div>
      </div>
</template>

<script setup lang="ts">
defineProps({
  shop: {
    type: Object,
  }
})

const mediaServer = useRuntimeConfig().public.BASE_MEDIA_SERVER;
</script>