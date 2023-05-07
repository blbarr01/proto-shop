<template>
  <header>
    <!--<h1>{{ title }}</h1>-->
    <h1>
      <img src="https://see.fontimg.com/api/renderfont4/K7vpp/eyJyIjoiZnMiLCJoIjo4MywidyI6MTUwMCwiZnMiOjU1LCJmZ2MiOiIjRkYwQTY4IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/dGhlIHByb3RvIHNob3A/bazer.png" alt="Cyberpunk fonts" class ="tImage">
    </h1>
        <SiteNav/>
    </header>
    <div class="searchbar">
      <SearchBar v-if="displaySearch"></SearchBar>
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
  <div class="cart-wrapper">
    <CartWidget/>
  </div>
</template>

<script setup lang="ts">
import type CartWidgetVue from './CartWidget.vue';
import SearchBar from './SearchBar.vue';
import SiteNav from './SiteNav.vue';
import CartWidget from './CartWidget.vue';
import { ref } from 'vue'
//const title = ref('The Proto Shop')
const displaySearch = ref(false); 
const showSearch = () => {displaySearch.value = !displaySearch.value; console.log(displaySearch.value);
}

</script>

<style scoped>
h1{
  padding: 20px;
}
.tImage{
        max-width: 100%;
        height: auto;
}

header {
  max-width: 1280px;
  border-bottom: 2px solid var(--accent-clr);
}



.searchbar{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cart-link{
  padding: 1em;
  background: var(--persian-rose);
  border-radius: 50%;
}

.cart-icon-wrapper{
  color: rgb(55, 58, 60);
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

.nav-cart-wrapper{
  display: flex;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
}


.cart-wrapper{
  position: fixed;
  z-index: 2;
  right: 50px;
  bottom: 20px;
}

@media screen and (min-width: 1081px){
  .cart-wrapper{
    right: 80px;
    top: 80px;
  }
  
}


</style>
