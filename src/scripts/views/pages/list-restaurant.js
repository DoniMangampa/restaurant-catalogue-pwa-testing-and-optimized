import RESTAURANTDB from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <div class="content">
        <h2>List Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RESTAURANTDB.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default ListRestaurant;
