<script>

import ProductCard from './ProductCard.vue';
import CardModal from './CardModal.vue';
import { state } from '../state.js';

export default {
  name: 'AppMain',
  components: {
    ProductCard,
    CardModal
  },
  data() {
    return {
      state,
      isModalVisible: false,
      productId: null
    }
  },
  methods: {

    showModal(productId) {

      this.productId = productId;
      this.isModalVisible = true;
      // this.state.getProducts(`http://localhost:3000/products?id=${productId}`);

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

      <ProductCard :product="product" v-for="product in state.products" @showModal="showModal" />

    </section>

    <CardModal :isVisible="isModalVisible" :productId="productId" />

  </main>

</template>

<style></style>