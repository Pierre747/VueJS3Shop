<script setup>
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  let height = document.body.scrollHeight - window.innerHeight;
  let scrollPosition = document.documentElement.scrollTop;
  let width = (scrollPosition / height) * 100;
  progressBar.style.width = `${width}%`;
})
</script>

<template>
<div id="progress-bar" class="progress-bar"></div>
</template>

<style scoped>
.progress-bar{
  height: 0.5rem;
  width: 0%;
  position: fixed;
  background-color: var(--police-blue);
}
</style>