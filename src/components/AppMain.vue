<script>

import ProductCard from './ProductCard.vue';
import { products } from '../data.js';
// import { state } from '../state.js';

export default {
  name: 'AppMain',
  components: {
    ProductCard
  },
  data() {
    return {
      products
    }
  },
  /*   mounted() {
  
      console.log(this.state);
      this.state.getProducts(this.state.base_products_api_url);
      
      axios.get('http://localhost:3000/products')
      .then(response => {
        console.log(response);
        this.state.products = response.data;
      })
      
    } */
}
</script>

<template>

  <main id="site_main">

    <!-- Products list -->
    <section class="products_container">

      <ProductCard :product="product" :key="product.id" v-for="product in products" />

    </section>

  </main>

</template>

<style></style>