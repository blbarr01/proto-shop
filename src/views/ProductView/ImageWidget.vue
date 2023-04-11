<template>
    <div class="widget-wrapper">
        <div class="main-img">
            <img :src="bigImg" class="big-img" alt="">
            </div>
        <div class="image-linup">
            <img class="small-img" @click="changeBigImg(image)" v-for="image in images" :src="image" alt="">
        </div>
    </div>
</template>


<script lang="ts" setup>
    import {ref} from "vue"


    const props = defineProps(['images'])
    //console.log(props.images);
    let images:string[] = props.images
    let bigImg = ref(images[0]); 

    const changeBigImg = (imgUrl:string) =>{
        bigImg.value = imgUrl
    }

</script>


<style>
    .widget-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    .image-linup{
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    .small-img{
        height: 150px;
        width: 150px;
        object-fit: cover;
        border: 1px solid  var(--color-border);
        border-radius: 
        .33rem;
    }
    .big-img{
        border-radius: 33px;
    }

    .small-img:hover{
        cursor: pointer;
    }
</style>