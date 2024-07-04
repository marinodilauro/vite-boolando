<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer id="site_footer" class="py-5">
    <div class="container">
      <div class="row">

        <!-- Sitemap -->
        <div class="col-6 col-md-2 mb-3">

          <h5 class="fw-bold">Boolando s.r.l.</h5>

          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
          </ul>
        </div>

        <!-- Company name and information links -->
        <div class="company_and_information col-6 col-md-2 mb-3">

          <h5 class="fw-bold">Legal</h5>

          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Informazioni legali</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Informativa sulla privacy</a>
            </li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Diritto di recesso</a></li>

          </ul>
        </div>

        <!-- Social links -->
        <div class="col-6 col-md-2 mb-3">

          <h5 class="fw-bold">Trovaci anche su</h5>

          <ul class="nav gap-3">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">
                <i class="fa-brands fa-pinterest"></i>
              </a>
            </li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h5 class="fw-bold">Subscribe to our newsletter</h5>

            <p>Monthly digest of what's new and exciting from us.</p>

            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
              <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2024 Boolando s.r.l. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="sass">
</style>