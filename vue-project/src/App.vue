<template>
  <header class="bg-violet-600">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <div class="flex items-center space-x-3">
            <img class="h-16 w-16" src="/logo.jpg" alt="">
            <h class="text-3xl text-white font-sans font-bold italic">hotels.</h>
          </div>
        </RouterLink>
      </div>

      <div v-if="is_logged_in" class="hidden lg:flex lg:flex-1 lg:justify-end">
        <div class="flex items-center justify-center space-x-3 text-sm font-semibold text-white mr-5 rounded-full">
          <img class="w-10" src="/public/avatar/avatar2.png">
          <p>{{userStore.userName}}</p>
        </div>
        <button @click="logout()" class="text-sm font-semibold leading-6 text-gray-900 p-2">Log out <span
            aria-hidden="true">&rarr;</span></button>
      </div>
      <div v-else class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink class="text-sm font-bold text-violet-900 p-2 bg-white rounded-full" to="/register">Sign up
        </RouterLink>
        <RouterLink class="text-sm font-bold leading-6 text-white p-2" to="/login">Log in <span
            aria-hidden="true">&rarr;</span></RouterLink>
      </div>
    </nav>

  </header>

  <RouterView/>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import {onMounted, ref} from "vue";
import {useUserStore} from "../stores/user-store";
import router from "@/router";
const userStore = useUserStore();

const is_logged_in = ref(false);

const logout = () => {
  userStore.setUserId = '';
  userStore.setUserName = '';
  router.push('/login');
}

onMounted(() => {
  if(userStore.userid !== '') {
    is_logged_in.value = true;
  }
})
</script>