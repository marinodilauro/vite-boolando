<script>
import { state } from '../state.js';

export default {
  name: 'CardModal',
  data() {
    return {
      state
    }
  },
  props: {
    isVisible: Boolean,
    productId: Number
  },
  methods: {
    calcDiscountedPrice(productId) {

      const discount = (state.products[productId].badges.find(e => e.type === 'discount').value.substring(1, 3)) / 100;

      const discountedPrice = (state.products[productId].price - (state.products[productId].price * discount)).toFixed(2);

      return discountedPrice;
    }
  }
}
</script>

<template>

  <div class="modal" v-if="this.isVisible">

    <div class="modal_header">{{ state.products[productId - 1].name }}</div>
    <div class="modal_body">
      <p class="product_brand">{{ state.products[productId - 1].brand }}</p>
      <p class="product_name">{{ state.products[productId - 1].name }}</p>
      <p class="product_price">{{ calcDiscountedPrice(productId - 1) }} €</p>

    </div>
    <div class="modal_footer"></div>

  </div>

</template>

<style></style>