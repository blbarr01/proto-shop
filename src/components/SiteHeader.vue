<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <ul class="nav-list">
        <li class="nav-item">
          <RouterLink to="/"> Home </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about"> About </RouterLink>
        </li >
        <li class="nav-item">
          <RouterLink to="/contact"> Contact </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
 
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SearchBar from './SearchBar.vue';
import { ref } from 'vue'
const title = ref('The Proto Shop')
const displaySearch = ref(false); 
const showSearch = () => {displaySearch.value = !displaySearch.value; console.log(displaySearch.value);
}

</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 4.5rem;
}

header {
  max-width: 1280px;
  border-bottom: 2px solid var(--accent-clr);
}

.nav-list{
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  margin:2em auto;
}


.nav-item{
  font-size: 1.75rem;
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



</style>
