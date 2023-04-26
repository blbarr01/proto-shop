import { defineStore } from "pinia";
import { reactive, ref } from "vue";


export const userStore = defineStore('user', ()=>{
    const user = ref({})
    const isAuthenticated = ref(false);

    function setUser(user:any){
        user.value = user
        isAuthenticated.value = true
    }
})