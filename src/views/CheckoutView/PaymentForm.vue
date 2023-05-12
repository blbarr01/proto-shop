<template>
    <h3>Payment Information</h3>
   
       <form action="/action_page.php">
       <BaseInput 
       label="First Name"
       v-model="firstName"
       />
       <BaseInput 
       label="Last Name"
       v-model="lastName"
       />
       <BaseInput 
       label="Card Number"
       v-model="cardNumber"
       />
       <BaseInput 
       label="Exp Month"
       v-model="expmonth"
       />
       <BaseInput 
       label="Exp Year"
       v-model="expyear"
       />
       <BaseInput 
       label="CVV"
       v-model="cvv"
       />

   </form>        

  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';

const address = {
    firstName: ref(''),
    lastName: ref(''),
    cardNumber: ref(''),
    expmonth: ref(''),
    expyear:  ref(''),
    cvv:      ref('')
}
const {firstName,  lastName, cardNumber , expmonth, expyear,  cvv } = address;

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