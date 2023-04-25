<template>
    <div class="portal-header">
        <h2>site Logo </h2>
        <router-link to="/">back to home </router-link>
    </div>
    <div class="form-container">
        <RegistrationWidget v-if="portalToggle" />
        <LoginWidget v-else="portalToggle" />
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
import { ref } from "vue"

const portalToggle = ref(true)
console.log(portalToggle.value);


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

 .link{
    color: var(--brilliant-azure);
    cursor: pointer;
 }
</style>