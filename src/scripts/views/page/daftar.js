import TheRestoDbSource from '../../data/therestodb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator'; // Pastikan import template restoran

const Daftar = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restoran</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.daftarRestoran();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Daftar;
