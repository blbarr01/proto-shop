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
  </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import { supabase } from '@/supabase'
    const loading = ref(false)
    const password = ref('')
    const email = ref('')

    async function handleLogin(){
      try{
        let { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
      }catch(error){

      }
    }

</script>


<style>
    
</style>