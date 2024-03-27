<script>
import { state } from '../state.js';

export default {
  name: 'ImageSlider',
  inject: ['productId'],
  data() {
    return {
      activeImage_1: true,
      activeImage_2: false,
      state
    }
  }
}
</script>

<template>

  <div class="slider_container">
    <div class="slider_wrapper" tabindex="0">

      <!-- Active image -->
      <div class="item">
        <img v-if="activeImage_1" :src="'/images/' + state.products[this.productId - 1].frontImage"
          @click="console.log(state.products[this.productId - 1].frontImage)" />
        <img v-if="activeImage_2" :src="'/images/' + state.products[this.productId - 1].backImage" />
      </div>


      <!-- Thumbnails -->
      <div class="thumbs">

        <div class="thumb" @click="activeImage_1 = true, activeImage_2 = false"
          :class="{ active: activeImage_1 === true }">
          <img :src="'/images/' + state.products[this.productId - 1].frontImage" />
        </div>

        <div class="thumb" @click="activeImage_2 = true, activeImage_1 = false"
          :class="{ active: activeImage_2 === true }">
          <img :src="'/images/' + state.products[this.productId - 1].backImage" />
        </div>

      </div>

    </div>
  </div>

</template>

<style lang="sass">
</style>