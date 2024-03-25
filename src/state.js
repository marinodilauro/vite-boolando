import { reactive } from 'vue';
import axios from 'axios';

// Global state
export const state = reactive({

  // State (data)
  products: [],
  favoriteProducts: [],
  base_products_api_url: 'http://localhost:3000/products',

  // Actions that change the state
  getProducts(url) {

    axios.get(url)
      .then(response => {
        console.log(response);
        this.products = response.data;
      })
      .catch(err => {
        connsole.error(err.message)
      })

  },
  addToFavorites() {
    this.favoriteProducts = this.products.filter((product) => product.isInFavorites === true);
    console.log(this.favoriteProducts);
  }
})