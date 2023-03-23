<template>
  <Header />
  <Suspense>
    <ProductGallery />
  </Suspense>
  <Footer />
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import ProductGallery from '@/components/ProductGallery.vue'
import Footer from '@/components/SiteFooter.vue'
</script>

<style lang="scss" scoped></style>
