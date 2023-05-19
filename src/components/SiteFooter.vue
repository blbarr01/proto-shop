<template>
  <footer>
    <h3>{{ title }}</h3>
    <div class="socials">
      <span class="social-item"><font-awesome-icon :icon="['fa-brands', 'fa-twitter']" size="2xl"/></span>
      <span class="social-item"><font-awesome-icon :icon="['fab', 'instagram']" size="2xl"/></span>
      <span class="social-item"><font-awesome-icon :icon="['fab', 'facebook']"  size="2xl"/></span>
      <span class="social-item"><font-awesome-icon :icon="['fab', 'github']"  size="2xl"/></span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('tell your friends about us')
const socials = ref(['insta', 'Twit', 'Face', 'Yout'])
</script>

<style scoped>
@import '../assets/main.css';

footer {
  border-top: 2px solid var(--accent-clr);
  display: flex;
  justify-content: space-between;
  max-width: 1280;
  padding:2em 0;
}

footer > h3 {
  color: var(--persian-rose);
  font-size: 1.5rem;
  margin-left: 1em;
}

.socials {
  display: flex;
  flex-direction: row;
  gap: 2em;
  margin: .35em 1.5em 0 0;
}

.social-item{
  color: var(--persian-rose);
  display: inline-block;
  animation: spin 1.5s linear infinite;
}

.social-item:hover{
  color:var(--brilliant-azure);
  cursor: pointer;
  animation-play-state: paused;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
