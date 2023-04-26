import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";


export const useAuth = defineStore('user', ()=>{
    const user = ref({})
    const isAuthenticated = ref(false);

    function setUser(user:any){
        user.value = user
        isAuthenticated.value = true
    }

    const userStatus = computed(()=>user.value)

    return {user, isAuthenticated, setUser, userStatus}
})