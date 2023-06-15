<script setup>
import { defineProps } from 'vue';
import {useRouter} from "vue-router";

defineProps(['categories']);

const router = useRouter();

const redirectToHome = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <header>
    <h1 class="header-title" @click="redirectToHome">My first VueJS App</h1>
    <div class="header-navigation">
      <RouterLink :to="{ name: 'home'}" class="header-navigation-item">Accueil</RouterLink>
      <RouterLink :to="{ name: 'infos'}" class="header-navigation-item">Infos</RouterLink>
    </div>
    <div>
      <select class="header-categories">
        <option selected>all categories</option>
        <option v-for="category in categories" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
  </header>
</template>

<style scoped>
@import "../assets/css/header.css";
</style>