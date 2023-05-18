<template>
    <Header />
    <main class="grid-wrapper">
        <div class="order-area">
            <CartItem v-for="cartItem in cart" :item="cartItem" :key="cartItem.product.id"/>
            <h3 class="total-header">Order Total: {{ total }}</h3>
            <p>By placing your order, you agree to our terms and conditions</p>
        </div>
        <div class="form-area">
            <AddressForm />
            <PaymentForm />
            <button class="order-btn clickable"> place order</button>
        </div>
    </main>
    <Footer />
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import AddressForm from './AddressForm.vue';
import PaymentForm from './PaymentForm.vue';
import CartItem from '@/components/CartItem.vue';

import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue';

const cartStore = useCartStore()

const { cart } = storeToRefs(cartStore)
console.log(cart.value);
const total = computed(()=>{
    return cart.value.reduce((total, item)=>{
        let subtotal = item.product.price * item.quantity
        return total + subtotal
    },0)
})

</script>

<style lang='css' scoped>

main {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    gap: 2em;
    margin-top: 2em;
    max-width: 1280px;
}

.form-area, .order-area {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
}

.order-btn{
    background-color: var(--color-background-soft);
    color: var(--persian-rose);
    width: 30%;
    align-self: center;
    margin:.5em auto;
    border-radius: .33rem;
    border: 2px solid var(--russian-violet);
    font-size: 1.5rem;
    
}

.total-header{
    color: var(--persian-rose);
    font-size: 1.5rem;
}

@media screen and (min-width: 631px) {
    main{
        grid-template-columns: repeat(4, 1fr);
    }
    .form-area, .order-area {
        grid-column: span 2;

    }

    .total-header{
        font-size: 2rem;
    }
}

@media screen and (min-width: 1081px) {
    main{
        min-height: 60vh;
    }
}
</style>