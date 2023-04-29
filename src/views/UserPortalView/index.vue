<template>
    <div class="portal-header">
        <h2>site Logo </h2>
        <router-link to="/">back to home </router-link>
    </div>
    <div class="form-container">
        <RegistrationWidget v-if="portalToggle" />
        <LoginWidget v-else="portalToggle" />
    </div>
    <div class="auth-widget">
        <p @click="loginWithGoogle">or log in with google <span><font-awesome-icon :icon="['fab', 'google']" /></span></p>
    </div>
    <p> 
        <span v-if="portalToggle">already have an account. </span>
        <span v-else="portalToggle"> new?</span>
        <span class="link" @click="portalToggle = !portalToggle"> click here</span>
    </p>
    <SiteFooter />
</template>

<script setup lang="ts">

    import SiteFooter from '@/components/SiteFooter.vue';
    import LoginWidget from './LoginWidget.vue';
    import RegistrationWidget from './RegistrationWidget.vue';
    import { supabase } from '@/supabase';
    import { useAuth } from '@/stores/auth';
    import { useRouter } from 'vue-router';
    import { ref } from "vue"
    import AccountView from '../AccountView.vue';

    const router = useRouter()
    const authStore = useAuth()
    // if a user is already logged in send them to the account page
    if(authStore.isAuthenticated) router.push({name: "Account"})

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

    const portalToggle = ref(true)
</script>


<style> 

.portal-header{
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
}

.form-container {
     /* border: 2px solid magenta; */
     display: flex;
     justify-content: center;
     align-items: center;
     margin: 2em auto;
 }

.auth-widget{
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-widget>p{
    padding: .5em 1.25em;
    border: 2px solid var(--color-border);
    border-radius: .33rem;
}

.auth-widget>p:hover{
    border-color: var(--color-border-hover);
    cursor: pointer;
}

 .link{
    color: var(--brilliant-azure);
    cursor: pointer;
 }
 .widget-wrapper{
    border: 2px solid var(--persian-rose-dull);  
    border-radius: .33rem;
    padding: 3em;
  }

  .form{
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  input{
    background-color: var(--color-background-soft); 
    color: var( --vt-c-text-dark-2);
    border: none;
    height: 2.25rem;
    font-size: 1.25rem;
  }
  
  input:focus {
            outline: none;
            border-bottom: 4px solid var(--persian-rose);
        }
</style>