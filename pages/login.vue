<template>
  <div class="w-full flex justify-center py-28">
    <div class="w-full px-10 md:px-0 md:w-80 flex flex-col space-y-6 justify-center">
      <p class="font-semibold text-center">
        Sign in to <span class="font-bold">NANGKRING</span>
      </p>
      <button
        class="py-2 px-4 rounded-xl font-semibold border-slate-500 border-4 flex justify-center" @click="loginWithGoogle"
      >
        <span class="flex items-center space-x-2"
          ><Icon name="logos:google-icon" />
          <p>Continue with Google</p></span
        >
      </button>

      <p class="text-center">or</p>

      <div class="w-full flex flex-col space-y-4">
        <input
          ref="email"
          type="email"
          name="email"
          class="py-2 px-4 rounded-xl font-semibold border-slate-500 border-2"
          placeholder="Email"
          v-model="data.email"
        />

        <input
        ref="password"
          type="password"
          name="password"
          class="py-2 px-4 rounded-xl font-semibold border-slate-500 border-2"
          placeholder="Password"
          v-model="data.password"
        />
      </div>
      <button
        class="py-2 px-4 rounded-xl font-semibold bg-slate-500 text-white hover:bg-slate-400 flex justify-center"
        @click="signIn()"
      >
        Sign In
      </button>
      <p class="text-slate-500 hover:text-slate-400 text-center cursor-pointer" @click="resetPass()">
        Reset Password
      </p>
      <p class="text-center">
        No account?
        <span
          class="text-slate-500 hover:text-slate-400 text-center cursor-pointer" @click="onLogoutAction"
          >Create one</span
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onStartTyping } from "@vueuse/core";
import { resetPassword, loginWithGoogle, onLogoutAction } from "~/composables/authority";


definePageMeta({
  layout: "custom",
});
const email = ref<HTMLInputElement | null>(null);


const data = reactive({
    email: '',
    password: '',
})


onStartTyping(() => {
  if (email.value) {
    email.value.focus();
  }
});

const signIn = () =>{
    try {
     signInUser(data.email, data.password)
    } catch (error:any) {
        console.log(error);
    }
}

const resetPass = () => {
  try {
    resetPassword(data.email)
  } catch (error) {
    console.log(error);
    
  }
}

</script>
