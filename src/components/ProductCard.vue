<template>
  <div class="product-card">
    <RouterLink :to="{ name: 'ProductPage', params: { id } }" class="product-link">
      <img :src="product!.thumbnail" alt="" class="product-img" />
      <div class="product-details">
        <div class="product-headline">
          <h3>{{ product!.brand + " " + product?.title }}</h3>
          <p class="dollar"> ${{ product?.price }} </p>
        </div>
        <p>{{ props.product!.description }}</p>
        <p>rating: {{ props.product!.rating }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type Product from '@/types/product'
import type { PropType } from 'vue'

const props = defineProps({
  product: Object as PropType<Product>
})

let { product } = props;
let id = product?.id

</script>

<style scoped>
.dollar {
  color: var(--accent-clr);
}

.product-card {
  grid-column: span 1fr;
  border: 2px solid var(--accent-clr);
  border-radius: 33px;
  display: flex;
  flex-direction: column;
  padding: 0.5em .75em 1em;
  transition: transform 0.3s;
}

.product-details {
  font-size: 1.25rem;
  color: var(--color-text)
}

.product-details>.product-headline {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 1.50rem;
}

.product-card:hover {
  transform: scale(0.9); 
  border: 2px solid var(--accent-clr-hover);
  box-shadow:
    inset 0 -0.5em 0.3em var(--accent-clr),
    0.3em 0.3em 1em var(--accent-clr-hover),
    0.4em 0.4em 2em var(--brilliant-azure),
    0.5em 0.5em 3em var(--web-gold),
    0.6em 0.6em 3em var(--accent-clr-hover);
}

.product-img {
  height: 300px;
  max-width: 350px;
  width: 100%;
  border-radius: 33px;
  object-fit: cover;
}

.product-link:hover {
  border-bottom: unset;

}


.product-link:focus {
  outline: none;
  box-shadow:
    inset 0 -0.5em 0.3em var(--accent-clr),
    0.3em 0.3em 1em var(--accent-clr-hover),
    0.4em 0.4em 2em var(--brilliant-azure),
    0.5em 0.5em 3em var(--web-gold),
    0.6em 0.6em 3em var(--accent-clr-hover);
}
</style>
