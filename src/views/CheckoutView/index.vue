<template>
    <Header/>
            <div class = "Pagecontainer">
                 <!--Title-->
                 <div class = "TitleC">
                        <img src="https://see.fontimg.com/api/renderfont4/K7vpp/eyJyIjoiZnMiLCJoIjo4MywidyI6MTUwMCwiZnMiOjU1LCJmZ2MiOiIjRjgzOUEwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Y2hlY2tvdXQ/bazer.png" alt="Cyberpunk fonts">
                        <h2>redy to check out?</h2>
                    </div>  
                <main>
                    <!--cart-->
                    <div class = "form">
                        <div class="cart-list">
                        <CartItem v-for="cartItem in cart" :item="cartItem"/>
                        <pre>{{ cart }}</pre>
                    </div>
                    <!--form-->
                    <div class="form-area">
                        <AddressForm/>
                        <PaymentForm/>
                    </div>
                    

                    </div>
                   
                    <button class="btn" type="button">Continue to checkout</button>
                </main>
            </div>
        
    <Footer />
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import AddressForm from './AddressForm.vue';
import CartItem from '@/components/CartItem.vue';
import PaymentForm from './PaymentForm.vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const { cart } = storeToRefs(cartStore)
console.log(cart.value);




</script>

<style scoped>
    
    .Pagecontainer{
        padding: 40px;
        gap: 20px;
    }

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
    .TitleC{
        grid-column: span 4;
        text-align: center;
        padding: 40px 15px;
        gap: 20px;
    }
    img{
        height: auto;
        max-width: 100%;
    }
    h2{
        color:#F62E97;
        font-weight: bold;
    }
    
.btn {
  grid-column: span 4;

  background: linear-gradient( 135deg , #F62E97 0%, #38A6F3 100%);
  color: white;
  padding: 10px;
  width: 100%;
  border-radius: 50px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
    border: 2px solid var(--accent-clr-hover);
  box-shadow: 
    inset 0 -0.5em 0.3em var(--accent-clr), 
    0.3em 0.3em 1em var(--accent-clr-hover),
    0.4em 0.4em 2em var(--brilliant-azure),
    0.5em 0.5em 3em var(--web-gold), 
    0.6em 0.6em 3em var(--accent-clr-hover) 
    ;
}
</style>