<script setup>
// Je créé ici un petit composant loader qui va permettre à l'utilisateur de comprendre que la data est en train d'être récupérée.
// Pour faciliter l'UX, je lui indique qu'un travail est en cours.
// Ici, on utilise la variable de couleur définie dans le loader avec le var(--mint) 🎇
// Ce composant est d'autant plus utile avec la question de la qualité du réseau pour l'utilisation depuis un téléphone portable
</script>

<template>
  <div class="spinner-container">
  <span class="spinner"></span>
  </div>

</template>

<style scoped>
.spinner-container{
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: var(--mint);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>