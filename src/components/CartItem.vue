<template>
    <div class="cart-item">
        <h3>product title </h3>
        <p>product price</p>
        <p>quantity</p>
        <pre>
            {{item}}
        </pre>
    </div>
</template>

<script setup lang="ts">
import type CartItem from '@/types/cartItem';
defineProps<{item: CartItem}>()


</script>

<style lang="css" scoped>
    .cart-item{
        border: 2px solid var(--color-border);
    }
</style>