<template>
    <Header/>
        <div>
            <p>
            $CheckoutView.vue -- cart -- need to fill out the checkout page;<br> 
            we need <br>
            - a form for user to enter credit card / shipping info<br>
            (checkout stripe and vue utils)<br>
            - a CheckoutItem component which will be used to list items<br>
            (reference relation between ProductGallery.vue & ProductCard.vue)<br>  
            in user's cart(stored in pinia)<br>
            </p>
            <p>
                forms need to be made and styled
            </p>
        </div>
        <main>
            <div class="cart-list">
                <CartItem v-for="c in n"/>
            </div>
            <div class="form-area">
                <AddressForm/>
            </div>
        </main>
    <Footer />
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import AddressForm from './AddressForm.vue';
import CartItem from '@/components/CartItem.vue';

const n = 3;


</script>

<style scoped>
    main{
        display:grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        border: 2px solid red;
        gap: 2em;
    }

    .form-area{
        border: 2px solid greenyellow;
        grid-column: span 2;
    }
    .cart-list{
        border: 2px solid magenta;
        grid-column: span 2;

    }

</style>