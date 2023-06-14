<script setup>
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-IMPORTS-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

//! Import de mes components !//
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <Header />
  <RouterView />
  <Card />
  <Footer />
</template>

<style scoped>

</style>