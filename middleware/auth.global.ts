import { isLogin } from "../composables/store";

export default defineNuxtRouteMiddleware((to, from) => {
  if (isLogin.value) {
    if (to.path == "/login") {
      return navigateTo('/')
    } 
  }
});
