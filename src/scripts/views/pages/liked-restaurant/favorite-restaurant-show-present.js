class FavoriteRestaurantShowPresenter {
  constructor({ favoriteRestaurant, view }) {
    this._favoriteRestaurant = favoriteRestaurant;
    this._view = view;
    this._displayRestaurants();
  }

  async _displayRestaurants() {
    try {
      const restaurants = await this._favoriteRestaurant.getAllRestaurant();
      this._view.showFavoriteRestaurant(restaurants);
    } catch (error) {
      console.log('error displaying favorites restaurant', error);
    }
  }
}

export default FavoriteRestaurantShowPresenter;
