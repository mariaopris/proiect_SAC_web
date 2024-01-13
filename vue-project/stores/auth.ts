import {defineStore} from 'pinia';
import type {AuthUser} from "@/composables/dataTypes";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        name: '',
        id: 0

    }),
    getters: {
        getUser(): any{
            return this.name;
        },
        getUserId(): any{
            return this.id;
        }
    },
    actions: {
        setUser (user:AuthUser) {
            this.name = user.name;
            this.id = user.id;
        },
        logout () {
            this.name = '';
            this.id = 0;
        }
    }
})