<script>

export default {
  name: 'AppMain',
  data() {
    return {
      productsList: [
        {
          image_1: '1.webp',
          image_2: '1b.webp',
          brand: "Levi's",
          name: 'RELAXED FIT TEE UNISEX',
          badges: ['discount', 'sustainability'],
          price: '29,99 €',
          discount: '-50%',
          discounted_price: '14,99 €'
        },
        {
          image_1: '2.webp',
          image_2: '2b.webp',
          brand: 'Guess',
          name: 'ROSES TEE',
          badges: ['discount'],
          price: '29,99 €',
          discount: '-30%',
          discounted_price: '20,99 €'
        },
        {
          image_1: '3.webp',
          image_2: '3b.webp',
          brand: 'Come Zucchero Filato',
          name: 'VOGLIA DI COLORI PASTELLO',
          badges: ['discount'],
          price: '184,99 €',
          discount: '-30%',
          discounted_price: '129,99 €'
        },
        {
          image_1: '4.webp',
          image_2: '4b.webp',
          brand: "Levi's",
          name: 'TEE UNISEX',
          badges: ['discount', 'sustainability'],
          price: '29,99 €',
          discount: '50%',
          discounted_price: '14,99 €'
        },
        {
          image_1: '5.webp',
          image_2: '5b.webp',
          brand: 'Maya Deluxe',
          name: 'STRIPE BODICE',
          badges: [],
          price: '99,99 €',
          discount: '',
          discounted_price: ''
        },
        {
          image_1: '6.webp',
          image_2: '6b.webp',
          brand: 'Esprit',
          name: 'MAGLIONE - BLACK',
          badges: ['sustainability'],
          price: '24,99 €',
          discount: '',
          discounted_price: ''
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
      <div v-for="product in productsList" class="product_card">

        <!-- Product image -->
        <div class="product_image">

          <!-- Image -->
          <div class="image">
            <img src="/images/1.webp" alt="">
            <img class="hover_image" src="/images/1b.webp" alt="">
          </div>
          <!-- Like -->
          <div class="like">
            <i class="fa-solid fa-heart"></i>
          </div>
          <!-- Badges -->
          <div class="badges">
            <!-- Discount badge -->
            <div class="discount">-50%</div>
            <!-- Sustainability badge -->
            <div class="sustainability">Sostenibilit&agrave;</div>
          </div>
        </div>

        <!-- Product description -->
        <ul class="product_description">
          <!-- Product brand -->
          <li class="product_brand">Levi's</li>
          <!-- Product name -->
          <li class="product_name">RELAXED FIT TEE UNISEX</li>
          <!-- Product price -->
          <li class="product_price">
            <span class="discount_price">14,99 &euro;</span>
            <span class="old_price">29,99 &euro;</span>
          </li>
        </ul>
      </div>

    </div>
  </main>

</template>

<style lang="sass">
</style>