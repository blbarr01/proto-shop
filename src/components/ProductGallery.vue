<template>
  <div>
    <div class="searchbar">
      <SearchBar v-if="displaySearch"></SearchBar>
      <form action="" class="search-container">
      <CategorySelector :categories="categories" v-model="selected" />
      <input class="search-input" type="text" v-model="searchTerm" placeholder="Search by Title" @input="filterProducts" />
      <button class="search-btn">
        Search <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
    </form>
      <button @click="showSearch" class="search-toggle-btn">
        
      <span>
        <font-awesome-icon v-if="!displaySearch" :icon="['fas', 'angles-down']" />
        <font-awesome-icon v-else :icon="['fas', 'angles-up']" />
      </span>
      <span>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </span>
      
    </button>
    
    </div>

    
    <div id="product-gallery">
      <ProductCard :product="product" v-for="product in filteredProducts" :key="product.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ProductCard from './ProductCard.vue';
import CategorySelector from './CategorySelector.vue';
import type Product from '@/types/product';

const response = await fetch('https://dummyjson.com/products');
const data = await response.json();
const products: Product[] = data.products;

const selected = ref('');
const searchTerm = ref('');

const categories = products.reduce((acc: string[], curr) => {
  if (!acc.includes(curr.category)) {
    acc.push(curr.category);
  }
  return acc;
}, []);

const filteredProducts = computed(() => {
  if (!selected.value && !searchTerm.value) return products;
  return products.filter((product) => {
    if (selected.value && product.category !== selected.value) {
      return false;
    }
    if (searchTerm.value && !product.title.toLowerCase().includes(searchTerm.value.toLowerCase())) {
      return false;
    }
    return true;
  });
});

function filterProducts() {
  // Trigger computed property to update the filtered products
  filteredProducts.value;
}

const displaySearch = ref(false); 
const showSearch = () => {displaySearch.value = !displaySearch.value; console.log(displaySearch.value);
}
</script>

<style>
.search-input{
  width: 100%;
  height: 2em;
  max-width: 1280px;
  line-height: 1.5rem;
  font-size: 1.25rem;
  border: none;
  border-bottom: 2px solid var(--persian-rose) ;
  background-color: var(--color-background-soft);
  color: var( --vt-c-text-dark-2);
}

.search-container{
    display: flex;
    width: 100%;
}

.search-btn{
  color: var(--persian-rose);
  border: none;
  background-color: transparent;
  border-bottom: 2px solid var(--persian-rose);
  border-right: 2px solid var(--persian-rose);
}


.search-input:focus, .search-btn:focus{
  outline: none;
  box-shadow:0.4em 0.4em 2em var(--brilliant-azure);
}





.searchbar{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}




.search-toggle-btn{
  width: 7em;
  height: 3em;
  border: 2px solid var(--accent-clr);
  border-top: none;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 3px;
  display: flex;
  place-items: center;
  justify-content: center;
  gap: .325em;
}

.search-toggle-btn:focus{
  box-shadow:0.4em 0.4em 2em var(--russian-violet);
  box-shadow:0.4em 0.4em 2em var(--brilliant-azure);
  outline: none;
}

span{
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