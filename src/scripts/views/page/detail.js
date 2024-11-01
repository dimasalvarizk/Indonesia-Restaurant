import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import {
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const restaurant = await TheRestoDbSource.detailRestaurant(url.id);

      const restaurantContainer = document.querySelector('#restaurant');
      const likeButtonContainer = document.querySelector(
        '#likeButtonContainer'
      );

      // Mengisi konten detail restoran
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(
        restaurant.restaurant
      );

      // Mengisi tombol like
      likeButtonContainer.innerHTML = createLikeButtonTemplate();

      // Inisialisasi tombol like dengan data restoran
      LikeButtonInitiator.init({
        likeButtonContainer: likeButtonContainer,
        restaurant: {
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          description: restaurant.restaurant.description,
          pictureId: restaurant.restaurant.pictureId,
          rating: restaurant.restaurant.rating,
        },
      });
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
      document.querySelector(
        '#restaurant'
      ).innerHTML = `<p>Terjadi kesalahan saat memuat detail restoran: ${error.message}</p>`;
    }
  },
};

export default Detail;
