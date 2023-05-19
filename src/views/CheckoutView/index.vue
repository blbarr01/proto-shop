<template>
    <Header />
    <main class="grid-wrapper">
        <div class="cart-list">
            <CartItem v-for="cartItem in cart" :item="cartItem" :key="cartItem.product.id"/>
        </div>
        <div class="form-area">
            <AddressForm />
            <PaymentForm />
            <button id= "orderBtn"> place order</button>
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

const cartStore = useCartStore()

const { cart } = storeToRefs(cartStore)
console.log(cart.value);


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

#orderBtn {
  background-color: var(--persian-rose);
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin:10px;
}

#orderBtn:hover {
  background-color: #45a049;
  transform: scale(1.1);
}


.form-area, .cart-list {
    grid-column: span 1;
}


@media screen and (min-width: 631px) {
    main{
        grid-template-columns: repeat(4, 1fr);
    }
    .form-area, .cart-list {
        grid-column: span 2;
    }
}

@media screen and (min-width: 1081px) {
    main{
        min-height: 60vh;
    }
}
</style>