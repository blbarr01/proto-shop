<script setup lang="ts">
import { ref } from "vue";
import ProductCard from "./ProductCard.vue"



    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const  products = data.products
        
    console.log(products);
    
</script>

<template >
    <div id="product-gallery">
        <ProductCard v-for="product in products"/>
    </div>
</template>


<style>
#product-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;
}

.dollar {
    color: var(--accent-clr);
}
</style>