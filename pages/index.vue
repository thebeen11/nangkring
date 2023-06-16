<template>
  <div class=" px-8 md:px-20 py-10">
   
    <div class="w-full grid md:grid-cols-4 grid-cols-1 md:gap-6 justify-center">
        <CoffeShopCard v-for="a in data.coffeShops" :shop="a"/>
    </div>
   
  </div>
</template>

<script lang="ts" setup>
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { CoffeShop } from "../model/CoffeShop";

interface Data {
  coffeShops: CoffeShop[];
}

const data: Data = reactive({
  coffeShops: [],
});


onMounted(() => {
    // addData()
  getData();
});

const getData = async () => {
  const refs = collection(firestoreDb, "coffeshop");
  const q = query(refs);
  getDocs(q).then((a) => {
    a.forEach((b) => data.coffeShops.push(b.data() as CoffeShop));
  });
};

const addData = async () => {
    await setDoc(doc(firestoreDb, "coffeshop", generateId()), {
  "address": "jl. masing-masing aja",
  "city": "jakarta barat",
  "district": "duri kelapa",
  "map": "https://goo.gl/maps/U9HjyE6KcqQ5csqV8",
  "maxPrice": 85000,
  "minPrice": 25000,
  "name": "KOPI KITA",
  "photos": [
    "Screenshot_2023-06-16_at_09.14.06_mhnwp2.png",
  ],
  "province": "DKI jakarta",
  "subDistrict": "kebon jeruk"
});
};
</script>
