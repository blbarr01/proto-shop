<template>
    <div class="product-card">
        <img :src="props.product.thumbnail" alt="" class="product-img">
        <div class="product-details">
            <h3> {{ props.product.title }}<span class="dollar">$ {{ props.product.price }} </span></h3>
            <p>{{ props.product.description }} </p>
            <p>{{ props.product.thumbnail }} </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as Product from "@/types/product"
const props = defineProps({
    product: Product
})

console.log(props.product);
</script>

<style>
.dollar {
    color: var(--accent-clr);
}

.product-card {
    grid-column: span 1fr;
    border: 2px solid var(--accent-clr);
    display: flex;
    flex-direction: column;
}

.product-img {
    height: 300px;
    max-width: 350px;
}
</style>