<template>
    <div class="product-card">
        <img src="" alt="" class="product-img">
        <div class="product-details">
            <h3> title<span class="dollar">$  price </span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque nam voluptatibus?</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
         id: string,
         title:string,
         description: string,
         image:string,
         price:string
     }>()


</script>

<style>
    .dollar{
        color: var(--accent-clr);
    }

</style>