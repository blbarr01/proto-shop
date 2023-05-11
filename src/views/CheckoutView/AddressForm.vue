<template>
    <form action="">
        <BaseInput 
        label="street"
        v-model="street"
        />
        <BaseInput 
        label="City"
        v-model="city"
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
</style>