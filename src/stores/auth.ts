import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";


export const useAuth = defineStore('auth', ()=>{
    const isAuthenticated = ref(false);
    const userId = ref('');

    function setUser(userID: string){
        userId.value =  userID
        isAuthenticated.value = true
    }
    function logOutUser(){
        isAuthenticated.value = false;
        userId.value = ''
    }
    const getUID = computed(()=>userId)

    return {userId, isAuthenticated, setUser, getUID, logOutUser}
})