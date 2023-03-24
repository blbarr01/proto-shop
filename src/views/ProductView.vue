<template>
  <Header />
    <main>
      <h2>{{ product.title }}</h2>
      <img :src="product.thumbnail" alt="product">
      <pre>{{ product }}</pre>
      <p>{{ product.description}}</p>
    </main>

  <Footer />
</template>
  
<script lang="ts" setup>
    import Header from '@/components/SiteHeader.vue'
    import Footer from '@/components/SiteFooter.vue'
    import type Product from '@/types/product';
    import { useRoute } from 'vue-router';
import { ref } from 'vue';


    const route = useRoute()
    // need to cast the paramater; this caused such a god damn fit
    let id:number = parseInt(<string>route.params.id);
   
    let product = ref();
    console.log(id);
    console.log(typeof(id));

    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      product= await response.json();
    } catch (error) {
        console.log(error); 
    }


</script>
  
<style lang="css" scoped>
  main{
    border: 2px solid blue;
  }
</style>
  