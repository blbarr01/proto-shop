<template>
    <Header/>
    <!----<Header />-->
    <!--<ProductGallery />-->
    
    <body>
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
        </div>
    </body>
    <Footer />
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
//import ProductGallery from '@/components/ProductGallery.vue'
import Footer from '@/components/SiteFooter.vue'
</script>

<style scoped>


</style>