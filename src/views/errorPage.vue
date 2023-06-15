<script setup>

</script>

<template>
<div class="error-container">
  <h1>Wrong way...</h1>
  <img src="../assets/images/lost.gif">
  <div class="error-link-container">
    <img src="../assets/icons/home.gif" width="65" alt="home logo" class="error-gif">
  <router-link to="/" class="error-link">Homepage</router-link>
  </div>
</div>


</template>

<style scoped>
.error-container{
  text-align: center;
}
h1{
  padding-top: 20px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 80px;
}

.error-link-container{
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-30px);
  padding-top: 20px;
}
.error-gif{

}

.error-link{
  text-decoration: none;
  color: inherit;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 50px;
}





</style>