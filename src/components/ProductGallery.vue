<script setup lang="ts">


async function getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products
    console.log(products);
    return products;
}

getProducts();
</script>

<template >
    <div id="product-gallery">
        <div class="product-card" v-for="n in 10">
            <h3>product name:<span class="dollar">$</span> Price</h3>
        </div>
    </div>
</template>


<style>
#product-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;
}

.dollar {
    color: var(--accent-clr);
}
</style>