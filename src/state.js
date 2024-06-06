import { reactive } from 'vue';
import axios from 'axios';

// Global state
export const state = reactive({

  // State (data)
  products: [
    {
      "id": 1,
      "frontImage": "1.webp",
      "backImage": "1b.webp",
      "brand": "Levi's",
      "name": "Relaxed Fit Tee Unisex",
      "price": 29.99,
      "isInFavorites": false,
      "badges": [
        {
          "type": "tag",
          "value": "Sostenibilità"
        },
        {
          "type": "discount",
          "value": "-50%"
        }
      ]
    },
    {
      "id": 2,
      "frontImage": "2.webp",
      "backImage": "2b.webp",
      "brand": "Guess",
      "name": "Roses Tee",
      "price": 29.99,
      "isInFavorites": false,
      "badges": [
        {
          "type": "discount",
          "value": "-30%"
        }
      ]
    },
    {
      "id": 3,
      "frontImage": "3.webp",
      "backImage": "3b.webp",
      "brand": "Come Zucchero Filato",
      "name": "Voglia di colori pastello",
      "price": 184.99,
      "isInFavorites": false,
      "badges": [
        {
          "type": "discount",
          "value": "-30%"
        }
      ]
    },
    {
      "id": 4,
      "frontImage": "4.webp",
      "backImage": "4b.webp",
      "brand": "Levi's",
      "name": "Tee Unisex",
      "price": 29.99,
      "isInFavorites": false,
      "badges": [
        {
          "type": "tag",
          "value": "Sostenibilità"
        },
        {
          "type": "discount",
          "value": "-50%"
        }
      ]
    },
    {
      "id": 5,
      "frontImage": "5.webp",
      "backImage": "5b.webp",
      "brand": "Maya Deluxe",
      "name": "Stripe Bodice",
      "price": 99.99,
      "isInFavorites": false,
      "badges": [
        {
          "type": "tag",
          "value": "Sostenibilità"
        },
        {
          "type": "discount",
          "value": "-50%"
        }
      ]
    },
    {
      "id": 6,
      "frontImage": "6.webp",
      "backImage": "6b.webp",
      "brand": "Esprit",
      "name": "Maglione - Black",
      "price": 29.99,
      "isInFavorites": false,
      "badges": [
        {
          "type": "tag",
          "value": "Sostenibilità"
        }
      ]
    }
  ],
  favoriteProducts: [],
  addedToCart: [],
  base_products_api_url: 'http://localhost:3000/products',

  // Actions that change the state
  /*   getProducts(url) {
  
      axios.get(url)
        .then(response => {
          console.log(response);
          this.products = response.data;
        })
        .catch(err => {
          console.error(err.message);
        })
  
    }, */

  addToFavorites() {
    this.favoriteProducts = this.products.filter((product) => product.isInFavorites === true);
    console.log(this.favoriteProducts);
  },

  addToCart() {
    this.addedToCart = this.products.filter((product) => product.isInCart === true);
    console.log(this.addedToCart);
  }

})