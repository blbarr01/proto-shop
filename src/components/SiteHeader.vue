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

import { ref } from 'vue'
const title = ref('The Proto Shop')
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
</style>
