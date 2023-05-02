<template>
    <div class="widget-wrapper">
    <h3>Register for a new account</h3>
    <form  @submit.prevent="registerUser" class="form">
          <input class="inputField" required type="email" placeholder="email" v-model="email" />
          <input type="password" name="password" placeholder="password" v-model="confPass">
          <input type="password" name="conf-password" placeholder="confirm password" v-model="pass">
          <input
            type="submit"
            class="clickable"
            :value="loading ? 'Loading' : 'Sign up'"
            :disabled="loading"
          />

    </form>
    <div v-if="errorMsg" class="error-msg">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
  </template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { supabase } from '@/supabase'

  const loading = ref(false)
  const email = ref('')
  const pass = ref('')
  const confPass = ref('')
  const errorMsg = ref('');


  async function registerUser() {
    if (pass.value === confPass.value && email.value != '') {
      try {
        let { data, error } = await supabase.auth.signUp({
          email: email.value,
          password: pass.value
        })
        if(error){
          errorMsg.value = error.message
          setTimeout(()=>errorMsg.value ='',5000)
          throw error
        } 
      } catch (error) {
        console.log(error);

      }
      return; 
  }  
    
  }
</script>

<style scoped>
  
</style>