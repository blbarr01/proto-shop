<template>
    <div class="widget-wrapper">
    <h3>Register for a new account</h3>
    <form  @submit.prevent="handleLogin" class="form">
          <input class="inputField" required type="email" placeholder="email" v-model="email" />
          <input type="password" name="password" placeholder="password" v-model="confPass">
          <input type="password" name="conf-password" placeholder="confirm password" v-model="pass">
          <input
            type="submit"
            class="button block"
            :value="loading ? 'Loading' : 'Send magic link'"
            :disabled="loading"
          />

    </form>
  </div>
  </template>

<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'

const loading = ref(false)
const email = ref('')
const pass = ref('')
const confPass = ref('')


const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<style>
  .widget-wrapper{
    border: 2px solid var(--persian-rose-dull);  
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