<!-- our custom event passes the selected value up to the searchbar component
whenever there is a change event -->
<template>
    <select name="categories" 
    id="category-selector" 
    v-model="selected" 
    placeholder="categories" 
    @change="$emit('selectCategory', selected)"> 
        <option disabled value="">categories</option> <!--recommended for ios compatibility per vue documentation-->
        <option v-for="category in categories">{{ category }}</option>
   </select>            
</template>

<script setup lang="ts">
    import { ref } from "vue";
    const selected = ref('');
    const response = await fetch('https://dummyjson.com/products/categories')
    const categories = await response.json();

    //define a custom event for use in the template
    const emits = defineEmits(['selectCategory'])
    
</script>

<style lang="css">
    select{
        background-color: var(--color-background);
        color: var(--text-color);
        outline: none;
        border: none;
        border-bottom: 2px solid var(--persian-rose);
        border-left: 2px solid var(--persian-rose);
    }
</style>