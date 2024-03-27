<script>
import { state } from '../state.js';

export default {
  name: 'ProductCard',
  emits: ['openModal'],
  data() {
    return {
      state
    }
  },
  props: {
    product: Object,
  },
  methods: {
    calcDiscountedPrice(price) {

      let discount;
      let discountedPrice;

      if (this.product.badges.type === 'discount') {

        discount = (this.product.badges.find(e => e.type === 'discount').value.substring(1, 3)) / 100;

        discountedPrice = (price - (price * discount)).toFixed(2);
        return discountedPrice;

      } else {

        return this.product.price

      }

    }
  }
}
</script>

<template>

  <!-- Product -->
  <div class="product_card">

    <!-- Product image -->
    <div class="product_image">

      <!-- Image -->
      <div class="image">
        <img :src="'/images/' + product.frontImage" alt="">
        <img class="hover_image" :src="'/images/' + product.backImage" alt="">
      </div>

      <!-- Like -->
      <div class="like" @click="product.isInFavorites = !product.isInFavorites, state.addToFavorites()">
        <i class="fa-solid fa-heart fa-lg" :class="{ liked: product.isInFavorites === true }"></i>
      </div>

      <!-- Badges -->
      <div class="badges">
        <div v-for="badge in product.badges" :class="badge.type">{{ badge.value }}</div>
      </div>

    </div>

    <!-- Product description -->
    <ul class="product_description">

      <!-- Product brand -->
      <li class="product_brand">{{ product.brand }}</li>

      <!-- Product name -->
      <li class="product_name" @click="$emit('openModal', product.id), console.log(product.id)">{{ product.name }}</li>

      <!-- Product price -->
      <li class="product_price">

        <span v-if="product.badges.find(e => e.type === 'discount')" class="discount_price">
          {{ calcDiscountedPrice(product.price) }} €
        </span>

        <span :class="product.badges.find(e => e.type === 'discount') ? 'old_price' : 'normal_price'">
          {{ product.price }} €
        </span>

      </li>

    </ul>

  </div>

</template>

<style></style>