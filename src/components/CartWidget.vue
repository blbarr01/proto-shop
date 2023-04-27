<template>
        <RouterLink class="nav-item" to="/checkout">
            <span class="cart-icon-wrapper">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" />  
            </span>
        </RouterLink >
</template>


<script setup lang="ts">

</script>


<style scoped>
    

    .cart-icon-wrapper{
        color: #333;
        border: 2px solid var(--persian-rose);
        background-color: var(--persian-rose);
        border-radius: 50%;
        padding: 1em;
    }
</style>