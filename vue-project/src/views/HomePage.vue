<template>
  <div>
    <div class="flex items-center justify-center mb-8 bg-violet-600 rounded-b-lg">
      <div class="p-10">
        <p class="text-5xl font-bold text-white mb-5">Find your next stay</p>
        <div class="flex space-x-3">
          <div>
            <p class="text-gray-200 mb-1">Where are you going?</p>
            <input type="text" placeholder="ex: Mumbai" class="border p-3 rounded-lg focus:outline-none w-[350px]">
          </div>
          <div>
            <p class="text-gray-200 mb-1">Check-in</p>
            <input type="date" placeholder="Check-in" class="border p-2.5 rounded-lg focus:outline-non w-[300px]">
          </div>
          <div>
            <p class="text-gray-200 mb-1">Check-out</p>
            <input type="date" placeholder="Check-out" class="border p-2.5 rounded-lg focus:outline-none w-[300px]">
          </div>
          <div>
            <p class="text-violet-600">.</p>
            <button class="bg-violet-900 text-white font-semibold p-3 rounded-lg w-[100px]">Search</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-10">
      <div>
        <h2 class="text-3xl font-bold mb-4">Most Popular Hotels</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          <template v-for="item in 5">
            <div class="bg-white p-4 rounded shadow-lg">
              <RouterLink to="/hotel">
                <img src="/logo.jpg" alt="Hotel C" class="w-full h-40 object-cover mb-4 rounded">
                <h3 class="text-lg font-semibold mb-0.5">Hotel C</h3>
                <p class="text-gray-700 mb-2 text-sm">123 Main Street, City, Country</p>
                <div class="flex space-x-3 items-center mb-2">
                  <div class="text-white p-1 rounded-lg bg-violet-600 w-[40px] items-center justify-center flex">4.5
                  </div>
                  <div class="text-sm">1234 reviews</div>
                </div>
                <div class="flex justify-end text-gray-700 mb-2 text-sm">Starting Price: <span class="font-semibold">$XXX per night</span>
                </div>
              </RouterLink>
            </div>
          </template>
        </div>
      </div>
      <div class="mt-8">
        <h2 class="text-3xl font-bold mb-4">Our Recommended Hotels</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          <template v-for="item in 5">
            <div class="bg-white p-4 rounded shadow-lg">
              <img src="/logo.jpg" alt="Hotel C" class="w-full h-40 object-cover mb-4 rounded">
              <h3 class="text-lg font-semibold mb-0.5">Hotel C</h3>
              <p class="text-gray-700 mb-2 text-sm">123 Main Street, City, Country</p>
              <div class="flex space-x-3 items-center mb-2">
                <div class="text-white p-1 rounded-lg bg-violet-600 w-[40px] items-center justify-center flex">4.5</div>
                <div class="text-sm">1234 reviews</div>
              </div>
              <div class="flex justify-end text-gray-700 mb-2 text-sm">Starting Price: <span class="font-semibold">$XXX per night</span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>