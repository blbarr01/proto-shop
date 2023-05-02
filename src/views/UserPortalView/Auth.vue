

<template>
    <p>back to<RouterLink to="/"> Home </RouterLink></p> 
    <div class="widget">
        <Registration v-if="signUp"/>
        <Login v-else/> 
    </div>
    <div class="auth-widget">
        <p @click="loginWithGoogle">or log in with google <span><font-awesome-icon :icon="['fab', 'google']" /></span></p>
    </div>
    <p>
        <span v-if="signUp">
            already have an account?
        </span>
        <span v-else>
            new?
        </span>
        click
        <span @click="signUp = !signUp" class="link">here</span></p>
</template>


<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase'
import Login from './LoginWidget.vue'
import Registration from './RegistrationWidget.vue'

const loading = ref(false)
const signUp = ref(true)


async function loginWithGoogle(){
        try {
            let { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google'
            })        
            if (error) {
                throw error
            }
            
            console.log(data);
            authStore.isAuthenticated = true
            router.push({name: "Account"})
            
        } catch (error) {
            console.error(error)
        }
    }


</script>
<style>
 .link {
     color: var(--brilliant-azure);
     cursor: pointer;
 }
</style>