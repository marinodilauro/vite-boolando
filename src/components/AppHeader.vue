<script>
export default {
  name: 'AppHeader'
}
</script>

<template>

  <header id="site_header">
    <nav class="header_container">

      <!-- Links -->
      <ul class="links product_section_links">
        <li><a href="#">Donna</a></li>
        <li><a href="#">Uomo</a></li>
        <li><a href="#">Bambino</a></li>
      </ul>

      <!-- Logo -->
      <div class="logo">
        <img width="100" class="logo_img" src="./assets/img/boolean-logo.png" alt="">
      </div>

      <!-- Login -->
      <div class="account_icons">
        <a href="#"><i class="fa-regular fa-user"></i></a>
        <a href="#"><i class="fa-regular fa-heart"></i></a>
        <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
      </div>
    </nav>

  </header>

</template>

<style lang="sass">
</style>