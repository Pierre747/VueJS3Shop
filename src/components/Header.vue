<script setup>
defineProps(['categories']);
</script>

<template>
  <header>
  <h1>My first VueJS App</h1>
    <div class="navigation">
      <RouterLink :to="{ name: 'home'}">Accueil</RouterLink>
      <RouterLink :to="{ name: 'infos'}">Infos</RouterLink>
    </div>

    <select>
      <option selected>all categories</option>
      <option v-for="category in categories" :value="category">
        {{ category }}
      </option>
    </select>

  </header>
</template>

<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
</style>