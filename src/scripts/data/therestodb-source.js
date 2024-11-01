import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async daftarRestoran() {
    const response = await fetch(API_ENDPOINT.DAFTAR_RESTAURAN);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheRestoDbSource;
