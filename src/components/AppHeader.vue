<script>
import AppLogo from './AppLogo.vue';

export default {
  name: 'AppHeader',
  data() {
    return {
      navLinks: [
        'Donna',
        'Uomo',
        'Banbino'
      ],
      navIcons: [
        'fa-regular fa-user',
        'fa-regular fa-heart',
        'fa-solid fa-bag-shopping'
      ]
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
        <a v-for="icon in  navIcons" href="#"><i :class="icon"></i></a>
      </div>
    </nav>

  </header>

</template>

<style lang="sass">
</style>