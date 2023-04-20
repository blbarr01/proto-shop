<template>
    <select name= "categories" id="category-selector" v-model="selected" placeholder="categories"> 
        <option disabled value="">categories</option> <!--recommended for ios compatibility per vue documentation-->
        <option v-for="category in categories">{{ category }}</option>
   </select>            
</template>

<script setup lang="ts">
    import { ref } from "vue";
    const selected = ref('');
    const response = await fetch('https://dummyjson.com/products/categories')
    const categories = await response.json();
    console.log(categories);
    
</script>

<style lang="css">
    select{
        background-color: transparent;
        color: var(--text-color);
        outline: none;
        border: none;
        border-bottom: 2px solid var(--persian-rose);
        border-left: 2px solid var(--persian-rose);
    }
</style>