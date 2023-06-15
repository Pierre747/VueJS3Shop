<script>
import axios from "axios";
import Category from "@/components/Category.vue";
let urlCategories = `https://dummyjson.com/products/categories`
export default {
  computed: {
    Category()
    {
      return Category
    }
  },
  data() {
    return {
      categories: [],
    }
  },
  mounted()
  {
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
  }
}
</script>

<template>
  <div class="categories-container">
<h1>Categories</h1>
  <ul v-for="category in categories.sort()" :key="category">
    <RouterLink :to="{ path: `products/category/${ category }`, component: Category}"><li>{{ category.charAt(0).toUpperCase() + category.slice(1) }}</li></RouterLink>
  </ul>
  </div>
</template>

<style scoped>
h1{
  font-family: 'Bebas Neue', sans-serif;
  font-size: 35px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.categories-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 25px;
}
</style>