import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";


export const useAuth = defineStore('auth', ()=>{
    const user = ref({})
    const isAuthenticated = ref(false);

    function setUser(user:any){
        user.value =  user
        isAuthenticated.value = true
    }
    function logOutUser(){
        isAuthenticated.value = false;
        user.value = {};
    }
    const userStatus = computed(()=>user)

    return {user, isAuthenticated, setUser, userStatus, logOutUser}
})