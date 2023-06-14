<script setup>

</script>

<template>
<div class="error-container">
  <h1>Wrong way...</h1>
  <div class="error-link-container">
    <img src="../assets/icons/home.gif" width="40" alt="home logo" class="error-gif">
  <router-link to="/" class="error-link">Homepage</router-link>
  </div>
</div>

</template>

<style scoped>
.error-container{
  text-align: center;
}

.error-link-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-gif{

}

.error-link{
  text-decoration: none;
  color: inherit;
}

</style>