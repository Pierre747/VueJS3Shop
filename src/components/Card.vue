<script setup>
const props = defineProps(['products']);
</script>

<template>
  <!-- J'utilise ici la boucle for propre à VueJs -->
  <div v-for="product of products" :key="product.id" class="card">
    <router-link :to="`/products/${product.id}`" class="card-details">
      <div class="card-container">
      <h1 class="card-title">{{ product.title }}</h1>
        <div class="card-subtitle">
      <h5>{{ product.brand }}</h5>
      <h5>{{ product.title }}</h5>
    </div>
    <img class="card-pic" :src="product.thumbnail ? product.thumbnail : '../assets/images/nopic.webp'" alt="pic" />
    <!-- J'utilise une expression ternaire pour vérifier si product.thumbnail existe -->
    <!-- Si oui, j'utilise product.thumbnail comme source de l'image -->
    <!-- Sinon, utilise '../assets/images/nopic.webp' comme source de l'image, cela rajoute une protection et une cohérence pour l'UX -->
    <p class="card-description">{{ product.description }}</p>
    <span class="card-price">{{ product.price }} $</span>
      </div>
    </router-link>
  </div>

</template>

<style scoped>

.card{
  flex: 1 0 20%;
  min-width: 260px;
  background: var(--mint);
  margin: 5px;
  color: var(--police-blue);
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s ease;
  line-height: 25px;
}
.card:hover{
  transform: scale(1.01);
}
.card-title{
  font-family: 'Bebas Neue', sans-serif;
  font-size: 30px;
}
img {
  height: 100px;
  width: 160px;
  object-fit: cover;
}
.card-details{
  text-decoration: none;
  color: inherit;
}
.card-price{
  font-size: 20px;
  font-weight: bold;
}

</style>