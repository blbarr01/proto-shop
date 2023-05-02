<template>
    <select name="categories" id="category-selector" v-model="selected" placeholder="categories">
      <option value="">All</option>
      <option v-for="category in categories" :key="category">{{ category }}</option>
    </select>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import type Product from '@/types/product';
  
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  const products: Product[] = data.products;
  
  const selected = ref('');
  
  const categories = [...new Set(products.map((product) => product.category))];
  
  
 
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