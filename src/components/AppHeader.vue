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
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">


        <!-- Toggle button for mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
          aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <AppLogo />
        </a>

        <div class="collapse navbar-collapse justify-content-between" id="navbarContent">

          <!-- Links -->
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li v-for="link in navLinks" class="nav-item">
              <a class="nav-link text-white" href="#">{{ link }}</a>
            </li>
          </ul>


          <!-- Login and icons -->
          <ul class="navbar-nav flex-row gap-3 gap-lg-0">
            <li v-for="item in navIcons" class="nav-item">
              <a class="nav-link text-white" href="#">
                <i :class="item.icon" class="position-relative">

                  <!-- Favourites counter -->
                  <span v-if="item.icon === navIcons[1].icon && state.favoriteProducts.length > 0"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {{ state.favoriteProducts.length }}
                  </span>

                  <!-- Shopping cart counter -->
                  <span v-if="item.icon === navIcons[2].icon && state.addedToCart.length > 0"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {{ state.addedToCart.length }}
                  </span>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar-nav .nav-link {
  position: relative;
}

.badge {
  font-size: 0.6em;
}
</style>