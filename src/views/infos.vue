<script setup>

</script>

<template>
  <div class="style-container">
  <div class="infos-container">
  <h1>Test technique Vue.js 3</h1>

  <p><strong>Objectif de l'exercice :</strong></p>

  <p>Votre tâche est de coder une application utilisant Vue.js 3 qui permet aux utilisateurs d'interagir avec les
    collections de données disponibles sur le site DummyJSON (<a href="https://dummyjson.com" target="_blank">https://dummyjson.com</a>).</p>

  <p>Les exigences fonctionnelles pour l'application sont les suivantes :</p>

  <ul>
    <li>Liste de collections :</li>
    <ul>
      <li>L'application doit afficher une liste des collections disponibles sur DummyJSON.</li>
      <li>Les utilisateurs doivent être en mesure de trier et de filtrer ces listes en fonction de divers paramètres, tels que les catégories, les dates, etc.</li>
    </ul>
    <li>Détails de la collection :</li>
    <ul>
      <li>Quand un utilisateur clique sur une collection, l'application doit afficher les détails de cette collection, y compris toutes les données contenues dans cette collection.</li>
    </ul>
    <li>Conception réactive :</li>
    <ul>
      <li>L'application doit être responsive et fournir une expérience utilisateur de qualité sur tous les types d'appareils, y compris les ordinateurs de bureau, les tablettes et les smartphones.</li>
    </ul>
  </ul>

  <p><strong>Temps de réalisation de l’exercice :</strong></p>

  <p>Vous ne devriez pas dépasser les deux heures de temps sur cet exercice.</p>

  <p>Il n’est pas utile d’implémenter toutes les ressources ou de mettre des tries/filtres sur chacune des colonnes que vous affichez. L’objectif étant principalement de voir si vous réussissez à implémenter les mécaniques principales. Préférez la qualité à la quantité.</p>

  <p><strong>Étapes suggérées pour l'exercice :</strong></p>

  <ol>
    <li>Créez un nouveau projet Vue.js 3 à l'aide de Vue CLI.</li>
    <li>Familiarisez-vous avec l'API de DummyJSON et comment y accéder à partir de votre application.</li>
    <li>Définissez la structure de votre application et les composants dont vous allez avoir besoin.</li>
    <li>Commencez par la page d'accueil, puis passez à la liste des collections et à la page de détails.</li>
    <li>Mettez en place le tri, le filtrage et les fonctionnalités de recherche.</li>
    <li>Assurez-vous que l'application est réactive et qu'elle fonctionne bien sur tous les types d'appareils.</li>
    <li>Testez votre application et corrigez tous les bugs que vous trouvez.</li>
  </ol>

  <p><strong>Ce que nous évaluerons :</strong></p>

  <ul>
    <li>La clarté et l'organisation du code</li>
    <li>L'utilisation appropriée des fonctionnalités de Vue.js 3</li>
    <li>La fonctionnalité et l'efficacité de l'application</li>
    <li>L'expérience utilisateur et la conception responsive de l'application.</li>
  </ul>

  <p>Bonne chance !</p>
  </div>
  </div>
</template>

<style scoped>

.style-container{
  background-color: var(--police-blue);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  min-height: 1015px;
  padding-bottom: 20px;
}

.infos-container{
  padding-top: 40px;
  margin: 0 auto;
  max-width: 1200px;
  transition: 0.3s ease;
  color: whitesmoke;
  padding-bottom: 20px;
}

h1 {
  font-size: 45px;
  margin-bottom: 20px;
}

strong {
  font-weight: bold;
  font-size: 25px;
}

p {
  margin-bottom: 10px;
}

ul {
  margin-bottom: 10px;
  padding-left: 20px;
}

ol {
  margin-bottom: 10px;
  padding-left: 20px;
}

li {
  margin-bottom: 5px;
}

a {
  color: var(--police-blue);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (width <= 1300px) {
  .infos-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    padding: 40px;
  }
}

@media (width <= 600px){
  .infos-container{
    line-height: normal;
  }
}
</style>