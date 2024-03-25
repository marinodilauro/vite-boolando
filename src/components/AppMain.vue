<script>

import ProductCard from './ProductCard.vue';
import { state } from '../state.js';

export default {
  name: 'AppMain',
  components: {
    ProductCard
  },
  data() {
    return {
      state
    }
  },
  mounted() {

    this.state.getProducts(this.state.base_products_api_url);

  }
}
</script>

<template>

  <main id="site_main">

    <!-- Products list -->
    <section class="products_container">

      <ProductCard :product="product" :key="product.id" v-for="product in state.products" />

    </section>

  </main>

</template>

<style></style>