

<template>
    <div class="link-home"> <RouterLink to="/">  Back to Home </RouterLink> </div>
    <div class="widget">
        <Registration v-if="signUp"/>
        <Login v-else/> 
    </div>
    <div class="auth-widget">
        <p @click="loginWithGoogle">Or log in with google <span><font-awesome-icon :icon="['fab', 'google']" /></span></p>
    </div>
    <p>
        <div class="link">
        <span v-if="signUp">
            <span @click="signUp = !signUp" class="link">Already have an account? <br></span> 
        </span>
        
        <span v-else>
            <span @click="signUp = !signUp" class="link"> Need an account? <br></span>
        </span>
        
       </div>
        </p>
</template>


<script setup lang="ts">
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
     text-align: center;
     padding: 10px;;
 }
 .widget
 {
    text-align: center;
 }
 .link-home
 {
    text-align: center;
    margin-bottom: 20px;
 }
 .auth-widget
 {
    margin-top: 20px;
 }

</style>