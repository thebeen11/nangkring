<template>
    <div class=" w-full h-20 drop-shadow-md px-10 md:px-16 flex items-center bg-white sticky top-0 z-50">
       <div class=" w-full flex justify-between items-center">
        <div id="logo">
        <h1 class="font-bold">NANGKRING</h1>
        </div>
        {{ isLogin }}
        <div v-if="!isLogin" class=" border rounded-full px-6 py-2 cursor-pointer" @click="toLogin()">
            login
        </div>
        <div v-else class=" border rounded-full px-6 py-2 cursor-pointer">
        {{ userLogin.email }}
        </div>
       </div>
        
    </div>
</template>

<script lang="ts" setup>


const router = useRouter()

const toLogin = () => {
    router.push('login')
}
</script>