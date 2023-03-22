<script setup lang="ts">
  import Header from "./components/SiteHeader.vue"; 
  import ProductGallery from "./components/ProductGallery.vue";
  import Footer from "./components/SiteFooter.vue"
</script>

<template>
    <Header/>
    <Suspense>
      <ProductGallery/>
    </Suspense>
    <Footer/>
</template>

<style scoped>
</style>
