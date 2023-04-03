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
  <div class="searchbar">
    <input v-if="displaySearch" class="search-input" type="text" placeholder="search">
    <button @click="showSearch" class="search-toggle-btn">
      <span>
        <font-awesome-icon v-if="!displaySearch" :icon="['fas', 'angles-down']" />
        <font-awesome-icon v-else :icon="['fas', 'angles-up']" />
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

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



.search-input{
  width: 100%;
  height: 2em;
  max-width: 1280px;
  line-height: 1.5rem;
  font-size: 1.25rem;
  border: none;
  border-bottom: 2px solid var(--persian-rose) ;
  background-color: #2b2a33;
  color: var( --vt-c-text-dark-2);
}

.search-input:focus{
  outline: none;
  box-shadow:0.4em 0.4em 2em var(--brilliant-azure);
}
.search-toggle-btn{
  width: 7em;
  height: 3em;
  border: 2px solid var(--accent-clr);
  border-top: none;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 3px;
}

.search-toggle-btn:focus{
  box-shadow:0.4em 0.4em 2em var(--russian-violet);
  box-shadow:0.4em 0.4em 2em var(--brilliant-azure);
  outline: none;
}

span{
  color: var(--persian-rose);
  max-width: 20px;
  font-size: 1.25rem;

}



</style>
