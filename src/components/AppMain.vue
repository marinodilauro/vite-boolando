<script>

import ProductCard from './ProductCard.vue';
import CardModal from './CardModal.vue';
import { state } from '../state.js';
import { computed } from 'vue';

export default {
  name: 'AppMain',
  components: {
    ProductCard,
    CardModal
  },
  provide: {
    productId: null
  },
  data() {
    return {
      state,
      isModalVisible: false
    }
  },
  provide() {
    return {
      productId: computed(() => this.productId)
    }
  },
  methods: {

    openModal(productId) {

      console.log(this.productId);
      this.productId = productId;
      console.log(this.productId);
      this.isModalVisible = true;

    },
    closeModal() {

      this.isModalVisible = false;

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

      <ProductCard :product="product" v-for="product in state.products" @openModal="openModal" />

    </section>

    <CardModal :isVisible="isModalVisible" @closeModal="closeModal" />

  </main>

</template>

<style></style>