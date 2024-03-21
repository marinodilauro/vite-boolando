<script>
export default {
  name: 'AppFooter'
}
</script>

<template>

  <footer id="site_footer">
    <div class="footer_container">

      <!-- Company name and information links -->

      <div class="company_and_information d-flex flex-column">
        <div class="company_name"><strong>Boolando s.r.l.</strong></div>
        <ul class="links">
          <li><a href="#">Informazioni legali</a></li>
          <li><a href="#">Informativa sulla privacy</a></li>
          <li><a href="#">Diritto di recesso</a></li>
        </ul>
      </div>

      <!-- Social links -->
      <div class="d-flex flex-column">
        <h5>Trovaci anche su</h5>
        <div class="social_icons">
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-pinterest"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>

  </footer>

</template>

<style lang="sass">
</style>