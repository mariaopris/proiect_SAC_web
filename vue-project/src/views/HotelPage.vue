<template>
    <template v-if="isLoading">
        <div class="text-center font-semibold mt-10 text-2xl">
            Is Loading...
        </div>
    </template>
    <template v-else>
        <div class="max-w-[1200px] mx-auto px-2 mt-20">

            <p class="text-3xl flex justify-center">{{hotel.name}}</p>
            <div class="flex justify-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <p class="ml-2 mr-10 underline">{{hotel.num_reviews}} recenzii</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p class="ml-2">{{hotel.city}}</p>
            </div>

            <div class="grid grid-cols-2 mt-20">
                <div class="mr-20">
                    <p class="text-xl font-semibold">Despre acest hotel</p>
                    <p class="text-md font-semibold mt-5">Facilitati:</p>
                    <div v-for="facility in facilities">
                      <li class="mt-3">{{facility}}</li>
                    </div>
                    <p class="mt-5">
                        Hotelul {{hotel.name}} este un hotel situat într-o locație frumoasa in orasul {{hotel.city[0].toUpperCase() + hotel.city.substring(1)}}.</p>
                  <div class="flex justify-center items-center">
                    <img src="/logo.jpg" alt="Hotel C" class="h-60 justify-center items-center flex object-cover mb-4 rounded row-span-2">
                  </div>
                </div>
                <div class="w-full">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="flex justify-between">
                            <div>
                                <p class="font-bold">{{hotel.avg_price}} €/noapte</p>
                            </div>
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                <p class="ml-2 mr-10 underline">{{hotel.num_reviews}} recenzii</p>
                            </div>
                        </div>

                        <div class="mb-4 mt-5">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="check-in">
                                Check-in
                            </label>
                            <input v-model="check_in" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="check-in" type="date" >
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="check-out">
                                Check-out {{check_out}}
                            </label>
                            <input v-model="check_out" class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="check-out" type="date">
                        </div>
                        <div class="flex items-center justify-end">
                            <button @click="addReservation()" class="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Rezerva
                            </button>
                        </div>

                        <div class="border border-1 border-gray-200 mt-5 w-full"></div>
                        <div class="flex items-center justify-between mt-2">
                            <div class="font-bold text-gray-700 text-xl">Total</div>
                            <div class="font-bold text-gray-700 text-xl">{{price}} €</div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="mt-10 mb-16">
                <p class="text-2xl font-bold">Recenzii ({{hotel.num_reviews}} recenzii)</p>
                <div class="flex justify-between mt-16">
                    <div class="flex">
                        <div class="grid mr-20">
                            <p class="text-3xl font-bold text-gray-700 flex justify-center">{{hotel.rating}}</p>
                            <div class="flex mt-3">
                                <div v-if="total_score_round > 0" v-for="item in total_score_round">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <div v-for="item in  5 - total_score_round">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-sm flex justify-center mt-2 font-semibold">({{hotel.num_reviews}} recenzii)</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-xl font-semibold">Ai vizitat acest hotel?</p>
                        <p class="text-sm text-gray-700">Spune-ti parerea acordand o nota</p>
                        <div class="flex mt-3">
                            <div v-for="(item, index) in nr_stars_selected">
                                <svg @click="removeStarReview(index)" xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </div>
                            <div v-for="(item, index) in nr_stars">
                                <svg @click="addStarReview(index); resetReview()" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </div>
                        </div>
                        <button @click="resetReview()" class="mt-3 text-sm bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-1.5 rounded focus:outline-none focus:shadow-outline" type="button">
                            Adauga o recenzie
                        </button>
                    </div>
                </div>
            </div>

            <div v-if="open_review" class="mb-20 p-7 border border-gray-300 rounded-lg">
                <div class="flex">
                    <img src="/logo.jpg" alt="Hotel caro" class="w-20 rounded-lg">
                    <div class="grid ml-10">
                        <p class="text-gray-700 text-lg font-semibold">Adauga o recenzie pentru</p>
                        <p class="text-sm text-violet-800 font-semibold">{{hotel.name}}</p>
                    </div>
                </div>
                <div class="flex mt-3 ml-28">
                    <div v-for="(item, index) in nr_stars_selected">
                        <svg @click="removeStarReview(index)" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </div>
                    <div v-for="(item, index) in nr_stars">
                        <svg @click="addStarReview(index)" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </div>
                    <p class="mt-1 ml-5 font-semibold">Acorda o nota generala</p>
                </div>

                <div class="flex justify-center mt-10">
                    <button @click="addReview()" class="mt-3 text-sm bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-1.5 rounded focus:outline-none focus:shadow-outline" type="button">
                        Trimite
                    </button>
                    <button @click="resetReview()" class="ml-5 mt-3 text-sm outline outline-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 py-1.5 px-1.5 rounded focus:outline-none focus:shadow-outline" type="button">
                        Anuleaza
                    </button>
                </div>
            </div>

            <p class="mb-10 font-semibold">Sunt {{hotel.num_reviews}} rezultate pentru acest hotel</p>
            <div v-for="item in reviews" class="mb-4 border-b-1 border-t-0 border-l-0 border-r-0 border border-gray-300">
                <div class="w-full flex">
                    <div class="w-1/3">
                        <div class="mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>
                        <p class="font-semibold">{{item.username}}</p>
                        <p class="text-sm text-gray-500">{{item.date}}</p>
                    </div>
                    <div class="w-2/3 mb-5">
                        <div class="flex">
                            <p class="font-semibold text-xl text-gray-700">{{item.description}}</p>
                            <button @click="item.view_more = true" class="ml-5 text-sm text-blue-700 py-1 px-1" type="button">
                                View more
                            </button>
                        </div>
                        <div class="flex mt-2">
                            <div v-for="item in item.score">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </div>
                            <div v-for="item in 5-item.score">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-500 mt-3">{{item.long_description}}</p>
                    </div>
                </div>
                <div v-if="item.view_more">
                    <div class="grid grid-cols-2 mt-3">
                        <div class="">
                            <div class="grid grid-cols-2 mt-5">
                                <div class="font-semibold text-sm">Curatenie</div>
                                <div class="flex">
                                    <div v-for="(item, index) in item.other_scores.clean">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <div v-if="item.other_scores.clean != 5" v-for="(item, index) in 5-item.other_scores.clean">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 mt-2">
                                <div class="font-semibold text-sm">Comunicare</div>
                                <div class="flex">
                                    <div v-for="(item, index) in item.other_scores.communication">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <div v-if="item.other_scores.communication != 5" v-for="(item, index) in 5-item.other_scores.communication">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 mt-2">
                                <div class="font-semibold text-sm">Check-in</div>
                                <div class="flex">
                                    <div v-for="(item, index) in item.other_scores['check-in']">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <div v-if="item.other_scores['check-in'] != 5" v-for="(item, index) in 5-item.other_scores['check-in']">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ml-60">
                            <div class="grid grid-cols-2 mt-5">
                                <div class="font-semibold text-sm">Acuratete</div>
                                <div class="flex">
                                    <div v-for="(item, index) in item.other_scores.accuracy">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <div v-if="item.other_scores.accuracy != 5" v-for="(item, index) in 5-item.other_scores.accuracy">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 mt-2">
                                <div class="font-semibold text-sm">Pozitie</div>
                                <div class="flex">
                                    <div v-for="(item, index) in item.other_scores.location">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <div v-if="item.other_scores.location != 5" v-for="(item, index) in 5-item.other_scores.location">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 mt-2">
                                <div class="font-semibold text-sm">Raport calitate/pret</div>
                                <div class="flex">
                                    <div v-for="(item, index) in item.other_scores['quality-price']">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <div v-if="item.other_scores['quality-price'] != 5" v-for="(item, index) in 5-item.other_scores['quality-price']">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button  @click="item.view_more = false" class="mt-3 mb-8 text-sm bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-1.5 rounded focus:outline-none focus:shadow-outline" type="button">
                            Close details
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </template>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import {computed, onMounted, ref, watch} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
import {useRoute} from "vue-router";
import {useUserStore} from "../../stores/user-store";

const isLoading = ref(true);
const nr_stars = ref(5);
const nr_stars_selected = ref(0);
const open_review = ref(false);
const other_scores = ref({
  'clean': 0,
  'communication': 0,
  'check-in': 0,
  'accuracy': 0,
  'location': 0,
  'quality-price': 0
})
const nr_stars_total = ref({
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0
})
const description = ref('');
const long_description = ref('');
const reviews = ref([]);
const check_in = ref();
const check_out = ref();
const userStore = useUserStore();
const hotel = ref({});
const facilities = ref([]);
const route = useRoute();
const user_id = ref(0);
const hotelId = ref('');
hotelId.value = String(route.params.hotel_id);
const dict = ref([
  {id: 'free_parking', name: 'Parcare gratuita'},
  {id: 'free_wifi', name: 'WiFi gratis'},
  {id: 'fully_refundable', name: 'Complet rambursabil'},
  {id: 'no_prepayment_needed', name: 'Fara plata in avans'},
  {id: 'pool', name: 'Piscina'},
])

const price = computed(() => {
  let checkOut = new Date(check_out.value);
  let checkIn = new Date(check_in.value);
  let timeDifference = checkOut.getTime() - checkIn.getTime();
  let daysDiffernce = timeDifference / (1000*3600*24);

  let total_price = hotel.value.avg_price * Math.floor(daysDiffernce);

  if(isNaN(total_price)){
    return 0;
  }

  return total_price;

});


const addStarReview = (index) => {
  nr_stars_selected.value = nr_stars_selected.value + index + 1;
  nr_stars.value = 5-nr_stars_selected.value;
}

const removeStarReview = (index) => {
  nr_stars.value = 5-index ;
  nr_stars_selected.value = 5-nr_stars.value;
}

const resetReview = () => {
  if(open_review.value) {
    open_review.value = false;
    nr_stars_selected.value = 0;
    nr_stars.value = 5;
    description.value = '';
    long_description.value = '';
    other_scores.value = {
      'clean': 0,
      'communication': 0,
      'check-in': 0,
      'accuracy': 0,
      'location': 0,
      'quality-price': 0
    };
  } else {
    open_review.value = true;
  }
}


const getHotelDetails = async() => {
  await axios.get('http://127.0.0.1:8000/api/get-hotel', {params: {
      item_id: hotelId.value,
    }
  })
      .then((response) => {
        hotel.value = response.data.hotel;
        total_score_round.value = Math.round(hotel.value.rating);
        Object.keys(hotel.value).forEach((elem) => {
          if(hotel.value[elem]) {
            let i = dict.value.findIndex(item => item.id === elem);
            if(i >= 0) {
              facilities.value.push(dict.value[i].name);
            }
          }
        })
      })
}


const setHotelAsViewed = async() => {
  const payload = {
    item_id: route.params.hotel_id,
    user_id: user_id.value
  }
  await axios.post('http://127.0.0.1:8000/api/set-view', payload)
      .then()
}

const addReservation = async() => {
  let payload = {
    item_id: hotelId.value,
    user_id: user_id.value,
    price: price.value
  }
  await axios.post('http://127.0.0.1:8000/api/add-reservation', payload)
      .then((response) => {
        if(response.data.status === true) {
         Swal.fire({
            title: response.data.message,
            icon: 'success',
          })
        }
      })
}

const addReview = async() => {
  const payload = {
    rating: nr_stars_selected.value,
    user_id: user_id.value,
    item_id: hotelId.value
  }
  await axios.post('http://127.0.0.1:8000/api/add-review', payload)
      .then((response) => {
        if(response.data.status === true) {
          Swal.fire({
            title: response.data.message,
            icon: 'success',
          })
        }
      })
}

const total_score_round = ref(0);

onMounted(async () => {

  user_id.value = userStore.userId;

  await getHotelDetails();
  await setHotelAsViewed();

  isLoading.value = false;
})
</script>