<template>
  <header>
    <!--<h1>{{ title }}</h1>-->
    <h1>
      <RouterLink to="/" class="title-link">
        <img
          src="https://see.fontimg.com/api/renderfont4/K7vpp/eyJyIjoiZnMiLCJoIjo4MywidyI6MTUwMCwiZnMiOjU1LCJmZ2MiOiIjRkYwQTY4IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/dGhlIHByb3RvIHNob3A/bazer.png"
          alt="Proto Shop" class="tImage">
      </RouterLink>
    </h1>
    <SiteNav />
  </header>
  <div class="searchbar">
    <Transition name = "slide">
    <SearchBar v-if="displaySearch"/>
    </Transition>
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
  <div v-if="showCart" class="cart-wrapper">
    <CartWidget />
  </div>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue';
import SiteNav from './SiteNav.vue';
import CartWidget from './CartWidget.vue';
import { RouterLink , useRoute } from 'vue-router';
import { computed, ref } from 'vue'
//const title = ref('The Proto Shop')
const path = useRoute().path
const displaySearch = ref(false);
const showSearch = () => {
  displaySearch.value = !displaySearch.value; 
}

const showCart = computed(()=>{
  if(path === "/checkout"){
    return false
  }
  return true
})

</script>

<style scoped>
h1 {
  padding: 20px;

}

.title-link:hover {
  border-bottom: unset;
  box-shadow: 0.4em 0.4em 2em var(--brilliant-azure);
}

.tImage {
  max-width: 100%;
  height: auto;
  transition: transform 0.2s ease;
}

.tImage:hover {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

header {
  max-width: 1280px;
  border-bottom: 2px solid var(--accent-clr);
}

.searchbar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50px;
}

.slide-enter-active,
.slide-leave-active {
  transition: height 1s ease;
}

.slide-enter,
.slide-leave-to {
  height: 0;
  overflow: hidden;
}



.cart-link {
  padding: 1em;
  background: var(--persian-rose);
  border-radius: 50%;
}

.cart-icon-wrapper {
  color: rgb(55, 58, 60);
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
  gap: .325em;
}

.search-toggle-btn:focus,
.search-toggle-btn:hover {
  box-shadow: 0.4em 0.4em 2em var(--russian-violet);
  box-shadow: 0.4em 0.4em 2em var(--brilliant-azure);
  outline: none;
}

span {
  color: var(--persian-rose);
  font-size: 1.25rem;
}

.nav-cart-wrapper {
  display: flex;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
}


.cart-wrapper {
  position: fixed;
  z-index: 2;
  right: 50px;
  bottom: 20px;
}

@media screen and (min-width: 1081px) {
  .cart-wrapper {
    right: 80px;
    top: 80px;
  }

}
</style>
