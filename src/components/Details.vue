<script>
import axios from "axios";

export default {
  name: "Details",
  data() {
    return {
      id: this.$route.params.id,
      singleproduct: [],
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


<input v-for="image in singleproduct.images" type="radio" name="position" class="carousel-radios"/>

<main id="carousel">
  <div v-for="image in singleproduct.images" class="item"><img :src="image" alt="product pics"></div>
</main>

  <div class="detail-container">
<div class="detail-title">
  <span><i class="fa-solid fa-angles-right"></i> Model : </span>
  <h2>{{ singleproduct.title }}</h2>
  <span><i class="fa-solid fa-copyright"></i> Brand : </span>
  <h2>{{ singleproduct.brand }}</h2>
</div>
    <dl class="detail-description">
      <dt><i class="fa-solid fa-circle-info"></i> Description</dt>
      <dd>{{ singleproduct.description }}</dd>
      <dt><i class="fa-solid fa-folder-open"></i> Category</dt>
      <dd>{{ singleproduct.category }}</dd>
      <dt><i class="fa-solid fa-cubes-stacked"></i> Stock</dt>
      <dd>{{ singleproduct.stock }}</dd>
      <dt><i class="fa-solid fa-star"></i> Rate</dt>
      <dd>{{ singleproduct.rating }} / 5</dd>
    </dl>
    <div>
      <span><i class="fa-solid fa-dollar-sign"></i> Price : </span>
      <span>{{ singleproduct.price }} $</span>
    </div>
    <div>
      <span><i class="fa-solid fa-tag"></i> Discount : </span>
      <span>{{ singleproduct.discountPercentage }} %</span>
    </div>
  <RouterLink to="/" class="detail-navigation">Return</RouterLink>
</div>
</template>

<style scoped>

main#carousel {
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  --items: 5;
  --middle: 3;
  --position: 1;
  pointer-events: none;
}

div.item {
  position: absolute;
  width: 300px;
  height: 400px;
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-10deg * var(--r)))
  translateX(calc(-300px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
}

div.item:nth-of-type(1) {
  --offset: 1;
}
div.item:nth-of-type(2) {
  --offset: 2;
}
div.item:nth-of-type(3) {
  --offset: 3;
}
div.item:nth-of-type(4) {
  --offset: 4;
}
div.item:nth-of-type(5) {
  --offset: 5;
}

input:nth-of-type(1) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
input:nth-of-type(1):checked ~ main#carousel {
  --position: 1;
}

input:nth-of-type(2) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
input:nth-of-type(2):checked ~ main#carousel {
  --position: 2;
}

input:nth-of-type(3) {
  grid-column: 4 /5;
  grid-row: 2 / 3;
}
input:nth-of-type(3):checked ~ main#carousel {
  --position: 3;
}

input:nth-of-type(4) {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
input:nth-of-type(4):checked ~ main#carousel {
  --position: 4;
}

input:nth-of-type(5) {
  grid-column: 6 / 7;
  grid-row: 2 / 3;
}
input:nth-of-type(5):checked ~ main#carousel {
  --position: 5;
}

.detail-container{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 33px;
  background-color: #41b883;
}

.detail-title{
  display: flex;
  flex-direction: row;
  gap: 25px;
}
.detail-title span,
.detail-description dt{
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
}

.detail-navigation{
  text-decoration: none;
  color: whitesmoke;
  transition: 0.3s ease;
  background-color: var(--police-blue);
  border-radius: 5px;
  padding: 3px;
}
.detail-navigation:hover{
  transform: scale(1.1);
  background-color: whitesmoke;
  color: var(--police-blue);
  border-radius: 10px;
}
</style>