<script>
import axios from "axios";
import Loader from "@/components/Loader.vue";
export default {
  name: "Details",
  components: {Loader},
  data() {
    return {
      id: this.$route.params.id,
      singleproduct: []
    }
  },
  mounted()
  {
    axios
        .get(`https://dummyjson.com/products/${this.id}`)
        .then((res) => {
          this.singleproduct = res.data;
        });
  }
}
</script>

<template>
<div class="detail-container">
  <img :src="singleproduct.thumbnail" alt="product pic">
  <h2>{{ singleproduct.title }}</h2>
  <a href=""></a>
</div>
</template>

<style scoped>
.detail-container{
  transition: opacity 0.5s;
}
</style>