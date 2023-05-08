<template>
    <form @submit.prevent="makeQuery(queryString)" class="search-container">
            <CategorySelector @select-category="handleEmit"/>
            <input  class="search-input" type="text" placeholder="search" v-model="queryString">
            <button class="search-btn" type="submit">
              search <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </button>
    </form>
</template>


<script setup lang="ts"> 
    import CategorySelector from './CategorySelector.vue';
    import { ref } from "vue";
    import emitter from "@/events"
    
    

    const queryString = ref('');
    const category = ref(''); 

    function makeQuery(text:string){
      emitter.emit("update-fetch",{category: category.value, query: text})
    }

    function handleEmit(selected:string){
      category.value = selected;
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


.search-input:focus, 
.search-btn:focus,
.search-btn:hover{
  outline: none;
  box-shadow:0.4em 0.4em 2em var(--brilliant-azure);
}
</style>