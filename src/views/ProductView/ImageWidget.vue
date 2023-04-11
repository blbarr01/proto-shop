<template>
    <div class="widget-wrapper">
        <div class="main-img">
            <img :src="images[0]" alt="">
            </div>
        <div class="image-linup">
            <img class="small-img" v-for="image in images" :src="image" alt="">
        </div>
    </div>
</template>


<script lang="ts" setup>
    const props = defineProps(['images'])
    console.log(props.images);
    let images:string[] = props.images
</script>


<style>
    .widget-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .image-linup{
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    .small-img{
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
</style>