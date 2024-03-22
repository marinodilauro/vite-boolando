<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    calcDiscountedPrice(price) {

      const discount = (this.product.badges.find(e => e.type === 'discount').value.substring(1, 3)) / 100;

      const discountedPrice = (price - (price * discount)).toFixed(2);

      return discountedPrice;
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
      <div class="like" @click="product.isInFavorites = !product.isInFavorites">
        <i class="fa-solid fa-heart" :class="{ liked: product.isInFavorites === true }"></i>
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
      <li class="product_name">{{ product.name }}</li>

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