<script>
import AppLogo from './AppLogo.vue';
import { state } from '../state.js';

export default {
  name: 'AppHeader',
  data() {
    return {
      navLinks: [
        'Donna',
        'Uomo',
        'Bambino'
      ],
      navIcons: [
        {
          name: 'user',
          icon: 'fa-regular fa-user'
        },
        {
          name: 'favorites',
          icon: 'fa-regular fa-heart',

        },
        {
          name: 'shopping_bag',
          icon: 'fa-solid fa-bag-shopping'
        }
      ],
      state
    }
  },
  components: {
    AppLogo
  }
}
</script>

<template>

  <header id="site_header">
    <nav class="header_container">

      <!-- Links -->
      <ul class="links product_section_links">
        <li v-for="link in navLinks"><a href="#">{{ link }}</a></li>
      </ul>

      <!-- Logo -->
      <AppLogo />

      <!-- Login -->
      <div class="account_icons">
        <a v-for="item in navIcons" href="#">

          <i :class="item.icon">

            <!-- Favourites counter -->
            <div v-if="item.icon === this.navIcons[1].icon">

              <div class="counter" v-if="state.favoriteProducts.length > 0">
                {{ state.favoriteProducts.length }}
              </div>

            </div>

            <!-- Shopping cart counter -->
            <div v-if="item.icon === this.navIcons[2].icon">

              <div class="counter" v-if="state.addedToCart.length > 0">
                {{ state.addedToCart.length }}
              </div>

            </div>

          </i>

        </a>
      </div>

    </nav>

  </header>

</template>

<style lang="sass">
</style>