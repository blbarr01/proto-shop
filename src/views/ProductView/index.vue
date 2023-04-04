<template>
    <Header />
    <main>
        <div class="image-widget-wrapper">
            <img :src="product.thumbnail" alt="">
        </div>
        <div class="product-details-wrapper">
            <h2>{{ product.title }}</h2>
            <p>{{ product.description}}</p>
        </div>
    </main>
    <Footer />
  </template>
    
  <script lang="ts" setup>
      import Header from '@/components/SiteHeader.vue'
      import Footer from '@/components/SiteFooter.vue'
      import type Product from '@/types/product';
      import { useRoute } from 'vue-router';
      import { onMounted, ref } from 'vue';
  
  
      const route = useRoute()
      // need to cast the paramater; this caused such a god damn fit
      let id:number = parseInt(<string>route.params.id);
     
  
      let product = ref();
  
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        product= await response.json();
      } catch (error) {
          console.log(error); 
      }
  
  
      console.log(product);
  
  
  </script>
    
  <style lang="css" scoped>
    main{
        /* border: 2px solid blue; */
        display: grid;
        max-width: 1280px;
        gap: 1em;
        grid-auto-flow: row;
    }

    .product-details-wrapper{

    }
    
    .image-widget-wrapper{

    }

    /* tablet */
    @media only screen and (min-width: 631px) {
        main{
            grid-template-columns: repeat(2, 1fr);
        }

    }

    /* laptop screens  */
    @media only screen and (min-width: 1081px){
        main{
            grid-template-columns: repeat(3, 1fr);
        }

        .product-details-wrapper{
            border: 2px solid lawngreen;
            grid-column: 3/4;

        }
        
        .image-widget-wrapper{
            grid-column:span 2 ;
            border: 2px solid red;
        }
    }

  </style>
    