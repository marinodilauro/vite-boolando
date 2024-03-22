<script>

import ProductCard from './ProductCard.vue';
import { products } from '../data.js';

export default {
  name: 'AppMain',
  components: {
    ProductCard
  },
  data() {
    return {
      products
    }
  }
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