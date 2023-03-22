<template>
  <div class="product-card">
    <!-- withou the '!' symbols on the product this typescript through an absolure fit' -->
    <img :src="props.product!.thumbnail" alt="" class="product-img" />
    <div class="product-details">
      <h3>
        {{ props.product!.title }}<span class="dollar">$ {{ props.product!.price }} </span>
      </h3>
      <p>{{ props.product!.description }}</p>
      <p>{{ props.product!.thumbnail }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Product from '@/types/product'
import type { PropType } from 'vue'
const props = defineProps({
  product: Object as PropType<Product>
})
</script>

<style>
.dollar {
  color: var(--accent-clr);
}

.product-card {
  grid-column: span 1fr;
  border: 2px solid var(--accent-clr);
  border-radius: 33px;
  display: flex;
  flex-direction: column;
  padding: 0.5em 1em;
}

.product-card:hover {
  border: 2px solid var(--accent-clr-hover);
  box-shadow: inset 0 -0.5em 0.3em var(--accent-clr), 0.3em 0.3em 1em var(--accent-clr-hover);
}

.product-img {
  height: 300px;
  max-width: 350px;
  border-radius: 33px;
}
</style>
