<template>
  <div class="flex justify-center mt-14">
    <div class="w-full max-w-[500px]">
      <form class="bg-white shadow-lg rounded px-8  pb-8 mb-4">
        <p class="block font-bold pt-8 text-3xl text-gray-900 flex justify-center">Hotels.</p>
        <div class="mb-10 mt-5">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input v-model="username" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password" required class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        </div>
        <p class="flex justify-center mt-3 mb-7 text-sm">If you don't have an account <RouterLink to="/register" class="underline font-semibold text-blue-500 ml-2"> Sign Up</RouterLink></p>

        <div class="flex items-center justify-center">
          <button class="bg-violet-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Log In
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2023 Hotels. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const username = ref('');
const password = ref('');
</script>
