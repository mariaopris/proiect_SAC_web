import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const userId = ref(sessionStorage.getItem('U_userId'));
    const userName = ref(sessionStorage.getItem('U_userName'));

    function setUserId(_userId:string) {
        sessionStorage.setItem('U_userId',_userId.toString());
        userId.value = _userId;
    }

    function setUserName(_userName:string) {
        sessionStorage.setItem('U_userName',_userName.toString());
        userName.value = _userName;
    }

    return { userId, setUserId, userName, setUserName}
})
