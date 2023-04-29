<template>
        <RouterLink class="cart-nav" to="/checkout">
            <span class="cart-icon-wrapper">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" />  
            </span>
        </RouterLink >
</template>


<script setup lang="ts">

</script>


<style scoped>
    .cart-nav{font-size: 1.5rem;}
    .cart-nav:hover{border-bottom: none;}

    .cart-icon-wrapper{
        color: #333;
        border: 2px solid var(--persian-rose);
        background-color: var(--persian-rose);
        border-radius: 50%;
        padding: 1em;
    }
    .cart-icon-wrapper:hover{
        box-shadow: 
            inset 0 -0.5em 0.3em var(--accent-clr), 
            0.3em 0.3em 1em var(--accent-clr-hover),
            0.4em 0.4em 2em var(--brilliant-azure),
            0.5em 0.5em 3em var(--web-gold), 
            0.6em 0.6em 3em var(--accent-clr-hover) 
        ;
    }
</style>