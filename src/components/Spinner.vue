<template>
  <div class="spinner">
    <div class="spinner-inner"></div>
  </div>
</template>

<style>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.spinner-inner {
  padding: 10px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--accent-clr);
  animation: spinner 0.8s ease-in-out infinite;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
