<script>

export default {
  name: 'AppMain',
  data() {
    return {
      productsList: [
        {
          image_1: '/images/1.webp',
          image_2: '/images/1b.webp',
          brand: "Levi's",
          name: 'RELAXED FIT TEE UNISEX',
          price: '29,99 €',
          badge_1: '-50%',
          badge_2: 'sustainability',
          discounted_price: '14,99 €'
        },
        {
          image_1: '/images/2.webp',
          image_2: '/images/2b.webp',
          brand: 'Guess',
          name: 'ROSES TEE',
          price: '29,99 €',
          badge_1: '-30%',
          discounted_price: '20,99 €'
        },
        {
          image_1: '/images/3.webp',
          image_2: '/images/3b.webp',
          brand: 'Come Zucchero Filato',
          name: 'VOGLIA DI COLORI PASTELLO',
          price: '184,99 €',
          badge_1: '-30%',
          discounted_price: '129,99 €'
        },
        {
          image_1: '/images/4.webp',
          image_2: '/images/4b.webp',
          brand: "Levi's",
          name: 'TEE UNISEX',
          price: '29,99 €',
          badge_1: '-50%',
          badge_2: 'sustainability',
          discounted_price: '14,99 €'
        },
        {
          image_1: '/images/5.webp',
          image_2: '/images/5b.webp',
          brand: 'Maya Deluxe',
          name: 'STRIPE BODICE',
          price: '99,99 €',
        },
        {
          image_1: '/images/6.webp',
          image_2: '/images/6b.webp',
          brand: 'Esprit',
          name: 'MAGLIONE - BLACK',
          price: '24,99 €',
          badge_2: 'sustainability'
        },
      ]
    }
  }
}
</script>

<template>

  <main id="site_main">
    <!-- Products list -->
    <div class="products_container">

      <!-- Product 1 -->
      <div v-for="(product) in productsList" class="product_card">

        <!-- Product image -->
        <div class="product_image">

          <!-- Image -->
          <div class="image">
            <img :src="product.image_1" alt="">
            <img class="hover_image" :src="product.image_2" alt="">
          </div>
          <!-- Like -->
          <div class="like">
            <i class="fa-solid fa-heart"></i>
          </div>
          <!-- Badges -->
          <div class="badges">
            <!-- Discount badge -->
            <div v-if="product.badge_1" class="discount">{{ product.badge_1 }}</div>
            <!-- Sustainability badge -->
            <div v-if="product.badge_2" class="sustainability">{{ product.badge_2 }}</div>
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
            <span v-if="product.discounted_price" class="discount_price">{{ product.discounted_price }}</span>
            <span :class="product.discounted_price ? 'old_price' : 'normal_price'">{{ product.price }}</span>
          </li>
        </ul>
      </div>

    </div>
  </main>

</template>

<style lang="sass">
</style>