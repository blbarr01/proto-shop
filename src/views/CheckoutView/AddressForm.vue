<template>
    <form action="">
        <BaseInput 
        label="street"
        v-model="street"
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

</style>