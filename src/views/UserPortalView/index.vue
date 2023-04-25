<template>
    <div style="border: 2px solid magenta;">
        <h2>we're glad to have you at the proto shop </h2>
        <router-link  to="/">
            back to home 
        </router-link>
            <div class="form-container">
                <SignupWidget v-if="portalToggle"/>
                <LoginWidget v-else="portalToggle"/>
            </div>
            <p>already have an account. click <span @click="portalToggle= !portalToggle">here</span></p>
        </div>
</template>

<script setup lang="ts">
    import type LoginWidget from './LoginWidget.vue';
    import SignupWidget from './SignupWidget.vue';
    import {ref} from "vue"
    const portalToggle =ref(true)
    console.log(portalToggle.value);
    

</script>


<style> 
    .form-container{
        border: 2px solid magenta;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>