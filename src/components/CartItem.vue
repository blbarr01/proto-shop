<template>
    <div class="cart-item">
        <img 
        class="order-thumbnail"
        :src="product.thumbnail" 
        :alt="product.title"
        >
        <div class="order-info">
            <div class="order-details">
                <h3>{{ product.title }}</h3>
                <p>{{ orderItemTotal }}</p>
                <p>{{ quantity }}</p>
            </div>
            <button 
            class="clickable"
            @click="removeFromCart(product)"
            >remove item</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type CartItem from '@/types/cartItem';
import { useCartStore } from '@/stores/cart';
import { computed, toRefs} from 'vue';

const cartStore = useCartStore()
const {removeFromCart} = cartStore
const props = defineProps<{ item: CartItem }>()

const { product, quantity } = toRefs(props.item)


const orderItemTotal = computed(() => product.value.price * quantity.value)

</script>

<style lang="css" scoped>
.cart-item {
    border: 2px solid var(--color-border);
    display: flex;
    gap: 1em;
    flex-direction: column;
}

.order-thumbnail{
    max-width: 100%;
    width: 150px;
    height: 150px;
    object-fit: cover;
}

.order-info{
    display: flex;
    flex-direction: column;
}

button {
  border-radius: 0.33rem;
  border: transparent;
  color: var(--color-text);
  font-size: 1.25rem;
  padding: 1.25em auto;
  background-color: var(--russian-violet);
}

@media screen and (min-width: 631px) {
    .cart-item{
        flex-direction: row;
    }

}

@media screen and (min-width: 1081px) {

}

</style>