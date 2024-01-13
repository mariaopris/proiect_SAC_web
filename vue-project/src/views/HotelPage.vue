<template>
    <template v-if="isLoading">
        <div class="text-center font-semibold mt-10 text-2xl">
            Is Loading...
        </div>
    </template>
    <template v-else>
        <div class="max-w-[1200px] mx-auto px-2 mt-20">

            <p class="text-3xl flex justify-center">{{currentHotel.name}}</p>
            <div class="flex justify-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <p class="ml-2 mr-10 underline">{{currentHotel.num_reviews}} recenzii</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p class="ml-2">{{currentHotel.city}}</p>
            </div>

            <!--    <carousel :items-to-show="1" class="mt-5">-->
            <!--      <slide v-for="slide in slides" :key="slide">-->
            <!--        <img :src="slide">-->
            <!--      </slide>-->

            <!--      <template #addons>-->
            <!--        <navigation />-->
            <!--        <pagination />-->
            <!--      </template>-->
            <!--    </carousel>-->

            <div class="grid grid-cols-2 mt-20">
                <div class="mr-20">
                    <p class="text-xl font-semibold">Despre acest hotel</p>
                    <p class="mt-5">
                        Hotelul Arc de Triomphe București este un hotel de lux situat într-o locație privilegiată, aproape de Piața Arcul de Triumf și de principalele atracții turistice din București. Acesta oferă o experiență elegantă și servicii de înaltă calitate pentru călătorii de afaceri și turiști.

                        Hotelul dispune de camere și suite spațioase, decorate cu rafinament și atenție la detalii. Fiecare cameră oferă confort și eleganță, fiind dotată cu facilități moderne pentru a satisface cele mai exigente nevoi ale oaspeților. Acestea includ televizor cu ecran plat, minibar, acces Wi-Fi gratuit, aer condiționat și baie privată cu articole de toaletă de lux.

                        Facilitățile oferite de Hotelul Arc de Triomphe includ un restaurant de top care servește preparate culinare delicioase, combinând bucătăria internațională cu elemente tradiționale românești. Oaspeții se pot bucura de o varietate de opțiuni gastronomice într-un cadru elegant și relaxant. De asemenea, hotelul are și un bar elegant unde oaspeții se pot relaxa și savura băuturi fine.
                    </p>
                </div>
                <div class="w-full">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="flex justify-between">
                            <div>
                                <p class="font-bold">{{currentHotel.avg_price}} €/noapte</p>
                            </div>
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                <p class="ml-2 mr-10 underline">{{currentHotel.num_reviews}} recenzii</p>
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
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="check-out">
                                Numar oaspeti
                            </label>
                            <input v-model="no_guests" class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="check-out" type="number" max="4" min="1" placeholder="select between 1 - 4">
                        </div>
                        <div class="flex items-center justify-end">
                            <button @click="addReservation()" class="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Rezerva
                            </button>
                        </div>

                        <div class="border border-1 border-gray-200 mt-5 w-full"></div>
                        <div class="flex items-center justify-between mt-2">
                            <div class="font-bold text-gray-700 text-xl">Total</div>
                            <div class="font-bold text-gray-700 text-xl">{{price}} lei</div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="mt-10 mb-16">
                <p class="text-2xl font-bold">Recenzii ({{reviews.length}} recenzii)</p>
                <div class="flex justify-between mt-16">
                    <div class="flex">
                        <div class="grid mr-20">
                            <p class="text-3xl font-bold text-gray-700 flex justify-center">{{ total_score }}</p>
                            <div class="flex mt-3">
                                <div v-if="total_score_round > 0" v-for="item in total_score_round">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <div v-for="item in  5 - total_score_round">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-sm flex justify-center mt-2 font-semibold">({{reviews.length}} recenzii)</p>
                        </div>
                        <div>
                            <div class="flex mb-2">
                                <p class="text-sm mr-3">5 stele</p>
                                <div class="w-80 h-2 bg-gray-200 rounded-full mt-2">
                                    <div class="w-5/5 h-full text-center text-xs text-white bg-green-600 rounded-full">
                                    </div>
                                </div>
                                <p class="text-sm ml-5">({{nr_stars_total[5]}})</p>
                            </div>
                            <div class="flex mb-2">
                                <p class="text-sm mr-3">4 stele</p>
                                <div class="w-80 h-2 bg-gray-200 rounded-full mt-2">
                                    <div class="w-4/5 h-full text-center text-xs text-white bg-lime-300 rounded-full">
                                    </div>
                                </div>
                                <p class="text-sm ml-5">({{nr_stars_total[4]}})</p>
                            </div>
                            <div class="flex mb-2">
                                <p class="text-sm mr-3">3 stele</p>
                                <div class="w-80 h-2 bg-gray-200 rounded-full mt-2">
                                    <div class="w-3/5 h-full text-center text-xs text-white bg-orange-400 rounded-full">
                                    </div>
                                </div>
                                <p class="text-sm ml-5">({{nr_stars_total[3]}})</p>
                            </div>
                            <div class="flex mb-2">
                                <p class="text-sm mr-3">2 stele</p>
                                <div class="w-80 h-2 bg-gray-200 rounded-full mt-2">
                                    <div class="w-2/5 h-full text-center text-xs text-white bg-yellow-300 rounded-full">
                                    </div>
                                </div>
                                <p class="text-sm ml-5">({{nr_stars_total[2]}})</p>
                            </div>
                            <div class="flex mb-2">
                                <p class="text-sm mr-4">1 stea</p>
                                <div class="w-80 h-2 bg-gray-200 rounded-full mt-2">
                                    <div class="w-1/5 h-full text-center text-xs text-white bg-red-600 rounded-full">
                                    </div>
                                </div>
                                <p class="text-sm ml-5">({{nr_stars_total[1]}})</p>
                            </div>
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
                    <img src="/public/arc/2.jpg" alt="Hotel caro" class="w-20 rounded-lg">
                    <div class="grid ml-10">
                        <p class="text-gray-700 text-lg font-semibold">Adauga o recenzie pentru</p>
                        <p class="text-sm text-violet-800 font-semibold">Hotel Arc de Triomphe</p>
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

                <div class="mt-7">
                    <label>Titlu recenzie</label>
                    <input v-model="description" class="mt-3 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="check-out" type="text">
                </div>

                <div class="mt-5">
                    <label>Recenzie</label>
                    <textarea v-model="long_description" class="mt-3 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="check-out" type="text"> </textarea>
                </div>

                <div class="grid grid-cols-2 mt-3">
                    <div class="ml-10">
                        <div class="grid grid-cols-2 mt-5">
                            <div class="font-semibold text-sm">Curatenie</div>
                            <div class="flex">
                                <div v-for="(item, index) in other_scores.clean">
                                    <svg @click="other_scores.clean = index" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <div v-for="(item, index) in 5-other_scores.clean">
                                    <svg @click="other_scores.clean = other_scores.clean + index + 1" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 mt-2">
                            <div class="font-semibold text-sm">Comunicare</div>
                            <div class="flex">
                                <div v-for="(item, index) in other_scores.communication">
                                    <svg @click="other_scores.communication = index" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <div v-for="(item, index) in 5-other_scores.communication">
                                    <svg @click="other_scores.communication = other_scores.communication + index + 1" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 mt-2">
                            <div class="font-semibold text-sm">Check-in</div>
                            <div class="flex">
                                <div v-for="(item, index) in other_scores['check-in']">
                                    <svg @click="other_scores['check-in'] = index" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <div v-for="(item, index) in 5-other_scores['check-in']">
                                    <svg @click="other_scores['check-in'] = other_scores['check-in'] + index + 1" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
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
                                <div v-for="(item, index) in other_scores.accuracy">
                                    <svg @click="other_scores.accuracy = index" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <div v-for="(item, index) in 5-other_scores.accuracy">
                                    <svg @click="other_scores.accuracy = other_scores.accuracy + index + 1" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 mt-2">
                            <div class="font-semibold text-sm">Pozitie</div>
                            <div class="flex">
                                <div v-for="(item, index) in other_scores.location">
                                    <svg @click="other_scores.location = index" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <div v-for="(item, index) in 5-other_scores.location">
                                    <svg @click="other_scores.location = other_scores.location + index + 1" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 mt-2">
                            <div class="font-semibold text-sm">Raport calitate/pret</div>
                            <div class="flex">
                                <div v-for="(item, index) in other_scores['quality-price']">
                                    <svg @click="other_scores['quality-price'] = index" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <div v-for="(item, index) in 5-other_scores['quality-price']">
                                    <svg @click="other_scores['quality-price'] = other_scores['quality-price'] + index + 1" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-10">
                    <button class="mt-3 text-sm bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-1.5 rounded focus:outline-none focus:shadow-outline" type="button">
                        Trimite
                    </button>
                    <button @click="resetReview()" class="ml-5 mt-3 text-sm outline outline-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 py-1.5 px-1.5 rounded focus:outline-none focus:shadow-outline" type="button">
                        Anuleaza
                    </button>
                </div>
            </div>

            <p class="mb-10 font-semibold">Sunt {{reviews.length}} rezultate pentru acest hotel</p>
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
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
import {useRoute} from "vue-router";
import {useHotelsStore} from "/stores/hotels_stores";

const hotelsStore = useHotelsStore();
const isLoading = ref(true);
const slides = ref([]);
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
const no_guests = ref();
const price = ref(0);
const price_per_night = ref(432);

const route = useRoute();
const popular_hotels = ref([]);
const recommended_hotels = ref([]);
const user_id = route.params.user_id;
const currentHotel = ref({});
const is_logged_in = ref(false);
const username = ref('');
const hotelId = ref('');
hotelId.value = String(route.params.hotel_id);

watch(check_out, (newValue, oldValue) => {
  if(newValue != oldValue) {
    getDates();
  }
});
watch(check_in, (newValue, oldValue) => {
  if(newValue != oldValue) {
    getDates();
  }
});

const addStarReview = (index) => {
  nr_stars_selected.value = nr_stars_selected.value + index + 1;
  nr_stars.value = 5-nr_stars_selected.value;
}

const removeStarReview = (index) => {
  nr_stars.value = 5-index ;
  nr_stars_selected.value = 5-nr_stars.value;
}

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
                recommended_hotels.value.push({
                    'id':hotel.id,
                    'avg_price':hotel.values.avg_price,
                    'city':hotel.values.city,
                    'free_parking':hotel.values.free_parking,
                    'free_wifi':hotel.values.free_wifi,
                    'fully_refundable': hotel.values.fully_refundable,
                    'name': hotel.values.name,
                    'no_payment_needed':hotel.values.no_payment_needed,
                    'num_reviews':hotel.values.num_reviews,
                    'pool':hotel.values.pool,
                    'prices':hotel.values.prices,
                    'rank':hotel.values.rank,
                    'rating':hotel.values.rating
                });

                recommended_hotels.value[recommended_hotels.value.length - 1].prices = JSON.parse(recommended_hotels.value[recommended_hotels.value.length - 1].prices);
                let hotel_price = recommended_hotels.value[recommended_hotels.value.length - 1].prices[0];
                recommended_hotels.value[recommended_hotels.value.length - 1].prices.forEach(price => {
                    if(price < hotel_price){
                        hotel_price = price;
                    }
                })
                recommended_hotels.value[recommended_hotels.value.length - 1].city = recommended_hotels.value[recommended_hotels.value.length - 1].city[0].toUpperCase() + recommended_hotels.value[recommended_hotels.value.length - 1].city.substring(1);
                recommended_hotels.value[recommended_hotels.value.length - 1].prices = Math.round(hotel_price / 89.88);
            })
        })
}

const getPopularHotel = () => {
    popular_hotels.value.forEach((pop_hotel) => {
        if(pop_hotel.itemId == hotelId.value)
        {
            currentHotel.value = pop_hotel;
        }
    })

    hotelsStore.recommendedHotels.forEach((recom_hotel) => {
        if(recom_hotel.id == hotelId.value)
        {
            currentHotel.value = recom_hotel;
        }
    })
}

const getDates = () => {
  let checkOut = new Date(check_out.value);
  let checkIn = new Date(check_in.value);
  let timeDifference = checkOut.getTime() - checkIn.getTime();
  let daysDiffernce = timeDifference / (1000*3600*24);

  price.value = price_per_night.value * Math.floor(daysDiffernce);
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


const setHotelAsViewed = async() => {
  const payload = {
    item_id: route.params.hotel_id,
    user_id: user_id
  }
  await axios.post('http://127.0.0.1:8000/api/set-view', payload)
      .then()
}

const total_score = ref(0);
const total_score_round = ref(0);

onMounted(async () => {
    await getPopularHotels();
    await getRecommandations();
    await getPopularHotel();
    await setHotelAsViewed();

    isLoading.value = false;
})
</script>