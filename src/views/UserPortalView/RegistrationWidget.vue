<template>
    <div class="widget-wrapper">
    <h3>Register for a new account</h3>
    <form  @submit.prevent="registerUser" class="form">
          <input class="inputField" required type="email" placeholder="email" v-model="email" />
          <input type="password" name="password" placeholder="password" v-model="confPass">
          <input type="password" name="conf-password" placeholder="confirm password" v-model="pass">
          <input
            type="submit"
            class="button block"
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
  import { useRouter } from 'vue-router'

  const loading = ref(false)
  const email = ref('')
  const pass = ref('')
  const confPass = ref('')
  const router = useRouter()
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
        router.push({name: "Account"})
      } catch (error) {
        console.log(error);
        
      }
      return; 
  }  
    
  }
</script>

<style>
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