<template>
  <Header />
  <main>
    <div class="image-widget-wrapper">
      <ImageWidget :images="images" />
    </div>
    <div class="product-details-wrapper">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p>buy new:</p>
      <p><span class="dollar">$</span>{{ product.price }}</p>
      <p>first time buyer discount:</p>
      <p><span class="dollar">$</span>{{ discountedPrice }}</p>
      <p>
        average rating: {{ product.rating }}
        <span class="web-gold"><font-awesome-icon :icon="['fas', 'star']" /></span>
      </p>
      <div class="btn-container">
        <button class="azure" @click="addToCart(product)">add to cart</button>
        <button class="rus-violet">buy now</button>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import ImageWidget from './ImageWidget.vue'
import type Product from '@/types/product'
import { useRoute } from 'vue-router'
import { computed, reactive } from 'vue'
import { baseURL } from '@/endpoint'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
// need to cast the paramater; this caused such a god damn fit
let id: number = parseInt(<string>route.params.id)

// use generics to propery type the reactive obj
let product: Product = reactive(<Product>{})

try {
  const response = await fetch(`${baseURL}/${id}`)
  product = await response.json()
} catch (error) {
  console.log(error)
}

let images: string[] = product.images
console.log(product)

const discountedPrice = computed(() => {
  return Math.floor(product.price - (product.discountPercentage / 100) * product.price)
})

const cartStore = useCartStore()

const addToCart = (product: Product) => {
  cartStore.addToCart(product)
}
</script>

<style lang="css" scoped>
p,
span {
  font-size: 1.25rem;
}

h2 {
  color: var(--brilliant-azure);
}

.btn-container {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

button {
  border-radius: 0.33rem;
  border: transparent;
  color: var(--color-text);
  font-size: 1.25rem;
  width: 40%;
  padding: 1.25em auto;
}

button:hover {
  border-bottom: 2px solid var(--brilliant-azure);
}

.azure {
  background-color: var(--persian-blue);
}

.web-gold {
  color: var(--web-gold);
}

.rus-violet {
  background-color: var(--russian-violet);
}

main {
  /* border: 2px solid blue; */
  display: grid;
  max-width: 1280px;
  gap: 1em;
  grid-auto-flow: row;
  margin: 2em auto;
}

.product-details-wrapper {
  border-bottom: 2px solid var(--color-border);
  border-left: 2px solid var(--color-border);
  padding-left: 1em;
  padding-bottom: 2em;
}

.image-widget-wrapper {
  border-bottom: 2px solid var(--persian-rose-dull);
  padding-bottom: 2em;
}

.dollar {
  color: var(--electric-pink);
}

/* tablet */
@media only screen and (min-width: 631px) {
  main {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* laptop screens  */
@media only screen and (min-width: 1081px) {
  main {
    grid-template-columns: repeat(3, 1fr);
  }

  .product-details-wrapper {
    grid-column: 3/4;
  }

  .image-widget-wrapper {
    grid-column: span 2;
  }
}
</style>
