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

    const route = useRoute()
    let strId = route!.params.id;
    let id:number = parseInt(strId);
    console.log(id);
    console.log(typeof(id));
    
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product:Product = await response.json()
  
</script>
  
  <style lang="scss" scoped></style>
  