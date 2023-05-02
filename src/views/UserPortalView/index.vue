<template>
    <div class="container" style="padding: 50px 0 100px 0">
        <Account v-if="session" :session="session" />
        <Auth v-else />
    </div>
    <SiteFooter />
</template>

<script setup>

import SiteFooter from '@/components/SiteFooter.vue';
import { supabase } from '@/supabase';
import { ref, onMounted } from "vue"
import Account from './Account.vue';
import Auth from './Auth.vue'

const session = ref(); 
onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})

</script>


<style> .portal-header {
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

 .auth-widget {
     display: flex;
     justify-content: center;
     align-items: center;
 }

 .auth-widget>p {
     padding: .5em 1.25em;
     border: 2px solid var(--color-border);
     border-radius: .33rem;
 }

 .auth-widget>p:hover {
     border-color: var(--color-border-hover);
     cursor: pointer;
 }

 .link {
     color: var(--brilliant-azure);
     cursor: pointer;
 }

 .widget-wrapper {
     border: 2px solid var(--persian-rose-dull);
     border-radius: .33rem;
     padding: 3em;
 }

 .form {
     display: flex;
     flex-direction: column;
     gap: 2em;
 }

 input {
     background-color: var(--color-background-soft);
     color: var(--vt-c-text-dark-2);
     border: none;
     height: 2.25rem;
     font-size: 1.25rem;
 }

 input:focus {
     outline: none;
     border-bottom: 4px solid var(--persian-rose);
 }
</style>