<template>
    <Header />
    <h1>product page</h1>
    <p>{{ $route.params.id }}</p>
    <Footer />
  </template>
  
<script lang="ts" setup>
    import Header from '@/components/SiteHeader.vue'
    import Footer from '@/components/SiteFooter.vue'
    import type Product from '@/types/product';
    import { useRoute } from 'vue-router';
    import { computed } from '@vue/reactivity';


    const route = useRoute()
    // need to cast the paramater; this caused such a god damn fit
    let id:number = parseInt(<string>route.params.id);

    
    console.log(id);
    console.log(typeof(id));
    
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product:Product = await response.json()
  
</script>
  
  <style lang="scss" scoped></style>
  