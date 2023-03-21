<template>
    <footer>
        <h3> {{ title }}</h3>
        <div class="socials">
            <p v-for="social in socials"> {{ social }}</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import {ref} from "vue";
    const title = ref("tell your freinds about us"); 
    const socials = ref(["insta", "Twit","Face","Yout"])     
</script>

<style scoped>
    @import '../assets/main.css';

   footer{
    border-top: 2px solid rgba(219, 48, 91, 0.725);
    display: flex;
    justify-content: space-between;
   } 

   footer>h3{
    color: rgba(219, 48, 91, 1);
   }

   .socials{
    display: flex;
    flex-direction:row;
    gap: 2em;
   }

</style>