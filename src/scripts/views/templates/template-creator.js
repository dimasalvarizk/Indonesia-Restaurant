import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  // if (!restaurant || !restaurant.restaurant) {
  //   return `<p>Data restoran tidak tersedia.</p>`;
  // }

  // // Ambil data dari restaurant
  // const {
  //   name = "Nama restoran tidak tersedia",
  //   city = "Kota tidak tersedia",
  //   address = "Alamat tidak tersedia",
  //   pictureId,
  //   categories = [],
  //   menus = { foods: [], drinks: [] },
  //   rating = "Rating tidak tersedia",
  //   description = "Deskripsi tidak tersedia",
  //   customerReviews = [],
  // } = restaurant.restaurant;

  // const imageUrl = pictureId
  //   ? `${CONFIG.BASE_IMAGE_URL_LARGE}${pictureId}`
  //   : "URL_GAMBAR_DEFAULT";

  return `
      <h2 class="restaurant__title">${restaurant.name}</h2>
      <img class="restaurant__image" src="https://restaurant-api.dicoding.dev/images/medium/${
  restaurant.pictureId
}" alt="${restaurant.name}" />
      <div class="restaurant__info">
          <h3>Information</h3>
          <h4>City</h4>
          <p>${restaurant.city}</p>
          <h4>Address</h4>
          <p>${restaurant.address}</p>
          <h4>Categories</h4>
          <p>${
  restaurant.categories.length > 0
    ? restaurant.categories
      .map((category) => category.name)
      .join(', ')
    : 'Kategori tidak tersedia'
}</p>
          <h4>Menus</h4>
          <h5>Foods</h5>
          <p>${
  restaurant.menus.foods.length > 0
    ? restaurant.menus.foods.map((food) => food.name).join(', ')
    : 'Menu makanan tidak tersedia'
}</p>
          <h5>Drinks</h5>
          <p>${
  restaurant.menus.drinks.length > 0
    ? restaurant.menus.drinks.map((drink) => drink.name).join(', ')
    : 'Menu minuman tidak tersedia'
}</p>
          <h4>Rating</h4>
          <p>${restaurant.rating}</p>
      </div>
      <div class="restaurant__overview">
          <h3>Description</h3>
          <p>${restaurant.description}</p>
      </div>
      <div class="restaurant__reviews">
          <h3>Customer Reviews</h3>
          <p>${
  restaurant.customerReviews.length > 0
    ? restaurant.customerReviews
      .map((review) => `${review.name}: ${review.review}`)
      .join('<br>')
    : 'Review tidak tersedia'
}</p>
      </div>
  `;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item" tabindex="0">
    <div class="restaurant-item__header">
      <img loading="lazy" width="400" height="400" class="restaurant-item__header__poster" alt="${restaurant.name}" crossorigin="anonymous"
           src="${CONFIG.BASE_IMAGE_URL_MEDIUM}${restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p> 🌟 Rating: <span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
