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
  image: File
}

const data: Data = reactive({
  coffeShops: [],
  image: {} as File
});

const getImage = (event:any) => {
  if (event.target.files && event.target.files[0]) {
        const fileType = event.target.files[0].type.toString();
        
        if(fileType.indexOf('image') != 0){
            alert('Please Choose an Image'); return;
        }
        data.image = event.target.files[0];
      }
}

onMounted(() => {
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
  let id = generateId()
    await setDoc(doc(firestoreDb, "coffeshop", id), {
  "address": "jl. masing-masing aja",
  "city": "jakarta barat",
  "district": "duri kelapa",
  "map": "https://goo.gl/maps/U9HjyE6KcqQ5csqV8",
  "maxPrice": 85000,
  "minPrice": 25000,
  "name": "KOPI YUYUYUYU",
  "photos": "",
  "province": "DKI jakarta",
  "subDistrict": "kebon jeruk"
});

updateFotoProfile(data.image as File, id as string);
};

</script>
