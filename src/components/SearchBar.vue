<template>
    <form action="" class="search-container">
            <CategorySelector/>
            <input  class="search-input" type="text" placeholder="search">
            <button class="search-btn">
              search <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </button>
    </form>
</template>


<script setup lang="ts"> 
    import CategorySelector from './CategorySelector.vue';
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
  background-color: #2b2a33;
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
}


.search-input:focus, .search-btn:focus{
  outline: none;
  box-shadow:0.4em 0.4em 2em var(--brilliant-azure);
}
</style>