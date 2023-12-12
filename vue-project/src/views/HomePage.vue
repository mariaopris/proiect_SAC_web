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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-5">
          <template v-for="hotel in popular_hotels" class="h-20">
            <div class="bg-white p-4 rounded shadow-lg">
              <RouterLink :to="'/hotel/'+user_id">
                <div class="grid grid-rows-3">
                  <img src="/logo.jpg" alt="Hotel C" class="w-full h-40 object-cover mb-4 rounded row-span-2">
                  <div class="row-span-1">
                    <h3 class="text-lg font-semibold mb-0.5">{{hotel.name}}</h3>
                    <p class="text-gray-700 mb-2 text-sm"> {{hotel.city}}, India</p>
                  </div>
                </div>
                  <div class="flex space-x-3 items-center mb-2">
                    <div class="text-white p-1 rounded-lg bg-violet-600 w-[40px] items-center justify-center flex">
                      <p>{{hotel.rating}}</p>
                      <img src="src/assets/img/star.svg" class="h-3.5 ml-1"/>
                    </div>
                    <div class="text-sm">{{hotel.num_reviews}} reviews</div>
                  </div>
                  <div class="flex justify-end text-gray-700 mb-2 text-sm">Starting Price:
                    <span class="font-semibold"> €{{ hotel.prices }} per night</span>
                  </div>
              </RouterLink>
            </div>
          </template>
        </div>
      </div>
      <div class="mt-12">
        <h2 class="text-3xl font-bold mb-4">Our Recommended Hotels</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-8">
          <template v-for="hotel in recommended_hotels">
            <div class="bg-white p-4 rounded shadow-lg">
              <RouterLink :to="'/hotel/'+user_id">
                <div class="grid grid-rows-3">
                  <img src="/logo.jpg" alt="Hotel C" class="w-full h-40 object-cover mb-4 rounded row-span-2">
                  <div class="row-span-1">
                    <h3 class="text-lg font-semibold mb-0.5">{{hotel.values.name}}</h3>
                    <p class="text-gray-700 mb-2 text-sm"> {{hotel.values.city}}, India</p>
                  </div>
                </div>
                <div class="flex space-x-3 items-center mb-2">
                  <div class="text-white p-1 rounded-lg bg-violet-600 w-[40px] items-center justify-center flex">
                    <p>{{hotel.values.rating}}</p>
                    <img src="src/assets/img/star.svg" class="h-3.5 ml-1"/>
                  </div>
                  <div class="text-sm">{{hotel.values.num_reviews}} reviews</div>
                </div>
                <div class="flex justify-end text-gray-700 mb-2 text-sm">Starting Price:
                  <span class="font-semibold"> €{{ hotel.values.prices }} per night</span>
                </div>
              </RouterLink>
            </div>
          </template>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const popular_hotels = ref([]);
const user_id = route.params.user_id;
const recommended_hotels = ref([]);

const getPopularHotels = async() => {
  await axios.get('http://127.0.0.1:8000/api/get-popular-hotels')
      .then((response) => {
        response.data.forEach(hotel => {
          hotel.city = hotel.city[0].toUpperCase() + hotel.city.substring(1);
          hotel.prices = JSON.parse(hotel.prices);
          let price = hotel.prices[0];
          hotel.prices.forEach(hotel_price => {
            if(hotel_price < price){
              price = hotel_price;
            }
          });
          hotel.prices = Math.round(price / 89.88);
          popular_hotels.value.push(hotel);
        })
      })
}

const getRecommandations = async() => {
  await axios.post('http://127.0.0.1:8000/api/get-recommandations', {
    user_id: user_id
  })
      .then((response) => {
        response.data.recomms.forEach(hotel => {
          recommended_hotels.value.push(hotel);
          recommended_hotels.value[recommended_hotels.value.length - 1].values.prices = JSON.parse(recommended_hotels.value[recommended_hotels.value.length - 1].values.prices);
          let hotel_price = recommended_hotels.value[recommended_hotels.value.length - 1].values.prices[0];
          recommended_hotels.value[recommended_hotels.value.length - 1].values.prices.forEach(price => {
            if(price < hotel_price){
              hotel_price = price;
            }
          })
          recommended_hotels.value[recommended_hotels.value.length - 1].values.city = recommended_hotels.value[recommended_hotels.value.length - 1].values.city[0].toUpperCase() + recommended_hotels.value[recommended_hotels.value.length - 1].values.city.substring(1);
          recommended_hotels.value[recommended_hotels.value.length - 1].values.prices = Math.round(hotel_price / 89.88);
        })
      })
}


onMounted(async() => {
  await getPopularHotels();
  await getRecommandations();
})

</script>
