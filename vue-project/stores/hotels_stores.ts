import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHotelsStore = defineStore('hotels', () => {
    const recommendedHotels = ref([]);

    function setRecommendedHotels(recomenddedHotels) {
        // Update the ref with the new array
        recommendedHotels.value = recomenddedHotels;
    }


    return { recommendedHotels, setRecommendedHotels};
})