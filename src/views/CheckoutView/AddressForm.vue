<template>
    <h3>Billing Address</h3>
   
       <form action="/action_page.php">
       <BaseInput 
       label="street"
       v-model="street"
       />
       <BaseInput 
       label="City"
       v-model="city"
       />
       <BaseInput 
       label="State"
       v-model="state"
       />
       <BaseInput 
       label="zip"
       v-model="zip"
       />

   </form>        

  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';

const address = {
   street: ref(''),
   city: ref(''),
   zip: ref(''),
   state: ref('')
}
const {street, city, zip , state} = address;

</script>

<style lang="css" scoped>
   form{
       display: flex;
       flex-direction: column;
       gap: 2em;
   }
   h3{
   color:#F62E97;
   font-weight: bold;
  }

</style>