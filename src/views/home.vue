<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Loader from "@/components/Spinner.vue";

//! Import de mes librairies !//
import axios from "axios"; // J'importe Axios pour faire mes requêtes


//* Définition des URLs *//
const catname = ''
const urlProducts = 'https://dummyjson.com/products';
const urlCategories = `https://dummyjson.com/products/categories/${catname}`

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//


export default {
  components: { Card, Header, Loader },
  data() {
    return {
      products: [],
      categories: [],
      catname: "",
      loading: true, // Variable pour suivre l'état du chargement
    };
  },
  mounted()
  {
    axios
        .get(urlProducts)
        .then((res) =>
        {
          this.products = res.data.products;
          this.loading = false; // Met à jour loading à false une fois que la requête est terminée
        })
        .catch((error) =>
        {
          console.log(error);
          this.loading = false; // Gestion de l'erreur : met à jour loading à false en cas d'erreur
        });
    axios
        .get(urlCategories)
        .then((res) =>
        {
          this.categories = res.data;
        })
        .catch((error) =>
        {
          console.log(error);
        });
  },
};
</script>

<template>
  <main>
    <Header :categories="categories" :catname="catname"/>
    <Loader v-if="loading" /> <!-- Affiche le Loader si loading est true -->
    <Card v-else :products="products" /> <!-- Affiche le composant Card si loading est false -->
  </main>
</template>

<style scoped>

li {
  list-style: none;
}
</style>