<template>
    <header>
        <h1> {{ title }}</h1>
    </header>
</template>

<script setup lang="ts">
    import {ref} from "vue";
    const title = ref("The Proto Shop")      
</script>

<style scoped>
   h1{
    text-align: center;
    border-bottom: 2px solid rgba(219, 48, 91, 0.725);
   } 

   header{
    max-width: 1280px;
   }
</style>