<template>
  <div>
    <Spinner v-if="loading" />
    <div v-else id="product-gallery">
      <ProductCard :product="product" v-for="product in products" :key="product.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type Product from '@/types/product'
import type EventData from '@/types/eventData'
import Spinner from './Spinner.vue'
import { baseURL } from '@/endpoint'
import emitter from '@/events'
import { onMounted, ref } from 'vue'
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons'
let loading = false
let products = ref(<Product[]>[])

emitter.on('*', async (e, data) => {
  if (e === 'update-fetch') {
    products.value = await fetchProducts(<EventData>data)
  }
})

async function fetchProducts(eventData?: EventData) {
  let extendedUrl = ''

  if (eventData) {
    let { category, query } = eventData
    if (query || (query && category)) extendedUrl += `/search?q=${query}`
    else if (category && !query) extendedUrl += `/category/${category}`
  }

  const searchUrl = baseURL.concat(extendedUrl)
  console.log(searchUrl)
  const response = await fetch(searchUrl)
  const data = await response.json()
  const products: Product[] = data.products

  return products
}

onMounted(async () => {
  loading = true
  products.value = await fetchProducts()
  loading = false
})
</script>

<style>
.search-input {
  width: 100%;
  height: 2em;
  max-width: 1280px;
  line-height: 1.5rem;
  font-size: 1.25rem;
  border: none;
  border-bottom: 2px solid var(--persian-rose);
  background-color: var(--color-background-soft);
  color: var(--vt-c-text-dark-2);
}

.search-container {
  display: flex;
  width: 100%;
}

.search-btn {
  color: var(--persian-rose);
  border: none;
  background-color: transparent;
  border-bottom: 2px solid var(--persian-rose);
  border-right: 2px solid var(--persian-rose);
}

.search-input:focus,
.search-btn:focus {
  outline: none;
  box-shadow: 0.4em 0.4em 2em var(--brilliant-azure);
}

.searchbar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.search-toggle-btn {
  width: 7em;
  height: 3em;
  border: 2px solid var(--accent-clr);
  border-top: none;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 3px;
  display: flex;
  place-items: center;
  justify-content: center;
  gap: 0.325em;
}

.search-toggle-btn:focus {
  box-shadow: 0.4em 0.4em 2em var(--russian-violet);
  box-shadow: 0.4em 0.4em 2em var(--brilliant-azure);
  outline: none;
}

span {
  color: var(--persian-rose);
  font-size: 1.25rem;
}

#product-gallery {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2em;
  max-width: 1280px;
  margin: 2em;
  overflow-wrap: normal;
}

@media screen and (min-width: 631px) {
  #product-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1081px) {
  #product-gallery {
    grid-template-columns: repeat(3, 1fr);
    margin: 2em auto;
  }
}

.dollar {
  color: var(--accent-clr);
}
</style>
