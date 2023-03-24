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
  grid-template-columns: repeat(1, 1fr);
  gap: 2em;
  max-width: 1280px;
  margin: 2em;
  overflow-wrap: normal;
}


@media screen and (min-width: 631px) {
  #product-gallery{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1081px) {
  #product-gallery{
    grid-template-columns: repeat(3, 1fr);
    margin: 2em auto;
  }
}

.dollar {
  color: var(--accent-clr);
}
</style>
