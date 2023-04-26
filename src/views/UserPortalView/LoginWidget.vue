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

<script setup lang="ts">
    import {ref} from 'vue'
    import { supabase } from '@/supabase'
    import { useRouter } from 'vue-router'
    

    const loading = ref(false)
    const password = ref('')
    const email = ref('')
    const errorMsg = ref('')
    const router = useRouter()


    async function handleLogin(){
      try{
        let { data, error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value
        })
        if(error){
          errorMsg.value = error.message
          setTimeout(()=>errorMsg.value ='',5000)
          throw error
        }
        console.log(data);
        const user  = data.user
        console.log(user);
        
        router.push({name: "Account"})
      }catch(error){
        console.error(error);
      }
    }

</script>


<style>
    
</style>