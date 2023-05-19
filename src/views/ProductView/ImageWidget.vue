<template>
  <div class="widget-wrapper">
    <div class="main-img" :class="{ 'slide-in': showSlide }">
      <img :src="bigImg" class="big-img" alt="" @click="toggleSlideshow" />
    </div>
    <div class="image-lineup">
      <img
        class="small-img"
        @click="changeBigImg(image)"
        v-for="image in images"
        :src="image"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps(['images'])
let images: string[] = props.images
let bigImg = ref(images[0])
let slideshowInterval: any = null
let showSlide = ref(false)

const changeBigImg = (imgUrl: string) => {
  bigImg.value = imgUrl
}

const startSlideshow = () => {
  slideshowInterval = setInterval(() => {
    showSlide.value = false // Hide current slide
    setTimeout(() => {
      const currentIndex = images.indexOf(bigImg.value)
      const nextIndex = (currentIndex + 1) % images.length
      bigImg.value = images[nextIndex]
      showSlide.value = true // Show next slide
    }, 300) // Delay before showing next slide
  }, 3000) // Change image every 3 seconds (adjust as needed)
}

const pauseSlideshow = () => {
  clearInterval(slideshowInterval)
  slideshowInterval = null
}

const resumeSlideshow = () => {
  pauseSlideshow()
  setTimeout(startSlideshow, 10000) // Resume slideshow after 10 seconds
}

const toggleSlideshow = () => {
  if (slideshowInterval) {
    pauseSlideshow()
  } else {
    resumeSlideshow()
  }
}

onMounted(() => {
  startSlideshow()
})

onUnmounted(() => {
  pauseSlideshow()
})
</script>

<style>
.widget-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.main-img {
  flex: 1 0 70%;
  text-align: center;
  transition: opacity 0.3s ease;
}

.slide-in {
  animation: slideIn 0.3s ease forwards;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.image-lineup {
  display: flex;
  flex-direction: row;
  gap: 1em;
  max-width: 99%;
}

.small-img {
  height: 125px;
  width: 125px;
  object-fit: cover;
  border: 1px solid var(--color-border);
  border-radius: 0.33rem;
  transition: transform 0.3s ease;
}

.small-img:hover {
  cursor: pointer;
  box-shadow: 
    inset 0 -0.5em 0.3em var(--accent-clr), 
    0.3em 0.3em 1em var(--accent-clr-hover),
    0.4em 0.4em 2em var(--brilliant-azure),
    0.5em 0.5em 3em var(--web-gold),
    0.6em 0.6em 3em var(--accent-clr-hover);
  transform: translateY(-5px);
}


.big-img {
  border-radius: 33px;
  height: 400px;
}
</style>
