<script>
import ImageSlider from './ImageSlider.vue';
import { state } from '../state.js';

export default {
  name: 'CardModal',
  emits: ['closeModal'],
  components: {
    ImageSlider
  },
  inject: ['productId'],
  data() {
    return {
      state
    }
  },
  props: {
    isVisible: Boolean
  },
  methods: {
    calcDiscountedPrice(productId) {

      let discount;
      let discountedPrice;

      if (state.products[productId].badges.type === 'discount') {

        discount = (state.products[productId].badges.find(e => e.type === 'discount').value.substring(1, 3)) / 100;

        discountedPrice = (state.products[productId].price - (state.products[productId].price * discount)).toFixed(2);

        return discountedPrice;

      } else {

        return state.products[productId].price

      }

    }
  },
  mounted() {
    console.log(this.productId);
  },
  updated() {
    console.log(this.productId);
  }
}
</script>

<template>

  <div class="modal" v-if="this.isVisible">

    <div class="modal_body">

      <div class="image_slider">
        <ImageSlider />
      </div>

      <div class="product_description">

        <p class="product_brand">{{ state.products[this.productId - 1].brand }}</p>
        <p class="product_name">{{ state.products[this.productId - 1].name }}</p>
        <div class="product_price">
          <span class="discounted_price">{{ calcDiscountedPrice(this.productId - 1) }} € </span>
          <span class="old_price">{{ state.products[this.productId - 1].price }} €</span>
        </div>

        <div class="buttons">
          <button class="button" type="button">
            Add to cart
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <button class="button" type="button" @click="$emit('closeModal')">Close</button>
        </div>

      </div>



    </div>

  </div>

</template>

<style></style>