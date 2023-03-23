<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type Product from '@/types/product'

const response = await fetch('https://dummyjson.com/products')
const data = await response.json()
const products: Product[] = data.products

const product = products[0]
console.log(product)

</script>

<template>
  <div id="product-gallery">
    <ProductCard :product="product" v-for="product in products" :key="product.id"/> 
  </div>
</template>

<style>
#product-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  max-width: 1280px;
  margin: 2em auto;
  overflow-wrap: normal;
}

.dollar {
  color: var(--accent-clr);
}
</style>
