<template>
  <Header />
  <h1>We'd love to hear from you</h1>
  <button @click="toggleOk"> Proceed</button>
  <template v-if="!ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
  <Footer />
</template>
  
<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import { ref } from 'vue';
let ok = ref(true);

function toggleOk() {
  ok.value = !ok.value
}
</script>
  
<style lang="scss" scoped></style>
  