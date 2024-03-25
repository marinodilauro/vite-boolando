import { reactive } from 'vue';
import axios from 'axios';

// Global state
export const state = reactive({

  // State (data)
  products: [],
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

  }
})