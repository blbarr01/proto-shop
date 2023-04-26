<template>
    <div class="widget-wrapper">
    <h3>Sign in</h3>
    <form  @submit.prevent="handleLogin" class="form">
          <input class="inputField" required type="email" placeholder="email" v-model="email" />
          <input type="password" name="password" placeholder="password" v-model="password">
          <input
            type="submit"
            class="button block"
            :value="loading ? 'Loading' : 'login'"
            :disabled="loading"
          />

    </form>
    <div v-if="errorMsg" class="error-msg">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script>

</script>

<script setup lang="ts">
    import {ref} from 'vue'
    import { supabase } from '@/supabase'
    import { useRouter } from 'vue-router'
    import { useAuth } from '@/stores/auth'
import { log } from 'console'

    const loading = ref(false)
    const password = ref('')
    const email = ref('')
    const errorMsg = ref('')
    const router = useRouter()
    const authStore = useAuth(); 





    
    async function handleLogin(){
      // attempt login 
      try{
        let { data, error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value
        })
        // if error show it to the user, throw error
        if(error){
          errorMsg.value = error.message
          setTimeout(()=>errorMsg.value ='',5000)
          throw error
        }
        // if sucessfull set the auth state and redirect to account page
        const user  = data.user
        const userID = user?.id
        console.log("user", user);
        authStore.setUser(user)
        console.log("userID: ", userID);
        console.log("user state", authStore.isAuthenticated);

        //redirect user to the account page
        router.push({name: "Account"})
      }catch(error){
        console.error(error);
      }
    }

</script>


<style>
    
</style>